using AmazonTranscribe.Servers;

namespace AmazonTranscribe;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultAmazonTranscribeServiceOperationsApiOptions DefaultAmazonTranscribeServiceOperationsApi { get; set; } = new();
}
