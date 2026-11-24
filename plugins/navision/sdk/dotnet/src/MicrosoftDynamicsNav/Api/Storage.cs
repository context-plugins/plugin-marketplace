using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.Storage;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// View storage usage and quotas
/// </summary>
public sealed class Storage
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Storage(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Storage Usage for All Environments
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentsUsedstorageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllEnvironmentsStorageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns storage usage information for all environments.
    /// </remarks>
    public Task<EnvironmentsUsedstorageResponse> GetAllEnvironmentsStorage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi("/environments/usedstorage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentsUsedstorageResponse>(),
            GetAllEnvironmentsStorageError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Environment Storage Usage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsedStorage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentStorageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns used storage information for the specified environment.
    /// </remarks>
    public Task<UsedStorage> GetEnvironmentStorage(GetEnvironmentStorageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/usedstorage"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsedStorage>(),
            GetEnvironmentStorageError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Allowed Quotas
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Quotas"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQuotasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the different types of quotas and their limits.
    /// </remarks>
    public Task<Quotas> GetQuotas(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi("/environments/quotas"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Quotas>(),
            GetQuotasError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
