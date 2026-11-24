using Paid.Servers;

namespace Paid;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultReferenceAnalyticsExperimentalApiOptions DefaultReferenceAnalyticsExperimentalApi { get; set; } = new();
}
