class ReactHandler {

  getCommandChangeReportingService() {
    const teams2CoreServices = this._getTeams2CoreServices();
    return teams2CoreServices?.commandChangeReportingService;
  }

  getTeams2IdleTracker() {
    const teams2CoreServices = this._getTeams2CoreServices();
    return teams2CoreServices?.clientState?._idleTracker;
  }

  getTeams2ClientPreferences() {
    const teams2CoreServices = this._getTeams2CoreServices();
    return teams2CoreServices?.clientPreferences?.clientPreferences;
  }

  _getTeams2ReactElement() {
    return document.getElementById("app");
  }

  _getTeams2CoreServices() {
    const reactElement = this._getTeams2ReactElement();
    const internalRoot =
      reactElement?._reactRootContainer?._internalRoot ||
      reactElement?._reactRootContainer;
    return internalRoot?.current?.updateQueue?.baseState?.element?.props
      ?.coreServices;
  }
}
//document.getElementById('app')._reactRootContainer.current.updateQueue.baseState.element.props.coreServices

module.exports = new ReactHandler();

// await document.getElementById('app')._reactRootContainer.current.updateQueue.baseState.element.props.coreServices.authenticationService._coreAuthService._authProvider.acquireToken("https://graph.microsoft.com", { correlation: document.getElementById('app')._reactRootContainer.current.updateQueue.baseState.element.props.coreServices.correlation, forceRenew: true} )
