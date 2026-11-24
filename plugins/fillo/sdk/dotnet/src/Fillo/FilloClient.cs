using System.Net.Http;
using Fillo.Api;
using Fillo.Core;
using Fillo.Core.Configuration;
using Fillo.Core.Logging;
using Fillo.Core.Models;

namespace Fillo;

/// <summary>
/// Operations tagged Agents across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Credentials across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Deliveries across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Fillo Management API across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Forms across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Insights across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Integrations across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Members across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Respondents across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Responses across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Settings across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Storage across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Webhooks across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Workspace across 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class FilloClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FilloClient(HttpClient httpClient, FilloClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FilloClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FILLO_LOG"),
            "FilloClient",
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

    public Agents Agents => field ??= new Agents(_rawClient, _server, _auth);

    public Credentials Credentials => field ??= new Credentials(_rawClient, _server, _auth);

    public Deliveries Deliveries => field ??= new Deliveries(_rawClient, _server, _auth);

    public FilloManagementApi FilloManagementApi => field ??= new FilloManagementApi(_rawClient, _server);

    public Forms Forms => field ??= new Forms(_rawClient, _server, _auth);

    public Insights Insights => field ??= new Insights(_rawClient, _server, _auth);

    public Integrations Integrations => field ??= new Integrations(_rawClient, _server, _auth);

    public Members Members => field ??= new Members(_rawClient, _server, _auth);

    public Respondents Respondents => field ??= new Respondents(_rawClient, _server, _auth);

    public Responses Responses => field ??= new Responses(_rawClient, _server, _auth);

    public Settings Settings => field ??= new Settings(_rawClient, _server, _auth);

    public Storage Storage => field ??= new Storage(_rawClient, _server, _auth);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);

    public WorkspaceApi WorkspaceApi => field ??= new WorkspaceApi(_rawClient, _server, _auth);
}
