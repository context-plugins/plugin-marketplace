using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Servers;

namespace GoogleCloudDatastream;

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
    internal UrlTemplate AccessTokenServer(string path) => _options.AccessTokenServer.Resolve(_environment, path);
}
