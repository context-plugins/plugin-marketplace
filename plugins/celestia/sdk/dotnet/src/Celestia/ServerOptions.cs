using Celestia.Servers;

namespace Celestia;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultCelestiaWebsiteContactApiOptions DefaultCelestiaWebsiteContactApi { get; set; } = new();
}
