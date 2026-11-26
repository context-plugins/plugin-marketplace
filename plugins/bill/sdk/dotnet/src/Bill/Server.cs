using Bill.Core.Models;
using Bill.Servers;

namespace Bill;

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
    internal UrlTemplate DefaultConnectEventsApi(string path) =>
        _options.DefaultConnectEventsApi.Resolve(_environment, path);
}
