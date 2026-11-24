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
using UiPath.Requests.Entities;

namespace UiPath.Api;

/// <summary>
/// Perform CRUD operations on custom data entity records
/// </summary>
public sealed class Entities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Entities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create an Entity Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityRecord"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEntityRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new record for the specified custom entity type. The request body must conform to the entity's schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and should not be included in the request body. Requires the DataService.Data scope.
    /// </remarks>
    public Task<EntityRecord> CreateEntityRecord(CreateEntityRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDataServiceEntitiesApi("/{entityName}"),
            [new TemplateParam("entityName", request.EntityName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntityRecord>(),
            CreateEntityRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Delete an Entity Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEntityRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the DataService.Data scope.
    /// </remarks>
    public Task DeleteEntityRecord(DeleteEntityRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDataServiceEntitiesApi("/{entityName}/{recordId}"),
            [new TemplateParam("entityName", request.EntityName), new TemplateParam("recordId", request.RecordId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEntityRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get an Entity Record by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityRecord"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEntityRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single entity record by its unique identifier. Returns all fields of the record including system fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or DataService.Data scope.
    /// </remarks>
    public Task<EntityRecord> GetEntityRecord(GetEntityRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDataServiceEntitiesApi("/{entityName}/{recordId}"),
            [new TemplateParam("entityName", request.EntityName), new TemplateParam("recordId", request.RecordId)],
            [new Param("$select", request.Select), new Param("$expand", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntityRecord>(),
            GetEntityRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Records for an Entity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityRecordCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEntityRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions, ordering, pagination via skip and top, and field selection. The available entity names and their fields depend on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or DataService.Data scope.
    /// </remarks>
    public Task<EntityRecordCollection> ListEntityRecords(ListEntityRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDataServiceEntitiesApi("/{entityName}"),
            [new TemplateParam("entityName", request.EntityName)],
            [
                new Param("$filter", request.Filter),
                new Param("$orderby", request.Orderby),
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
                new Param("$select", request.Select),
                new Param("$expand", request.Expand),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntityRecordCollection>(),
            ListEntityRecordsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Query Entity Records with Advanced Filtering
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityRecordCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryEntityRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Performs an advanced query against the entity using a structured filter expression in the request body. Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.
    /// </remarks>
    public Task<EntityRecordCollection> QueryEntityRecords(QueryEntityRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDataServiceEntitiesApi("/{entityName}/query"),
            [new TemplateParam("entityName", request.EntityName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntityRecordCollection>(),
            QueryEntityRecordsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Update an Entity Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityRecord"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEntityRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing entity record by its unique identifier. The request body should include only the fields to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and ModifiedBy are updated automatically. Requires the DataService.Data scope.
    /// </remarks>
    public Task<EntityRecord> UpdateEntityRecord(UpdateEntityRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDataServiceEntitiesApi("/{entityName}/{recordId}"),
            [new TemplateParam("entityName", request.EntityName), new TemplateParam("recordId", request.RecordId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntityRecord>(),
            UpdateEntityRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
