using ReadMe.Servers;

namespace ReadMe;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultReadMeApiKeysApiOptions DefaultReadMeApiKeysApi { get; set; } = new();
}
