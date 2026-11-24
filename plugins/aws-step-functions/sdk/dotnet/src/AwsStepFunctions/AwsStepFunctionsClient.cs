using System.Net.Http;
using AwsStepFunctions.Api;
using AwsStepFunctions.Core;
using AwsStepFunctions.Core.Configuration;
using AwsStepFunctions.Core.Logging;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions;

/// <summary>
/// Generated from AWS's published Smithy model for AWS Step Functions. 26 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 1 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 2 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 1 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 2 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 1 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 1 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 4 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 6 operation(s).
/// </summary>
public sealed class AwsStepFunctionsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AwsStepFunctionsClient(HttpClient httpClient, AwsStepFunctionsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AwsStepFunctionsClient/2016-11-23 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2016-11-23"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AWS_STEP_FUNCTIONS_LOG"),
            "AwsStepFunctionsClient",
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

    public AwsStepFunctionsApi AwsStepFunctionsApi => field ??= new AwsStepFunctionsApi(_rawClient, _server, _auth);

    public AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat =>
        field ??= new AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat(_rawClient, _server, _auth);

    public AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat =>
        field ??= new AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat(_rawClient, _server, _auth);

    public AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest =>
        field ??= new AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest(_rawClient, _server, _auth);

    public AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem =>
        field ??= new AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem(_rawClient, _server, _auth);

    public AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta =>
        field ??= new AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta(_rawClient, _server, _auth);

    public AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat =>
        field ??= new AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public StateMachines StateMachines => field ??= new StateMachines(_rawClient, _server, _auth);
}
