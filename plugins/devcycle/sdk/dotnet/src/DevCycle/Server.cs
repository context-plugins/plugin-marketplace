using DevCycle.Core.Models;
using DevCycle.Servers;

namespace DevCycle;

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
    internal UrlTemplate DefaultDevCycleBucketingBucketingApi(string path) =>
        _options.DefaultDevCycleBucketingBucketingApi.Resolve(_environment, path);
}
