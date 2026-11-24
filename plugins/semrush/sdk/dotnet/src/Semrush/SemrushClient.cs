using System.Net.Http;
using Semrush.Api;
using Semrush.Core;
using Semrush.Core.Configuration;
using Semrush.Core.Logging;
using Semrush.Core.Models;

namespace Semrush;

/// <summary>
/// SEMrush is an all-in-one digital marketing tool that helps businesses improve their online visibility and attract more customers.
/// </summary>
public sealed class SemrushClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SemrushClient(HttpClient httpClient, SemrushClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SemrushClient/0.0.1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "0.0.1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SEMRUSH_LOG"),
            "SemrushClient",
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

    public HermesPartnerApi HermesPartnerApi => field ??= new HermesPartnerApi(_rawClient, _server, _auth);

    public JwtIssuer JwtIssuer => field ??= new JwtIssuer(_rawClient, _server);

    public PartnerService PartnerService => field ??= new PartnerService(_rawClient, _server, _auth);
}
