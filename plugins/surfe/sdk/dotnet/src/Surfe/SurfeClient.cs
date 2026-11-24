using System.Net.Http;
using Surfe.Api;
using Surfe.Core;
using Surfe.Core.Configuration;
using Surfe.Core.Logging;
using Surfe.Core.Models;

namespace Surfe;

/// <summary>
/// The Surfe API (formerly Leadjet) provides B2B people and company search plus enrichment. It returns verified professional emails and mobile phone numbers, company firmographics, and lookalike account recommendations. Bulk enrichment is asynchronous: start a job with POST and either poll the GET job endpoint or receive a webhook callback. All requests are authenticated with a Bearer API key managed from the Surfe dashboard.
/// </summary>
public sealed class SurfeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SurfeClient(HttpClient httpClient, SurfeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SurfeClient/2.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SURFE_LOG"),
            "SurfeClient",
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
    /// Credit balance and account utilities.
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// Search and enrich organizations.
    /// </summary>
    public Companies Companies => field ??= new Companies(_rawClient, _server, _auth);

    /// <summary>
    /// Search and enrich individual contacts.
    /// </summary>
    public People People => field ??= new People(_rawClient, _server, _auth);

    /// <summary>
    /// ICP definition and lookalike account recommendations.
    /// </summary>
    public Recommendations Recommendations => field ??= new Recommendations(_rawClient, _server, _auth);
}
