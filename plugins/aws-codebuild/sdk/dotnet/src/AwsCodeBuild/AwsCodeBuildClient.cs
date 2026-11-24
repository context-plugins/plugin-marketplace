using System.Net.Http;
using AwsCodeBuild.Api;
using AwsCodeBuild.Core;
using AwsCodeBuild.Core.Configuration;
using AwsCodeBuild.Core.Logging;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild;

/// <summary>
/// Generated from AWS's published Smithy model for AWS CodeBuild. 3 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 38 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 6 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 3 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 5 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 5 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 3 operation(s).
/// </summary>
public sealed class AwsCodeBuildClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AwsCodeBuildClient(HttpClient httpClient, AwsCodeBuildClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AwsCodeBuildClient/2016-10-06 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2016-10-06"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AWS_CODE_BUILD_LOG"),
            "AwsCodeBuildClient",
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

    public AwsCodebuildApi AwsCodebuildApi => field ??= new AwsCodebuildApi(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild AwsCodebuildXAmzTargetCodebuild =>
        field ??= new AwsCodebuildXAmzTargetCodebuild(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006Deletereport AwsCodebuildXAmzTargetCodebuild20161006Deletereport =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006Deletereport(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006Listbuilds AwsCodebuildXAmzTargetCodebuild20161006Listbuilds =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006Listbuilds(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006Listprojects AwsCodebuildXAmzTargetCodebuild20161006Listprojects =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006Listprojects(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006Listreports AwsCodebuildXAmzTargetCodebuild20161006Listreports =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006Listreports(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006Retrybuild AwsCodebuildXAmzTargetCodebuild20161006Retrybuild =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006Retrybuild(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006Startbuild AwsCodebuildXAmzTargetCodebuild20161006Startbuild =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006Startbuild(_rawClient, _server, _auth);

    public AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi =>
        field ??= new AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi(_rawClient, _server, _auth);

    public Builds Builds => field ??= new Builds(_rawClient, _server, _auth);

    public CommandExecutionApi CommandExecutionApi => field ??= new CommandExecutionApi(_rawClient, _server, _auth);

    public FleetApi FleetApi => field ??= new FleetApi(_rawClient, _server, _auth);

    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    public Sandboxe Sandboxe => field ??= new Sandboxe(_rawClient, _server, _auth);
}
