using System.Net.Http;
using AmazonFreeRtos.Api;
using AmazonFreeRtos.Core;
using AmazonFreeRtos.Core.Configuration;
using AmazonFreeRtos.Core.Logging;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos;

/// <summary>
/// The Amazon FreeRTOS Management API provides programmatic access to manage FreeRTOS software configurations, OTA updates, and device connectivity for microcontroller-based IoT devices.
/// </summary>
public sealed class AmazonFreeRtosClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonFreeRtosClient(HttpClient httpClient, AmazonFreeRtosClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonFreeRtosClient/2021-11-29 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2021-11-29"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_FREE_RTOS_LOG"),
            "AmazonFreeRtosClient",
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

    /// <summary>
    /// Over-the-air firmware update management
    /// </summary>
    public OtaUpdates OtaUpdates => field ??= new OtaUpdates(_rawClient, _server, _auth);

    /// <summary>
    /// FreeRTOS software configuration management
    /// </summary>
    public SoftwareConfigurations SoftwareConfigurations =>
        field ??= new SoftwareConfigurations(_rawClient, _server, _auth);

    /// <summary>
    /// Resource metadata labels
    /// </summary>
    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);
}
