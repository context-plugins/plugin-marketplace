using SalesforceServiceCloud.Servers;

namespace SalesforceServiceCloud;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public AuthServerOptions AuthServer { get; set; } = new();
}
