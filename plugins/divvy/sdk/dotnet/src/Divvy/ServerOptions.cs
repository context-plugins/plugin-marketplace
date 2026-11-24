using Divvy.Servers;

namespace Divvy;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultConnectEventsApiOptions DefaultConnectEventsApi { get; set; } = new();
}
