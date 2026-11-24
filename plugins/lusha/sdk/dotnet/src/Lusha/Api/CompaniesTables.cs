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
using Lusha.Requests.CompaniesTables;

namespace Lusha.Api;

/// <summary>
/// <b>Companies Tables API:</b> Create and manage persistent tables of companies inside Lusha.
/// </summary>
public sealed class CompaniesTables
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CompaniesTables(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Entities to Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitiesAddResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddCompaniesTableEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add up to 500 company IDs to an existing table. <c>entityIds</c> accepts either the encrypted Lusha token (<c>v{N}.…</c>, as returned by Search/Enrich/Get Entities) or the legacy numeric <c>lushaCompanyId</c> — an ID that's neither returns <c>400</c>. Already-present IDs are reported as <c>alreadyPresent</c> and not re-added; unresolvable IDs are not an error, they come back in <c>invalidIds</c> with a <c>200</c>.
    /// <para>
    /// &gt; <b>Billing:</b> Charges <c>reveal_company</c> per newly-added company, deduped via row-count delta — duplicates and already-present companies aren't charged again.
    /// </para>
    /// </remarks>
    public Task<EntitiesAddResponse> AddCompaniesTableEntities(AddCompaniesTableEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}/entities"),
            [new TemplateParam("table_id", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntitiesAddResponse>(),
            AddCompaniesTableEntitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCompaniesTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new, empty companies table, optionally seeded with an initial list of company IDs.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableResponse> CreateCompaniesTable(CreateCompaniesTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableResponse>(),
            CreateCompaniesTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3CompaniesTablesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCompaniesTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a table and all its data. This cannot be undone.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<V3CompaniesTablesResponse> DeleteCompaniesTable(DeleteCompaniesTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<V3CompaniesTablesResponse>(),
            DeleteCompaniesTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a table's metadata and current processing status.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableResponse> GetCompaniesTable(GetCompaniesTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TableResponse>(),
            GetCompaniesTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Companies Table Entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitiesGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesTableEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Read a page of rows in the table, with all column values and per-cell status.
    /// <para>
    /// &gt; <b>Billing:</b> Charged per row returned via <c>export_api</c>.
    /// </para>
    /// </remarks>
    public Task<EntitiesGetResponse> GetCompaniesTableEntities(GetCompaniesTableEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}/entities"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email), new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntitiesGetResponse>(),
            GetCompaniesTableEntitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Companies Table Columns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ColumnsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCompaniesTableColumnsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the columns on a table, with type and aggregated per-cell status counts.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<ColumnsListResponse> ListCompaniesTableColumns(ListCompaniesTableColumnsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}/columns"),
            [new TemplateParam("table_id", request.TableId)],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ColumnsListResponse>(),
            ListCompaniesTableColumnsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Companies Tables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCompaniesTablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List companies tables owned by the given user, plus any tables shared with the account.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableListResponse> ListCompaniesTables(ListCompaniesTablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/list"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableListResponse>(),
            ListCompaniesTablesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Column from Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3CompaniesTablesColumnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveCompaniesTableColumnError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<V3CompaniesTablesColumnsResponse> RemoveCompaniesTableColumn(RemoveCompaniesTableColumnRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}/columns/{column_id}"),
            [new TemplateParam("table_id", request.TableId), new TemplateParam("column_id", request.ColumnId)],
            [new Param("email", request.Email)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<V3CompaniesTablesColumnsResponse>(),
            RemoveCompaniesTableColumnError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Entities from Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitiesRemoveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveCompaniesTableEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove specific company IDs from a table.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<EntitiesRemoveResponse> RemoveCompaniesTableEntities(RemoveCompaniesTableEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}/entities"),
            [new TemplateParam("table_id", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntitiesRemoveResponse>(),
            RemoveCompaniesTableEntitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run Column on Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ColumnsRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunCompaniesTableColumnError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Populate or refresh a column's data for some or all rows in the table. This is <b>asynchronous</b> — the call returns immediately with <c>status: "processing"</c>; poll Get Companies Table for <c>isProcessing</c> and per-column row-status counts to know when it's done, then read the values via Get Companies Table Entities.
    /// <para>
    /// <b><c>runScope</c> values:</b>
    /// - <c>all</c> — every row, including already-processed ones (re-runs / refreshes). Most expensive.
    /// - <c>missing</c> — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
    /// - <c>specific</c> — only the <c>entityIds</c> you pass. Also how you implement "run for this page" — fetch the page via Get Companies Table Entities, then pass those IDs here.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per row processed, per the column's credit tier. Company enrichment charges once per company per table — re-runs on an already-paid company in the same table are free.
    /// </para>
    /// </remarks>
    public Task<ColumnsRunResponse> RunCompaniesTableColumn(RunCompaniesTableColumnRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}/columns/{column_id}/run"),
            [new TemplateParam("table_id", request.TableId), new TemplateParam("column_id", request.ColumnId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ColumnsRunResponse>(),
            RunCompaniesTableColumnError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Companies Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCompaniesTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename a table, change its visibility, or reassign its owner. All fields except <c>owner</c> are optional — send only what changes.
    /// <para>
    /// &gt; <b>Billing:</b> Free.
    /// </para>
    /// </remarks>
    public Task<TableResponse> UpdateCompaniesTable(UpdateCompaniesTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/tables/{table_id}"),
            [new TemplateParam("table_id", request.TableId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TableResponse>(),
            UpdateCompaniesTableError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
