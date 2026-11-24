using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Models;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;
using Lusha.Requests.ContactsTables;

namespace Lusha.Api;

/// <summary>
/// <b>Contacts Tables API:</b> Create and manage persistent tables of contacts inside Lusha.
/// </summary>
public sealed class ContactsTables
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContactsTables(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Entities to Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitiesAddResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddContactsTableEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add up to 500 contact IDs to an existing table. <c>entityIds</c> accepts either the encrypted Lusha token (<c>v{N}.…</c>, as returned by Search/Enrich/Get Entities) or the legacy numeric <c>personId</c> — an ID that's neither returns <c>400</c>. Already-present IDs are reported as <c>alreadyPresent</c> and not re-added; unresolvable IDs are not an error, they come back in <c>invalidIds</c> with a <c>200</c>.
    /// <para>
    /// Optionally pass <c>companyIds</c> — one <c>lushaCompanyId</c> per contact, index-aligned with <c>entityIds</c> — to help pair company-level enrichment to the right company for each contact.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<EntitiesAddResponse> AddContactsTableEntities(AddContactsTableEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}/entities"),
            [new TemplateParam("table_id", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntitiesAddResponse>(),
            AddContactsTableEntitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContactsTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableResponse> CreateContactsTable(CreateContactsTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableResponse>(),
            CreateContactsTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ContactsTablesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteContactsTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a table and all its data. This cannot be undone.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<V3ContactsTablesResponse> DeleteContactsTable(DeleteContactsTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<V3ContactsTablesResponse>(),
            DeleteContactsTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactsTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a table's metadata and current processing status.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableResponse> GetContactsTable(GetContactsTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TableResponse>(),
            GetContactsTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contacts Table Entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitiesGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactsTableEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Read a page of rows in the table, with all column values and per-cell status.
    /// <para>
    /// &gt; <b>Billing:</b> Charged per row returned via <c>export_api</c>.
    /// </para>
    /// </remarks>
    public Task<EntitiesGetResponse> GetContactsTableEntities(GetContactsTableEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}/entities"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email), new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntitiesGetResponse>(),
            GetContactsTableEntitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Contacts Table Columns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ColumnsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContactsTableColumnsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the columns on a table, with type and aggregated per-cell status counts.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<ColumnsListResponse> ListContactsTableColumns(ListContactsTableColumnsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}/columns"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ColumnsListResponse>(),
            ListContactsTableColumnsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Contacts Tables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContactsTablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List contacts tables owned by the given user, plus any tables shared with the account.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableListResponse> ListContactsTables(ListContactsTablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/list"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableListResponse>(),
            ListContactsTablesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Column from Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ContactsTablesColumnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveContactsTableColumnError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<V3ContactsTablesColumnsResponse> RemoveContactsTableColumn(RemoveContactsTableColumnRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}/columns/{column_id}"),
            [new TemplateParam("table_id", request.TableId), new TemplateParam("column_id", request.ColumnId)],
            [new Param("email", request.Email)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<V3ContactsTablesColumnsResponse>(),
            RemoveContactsTableColumnError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Entities from Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitiesRemoveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveContactsTableEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove specific contact IDs from a table.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<EntitiesRemoveResponse> RemoveContactsTableEntities(RemoveContactsTableEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}/entities"),
            [new TemplateParam("table_id", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntitiesRemoveResponse>(),
            RemoveContactsTableEntitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run Column on Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ColumnsRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunContactsTableColumnError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Populate or refresh a column's data for some or all rows in the table. This is <b>asynchronous</b> — the call returns immediately with <c>status: "processing"</c>; poll Get Contacts Table for <c>isProcessing</c> and per-column row-status counts to know when it's done, then read the values via Get Contacts Table Entities.
    /// <para>
    /// <b><c>runScope</c> values:</b>
    /// - <c>all</c> — every row, including already-processed ones (re-runs / refreshes). Most expensive.
    /// - <c>missing</c> — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
    /// - <c>specific</c> — only the <c>entityIds</c> you pass. Also how you implement "run for this page" — fetch the page via Get Contacts Table Entities, then pass those IDs here.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per row processed, per the column's credit tier. Re-running with <c>all</c> charges again for rows that already have data.
    /// </para>
    /// </remarks>
    public Task<ColumnsRunResponse> RunContactsTableColumn(RunContactsTableColumnRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}/columns/{column_id}/run"),
            [new TemplateParam("table_id", request.TableId), new TemplateParam("column_id", request.ColumnId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ColumnsRunResponse>(),
            RunContactsTableColumnError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Contacts Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContactsTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename a table, change its visibility, or reassign its owner. All fields except <c>owner</c> are optional — send only what changes.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableResponse> UpdateContactsTable(UpdateContactsTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/tables/{table_id}"),
            [new TemplateParam("table_id", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableResponse>(),
            UpdateContactsTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
