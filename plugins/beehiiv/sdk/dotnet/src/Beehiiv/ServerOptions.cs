using Beehiiv.Servers;

namespace Beehiiv;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultOAuth2AuthorizationsApiOptions DefaultOAuth2AuthorizationsApi { get; set; } = new();
}
