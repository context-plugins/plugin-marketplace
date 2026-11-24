using MrScraper.Servers;

namespace MrScraper;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultScraperServiceGatewayAuthApiOptions DefaultScraperServiceGatewayAuthApi { get; set; } = new();
}
