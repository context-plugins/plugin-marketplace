using Instacart.Core.Models;
using Instacart.Servers;

namespace Instacart;

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
    internal UrlTemplate DefaultInstacartRestApi(string path) =>
        _options.DefaultInstacartRestApi.Resolve(_environment, path);
}
