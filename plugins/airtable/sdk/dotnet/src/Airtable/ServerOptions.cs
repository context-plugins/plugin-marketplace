using Airtable.Servers;

namespace Airtable;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultAirtableScimGroupsApiOptions DefaultAirtableScimGroupsApi { get; set; } = new();
}
