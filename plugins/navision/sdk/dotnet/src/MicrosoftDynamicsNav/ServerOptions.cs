using MicrosoftDynamicsNav.Servers;

namespace MicrosoftDynamicsNav;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public AuthServerOptions AuthServer { get; set; } = new();
    public DefaultBusinessCentralAdministrationCenterAppManagementApiOptions DefaultBusinessCentralAdministrationCenterAppManagementApi { get; set; } = new();
    public DefaultBusinessCentralAutomationApiV20CompaniesApiOptions DefaultBusinessCentralAutomationApiV20CompaniesApi { get; set; } = new();
}
