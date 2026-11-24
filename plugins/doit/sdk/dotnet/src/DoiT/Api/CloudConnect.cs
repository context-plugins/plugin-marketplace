using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.CloudConnect;

namespace DoiT.Api;

/// <summary>
/// Manage cloud provider connections and check feature availability for connected accounts.
/// </summary>
public sealed class CloudConnect
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CloudConnect(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create or update an AWS account role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsAccountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAccountRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates a CloudConnect document for an AWS account.
    /// Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents
    /// or require a CloudFormation stack ID.
    /// </remarks>
    public Task<AwsAccountResponse> CreateAccountRole(CreateAccountRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudconnect/aws/accounts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AwsAccountResponse>(),
            CreateAccountRoleError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an AWS account role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAccountRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a CloudConnect document for an AWS account.
    /// </remarks>
    public Task DeleteAccountRole(DeleteAccountRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            [new TemplateParam("accountID", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAccountRoleError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an AWS account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsAccountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAwsAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current state of an AWS account including role, supported features, and optional S3 bucket configuration.
    /// </remarks>
    public Task<AwsAccountResponse> GetAwsAccount(GetAwsAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            [new TemplateParam("accountID", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AwsAccountResponse>(),
            GetAwsAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get supported features for a connected account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportedFeaturesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudConnectSupportedFeaturesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of supported features and their permission status for a cloud account connected via CloudConnect.
    /// The account must belong to the authenticated customer. Supports AWS and Azure accounts.
    /// </remarks>
    public Task<SupportedFeaturesResponse> GetCloudConnectSupportedFeatures(GetCloudConnectSupportedFeaturesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudconnect/supportedFeatures/{accountID}"),
            [new TemplateParam("accountID", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SupportedFeaturesResponse>(),
            GetCloudConnectSupportedFeaturesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an AWS feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsAccountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAwsFeatureError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an AWS feature for an existing CloudConnect account.
    /// Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents,
    /// require a CloudFormation stack ID, or handle StackSet member role ARNs.
    /// </remarks>
    public Task<AwsAccountResponse> UpdateAwsFeature(UpdateAwsFeatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            [new TemplateParam("accountID", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AwsAccountResponse>(),
            UpdateAwsFeatureError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
