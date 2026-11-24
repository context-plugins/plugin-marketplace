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
using Airtable.Requests.Fields;

namespace Airtable.Api;

/// <summary>
/// Create and update field definitions within a table
/// </summary>
public sealed class Fields
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Fields(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Airtable Create a Field in a Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FieldSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new field in the specified table. The field must include a name and type. Some field types (like singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed field types cannot be created via the API.
    /// </remarks>
    public Task<FieldSchema> CreateField(CreateFieldOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases/{baseId}/tables/{tableId}/fields"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("tableId", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FieldSchema>(),
            CreateFieldError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Update a Field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FieldSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name, description, or configuration options of an existing field. Only the provided properties will be modified. Not all field properties can be updated after creation.
    /// </remarks>
    public Task<FieldSchema> UpdateField(UpdateFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableId", request.TableId),
                new TemplateParam("fieldId", request.FieldId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FieldSchema>(),
            UpdateFieldError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
