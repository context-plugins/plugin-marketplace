using System.Net.Http;
using Airwallex.Api;
using Airwallex.Core;
using Airwallex.Core.Configuration;
using Airwallex.Core.Logging;
using Airwallex.Core.Models;

namespace Airwallex;

/// <summary>
/// Best-effort OpenAPI 3.1 representation of the Airwallex REST API derived from
/// https://www.airwallex.com/docs/api. Airwallex is a global payments and
/// financial infrastructure platform. Coverage in this best-effort spec
/// focuses on the Payment Acceptance and related core resources: payment
/// intents, customers, refunds, payouts, transfers, balances, beneficiaries
/// and account authentication. Endpoints accept and return JSON.
/// </summary>
public sealed class AirwallexClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AirwallexClient(HttpClient httpClient, AirwallexClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AirwallexClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AIRWALLEX_LOG"),
            "AirwallexClient",
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

    public AuthenticationApi AuthenticationApi => field ??= new AuthenticationApi(_rawClient, _server, _auth);

    public Balances Balances => field ??= new Balances(_rawClient, _server, _auth);

    public Beneficiaries Beneficiaries => field ??= new Beneficiaries(_rawClient, _server, _auth);

    public Customers Customers => field ??= new Customers(_rawClient, _server, _auth);

    public PaymentIntents PaymentIntents => field ??= new PaymentIntents(_rawClient, _server, _auth);

    public Payouts Payouts => field ??= new Payouts(_rawClient, _server, _auth);

    public Refunds Refunds => field ??= new Refunds(_rawClient, _server, _auth);

    public Transfers Transfers => field ??= new Transfers(_rawClient, _server, _auth);
}
