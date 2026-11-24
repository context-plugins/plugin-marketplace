using System.Net.Http;
using RelmCrm.Api;
using RelmCrm.Core;
using RelmCrm.Core.Configuration;
using RelmCrm.Core.Logging;
using RelmCrm.Core.Models;

namespace RelmCrm;

/// <summary>
/// REST surface for Relm.
/// </summary>
public sealed class RelmCrmClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public RelmCrmClient(HttpClient httpClient, RelmCrmClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "RelmCrmClient/0.17.1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "0.17.1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("RELM_CRM_LOG"),
            "RelmCrmClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    public Activities Activities => field ??= new Activities(_rawClient, _server, _auth);

    public Automations Automations => field ??= new Automations(_rawClient, _server, _auth);

    public Batch Batch => field ??= new Batch(_rawClient, _server, _auth);

    public Companies Companies => field ??= new Companies(_rawClient, _server, _auth);

    public Connections Connections => field ??= new Connections(_rawClient, _server, _auth);

    public Contacts Contacts => field ??= new Contacts(_rawClient, _server, _auth);

    public Deals Deals => field ??= new Deals(_rawClient, _server, _auth);

    /// <summary>
    /// Self-describing schema, usage, settings.
    /// </summary>
    public Discovery Discovery => field ??= new Discovery(_rawClient, _server, _auth);

    public Pipelines Pipelines => field ??= new Pipelines(_rawClient, _server, _auth);

    /// <summary>
    /// Custom fields, enums, object types.
    /// </summary>
    public Registry Registry => field ??= new Registry(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    public Sequences Sequences => field ??= new Sequences(_rawClient, _server, _auth);

    public Templates Templates => field ??= new Templates(_rawClient, _server, _auth);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
