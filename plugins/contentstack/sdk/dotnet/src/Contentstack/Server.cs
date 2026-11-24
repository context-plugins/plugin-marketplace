using Contentstack.Core.Models;
using Contentstack.Servers;

namespace Contentstack;

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
    internal UrlTemplate DefaultContentstackAutomateManagementAccountsApi(string path) =>
        _options.DefaultContentstackAutomateManagementAccountsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackAssetsApi(string path) =>
        _options.DefaultContentstackAssetsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackPersonalizeManagementAttributesApi(string path) =>
        _options.DefaultContentstackPersonalizeManagementAttributesApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackBrandKitManagementBrandKitsApi(string path) =>
        _options.DefaultContentstackBrandKitManagementBrandKitsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackEnvironmentsApi(string path) =>
        _options.DefaultContentstackEnvironmentsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackEventsApi(string path) =>
        _options.DefaultContentstackEventsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackProjectsApi(string path) =>
        _options.DefaultContentstackProjectsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultContentstackScimScimGroupsApi(string path) =>
        _options.DefaultContentstackScimScimGroupsApi.Resolve(_environment, path);
}
