using System.Net.Http;
using DidLogic.Api;
using DidLogic.Core;
using DidLogic.Core.Configuration;
using DidLogic.Core.Logging;
using DidLogic.Core.Models;

namespace DidLogic;

/// <summary>
/// Operations tagged Account Balance across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged API Access across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Calls across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Click2Call across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged HLR Lookups across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Identities across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Inbound Destinations across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged KYC Documents across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Numbers &amp; Inventory across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Purchases across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Reports across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Risk Checks across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged SIP Accounts across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged SMS across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class DidLogicClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public DidLogicClient(HttpClient httpClient, DidLogicClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DidLogicClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DID_LOGIC_LOG"),
            "DidLogicClient",
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

    public ApiAccess ApiAccess => field ??= new ApiAccess(_rawClient, _server, _auth);

    public AccountBalance AccountBalance => field ??= new AccountBalance(_rawClient, _server, _auth);

    public Calls Calls => field ??= new Calls(_rawClient, _server, _auth);

    public Click2Call Click2Call => field ??= new Click2Call(_rawClient, _server, _auth);

    public HlrLookups HlrLookups => field ??= new HlrLookups(_rawClient, _server, _auth);

    public Identities Identities => field ??= new Identities(_rawClient, _server, _auth);

    public InboundDestinations InboundDestinations => field ??= new InboundDestinations(_rawClient, _server, _auth);

    public KycDocuments KycDocuments => field ??= new KycDocuments(_rawClient, _server, _auth);

    public NumbersInventory NumbersInventory => field ??= new NumbersInventory(_rawClient, _server, _auth);

    public Purchases Purchases => field ??= new Purchases(_rawClient, _server, _auth);

    public Reports Reports => field ??= new Reports(_rawClient, _server, _auth);

    public RiskChecks RiskChecks => field ??= new RiskChecks(_rawClient, _server, _auth);

    public SipAccounts SipAccounts => field ??= new SipAccounts(_rawClient, _server, _auth);

    public SmsApi SmsApi => field ??= new SmsApi(_rawClient, _server, _auth);
}
