using System.Net.Http;
using AtlassianCompass.Api;
using AtlassianCompass.Core;
using AtlassianCompass.Core.Configuration;
using AtlassianCompass.Core.Logging;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass;

/// <summary>
/// This resource represents events. Use this resource to send events into an event source., This resource represents metrics. Use this resource to send metric values into a component's metric source., This resource represents package dependencies. Use this resource to associate package dependencies with a component.
/// </summary>
public sealed class AtlassianCompassClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AtlassianCompassClient(HttpClient httpClient, AtlassianCompassClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AtlassianCompassClient/1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ATLASSIAN_COMPASS_LOG"),
            "AtlassianCompassClient",
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
    /// This resource represents events. Use this resource to send events into an event source.
    /// </summary>
    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    /// <summary>
    /// This resource represents metrics. Use this resource to send metric values into a component's metric source.
    /// </summary>
    public Metrics Metrics => field ??= new Metrics(_rawClient, _server, _auth);

    /// <summary>
    /// This resource represents package dependencies. Use this resource to associate package dependencies with a component.
    /// </summary>
    public PackageDependencies PackageDependencies => field ??= new PackageDependencies(_rawClient, _server, _auth);

    public AttachmentRestController AttachmentRestController =>
        field ??= new AttachmentRestController(_rawClient, _server, _auth);

    public EntitlementRestController EntitlementRestController =>
        field ??= new EntitlementRestController(_rawClient, _server, _auth);

    public IncomingWebhooksRestController IncomingWebhooksRestController =>
        field ??= new IncomingWebhooksRestController(_rawClient, _server, _auth);
}
