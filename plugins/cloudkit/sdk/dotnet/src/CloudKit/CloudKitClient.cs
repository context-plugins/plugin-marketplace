using System.Net.Http;
using CloudKit.Api;
using CloudKit.Core;
using CloudKit.Core.Configuration;
using CloudKit.Core.Logging;
using CloudKit.Core.Models;

namespace CloudKit;

/// <summary>
/// Best-effort OpenAPI 3.1 description of Apple CloudKit Web Services, the
/// REST surface that lets non-Apple-platform clients read and write data in
/// a CloudKit container's public, private, or shared database.
/// </summary>
public sealed class CloudKitClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CloudKitClient(HttpClient httpClient, CloudKitClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CloudKitClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CLOUD_KIT_LOG"),
            "CloudKitClient",
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

    public Assets Assets => field ??= new Assets(_rawClient, _server, _auth);

    public Changes Changes => field ??= new Changes(_rawClient, _server, _auth);

    public Records Records => field ??= new Records(_rawClient, _server, _auth);

    public Subscriptions Subscriptions => field ??= new Subscriptions(_rawClient, _server, _auth);

    public Tokens Tokens => field ??= new Tokens(_rawClient, _server, _auth);

    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    public Zones Zones => field ??= new Zones(_rawClient, _server, _auth);
}
