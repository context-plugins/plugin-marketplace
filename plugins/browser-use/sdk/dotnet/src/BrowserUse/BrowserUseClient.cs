using System.Net.Http;
using BrowserUse.Api;
using BrowserUse.Core;
using BrowserUse.Core.Configuration;
using BrowserUse.Core.Logging;
using BrowserUse.Core.Models;

namespace BrowserUse;

/// <summary>
/// Browser Use agent runs API (v4)
/// </summary>
public sealed class BrowserUseClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BrowserUseClient(HttpClient httpClient, BrowserUseClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BrowserUseClient/4.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BROWSER_USE_LOG"),
            "BrowserUseClient",
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

    public Browsers Browsers => field ??= new Browsers(_rawClient, _server, _auth);

    public ExtensionsApi ExtensionsApi => field ??= new ExtensionsApi(_rawClient, _server, _auth);

    public Integrations Integrations => field ??= new Integrations(_rawClient, _server, _auth);

    public Profiles Profiles => field ??= new Profiles(_rawClient, _server, _auth);

    public Runs Runs => field ??= new Runs(_rawClient, _server, _auth);

    public Sessions Sessions => field ??= new Sessions(_rawClient, _server, _auth);

    public Wallets Wallets => field ??= new Wallets(_rawClient, _server, _auth);

    public Workspaces Workspaces => field ??= new Workspaces(_rawClient, _server, _auth);
}
