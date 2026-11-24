using System.Net.Http;
using Compabase.Api;
using Compabase.Core;
using Compabase.Core.Configuration;
using Compabase.Core.Logging;
using Compabase.Core.Models;

namespace Compabase;

/// <summary>
/// Operations tagged Companies across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Financials across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Health across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged News across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Persons across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Registers across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Tenders across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Usage across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Watchlist across 2 of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class CompabaseClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CompabaseClient(HttpClient httpClient, CompabaseClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CompabaseClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("COMPABASE_LOG"),
            "CompabaseClient",
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

    public Companies Companies => field ??= new Companies(_rawClient, _server, _auth);

    /// <summary>
    /// Financial statements, original filings and financial statistics of one company.
    /// </summary>
    public Financials Financials => field ??= new Financials(_rawClient, _server, _auth);

    public Health Health => field ??= new Health(_rawClient, _server);

    public News News => field ??= new News(_rawClient, _server, _auth);

    public Persons Persons => field ??= new Persons(_rawClient, _server, _auth);

    /// <summary>
    /// Public-register data of one company (CRBR, MSiG, KRZ, URE, BDO, SUDOP, KNF, FE, FTS, BZP/TED, NFZ contracts and waiting lists, sanctions and PEP lists, Warsaw Stock Exchange, real estate, secured liabilities, website facts).
    /// </summary>
    public Registers Registers => field ??= new Registers(_rawClient, _server, _auth);

    public Tenders Tenders => field ??= new Tenders(_rawClient, _server, _auth);

    public Usage Usage => field ??= new Usage(_rawClient, _server, _auth);

    public Watchlist Watchlist => field ??= new Watchlist(_rawClient, _server, _auth);
}
