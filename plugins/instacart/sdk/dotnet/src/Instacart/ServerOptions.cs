using Instacart.Servers;

namespace Instacart;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultInstacartRestApiOptions DefaultInstacartRestApi { get; set; } = new();
}
