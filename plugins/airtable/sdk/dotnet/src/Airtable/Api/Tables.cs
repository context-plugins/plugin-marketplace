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
using Airtable.Requests.Tables;

namespace Airtable.Api;

/// <summary>
/// Create and update table definitions within a base
/// </summary>
public sealed class Tables
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tables(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Airtable Create a Table in a Base
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new table within the specified base. The table must include a name and at least one field definition. Optionally include a description for the table.
    /// </remarks>
    public Task<TableSchema> CreateTable(CreateTableOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases/{baseId}/tables"),
            [new TemplateParam("baseId", request.BaseId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableSchema>(),
            CreateTableError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Update a Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name and/or description of an existing table. Only the provided fields will be modified.
    /// </remarks>
    public Task<TableSchema> UpdateTable(UpdateTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases/{baseId}/tables/{tableId}"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("tableId", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableSchema>(),
            UpdateTableError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
