using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Servers;

namespace AmazonTranscribe;

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
    internal UrlTemplate DefaultAmazonTranscribeServiceOperationsApi(string path) =>
        _options.DefaultAmazonTranscribeServiceOperationsApi.Resolve(_environment, path);
}
