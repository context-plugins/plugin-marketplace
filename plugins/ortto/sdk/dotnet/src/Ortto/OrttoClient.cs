using System.Net.Http;
using Ortto.Api;
using Ortto.Core;
using Ortto.Core.Configuration;
using Ortto.Core.Logging;
using Ortto.Core.Models;

namespace Ortto;

/// <summary>
/// REST API for Ortto (formerly Autopilot), a marketing automation, customer data platform (CDP), and analytics product.
/// </summary>
public sealed class OrttoClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public OrttoClient(HttpClient httpClient, OrttoClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "OrttoClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ORTTO_LOG"),
            "OrttoClient",
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
    /// Create, update, retrieve, and manage accounts (organizations).
    /// </summary>
    public Accounts Accounts => field ??= new Accounts(_rawClient, _server, _auth);

    /// <summary>
    /// Send custom activity events and manage activity definitions.
    /// </summary>
    public Activities Activities => field ??= new Activities(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve campaigns, reports, and assets.
    /// </summary>
    public Campaigns Campaigns => field ??= new Campaigns(_rawClient, _server, _auth);

    /// <summary>
    /// Create, update, retrieve, and manage people (contacts).
    /// </summary>
    public People People => field ??= new People(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve account tags.
    /// </summary>
    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);

    /// <summary>
    /// Send transactional email and SMS.
    /// </summary>
    public Transactional Transactional => field ??= new Transactional(_rawClient, _server, _auth);
}
