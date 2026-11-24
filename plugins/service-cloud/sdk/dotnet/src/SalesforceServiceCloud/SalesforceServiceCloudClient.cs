using System.Net.Http;
using SalesforceServiceCloud.Api;
using SalesforceServiceCloud.Core;
using SalesforceServiceCloud.Core.Configuration;
using SalesforceServiceCloud.Core.Logging;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud;

public sealed class SalesforceServiceCloudClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SalesforceServiceCloudClient(HttpClient httpClient, SalesforceServiceCloudClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SalesforceServiceCloudClient/v5.3.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v5.3.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SALESFORCE_SERVICE_CLOUD_LOG"),
            "SalesforceServiceCloudClient",
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

    public Bot Bot => field ??= new Bot(_rawClient, _server, _auth);

    public Health Health => field ??= new Health(_rawClient, _server);

    public Versions Versions => field ??= new Versions(_rawClient, _server);
}
