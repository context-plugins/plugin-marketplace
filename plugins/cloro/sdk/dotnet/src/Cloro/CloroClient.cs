using System.Net.Http;
using Cloro.Api;
using Cloro.Core;
using Cloro.Core.Configuration;
using Cloro.Core.Logging;
using Cloro.Core.Models;

namespace Cloro;

/// <summary>
/// Operations tagged Async across 3 of this provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Countries across 3 of this provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Credits across 3 of this provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Monitor across 3 of this provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged States across 3 of this provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class CloroClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CloroClient(HttpClient httpClient, CloroClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CloroClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CLORO_LOG"),
            "CloroClient",
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

    public Async Async => field ??= new Async(_rawClient, _server, _auth);

    public Countries Countries => field ??= new Countries(_rawClient, _server, _auth);

    public Credits Credits => field ??= new Credits(_rawClient, _server, _auth);

    public MonitorApi MonitorApi => field ??= new MonitorApi(_rawClient, _server, _auth);

    public StatesApi StatesApi => field ??= new StatesApi(_rawClient, _server, _auth);
}
