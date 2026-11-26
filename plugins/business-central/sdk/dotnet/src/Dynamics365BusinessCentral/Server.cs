using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Servers;

namespace Dynamics365BusinessCentral;

public class Server
{
    private readonly ServerEnvironment _environment;
    private readonly ServerOptions _options;

    internal Server(ServerEnvironment environment, ServerOptions options)
    {
        _environment = environment;
        _options = options;
    }

    internal UrlTemplate Default(string path) => _options.Default.Resolve(_environment, path);
    internal UrlTemplate AuthServer(string path) => _options.AuthServer.Resolve(_environment, path);
    internal UrlTemplate DefaultBusinessCentralAdministrationCenterAppManagementApi(string path) =>
        _options.DefaultBusinessCentralAdministrationCenterAppManagementApi.Resolve(_environment, path);
    internal UrlTemplate DefaultBusinessCentralAutomationApiV20CompaniesApi(string path) =>
        _options.DefaultBusinessCentralAutomationApiV20CompaniesApi.Resolve(_environment, path);
}
