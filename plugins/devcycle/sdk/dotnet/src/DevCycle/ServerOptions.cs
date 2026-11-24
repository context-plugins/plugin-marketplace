using DevCycle.Servers;

namespace DevCycle;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultDevCycleBucketingBucketingApiOptions DefaultDevCycleBucketingBucketingApi { get; set; } = new();
}
