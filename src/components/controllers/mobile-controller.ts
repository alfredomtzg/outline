import outline from '../../resolved-outline-config';
import { ReactiveControllerHost, ReactiveController } from 'lit';
//TODO: add functionality to receive array of screen sizes to map to object in controller state
export class MobileController implements ReactiveController {
  isMobile = false;
  host: ReactiveControllerHost;
  mobileBreakpoint: string;

  constructor(host: ReactiveControllerHost, mobileBreakpoint = 'md') {
    this.mobileBreakpoint = mobileBreakpoint;
    (this.host = host).addController(this);
    this.handleResize();
  }

  hostConnected() {
    window.addEventListener('resize', this.handleResize);
  }

  hostDisconnected() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const mobileScreen = this.formatScreenSize(
      // @TODO: FIX THIS Typing.
      // @ts-expect-error shrug
      outline.screens[this.mobileBreakpoint]
    );
    if (window.innerWidth <= mobileScreen) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.host.requestUpdate();
  };

  formatScreenSize = (screen: string): number => {
    return parseInt(screen.slice(0, -2));
  };
}
