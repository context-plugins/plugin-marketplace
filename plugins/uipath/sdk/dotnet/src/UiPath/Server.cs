using UiPath.Core.Models;
using UiPath.Servers;

namespace UiPath;

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
    internal UrlTemplate DefaultUiPathAutomationHubAppInventoryApi(string path) =>
        _options.DefaultUiPathAutomationHubAppInventoryApi.Resolve(_environment, path);
    internal UrlTemplate DefaultUiPathPlatformManagementAuditLogsApi(string path) =>
        _options.DefaultUiPathPlatformManagementAuditLogsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultUiPathDocumentUnderstandingClassificationApi(string path) =>
        _options.DefaultUiPathDocumentUnderstandingClassificationApi.Resolve(_environment, path);
    internal UrlTemplate DefaultUiPathDataServiceEntitiesApi(string path) =>
        _options.DefaultUiPathDataServiceEntitiesApi.Resolve(_environment, path);
    internal UrlTemplate DefaultUiPathTestManagerProjectsApi(string path) =>
        _options.DefaultUiPathTestManagerProjectsApi.Resolve(_environment, path);
}
