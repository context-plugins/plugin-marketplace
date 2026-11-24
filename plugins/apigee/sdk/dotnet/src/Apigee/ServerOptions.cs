using Apigee.Servers;

namespace Apigee;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public AuthServerOptions AuthServer { get; set; } = new();
    public AccessTokenServerOptions AccessTokenServer { get; set; } = new();
}
