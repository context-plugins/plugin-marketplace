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
using Airtable.Requests.Bases;

namespace Airtable.Api;

/// <summary>
/// List and create bases, retrieve base schemas
/// </summary>
public sealed class Bases
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Bases(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Airtable Create a New Base
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BaseSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBaseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at least one table definition with fields. Returns the newly created base with its schema.
    /// </remarks>
    public Task<BaseSchema> CreateBase(CreateBaseOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BaseSchema>(),
            CreateBaseError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Get Base Schema
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetaBasesTablesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBaseSchemaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the schema of the specified base, including all tables, their fields (with type and configuration), and views. This endpoint provides a complete structural overview of the base.
    /// </remarks>
    public Task<MetaBasesTablesResponse> GetBaseSchema(GetBaseSchemaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases/{baseId}/tables"),
            [new TemplateParam("baseId", request.BaseId)],
            [new Param("include", request.Include)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetaBasesTablesResponse>(),
            GetBaseSchemaError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable List All Bases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BaseList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID, name, and permission level. Use the offset parameter from the response to paginate through all available bases.
    /// </remarks>
    public Task<BaseList> ListBases(ListBasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/bases"),
            [],
            [new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BaseList>(),
            ListBasesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Get Current User and Scopes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetaWhoamiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WhoamiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying authentication and checking available permissions.
    /// </remarks>
    public Task<MetaWhoamiResponse> Whoami(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/meta/whoami"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetaWhoamiResponse>(),
            WhoamiError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
