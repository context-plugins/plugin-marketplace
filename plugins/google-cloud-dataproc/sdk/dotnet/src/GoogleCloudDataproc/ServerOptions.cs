using GoogleCloudDataproc.Servers;

namespace GoogleCloudDataproc;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public AuthServerOptions AuthServer { get; set; } = new();
    public AccessTokenServerOptions AccessTokenServer { get; set; } = new();
}
