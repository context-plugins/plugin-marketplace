using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Extensions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Datasets;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Dataset Endpoints
/// </summary>
public sealed class Datasets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Datasets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a dataset role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteDatasetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1DatasetsRolesRoleIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud account. Dataset roles define a named set of permissions that control what actions users can perform on individual datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.
    /// <para>
    /// Deletion is performed asynchronously and may take some time to complete.
    /// </para>
    /// <para>
    /// Deletion will fail if the role is still assigned to any dataset permissions or used in responsibility settings.
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteDatasetResponse> DeleteApiV1DatasetsRolesRoleId(DeleteApiV1DatasetsRolesRoleIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/roles/{roleId}"),
            [new TemplateParam("roleId", request.RoleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteDatasetResponse>(),
            DeleteApiV1DatasetsRolesRoleIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteDatasetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1DatasetsDatasetIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to delete an existing dataset in your organization's Soda Cloud account.
    /// <para>
    /// Deletion is not immediate and can take some time to complete, depending on the size of your dataset. You can check the status of the deletion by calling the <b>Get dataset</b> endpoint.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Delete dataset</b> permission can delete a dataset. Soda Cloud Admins have permission to delete any dataset.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteDatasetResponse> DeleteApiV1DatasetsDatasetId(DeleteApiV1DatasetsDatasetIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteDatasetResponse>(),
            DeleteApiV1DatasetsDatasetIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a column metric monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteDatasetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to delete a column metric monitor for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage checks</b> permission (V3 datasets) or <b>Manage contracts</b> permission (V4 datasets) can delete column metric monitors. Soda Cloud Admins can delete column metric monitors for all datasets. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteDatasetResponse> DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
            [new TemplateParam("datasetId", request.DatasetId), new TemplateParam("monitorId", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteDatasetResponse>(),
            DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom SQL monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteDatasetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to delete a custom SQL monitor for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can delete custom SQL monitors. Soda Cloud Admins can delete custom SQL monitors for all datasets. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteDatasetResponse> DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
            [new TemplateParam("datasetId", request.DatasetId), new TemplateParam("monitorId", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteDatasetResponse>(),
            DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dataset information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the datasets that in exist in your organization's Soda Cloud account, including information about the Soda Cloud resources with which it is associated, such as data source, incidents, attributes and health status.
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
    ///   <item><description><c>from</c>: Optionally, use this parameter to collect only the information for datasets that have been updated after a particular point in time. Supply an ISO8601 timestamp value. Example: <c>2023-12-31T10:15:30+01:00</c></description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>datasourceName</c>: Optionally, use this parameter to collect only the information for datasets associated with a specific datasource.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>search</c>: Optionally, use this parameter to perform a fuzzy search on the dataset name.</description></item>
    /// </list>
    /// <para>
    /// If not specified, the query gathers information for all datasets in the account and sorts the results first by dataset name and then by datasource name in ascending order.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Soda only returns the datasets to which the user has <b>View dataset</b> permissions. Soda Cloud Admins have access to all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 30 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasetsResponse> GetApiV1Datasets(GetApiV1DatasetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets"),
            [],
            [
                new Param("datasourceName", request.DatasourceName),
                new Param("from", request.From?.ToIso8601()),
                new Param("page", request.Page),
                new Param("search", request.Search),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasetsResponse>(),
            GetApiV1DatasetsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataset by qualified name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatasetsContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to retrieve a single dataset by its qualified name (contractIdentifier) from your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>View dataset</b> permission can view a dataset. Soda Cloud Admins have permission to view any dataset. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<DatasetsContentDto> GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/byDatasetQualifiedName/{datasetQualifiedName}"),
            [new TemplateParam("datasetQualifiedName", request.DatasetQualifiedName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatasetsContentDto>(),
            GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List dataset roles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasetRolesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the dataset roles available in your organization's Soda Cloud account. Use the dataset roles to manage access to individual datasets.
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasetRolesResponse> GetApiV1DatasetsRoles(GetApiV1DatasetsRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/roles"),
            [],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasetRolesResponse>(),
            GetApiV1DatasetsRolesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatasetsContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>View dataset</b> permission can view a dataset. Soda Cloud Admins have permission to view any dataset. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<DatasetsContentDto> GetApiV1DatasetsDatasetId(GetApiV1DatasetsDatasetIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatasetsContentDto>(),
            GetApiV1DatasetsDatasetIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the active columns of a dataset with their attribute values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiListDatasetColumnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdColumnsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the active columns of a dataset, each with the attribute values currently assigned to it.
    /// <para>
    /// Columns are ordered by name ascending. Columns with no assigned attribute values are returned with an empty <c>attributes</c> map.
    /// </para>
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply a non-negative integer. The default value is 0.</description></item>
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
    /// Users must have dataset role permission VIEW to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiListDatasetColumnsResponse> GetApiV1DatasetsDatasetIdColumns(GetApiV1DatasetsDatasetIdColumnsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/columns"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiListDatasetColumnsResponse>(),
            GetApiV1DatasetsDatasetIdColumnsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataset compute warehouse configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatasetComputeWarehouseConfigurationDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdComputeWarehouseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint retrieves the compute warehouse configuration for a specific dataset in your organization's Soda Cloud account. When the compute warehouse configuration is enabled, the warehouse in the configuration will be used for compute-heavy tasks like data contract execution, metric monitoring, and profiling.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>View dataset</b> permission can retrieve dataset compute warehouse configuration. Soda Cloud Admins have permission to view all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<DatasetComputeWarehouseConfigurationDto> GetApiV1DatasetsDatasetIdComputeWarehouse(GetApiV1DatasetsDatasetIdComputeWarehouseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/computeWarehouse"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatasetComputeWarehouseConfigurationDto>(),
            GetApiV1DatasetsDatasetIdComputeWarehouseError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataset diagnostics warehouse information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasetDiagnosticsWarehouseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific dataset in your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely forwards it to the customer's warehouse for storage and analysis.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>View dataset</b> permission can view dataset diagnostics warehouse. Soda Cloud Admins have access to diagnostics warehouse information for all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasetDiagnosticsWarehouseResponse> GetApiV1DatasetsDatasetIdDiagnosticsWarehouse(GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/diagnosticsWarehouse"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasetDiagnosticsWarehouseResponse>(),
            GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataset metric monitoring configuration information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasetMetricMonitoringResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdMetricMonitoringError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to retrieve detailed metric monitoring configuration information for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>View dataset</b> permission can view dataset metric monitoring configuration. Soda Cloud Admins have access to metric monitoring configuration information for all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasetMetricMonitoringResponse> GetApiV1DatasetsDatasetIdMetricMonitoring(GetApiV1DatasetsDatasetIdMetricMonitoringRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/metricMonitoring"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasetMetricMonitoringResponse>(),
            GetApiV1DatasetsDatasetIdMetricMonitoringError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataset profiling information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasetProfilingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdProfilingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to retrieve detailed profiling information for a specific dataset in your organization's Soda Cloud account. Profiling information provides insights into the dataset's structure, statistical summaries, and data characteristics.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Access dataset profiling and sampling</b> permission can view dataset profiling. Soda Cloud Admins have access to profiling information for all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasetProfilingResponse> GetApiV1DatasetsDatasetIdProfiling(GetApiV1DatasetsDatasetIdProfilingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/profiling"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasetProfilingResponse>(),
            GetApiV1DatasetsDatasetIdProfilingError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List dataset responsibilities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDatasetResponsibilitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DatasetsDatasetIdResponsibilitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the user and user groups permissions assigned to a dataset, and their associated roles in your organization's Soda Cloud account.
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
    /// Soda only returns the dataset responsibilities to which the user has <b>View dataset</b> permissions. Soda Cloud Admins have access to all dataset responsibilities.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDatasetResponsibilitiesResponse> GetApiV1DatasetsDatasetIdResponsibilities(GetApiV1DatasetsDatasetIdResponsibilitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/responsibilities"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDatasetResponsibilitiesResponse>(),
            GetApiV1DatasetsDatasetIdResponsibilitiesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a dataset role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateDatasetRoleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud account. Dataset roles define a named set of permissions that control what actions users can perform on individual datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.
    /// <para>
    /// Once created, the role can be assigned to users or user groups via the dataset responsibilities endpoints.
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateDatasetRoleResponse> PostApiV1DatasetsRoles(PostApiV1DatasetsRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/roles"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateDatasetRoleResponse>(),
            PostApiV1DatasetsRolesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a dataset role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateDatasetRoleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsRolesRoleIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to update the name or permissions of an existing custom dataset role. Dataset roles define a named set of permissions that control what actions users can perform on individual datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateDatasetRoleResponse> PostApiV1DatasetsRolesRoleId(PostApiV1DatasetsRolesRoleIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/roles/{roleId}"),
            [new TemplateParam("roleId", request.RoleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateDatasetRoleResponse>(),
            PostApiV1DatasetsRolesRoleIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatasetsContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to update an existing dataset properties in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Configure dataset</b> permission can update dataset properties. Soda Cloud Admins have permission to update all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<DatasetsContentDto> PostApiV1DatasetsDatasetId(PostApiV1DatasetsDatasetIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatasetsContentDto>(),
            PostApiV1DatasetsDatasetIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set column attribute values in bulk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdColumnAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upsert attribute values on the columns of a dataset.
    /// <para>
    /// The request body maps a column name to a map of attribute-name to value. Setting one attribute on a column does not affect other attribute values on the same column. If any column or attribute name is unknown, or any value has the wrong type, the entire request is rejected and no changes are persisted.
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
    /// Users must have dataset role permission CONFIGURE_DATASET to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasetsDatasetIdColumnAttributes(PostApiV1DatasetsDatasetIdColumnAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/columnAttributes"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1DatasetsDatasetIdColumnAttributesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a column metric monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateColumnMetricMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdColumnMetricMonitorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a new column metric monitor for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage checks</b> permission (V3 datasets) or <b>Manage contracts</b> permission (V4 datasets) can create column metric monitors. Soda Cloud Admins can create column metric monitors for all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateColumnMetricMonitorResponse> PostApiV1DatasetsDatasetIdColumnMetricMonitors(PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/columnMetricMonitors"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateColumnMetricMonitorResponse>(),
            PostApiV1DatasetsDatasetIdColumnMetricMonitorsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a column metric monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateColumnMetricMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to update an existing column metric monitor for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage checks</b> permission (V3 datasets) or <b>Manage contracts</b> permission (V4 datasets) can update column metric monitors. Soda Cloud Admins can update column metric monitors for all datasets. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateColumnMetricMonitorResponse> PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
            [new TemplateParam("datasetId", request.DatasetId), new TemplateParam("monitorId", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateColumnMetricMonitorResponse>(),
            PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a custom SQL monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiCreateCustomSqlMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdCustomSqlMonitorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a new custom SQL monitor for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can create custom SQL monitors. Soda Cloud Admins can create custom SQL monitors for all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiCreateCustomSqlMonitorResponse> PostApiV1DatasetsDatasetIdCustomSqlMonitors(PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/customSqlMonitors"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiCreateCustomSqlMonitorResponse>(),
            PostApiV1DatasetsDatasetIdCustomSqlMonitorsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a custom SQL monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateCustomSqlMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to update an existing custom SQL monitor for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can update custom SQL monitors. Soda Cloud Admins can update custom SQL monitors for all datasets. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateCustomSqlMonitorResponse> PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
            [new TemplateParam("datasetId", request.DatasetId), new TemplateParam("monitorId", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateCustomSqlMonitorResponse>(),
            PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run historical metric collection for a dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint triggers a historical metric collection scan for a specific dataset in your organization's Soda Cloud account.
    /// <para>
    /// The dataset must have metric monitoring enabled and a historical collection scan definition configured.
    /// </para>
    /// <para>
    /// The response includes the scan ID and a Location header pointing to the scan status endpoint.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can run historical metric collection. Soda Cloud Admins have access to run historical metric collection for all datasets. <b>See Manage dataset roles for more information.</b>
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/metricMonitoring/historicalMetricCollection"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update dataset responsibilities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DatasetsDatasetIdResponsibilitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to update the user and user groups permissions and their associated roles for a dataset in your organization's Soda Cloud account.
    /// <para>
    /// <b>Note</b>: This API fully replaces the existing responsibilities. The entire list of responsibilities must be provided in the request, including both new and existing entries, as any omissions will result in their removal.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage dataset responsibilities</b> permission can update dataset responsibilities. Soda Cloud Admins have permission to update all datasets responsibilities.<b>See Manage dataset roles for more information.</b>The Response of this call, when successful, is <c>201</c> and contains header <c>Location</c> which identify the URL where the responsibilities will eventually become available.
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
    /// <c>Datasets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1DatasetsDatasetIdResponsibilities(PostApiV1DatasetsDatasetIdResponsibilitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets/{datasetId}/responsibilities"),
            [new TemplateParam("datasetId", request.DatasetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1DatasetsDatasetIdResponsibilitiesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
