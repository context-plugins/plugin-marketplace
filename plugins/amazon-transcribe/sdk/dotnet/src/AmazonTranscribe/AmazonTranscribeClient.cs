using System.Net.Http;
using AmazonTranscribe.Api;
using AmazonTranscribe.Core;
using AmazonTranscribe.Core.Configuration;
using AmazonTranscribe.Core.Logging;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 8 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s).
/// </summary>
public sealed class AmazonTranscribeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonTranscribeClient(HttpClient httpClient, AmazonTranscribeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonTranscribeClient/2017-10-26 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2017-10-26"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_TRANSCRIBE_LOG"),
            "AmazonTranscribeClient",
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

    public CallAnalyticsCategory CallAnalyticsCategory =>
        field ??= new CallAnalyticsCategory(_rawClient, _server, _auth);

    public CallAnalyticsJobApi CallAnalyticsJobApi => field ??= new CallAnalyticsJobApi(_rawClient, _server, _auth);

    public LanguageModelApi LanguageModelApi => field ??= new LanguageModelApi(_rawClient, _server, _auth);

    public MedicalScribeJobApi MedicalScribeJobApi => field ??= new MedicalScribeJobApi(_rawClient, _server, _auth);

    public MedicalTranscriptionJobApi MedicalTranscriptionJobApi =>
        field ??= new MedicalTranscriptionJobApi(_rawClient, _server, _auth);

    public MedicalVocabulary MedicalVocabulary => field ??= new MedicalVocabulary(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public TranscriptionJobs TranscriptionJobs => field ??= new TranscriptionJobs(_rawClient, _server, _auth);

    public Vocabularies Vocabularies => field ??= new Vocabularies(_rawClient, _server, _auth);

    public VocabularyFilter VocabularyFilter => field ??= new VocabularyFilter(_rawClient, _server, _auth);
}
