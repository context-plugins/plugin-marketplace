using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.DataSources;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Datasource Endpoints
/// </summary>
public sealed class DataSources
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataSources(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a datasource role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteDatasourceRoleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1DatasourcesRolesRoleIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud account. Datasource roles define a named set of permissions that control what actions users can perform on individual datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.
    /// <para>
    /// Deletion is performed asynchronously and may take some time to complete.
    /// </para>
    /// <para>
    /// Deletion will fail if the role is still assigned to any datasource permissions or used in responsibility settings.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteDatasourceRoleResponse> DeleteApiV1DatasourcesRolesRoleId(DeleteApiV1DatasourcesRolesRoleIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/roles/{roleId}"),
            [new TemplateParam("roleId", request.RoleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteDatasourceRoleResponse>(),
            DeleteApiV1DatasourcesRolesRoleIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a datasource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteDatasourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1DatasourcesDatasourceIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an existing datasource and all its associated resources.
    /// <para>
    /// The deletion is performed asynchronously.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>Delete</b> permission on the datasource, or the organization-level <b>Manage datasources and runners</b> permission, can delete it.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteDatasourceResponse> DeleteApiV1DatasourcesDatasourceId(DeleteApiV1DatasourcesDatasourceIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteDatasourceResponse>(),
            DeleteApiV1DatasourcesDatasourceIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datasources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiListDatasourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to list datasources in your organization.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 10.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>search</c>: Supply a string value to filter datasources by name (case-insensitive partial match).</description></item>
    /// </list>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Soda only returns datasources for which the user has the <b>View</b> permission. Soda Cloud Admins have access to all datasources.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiListDatasourcesResponse> GetApiV1Datasources(GetApiV1DatasourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources"),
            [],
            [new Param("page", request.Page), new Param("search", request.Search), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiListDatasourcesResponse>(),
            GetApiV1DatasourcesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get status for async connection test
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiTestConnectionStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesActionsTestConnectionOperationIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to check the status of an asynchronous connection test operation.
    /// <para>
    /// Use the operation ID returned by the test connection endpoint to poll for its current state.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any authenticated Soda Cloud user in your organization may poll the status of a connection test operation.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiTestConnectionStatusResponse> GetApiV1DatasourcesActionsTestConnectionOperationId(GetApiV1DatasourcesActionsTestConnectionOperationIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/actions/testConnection/{operationId}"),
            [new TemplateParam("operationId", request.OperationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiTestConnectionStatusResponse>(),
            GetApiV1DatasourcesActionsTestConnectionOperationIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datasource roles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasourceRolesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the datasource roles available in your organization's Soda Cloud account. Use the datasource roles to manage access to individual datasources.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 100, inclusive. The default value is 100.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasourceRolesResponse> GetApiV1DatasourcesRoles(GetApiV1DatasourcesRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/roles"),
            [],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasourceRolesResponse>(),
            GetApiV1DatasourcesRolesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a datasource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiGetDatasourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesDatasourceIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to retrieve a specific datasource by its ID.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>View</b> permission on the datasource can retrieve its details.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiGetDatasourceResponse> GetApiV1DatasourcesDatasourceId(GetApiV1DatasourcesDatasourceIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiGetDatasourceResponse>(),
            GetApiV1DatasourcesDatasourceIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get datasource diagnostics warehouse configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasourceDiagnosticsWarehouseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific datasource in your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely forwards it to the customer's warehouse for storage and analysis.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>View</b> permission on the datasource can retrieve its diagnostics warehouse configuration.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasourceDiagnosticsWarehouseResponse> GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasourceDiagnosticsWarehouseResponse>(),
            GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get status for async dataset onboarding process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiOnboardDatasetsStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to check the status of an asynchronous dataset onboarding operation.
    /// <para>
    /// Use the operation ID returned by the onboard datasets endpoint to poll for its current state.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiOnboardDatasetsStatusResponse> GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/onboardDatasets/{operationId}"),
            [
                new TemplateParam("datasourceId", request.DatasourceId),
                new TemplateParam("operationId", request.OperationId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiOnboardDatasetsStatusResponse>(),
            GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datasource responsibilities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasourceResponsibilitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasourcesDatasourceIdResponsibilitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the user and user groups permissions assigned to a datasource, and their associated roles in your organization's Soda Cloud account.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 1 and 100, inclusive. The default value is 100.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Soda only returns the datasource responsibilities to which the user has <b>View datasource</b> permissions. Soda Cloud Admins have access to all datasource responsibilities.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasourceResponsibilitiesResponse> GetApiV1DatasourcesDatasourceIdResponsibilities(GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/responsibilities"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasourceResponsibilitiesResponse>(),
            GetApiV1DatasourcesDatasourceIdResponsibilitiesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a datasource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiCreateDatasourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new V4 datasource with the provided configuration.
    /// <para>
    /// The datasource type is extracted from the YAML configuration file contents.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiCreateDatasourceResponse> PostApiV1Datasources(PostApiV1DatasourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiCreateDatasourceResponse>(),
            PostApiV1DatasourcesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test datasource connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesActionsTestConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint triggers an asynchronous connection test for a datasource configuration.
    /// <para>
    /// The response includes an operation ID that you can use to poll the status of the connection test.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any authenticated Soda Cloud user in your organization may test a datasource connection. The test runs against a configuration provided in the request, not against an existing datasource.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasourcesActionsTestConnection(PostApiV1DatasourcesActionsTestConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/actions/testConnection"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1DatasourcesActionsTestConnectionError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a datasource role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiCreateDatasourceRoleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a new custom datasource role in your organization's Soda Cloud account. Datasource roles define a named set of permissions that control what actions users can perform on individual datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.
    /// <para>
    /// Once created, the role can be assigned to users or user groups via the datasource responsibilities endpoints.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiCreateDatasourceRoleResponse> PostApiV1DatasourcesRoles(PostApiV1DatasourcesRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/roles"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiCreateDatasourceRoleResponse>(),
            PostApiV1DatasourcesRolesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a datasource role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateDatasourceRoleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesRolesRoleIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to update the name or permissions of an existing custom datasource role. Datasource roles define a named set of permissions that control what actions users can perform on individual datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.
    /// <para>
    /// Changes apply immediately to all users and user groups assigned this role.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateDatasourceRoleResponse> PostApiV1DatasourcesRolesRoleId(PostApiV1DatasourcesRolesRoleIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/roles/{roleId}"),
            [new TemplateParam("roleId", request.RoleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateDatasourceRoleResponse>(),
            PostApiV1DatasourcesRolesRoleIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a datasource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateDatasourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesDatasourceIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing contract (V4) datasource.
    /// <para>
    /// Only the fields provided in the request body will be updated.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>Manage datasource settings</b> permission on the datasource, or the organization-level <b>Manage datasources and runners</b> permission, can update its configuration.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateDatasourceResponse> PostApiV1DatasourcesDatasourceId(PostApiV1DatasourcesDatasourceIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateDatasourceResponse>(),
            PostApiV1DatasourcesDatasourceIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update datasource diagnostics warehouse configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasourceDiagnosticsWarehouseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to update the diagnostics warehouse configuration for a specific datasource in your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely stores it in your warehouse for storage and analysis.
    /// <para>
    /// ## Table name template
    /// </para>
    /// <para>
    /// The <c>tableNameTemplate</c> field controls how diagnostic tables are named in the warehouse. Use the <c>{dataset_name}</c> placeholder to include the source dataset name. For example, <c>dwh_{dataset_name}_failed</c> produces table names like <c>dwh_orders_failed</c>.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>Manage datasource settings</b> permission on the datasource, or the organization-level <b>Manage datasources and runners</b> permission, can update its diagnostics warehouse configuration.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasourceDiagnosticsWarehouseResponse> PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiDatasourceDiagnosticsWarehouseResponse>(),
            PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger datasource discovery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesDatasourceIdDiscoverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint triggers a discovery scan on the specified datasource.
    /// <para>
    /// Discovery scans detect new tables and schemas in the datasource. Use this to run discovery on-demand instead of waiting for the scheduled cron.
    /// </para>
    /// <para>
    /// The response includes a <c>Location</c> header and <c>X-Soda-Scan-Id</c> header identifying the triggered scan. Use the scan ID with the <b>Get scan status</b> endpoint to poll for completion.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>Manage datasource settings</b> permission on the datasource, or the organization-level <b>Manage datasources and runners</b> permission, can trigger discovery on the datasource.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasourcesDatasourceIdDiscover(PostApiV1DatasourcesDatasourceIdDiscoverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/discover"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostApiV1DatasourcesDatasourceIdDiscoverError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Onboard discovered datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesDatasourceIdOnboardDatasetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.
    /// <para>
    /// Supply a list of discovered dataset IDs in the request body to onboard them as datasets.
    /// </para>
    /// <para>
    /// The response includes an onboarding ID that you can use to poll the status of the onboarding process.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users with the <b>Create datasets</b> permission on the datasource, or the organization-level <b>Create new datasources and datasets</b> permission, can onboard discovered datasets.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasourcesDatasourceIdOnboardDatasets(PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/onboardDatasets"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1DatasourcesDatasourceIdOnboardDatasetsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update datasource responsibilities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasourcesDatasourceIdResponsibilitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to update the user and user groups permissions and their associated roles for a datasource in your organization's Soda Cloud account.
    /// <para>
    /// <b>Note</b>: This API fully replaces the existing responsibilities. The entire list of responsibilities must be provided in the request, including both new and existing entries, as any omissions will result in their removal.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage datasource responsibilities</b> permission can update datasource responsibilities. Soda Cloud Admins have permission to update all datasources responsibilities.The Response of this call, when successful, is <c>201</c> and contains header <c>Location</c> which identify the URL where the responsibilities will eventually become available.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasources</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasourcesDatasourceIdResponsibilities(PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasources/{datasourceId}/responsibilities"),
            [new TemplateParam("datasourceId", request.DatasourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1DatasourcesDatasourceIdResponsibilitiesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
