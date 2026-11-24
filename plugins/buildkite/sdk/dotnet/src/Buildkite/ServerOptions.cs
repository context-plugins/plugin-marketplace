using Buildkite.Servers;

namespace Buildkite;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultBuildkiteAgentMetricsApiOptions DefaultBuildkiteAgentMetricsApi { get; set; } = new();
}
