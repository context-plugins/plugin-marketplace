using System.Net.Http;
using Tabby.Api;
using Tabby.Core;
using Tabby.Core.Configuration;
using Tabby.Core.Logging;
using Tabby.Core.Models;

namespace Tabby;

/// <summary>
/// Tabby Documentation: <b>docs.tabby.ai</b>
/// </summary>
public sealed class TabbyClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public TabbyClient(HttpClient httpClient, TabbyClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "TabbyClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("TABBY_LOG"),
            "TabbyClient",
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
    /// Checkout is a whole process of customer data collection and payment authorization.
    /// </summary>
    public Checkout Checkout => field ??= new Checkout(_rawClient, _server, _auth);

    /// <summary>
    /// The Disputes API is designed to simplify the process of handling disputes and help merchants resolve issues with customer orders more efficiently. Merchants can use this API to retrieve a list of disputes, view details about a specific dispute, and approve or challenge a bunch of disputes. It mirrors the functionality available in Tabby Merchant Dashboard and operates exclusively with live payments using live credentials. A secret key is required for using the Disputes API.
    /// </summary>
    public DisputesApi DisputesApi => field ??= new DisputesApi(_rawClient, _server, _auth);

    /// <summary>
    /// The core of tabby is a payments flow enabling you to handle payments at your webstore.
    /// </summary>
    public PaymentsApi PaymentsApi => field ??= new PaymentsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage webhook endpoints.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
