using System;
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
using MicrosoftDynamicsNav.Requests.Environments;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage Business Central environments
/// </summary>
public sealed class Environments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Environments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Copy an Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CopyEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new environment as a copy of an existing environment's data.
    /// </remarks>
    public Task<EnvironmentModel> CopyEnvironment(CopyEnvironmentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/copy"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentModel>(),
            CopyEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a New Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new environment with sample data. The operation is asynchronous; poll the environment operations endpoint to track status.
    /// </remarks>
    public Task<EnvironmentModel> CreateEnvironment(CreateEnvironmentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentModel>(),
            CreateEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Soft deletes the specified environment. The environment is retained for 14 days during which it can be recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.
    /// </remarks>
    public Task<EnvironmentOperation> DeleteEnvironment(DeleteEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentOperation>(),
            DeleteEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Available Restore Periods
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsEnvironmentsAvailableRestorePeriodsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAvailableRestorePeriodsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an ordered list of available restore periods for the environment.
    /// </remarks>
    public Task<ApplicationsEnvironmentsAvailableRestorePeriodsResponse> GetAvailableRestorePeriods(GetAvailableRestorePeriodsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/availableRestorePeriods"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsEnvironmentsAvailableRestorePeriodsResponse>(),
            GetAvailableRestorePeriodsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the properties for the specified environment.
    /// </remarks>
    public Task<EnvironmentModel> GetEnvironment(GetEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentModel>(),
            GetEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List All Environments
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsEnvironmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAllEnvironmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all environments across all application families for the tenant.
    /// </remarks>
    public Task<ApplicationsEnvironmentsResponse> ListAllEnvironments(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi("/applications/environments"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsEnvironmentsResponse>(),
            ListAllEnvironmentsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Environments by Application Family
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsEnvironmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEnvironmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of environments for the specified application family.
    /// </remarks>
    public Task<ApplicationsEnvironmentsResponse> ListEnvironments(ListEnvironmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments"),
            [new TemplateParam("applicationFamily", request.ApplicationFamily)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsEnvironmentsResponse>(),
            ListEnvironmentsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recover a Deleted Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecoverEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recovers a soft-deleted environment.
    /// </remarks>
    public Task<EnvironmentOperation> RecoverEnvironment(RecoverEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/recover"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentOperation>(),
            RecoverEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename an Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenameEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Schedules a rename operation on an environment.
    /// </remarks>
    public Task<EnvironmentOperation> RenameEnvironment(RenameEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/rename"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentOperation>(),
            RenameEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restores an existing environment from a point in time in the past.
    /// </remarks>
    public Task<EnvironmentOperation> RestoreEnvironment(RestoreEnvironmentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/restore"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentOperation>(),
            RestoreEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
