using Justtrack.Core.Models;
using Justtrack.Servers;

namespace Justtrack;

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
    internal UrlTemplate DefaultManagementAppPartnerConnectionApi(string path) =>
        _options.DefaultManagementAppPartnerConnectionApi.Resolve(_environment, path);
}
