using System.Net.Http;
using GoogleCloudSpeechToText.Api;
using GoogleCloudSpeechToText.Core;
using GoogleCloudSpeechToText.Core.Configuration;
using GoogleCloudSpeechToText.Core.Logging;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText;

/// <summary>
/// Generated from Google's published Discovery document for Cloud Speech-to-Text API (speech v1, revision 20261110). 2 operation(s)., Generated from Google's published Discovery document for Cloud Speech-to-Text API (speech v1, revision 20261110). 10 operation(s)., Generated from Google's published Discovery document for Cloud Speech-to-Text API (speech v1, revision 20261110). 2 operation(s).
/// </summary>
public sealed class GoogleCloudSpeechToTextClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudSpeechToTextClient(HttpClient httpClient, GoogleCloudSpeechToTextClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudSpeechToTextClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_SPEECH_TO_TEXT_LOG"),
            "GoogleCloudSpeechToTextClient",
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

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    public Speech Speech => field ??= new Speech(_rawClient, _server, _auth);
}
