using Boomi.Core.Models;
using Boomi.Servers;

namespace Boomi;

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
    internal UrlTemplate DefaultBoomiDataHubGoldenRecordsApi(string path) =>
        _options.DefaultBoomiDataHubGoldenRecordsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultBoomiEventStreamsRestMessagesApi(string path) =>
        _options.DefaultBoomiEventStreamsRestMessagesApi.Resolve(_environment, path);
}
