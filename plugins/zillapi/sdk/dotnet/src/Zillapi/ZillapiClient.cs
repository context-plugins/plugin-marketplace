using System.Net.Http;
using Zillapi.Api;
using Zillapi.Core;
using Zillapi.Core.Configuration;
using Zillapi.Core.Logging;
using Zillapi.Core.Models;

namespace Zillapi;

/// <summary>
/// Real estate data API. Look up properties by URL, address, or zpid; search listings; extract multi-unit buildings; run async batches; receive results via signed webhooks.
/// </summary>
public sealed class ZillapiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ZillapiClient(HttpClient httpClient, ZillapiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ZillapiClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ZILLAPI_LOG"),
            "ZillapiClient",
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

    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    public Buildings Buildings => field ??= new Buildings(_rawClient, _server, _auth);

    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    public Listings Listings => field ??= new Listings(_rawClient, _server, _auth);

    public Properties Properties => field ??= new Properties(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
