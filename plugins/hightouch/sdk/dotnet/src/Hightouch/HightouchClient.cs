using System.Net.Http;
using Hightouch.Api;
using Hightouch.Core;
using Hightouch.Core.Configuration;
using Hightouch.Core.Logging;
using Hightouch.Core.Models;

namespace Hightouch;

/// <summary>
/// Hightouch Public Rest API to access syncs, models, sources and destinations
/// </summary>
public sealed class HightouchClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public HightouchClient(HttpClient httpClient, HightouchClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "HightouchClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("HIGHTOUCH_LOG"),
            "HightouchClient",
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

    public Campaigns Campaigns => field ??= new Campaigns(_rawClient, _server, _auth);

    public DecisionEngine DecisionEngine => field ??= new DecisionEngine(_rawClient, _server, _auth);

    public Destinations Destinations => field ??= new Destinations(_rawClient, _server, _auth);

    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    public IdGraphs IdGraphs => field ??= new IdGraphs(_rawClient, _server, _auth);

    public Idr Idr => field ??= new Idr(_rawClient, _server, _auth);

    public ModelsApi ModelsApi => field ??= new ModelsApi(_rawClient, _server, _auth);

    public Signups Signups => field ??= new Signups(_rawClient, _server, _auth);

    public Sources Sources => field ??= new Sources(_rawClient, _server, _auth);

    public SyncSequences SyncSequences => field ??= new SyncSequences(_rawClient, _server, _auth);

    public SyncTemplates SyncTemplates => field ??= new SyncTemplates(_rawClient, _server, _auth);

    public Syncs Syncs => field ??= new Syncs(_rawClient, _server, _auth);
}
