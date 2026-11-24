using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudStorageTransferService.Core;
using GoogleCloudStorageTransferService.Core.Authentication;
using GoogleCloudStorageTransferService.Core.Exceptions;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Core.Request;
using GoogleCloudStorageTransferService.Core.Response;
using GoogleCloudStorageTransferService.Errors;
using GoogleCloudStorageTransferService.Models;
using GoogleCloudStorageTransferService.Requests.GoogleServiceAccounts;

namespace GoogleCloudStorageTransferService.Api;

public sealed class GoogleServiceAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GoogleServiceAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get googleServiceAccounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleServiceAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferGoogleServiceAccountsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
    /// </remarks>
    public Task<GoogleServiceAccount> StoragetransferGoogleServiceAccountsGet(StoragetransferGoogleServiceAccountsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/googleServiceAccounts/{projectId}"),
            [new TemplateParam("projectId", request.ProjectId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleServiceAccount>(),
            StoragetransferGoogleServiceAccountsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
