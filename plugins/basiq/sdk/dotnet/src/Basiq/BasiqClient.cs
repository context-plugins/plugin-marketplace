using System.Net.Http;
using Basiq.Api;
using Basiq.Core;
using Basiq.Core.Configuration;
using Basiq.Core.Logging;
using Basiq.Core.Models;

namespace Basiq;

/// <summary>
/// All included utility endpoints for Basiq partners, Webhooks
/// </summary>
public sealed class BasiqClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BasiqClient(HttpClient httpClient, BasiqClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BasiqClient/3.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "3.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BASIQ_LOG"),
            "BasiqClient",
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

    public AccountsApi AccountsApi => field ??= new AccountsApi(_rawClient, _server, _auth);

    public Analytics Analytics => field ??= new Analytics(_rawClient, _server, _auth);

    public AuthLinks AuthLinks => field ??= new AuthLinks(_rawClient, _server, _auth);

    public AuthenticationApi AuthenticationApi => field ??= new AuthenticationApi(_rawClient, _server, _auth);

    public Connections Connections => field ??= new Connections(_rawClient, _server, _auth);

    public Connectors Connectors => field ??= new Connectors(_rawClient, _server, _auth);

    public Consents Consents => field ??= new Consents(_rawClient, _server, _auth);

    public EnrichApi EnrichApi => field ??= new EnrichApi(_rawClient, _server, _auth);

    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    public Expenses Expenses => field ??= new Expenses(_rawClient, _server, _auth);

    public Identities Identities => field ??= new Identities(_rawClient, _server, _auth);

    public IncomeApi IncomeApi => field ??= new IncomeApi(_rawClient, _server, _auth);

    public Insights Insights => field ??= new Insights(_rawClient, _server, _auth);

    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    public Payees Payees => field ??= new Payees(_rawClient, _server, _auth);

    public Reports Reports => field ??= new Reports(_rawClient, _server, _auth);

    public Statements Statements => field ??= new Statements(_rawClient, _server, _auth);

    public Transactions Transactions => field ??= new Transactions(_rawClient, _server, _auth);

    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Basiq Webhooks
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
