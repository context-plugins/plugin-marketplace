using System.Net.Http;
using CodeQr.Api;
using CodeQr.Core;
using CodeQr.Core.Configuration;
using CodeQr.Core.Logging;
using CodeQr.Core.Models;

namespace CodeQr;

/// <summary>
/// Operations tagged Analytics across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Domains across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Events across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Folders across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Links across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Projects across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged QR Codes across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Tags across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Track across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class CodeQrClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CodeQrClient(HttpClient httpClient, CodeQrClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CodeQrClient/0.0.1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "0.0.1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CODE_QR_LOG"),
            "CodeQrClient",
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

    public Analytics Analytics => field ??= new Analytics(_rawClient, _server, _auth);

    public Domains Domains => field ??= new Domains(_rawClient, _server, _auth);

    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    public Folders Folders => field ??= new Folders(_rawClient, _server, _auth);

    public Links Links => field ??= new Links(_rawClient, _server, _auth);

    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    public QrCodes QrCodes => field ??= new QrCodes(_rawClient, _server, _auth);

    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);

    public Track Track => field ??= new Track(_rawClient, _server, _auth);
}
