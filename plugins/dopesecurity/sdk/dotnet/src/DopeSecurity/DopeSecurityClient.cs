using System.Net.Http;
using DopeSecurity.Api;
using DopeSecurity.Core;
using DopeSecurity.Core.Configuration;
using DopeSecurity.Core.Logging;
using DopeSecurity.Core.Models;

namespace DopeSecurity;

/// <summary>
/// The Flightdeck API by dope.security. Manage policies, custom categories, URL/application bypass, SSL inspection, and endpoint status for the dope.swg Secure Web Gateway. Authentication uses the OAuth 2.0 Client Credentials flow; the returned bearer token is required on all non-token calls.
/// </summary>
public sealed class DopeSecurityClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public DopeSecurityClient(HttpClient httpClient, DopeSecurityClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DopeSecurityClient/1.0.3 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.3"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DOPE_SECURITY_LOG"),
            "DopeSecurityClient",
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
    /// Everything about authorizing calls to Flightdeck
    /// </summary>
    public Authorization Authorization => field ??= new Authorization(_rawClient, _server);

    /// <summary>
    /// Everything about your Custom Categories
    /// </summary>
    public CustomCategoriesApi CustomCategoriesApi => field ??= new CustomCategoriesApi(_rawClient, _server, _auth);

    /// <summary>
    /// Everything about your endpoints
    /// </summary>
    public Endpoints Endpoints => field ??= new Endpoints(_rawClient, _server, _auth);

    /// <summary>
    /// Everything about your Policies
    /// </summary>
    public Policies Policies => field ??= new Policies(_rawClient, _server, _auth);
}
