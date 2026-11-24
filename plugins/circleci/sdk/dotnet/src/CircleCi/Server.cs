using CircleCi.Core.Models;
using CircleCi.Servers;

namespace CircleCi;

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
    internal UrlTemplate DefaultCircleCiRestApiV2ContextApi(string path) =>
        _options.DefaultCircleCiRestApiV2ContextApi.Resolve(_environment, path);
}
