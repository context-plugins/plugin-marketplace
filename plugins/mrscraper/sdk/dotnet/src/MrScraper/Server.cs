using MrScraper.Core.Models;
using MrScraper.Servers;

namespace MrScraper;

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
    internal UrlTemplate DefaultScraperServiceGatewayAuthApi(string path) =>
        _options.DefaultScraperServiceGatewayAuthApi.Resolve(_environment, path);
}
