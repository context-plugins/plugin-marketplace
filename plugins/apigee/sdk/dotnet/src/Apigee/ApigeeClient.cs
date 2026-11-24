using System.Net.Http;
using Apigee.Api;
using Apigee.Core;
using Apigee.Core.Configuration;
using Apigee.Core.Logging;
using Apigee.Core.Models;

namespace Apigee;

/// <summary>
/// Generated from Google's published Discovery document for Apigee API (apigee v1, revision 20261106). 1 operation(s)., Generated from Google's published Discovery document for Apigee API (apigee v1, revision 20261106). 372 operation(s)., Operations tagged Projects across 2 of this provider's published API definitions: apigee-apigee-projects-api-openapi.yml, apigee-apihub-projects-api-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class ApigeeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ApigeeClient(HttpClient httpClient, ApigeeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ApigeeClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("APIGEE_LOG"),
            "ApigeeClient",
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

    public Hybrid Hybrid => field ??= new Hybrid(_rawClient, _server, _auth);

    public Organizations Organizations => field ??= new Organizations(_rawClient, _server, _auth);

    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);
}
