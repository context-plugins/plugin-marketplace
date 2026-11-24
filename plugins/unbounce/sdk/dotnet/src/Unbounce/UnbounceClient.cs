using System.Net.Http;
using Unbounce.Api;
using Unbounce.Core;
using Unbounce.Core.Configuration;
using Unbounce.Core.Logging;
using Unbounce.Core.Models;

namespace Unbounce;

/// <summary>
/// The Unbounce REST API provides programmatic access to accounts,
/// sub-accounts, domains, pages, page groups, and leads. Authentication
/// uses an API key (available to all Unbounce pricing plans) or OAuth 2.0
/// Authorization Code flow (granted case-by-case). Clients send a custom
/// Accept header indicating the API version.
/// <para>
/// Endpoint surface and authentication confirmed against
/// https://developer.unbounce.com/api_reference/.
/// </para>
/// </summary>
public sealed class UnbounceClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public UnbounceClient(HttpClient httpClient, UnbounceClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "UnbounceClient/0.4.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "0.4.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("UNBOUNCE_LOG"),
            "UnbounceClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// Account and sub-account resources
    /// </summary>
    public Accounts Accounts => field ??= new Accounts(_rawClient, _server, _auth);

    /// <summary>
    /// Domains attached to sub-accounts
    /// </summary>
    public Domains Domains => field ??= new Domains(_rawClient, _server, _auth);

    /// <summary>
    /// Lead submissions captured by pages
    /// </summary>
    public Leads Leads => field ??= new Leads(_rawClient, _server, _auth);

    /// <summary>
    /// API meta-information
    /// </summary>
    public Meta Meta => field ??= new Meta(_rawClient, _server, _auth);

    /// <summary>
    /// Logical page groupings
    /// </summary>
    public PageGroups PageGroups => field ??= new PageGroups(_rawClient, _server, _auth);

    /// <summary>
    /// Landing pages and form fields
    /// </summary>
    public Pages Pages => field ??= new Pages(_rawClient, _server, _auth);

    /// <summary>
    /// Users in the account
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);
}
