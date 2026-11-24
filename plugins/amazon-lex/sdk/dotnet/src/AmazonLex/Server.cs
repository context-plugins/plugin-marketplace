using AmazonLex.Core.Models;
using AmazonLex.Servers;

namespace AmazonLex;

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
    internal UrlTemplate DefaultAmazonLexModelBuildingV2BotsApi(string path) =>
        _options.DefaultAmazonLexModelBuildingV2BotsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultAmazonLexModelBuildingV2BuiltinsApi(string path) =>
        _options.DefaultAmazonLexModelBuildingV2BuiltinsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultAmazonLexModelBuildingV2ExportsApi(string path) =>
        _options.DefaultAmazonLexModelBuildingV2ExportsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultAmazonLexModelBuildingV2OperationsApi(string path) =>
        _options.DefaultAmazonLexModelBuildingV2OperationsApi.Resolve(_environment, path);
    internal UrlTemplate DefaultAmazonLexModelBuildingV2TagsApi(string path) =>
        _options.DefaultAmazonLexModelBuildingV2TagsApi.Resolve(_environment, path);
}
