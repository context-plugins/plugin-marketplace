using System.Net.Http;
using BrowserStack.Api;
using BrowserStack.Core;
using BrowserStack.Core.Configuration;
using BrowserStack.Core.Logging;
using BrowserStack.Core.Models;

namespace BrowserStack;

/// <summary>
/// Best-effort OpenAPI 3.1 description of the BrowserStack Automate REST API for managing
/// plans, projects, builds, sessions, browsers, devices, access keys, and media used in
/// Selenium-based cross-browser automated testing on BrowserStack.
/// <para>
/// Authentication uses HTTP Basic with your BrowserStack username and access key.
/// </para>
/// </summary>
public sealed class BrowserStackClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BrowserStackClient(HttpClient httpClient, BrowserStackClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BrowserStackClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BROWSER_STACK_LOG"),
            "BrowserStackClient",
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
    /// Operations on Automate access keys.
    /// </summary>
    public AccessKey AccessKey => field ??= new AccessKey(_rawClient, _server, _auth);

    /// <summary>
    /// Operations describing supported browsers and devices.
    /// </summary>
    public Browsers Browsers => field ??= new Browsers(_rawClient, _server, _auth);

    /// <summary>
    /// Operations on Automate builds.
    /// </summary>
    public Builds Builds => field ??= new Builds(_rawClient, _server, _auth);

    /// <summary>
    /// Operations describing the current Automate subscription plan and capacity.
    /// </summary>
    public PlanApi PlanApi => field ??= new PlanApi(_rawClient, _server, _auth);

    /// <summary>
    /// Operations on Automate projects.
    /// </summary>
    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    /// <summary>
    /// Operations on Automate sessions.
    /// </summary>
    public Sessions Sessions => field ??= new Sessions(_rawClient, _server, _auth);
}
