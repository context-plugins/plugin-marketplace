using System.Net.Http;
using AmazonRekognition.Api;
using AmazonRekognition.Core;
using AmazonRekognition.Core.Configuration;
using AmazonRekognition.Core.Logging;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 1 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 6 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 1 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 26 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 7 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 5 operation(s).
/// </summary>
public sealed class AmazonRekognitionClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonRekognitionClient(HttpClient httpClient, AmazonRekognitionClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonRekognitionClient/2016-06-27 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2016-06-27"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_REKOGNITION_LOG"),
            "AmazonRekognitionClient",
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

    public CelebrityRecognitionApi CelebrityRecognitionApi =>
        field ??= new CelebrityRecognitionApi(_rawClient, _server, _auth);

    public ContentModeration ContentModeration => field ??= new ContentModeration(_rawClient, _server, _auth);

    public CustomLabels CustomLabels => field ??= new CustomLabels(_rawClient, _server, _auth);

    public Dataset Dataset => field ??= new Dataset(_rawClient, _server, _auth);

    public FaceApi FaceApi => field ??= new FaceApi(_rawClient, _server, _auth);

    public FaceCollections FaceCollections => field ??= new FaceCollections(_rawClient, _server, _auth);

    public FaceLiveness FaceLiveness => field ??= new FaceLiveness(_rawClient, _server, _auth);

    public FaceSearch FaceSearch => field ??= new FaceSearch(_rawClient, _server, _auth);

    public FacialAnalysis FacialAnalysis => field ??= new FacialAnalysis(_rawClient, _server, _auth);

    public ImageAnalysis ImageAnalysis => field ??= new ImageAnalysis(_rawClient, _server, _auth);

    public MediaAnalysisJob MediaAnalysisJob => field ??= new MediaAnalysisJob(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public Project Project => field ??= new Project(_rawClient, _server, _auth);

    public ProjectPolicyApi ProjectPolicyApi => field ??= new ProjectPolicyApi(_rawClient, _server, _auth);

    public ProjectVersion ProjectVersion => field ??= new ProjectVersion(_rawClient, _server, _auth);

    public StoredVideoAnalysis StoredVideoAnalysis => field ??= new StoredVideoAnalysis(_rawClient, _server, _auth);

    public StreamProcessorApi StreamProcessorApi => field ??= new StreamProcessorApi(_rawClient, _server, _auth);

    public TextDetectionApi TextDetectionApi => field ??= new TextDetectionApi(_rawClient, _server, _auth);

    public UserApi UserApi => field ??= new UserApi(_rawClient, _server, _auth);
}
