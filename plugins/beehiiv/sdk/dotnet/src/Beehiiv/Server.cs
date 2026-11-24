using Beehiiv.Core.Models;
using Beehiiv.Servers;

namespace Beehiiv;

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
    internal UrlTemplate DefaultOAuth2AuthorizationsApi(string path) =>
        _options.DefaultOAuth2AuthorizationsApi.Resolve(_environment, path);
}
