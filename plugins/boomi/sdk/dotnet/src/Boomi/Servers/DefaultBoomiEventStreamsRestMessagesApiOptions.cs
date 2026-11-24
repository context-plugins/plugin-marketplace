using Boomi.Core.Models;

namespace Boomi.Servers;

public class DefaultBoomiEventStreamsRestMessagesApiOptions
{
    public ProductionOptions Production { get; set; } = new();

    internal UrlTemplate Resolve(ServerEnvironment environment, string path) =>
        environment.Match(() => new UrlTemplate(
            Production.BaseUrl,
            path,
            [TemplateParam.ForServer("topicEndpoint", Production.TopicEndpoint)]));

    public class ProductionOptions
    {
        public string BaseUrl { get; set; } = "https://{topicEndpoint}";
        public string TopicEndpoint { get; set; } = "your-topic-endpoint.boomi.com";
    }
}
