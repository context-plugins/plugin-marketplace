using Bill.Servers;

namespace Bill;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultConnectEventsApiOptions DefaultConnectEventsApi { get; set; } = new();
}
