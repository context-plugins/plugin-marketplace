using EinsteinBots.Servers;

namespace EinsteinBots;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public AuthServerOptions AuthServer { get; set; } = new();
}
