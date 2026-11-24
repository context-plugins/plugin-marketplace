using CircleCi.Servers;

namespace CircleCi;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultCircleCiRestApiV2ContextApiOptions DefaultCircleCiRestApiV2ContextApi { get; set; } = new();
}
