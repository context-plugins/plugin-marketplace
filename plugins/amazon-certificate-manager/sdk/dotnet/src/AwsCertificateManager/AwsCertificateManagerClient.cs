using System.Net.Http;
using AwsCertificateManager.Api;
using AwsCertificateManager.Core;
using AwsCertificateManager.Core.Configuration;
using AwsCertificateManager.Core.Logging;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager;

/// <summary>
/// Generated from AWS's published Smithy model for AWS Certificate Manager. 3 operation(s)., Generated from AWS's published Smithy model for AWS Certificate Manager. 5 operation(s)., Generated from AWS's published Smithy model for AWS Certificate Manager. 5 operation(s)., Generated from AWS's published Smithy model for AWS Certificate Manager. 5 operation(s)., Generated from AWS's published Smithy model for AWS Certificate Manager. 9 operation(s)., Generated from AWS's published Smithy model for AWS Certificate Manager. 10 operation(s)., Generated from AWS's published Smithy model for AWS Certificate Manager. 4 operation(s).
/// </summary>
public sealed class AwsCertificateManagerClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AwsCertificateManagerClient(HttpClient httpClient, AwsCertificateManagerClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AwsCertificateManagerClient/2015-12-08 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2015-12-08"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AWS_CERTIFICATE_MANAGER_LOG"),
            "AwsCertificateManagerClient",
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

    public AcmeAccountApi AcmeAccountApi => field ??= new AcmeAccountApi(_rawClient, _server, _auth);

    public AcmeDomainValidationApi AcmeDomainValidationApi =>
        field ??= new AcmeDomainValidationApi(_rawClient, _server, _auth);

    public AcmeEndpointApi AcmeEndpointApi => field ??= new AcmeEndpointApi(_rawClient, _server, _auth);

    public AcmeExternalAccountBindingApi AcmeExternalAccountBindingApi =>
        field ??= new AcmeExternalAccountBindingApi(_rawClient, _server, _auth);

    public Certificates Certificates => field ??= new Certificates(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public TagApi TagApi => field ??= new TagApi(_rawClient, _server, _auth);
}
