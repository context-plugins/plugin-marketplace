using Boomi.Servers;

namespace Boomi;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultBoomiDataHubGoldenRecordsApiOptions DefaultBoomiDataHubGoldenRecordsApi { get; set; } = new();
    public DefaultBoomiEventStreamsRestMessagesApiOptions DefaultBoomiEventStreamsRestMessagesApi { get; set; } = new();
}
