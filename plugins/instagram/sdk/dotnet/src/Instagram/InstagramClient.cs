using System.Net.Http;
using Instagram.Api;
using Instagram.Core;
using Instagram.Core.Configuration;
using Instagram.Core.Logging;
using Instagram.Core.Models;

namespace Instagram;

/// <summary>
/// The Instagram Graph API allows Instagram Professionals (Business and Creator accounts) to manage their presence on Instagram, including media publishing, comments, hashtags, mentions, insights, and messaging. Uses the Facebook Graph API infrastructure with OAuth 2.0 authentication.
/// </summary>
public sealed class InstagramClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public InstagramClient(HttpClient httpClient, InstagramClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "InstagramClient/21.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "21.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("INSTAGRAM_LOG"),
            "InstagramClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
    }

    /// <summary>
    /// Comment management and moderation
    /// </summary>
    public Comments Comments => field ??= new Comments(_rawClient, _server);

    /// <summary>
    /// Hashtag search and media discovery
    /// </summary>
    public Hashtags Hashtags => field ??= new Hashtags(_rawClient, _server);

    /// <summary>
    /// Account and media level analytics
    /// </summary>
    public Insights Insights => field ??= new Insights(_rawClient, _server);

    /// <summary>
    /// Photos, videos, stories, reels, and carousels
    /// </summary>
    public MediaApi MediaApi => field ??= new MediaApi(_rawClient, _server);

    /// <summary>
    /// Content where account was mentioned
    /// </summary>
    public Mentions Mentions => field ??= new Mentions(_rawClient, _server);

    /// <summary>
    /// Content creation and publishing workflow
    /// </summary>
    public Publishing Publishing => field ??= new Publishing(_rawClient, _server);

    /// <summary>
    /// Instagram Business and Creator account profiles
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server);
}
