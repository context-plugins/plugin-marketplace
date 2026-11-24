using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.AppInventory;

namespace UiPath.Api;

/// <summary>
/// Manage the application inventory used in automation assessments
/// </summary>
public sealed class AppInventory
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AppInventory(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Bulk Add or Update Application Inventory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppInventoryListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpsertAppInventoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds or updates application entries in bulk. If an application with the same name already exists, it will be updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the application inventory from an external CMDB or asset register.
    /// </remarks>
    public Task<AppInventoryListResponse> BulkUpsertAppInventory(BulkUpsertAppInventoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/appinventory"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AppInventoryListResponse>(),
            BulkUpsertAppInventoryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Delete an Application from Inventory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApplicationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently removes an application entry from the application inventory by its unique identifier. Automations that reference this application will lose the association.
    /// </remarks>
    public Task DeleteApplication(DeleteApplicationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/appinventory/{applicationId}"),
            [new TemplateParam("applicationId", request.ApplicationId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteApplicationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Application Inventory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppInventoryListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAppInventoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the application inventory used for automation assessments. Each entry represents a business application that may be involved in automations. Inventory data is used in the assessment process to calculate automation complexity and effort.
    /// </remarks>
    public Task<AppInventoryListResponse> ListAppInventory(ListAppInventoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/appinventory"),
            [],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AppInventoryListResponse>(),
            ListAppInventoryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
