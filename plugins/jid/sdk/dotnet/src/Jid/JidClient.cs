using System.Net.Http;
using Jid.Api;
using Jid.Core;
using Jid.Core.Configuration;
using Jid.Core.Logging;
using Jid.Core.Models;

namespace Jid;

/// <summary>
/// Before an agent pays, signs, books, hires or buys, Jid checks the business it is dealing with: real, active, licensed for this activity, not sanctioned, with the receipts. Every fact is cited to the registry that issued it. Decisions apply the published rules (https://jid.com/decision-rules, version 2026-10-15.1) and are not legal advice. No key: 10 requests a minute and 100 a day per IP. A free key (no card) includes 1,000 checks a month. Business information only; not a consumer report and not for FCRA purposes.
/// </summary>
public sealed class JidClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public JidClient(HttpClient httpClient, JidClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "JidClient/1.3.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.3.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("JID_LOG"),
            "JidClient",
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
    /// Change monitoring with signed webhooks
    /// </summary>
    public Monitors Monitors => field ??= new Monitors(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server);

    public SignalApi SignalApi => field ??= new SignalApi(_rawClient, _server);

    /// <summary>
    /// Decisions, files and receipts
    /// </summary>
    public Verify Verify => field ??= new Verify(_rawClient, _server);

    /// <summary>
    /// B2B lead and counterparty qualification
    /// </summary>
    public Qualify Qualify => field ??= new Qualify(_rawClient, _server, _auth);

    /// <summary>
    /// Engage or not: a fast, deterministic answer for a lead, sender, vendor or website
    /// </summary>
    public Screen Screen => field ??= new Screen(_rawClient, _server);
}
