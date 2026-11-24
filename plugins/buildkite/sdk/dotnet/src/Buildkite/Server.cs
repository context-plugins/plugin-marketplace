using Buildkite.Core.Models;
using Buildkite.Servers;

namespace Buildkite;

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
    internal UrlTemplate DefaultBuildkiteAgentMetricsApi(string path) =>
        _options.DefaultBuildkiteAgentMetricsApi.Resolve(_environment, path);
}
