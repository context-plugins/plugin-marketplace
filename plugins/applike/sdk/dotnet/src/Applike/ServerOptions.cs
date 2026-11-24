using Applike.Servers;

namespace Applike;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultManagementAppPartnerConnectionApiOptions DefaultManagementAppPartnerConnectionApi { get; set; } = new();
}
