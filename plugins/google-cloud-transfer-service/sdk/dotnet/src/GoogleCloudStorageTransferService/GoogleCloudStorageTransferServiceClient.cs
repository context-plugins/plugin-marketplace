using System.Net.Http;
using GoogleCloudStorageTransferService.Api;
using GoogleCloudStorageTransferService.Core;
using GoogleCloudStorageTransferService.Core.Configuration;
using GoogleCloudStorageTransferService.Core.Logging;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService;

/// <summary>
/// Generated from Google's published Discovery document for Storage Transfer API (storagetransfer v1, revision 20261106). 1 operation(s)., Generated from Google's published Discovery document for Storage Transfer API (storagetransfer v1, revision 20261106). 5 operation(s)., Generated from Google's published Discovery document for Storage Transfer API (storagetransfer v1, revision 20261106). 6 operation(s)., Generated from Google's published Discovery document for Storage Transfer API (storagetransfer v1, revision 20261106). 5 operation(s).
/// </summary>
public sealed class GoogleCloudStorageTransferServiceClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudStorageTransferServiceClient(HttpClient httpClient,
        GoogleCloudStorageTransferServiceClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudStorageTransferServiceClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_STORAGE_TRANSFER_SERVICE_LOG"),
            "GoogleCloudStorageTransferServiceClient",
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

    public GoogleServiceAccounts GoogleServiceAccounts =>
        field ??= new GoogleServiceAccounts(_rawClient, _server, _auth);

    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    public TransferJobs TransferJobs => field ??= new TransferJobs(_rawClient, _server, _auth);

    public TransferOperations TransferOperations => field ??= new TransferOperations(_rawClient, _server, _auth);
}
