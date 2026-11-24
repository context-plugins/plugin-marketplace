using System.Net.Http;
using JuriSign.Api;
using JuriSign.Core;
using JuriSign.Core.Configuration;
using JuriSign.Core.Logging;
using JuriSign.Core.Models;

namespace JuriSign;

/// <summary>
/// Electronic signature API (eIDAS SES level) with OTP verification (email or SMS).
/// </summary>
public sealed class JuriSignClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public JuriSignClient(HttpClient httpClient, JuriSignClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "JuriSignClient/3.24.1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "3.24.1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("JURI_SIGN_LOG"),
            "JuriSignClient",
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
    /// Credit balance and plan
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// Obtain and revoke API tokens
    /// </summary>
    public AuthenticationApi AuthenticationApi => field ??= new AuthenticationApi(_rawClient, _server, _auth);

    /// <summary>
    /// Merge templates and bulk campaigns (one individualised request per recipient)
    /// </summary>
    public Bulk Bulk => field ??= new Bulk(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and manage PDF documents
    /// </summary>
    public Documents Documents => field ??= new Documents(_rawClient, _server, _auth);

    /// <summary>
    /// Shareable links: each respondent signs their own generated request, no account needed
    /// </summary>
    public PublicForms PublicForms => field ??= new PublicForms(_rawClient, _server, _auth);

    /// <summary>
    /// Create, send, and track signature requests
    /// </summary>
    public SignRequests SignRequests => field ??= new SignRequests(_rawClient, _server, _auth);

    /// <summary>
    /// Reusable sign request templates
    /// </summary>
    public Templates Templates => field ??= new Templates(_rawClient, _server, _auth);

    /// <summary>
    /// Manage webhook endpoints for event notifications
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
