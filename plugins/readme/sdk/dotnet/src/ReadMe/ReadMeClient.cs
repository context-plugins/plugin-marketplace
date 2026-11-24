using System.Net.Http;
using ReadMe.Api;
using ReadMe.Core;
using ReadMe.Core.Configuration;
using ReadMe.Core.Logging;
using ReadMe.Core.Models;

namespace ReadMe;

/// <summary>
/// The ReadMe Developer Metrics API powers the Developer Dashboard. It accepts API request logs from Metrics SDKs (Node.js, Python, Ruby, PHP, .NET) and exposes analytics including page quality scores, page view statistics, and search analytics so teams can investigate API usage by key or email and debug requests in real time., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe Developer Metrics API powers the Developer Dashboard. It accepts API request logs from Metrics SDKs (Node.js, Python, Ruby, PHP, .NET) and exposes analytics including page quality scores, page view statistics, and search analytics so teams can investigate API usage by key or email and debug requests in real time., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and search.
/// </summary>
public sealed class ReadMeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ReadMeClient(HttpClient httpClient, ReadMeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ReadMeClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("READ_ME_LOG"),
            "ReadMeClient",
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
        _auth = new AuthSchemes(options);
    }

    /// <summary>
    /// Manage ReadMe API keys
    /// </summary>
    public ApiKeys ApiKeys => field ??= new ApiKeys(_rawClient, _server, _auth);

    /// <summary>
    /// Manage API definitions and reference pages
    /// </summary>
    public ApIs ApIs => field ??= new ApIs(_rawClient, _server, _auth);

    /// <summary>
    /// Page view, quality, and search analytics
    /// </summary>
    public Analytics Analytics => field ??= new Analytics(_rawClient, _server, _auth);

    /// <summary>
    /// Manage versions and branches
    /// </summary>
    public Branches Branches => field ??= new Branches(_rawClient, _server, _auth);

    /// <summary>
    /// Manage sidebar groupings
    /// </summary>
    public Categories Categories => field ??= new Categories(_rawClient, _server, _auth);

    /// <summary>
    /// Manage changelog posts
    /// </summary>
    public Changelog Changelog => field ??= new Changelog(_rawClient, _server, _auth);

    /// <summary>
    /// Manage custom documentation pages
    /// </summary>
    public CustomPages CustomPages => field ??= new CustomPages(_rawClient, _server, _auth);

    /// <summary>
    /// Manage knowledge base guide pages
    /// </summary>
    public Guides Guides => field ??= new Guides(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and manage images
    /// </summary>
    public Images Images => field ??= new Images(_rawClient, _server, _auth);

    /// <summary>
    /// Send API request metrics from server-side SDKs
    /// </summary>
    public Metrics Metrics => field ??= new Metrics(_rawClient, _server, _auth);

    /// <summary>
    /// Manage interactive recipe content
    /// </summary>
    public Recipes Recipes => field ??= new Recipes(_rawClient, _server, _auth);

    /// <summary>
    /// Search knowledge base content
    /// </summary>
    public Search Search => field ??= new Search(_rawClient, _server, _auth);
}
