using DoiT.Servers;

namespace DoiT;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public AuthServerOptions AuthServer { get; set; } = new();
    public AccessTokenServerOptions AccessTokenServer { get; set; } = new();
}
