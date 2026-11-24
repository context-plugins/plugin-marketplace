using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airtable.Core;
using Airtable.Core.Exceptions;
using Airtable.Core.Models;
using Airtable.Core.Request;
using Airtable.Core.Response;
using Airtable.Errors;
using Airtable.Models;
using Airtable.Requests.Records;

namespace Airtable.Api;

/// <summary>
/// Create, read, update, and delete records in a table
/// </summary>
public sealed class Records
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Records(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Airtable Create Records in a Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates up to 10 records in the specified table. Each record must include a fields object mapping field names (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate cell value.
    /// </remarks>
    public Task<ResponseModel> CreateRecords(CreateRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("tableIdOrName", request.TableIdOrName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResponseModel>(),
            CreateRecordsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Delete a Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordDeleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single record from the specified table. The record is permanently removed and cannot be recovered through the API.
    /// </remarks>
    public Task<RecordDeleted> DeleteRecord(DeleteRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<RecordDeleted>(),
            DeleteRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Retrieve a Single Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Record"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and ID.
    /// </remarks>
    public Task<Record> GetRecord(GetRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
            ],
            [new Param("returnFieldsByFieldId", request.ReturnFieldsByFieldId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Record>(),
            GetRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable List Records in a Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of records in the specified table. Records can be filtered using an Airtable formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use the offset parameter from the response to fetch the next page.
    /// </remarks>
    public Task<RecordList> ListRecords(ListRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("tableIdOrName", request.TableIdOrName)],
            [
                new Param("fields[]", request.Fields),
                new Param("filterByFormula", request.FilterByFormula),
                new Param("maxRecords", request.MaxRecords),
                new Param("pageSize", request.PageSize),
                new Param("sort", request.Sort),
                new Param("view", request.View),
                new Param("cellFormat", request.CellFormat),
                new Param("timeZone", request.TimeZone),
                new Param("userLocale", request.UserLocale),
                new Param("returnFieldsByFieldId", request.ReturnFieldsByFieldId),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecordList>(),
            ListRecordsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Update a Record (full Replacement)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Record"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces all fields of an existing record. Fields that are not included in the request body will be cleared. This is a destructive update that overwrites the entire record.
    /// </remarks>
    public Task<Record> ReplaceRecord(ReplaceRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Record>(),
            ReplaceRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Update a Record (partial)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Record"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates specific fields of an existing record. Only the fields included in the request body will be updated; all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch endpoint.
    /// </remarks>
    public Task<Record> UpdateRecord(UpdateRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Record>(),
            UpdateRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
