using System.Net.Http;
using CallNode.Api;
using CallNode.Core;
using CallNode.Core.Configuration;
using CallNode.Core.Logging;
using CallNode.Core.Models;

namespace CallNode;

/// <summary>
/// Operations tagged Call Records across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Email across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Faxes across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Messaging across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Outbound Calls across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Phone Numbers across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged SIP Trunks across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Wholesale across 2 of this provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class CallNodeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CallNodeClient(HttpClient httpClient, CallNodeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CallNodeClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CALL_NODE_LOG"),
            "CallNodeClient",
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
    /// Read-only records of calls on your numbers — inbound and outbound,
    /// with timings, status, end reason, and the SIP-level hangup cause.
    /// </summary>
    public CallRecords CallRecords => field ??= new CallRecords(_rawClient, _server, _auth);

    /// <summary>
    /// Programmable email: verify a sending domain you control, send transactional
    /// email from any address on it, list messages, and receive delivery events
    /// (delivered, delayed, bounced, complained, failed) signed to your webhook.
    /// Billed per recipient accepted for delivery; message bodies are not stored.
    /// </summary>
    public Email Email => field ??= new Email(_rawClient, _server, _auth);

    /// <summary>
    /// Hosted fax: send a PDF or TIFF as a fax, list and retrieve faxes sent and
    /// received on your numbers, download the document, delete it. Billed per page
    /// for the pages actually transmitted; documents are kept until you delete them.
    /// </summary>
    public Faxes Faxes => field ??= new Faxes(_rawClient, _server, _auth);

    /// <summary>
    /// Send and retrieve SMS/MMS messages.
    /// </summary>
    public MessagingApi MessagingApi => field ??= new MessagingApi(_rawClient, _server, _auth);

    /// <summary>
    /// Originate, retrieve, list, and cancel outbound voice calls.
    /// </summary>
    public OutboundCalls OutboundCalls => field ??= new OutboundCalls(_rawClient, _server, _auth);

    /// <summary>
    /// Search inventory, purchase numbers, provision webhooks, and release numbers.
    /// </summary>
    public PhoneNumbers PhoneNumbers => field ??= new PhoneNumbers(_rawClient, _server, _auth);

    /// <summary>
    /// Create, list, update, and delete saved SIP trunks (egress BYOC + ingress).
    /// </summary>
    public SipTrunks SipTrunks => field ??= new SipTrunks(_rawClient, _server, _auth);

    /// <summary>
    /// Wholesale (SBC-as-a-Service) DID ordering — US and international numbers
    /// delivered straight to your SIP endpoint. Requires wholesale to be active
    /// on your account and completed business verification; every endpoint
    /// otherwise returns 403.
    /// <para>
    /// <b>Outbound PSTN termination is SIP, not HTTP.</b> Where it is enabled on
    /// your account you send us an INVITE on your trunk and we complete the call;
    /// there is no HTTP endpoint to call, so it is not described below. The rules
    /// that matter — the caller ID you may present, what each refusal code means,
    /// and how minutes are charged — are in the SIP trunking guide under
    /// "Wholesale outbound termination". Whether it is enabled on your account,
    /// and at what rate, is shown on your SBC Tenant page in the dashboard.
    /// </para>
    /// </summary>
    public Wholesale Wholesale => field ??= new Wholesale(_rawClient, _server, _auth);
}
