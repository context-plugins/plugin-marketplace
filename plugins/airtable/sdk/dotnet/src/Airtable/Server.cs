using Airtable.Core.Models;
using Airtable.Servers;

namespace Airtable;

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
    internal UrlTemplate DefaultAirtableScimGroupsApi(string path) =>
        _options.DefaultAirtableScimGroupsApi.Resolve(_environment, path);
}
