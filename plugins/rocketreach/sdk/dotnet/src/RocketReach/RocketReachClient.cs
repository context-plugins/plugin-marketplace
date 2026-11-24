using System.Net.Http;
using RocketReach.Api;
using RocketReach.Core;
using RocketReach.Core.Configuration;
using RocketReach.Core.Logging;
using RocketReach.Core.Models;

namespace RocketReach;

/// <summary>
/// The RocketReach API lets you search and retrieve contact info for 700M+ professionals and 35M
/// companies.
/// </summary>
public sealed class RocketReachClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public RocketReachClient(HttpClient httpClient, RocketReachClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "RocketReachClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ROCKET_REACH_LOG"),
            "RocketReachClient",
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

    public CompanyDataApi CompanyDataApi => field ??= new CompanyDataApi(_rawClient, _server, _auth);

    public PeopleDataApi PeopleDataApi => field ??= new PeopleDataApi(_rawClient, _server, _auth);
}
