using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.Sql;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Ad-hoc read-only SQL over the warehouse. Paid keys only.
/// </summary>
public sealed class Sql
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sql(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Run a read-only SQL query over the warehouse
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SqlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1SqlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Query the grants warehouse directly when the fixed endpoints can't express the question.
    /// <para>
    /// Accepts ONE read-only statement: <c>SELECT</c> or <c>WITH ... SELECT</c>. Multiple statements, any DDL/DML, and
    /// the file-reading functions (<c>read_parquet</c>, <c>read_csv</c>, …) are rejected — you query named views, not
    /// files. The view list, every column, and the caveats that decide whether an answer is right are
    /// documented at https://data.useplinth.com/developers/schema.
    /// </para>
    /// <para>
    /// <c>grants</c> is the US corpus in US dollars; Canadian T3010 filings are a separate view, <c>grants_ca</c>, in
    /// Canadian dollars. Neither is a filter on the other, because a total spanning both adds CAD to USD.
    /// </para>
    /// <para>
    /// Two ceilings, and they bound different things. Results are capped at 2,000 rows
    /// (<c>truncated: true</c> says you hit it) — aggregate in SQL rather than paging. Separately, a query is
    /// cancelled after 30 seconds: the row cap limits the response, this limits the scan behind
    /// it. A cancelled query returns 400, so narrow it with a <c>tax_year</c> or <c>funder_ein</c> filter and retry.
    /// </para>
    /// <para>
    /// Every response carries <c>x_plinth.datasets</c>: the licence and required attribution for each corpus you
    /// can reach here. Which one answered is not knowable per query, so all of them are listed. The Canadian
    /// attribution is a condition of the licence — reproduce it wherever you publish figures drawn from it.
    /// </para>
    /// <para>
    /// Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the
    /// same as any other endpoint. Asset-intelligence and governance tables additionally need Pro.
    /// </para>
    /// </remarks>
    public Task<SqlResponse> PostApiV1Sql(PostApiV1SqlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sql"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SqlResponse>(),
            PostApiV1SqlError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a read-only SQL query over the warehouse
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunSqlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Query the grants warehouse directly when the fixed endpoints can't express the question.
    /// <para>
    /// Accepts ONE read-only statement: <c>SELECT</c> or <c>WITH ... SELECT</c>. Multiple statements, any DDL/DML, and
    /// the file-reading functions (<c>read_parquet</c>, <c>read_csv</c>, …) are rejected — you query named views, not
    /// files. The view list, every column, and the caveats that decide whether an answer is right are
    /// documented at https://data.useplinth.com/developers/schema.
    /// </para>
    /// <para>
    /// Two ceilings, and they bound different things. Results are capped at 2,000 rows
    /// (<c>truncated: true</c> says you hit it) — aggregate in SQL rather than paging. Separately, a query is
    /// cancelled after 30 seconds: the row cap limits the response, this limits the scan behind
    /// it. A cancelled query returns 400, so narrow it with a <c>tax_year</c> or <c>funder_ein</c> filter and retry.
    /// </para>
    /// <para>
    /// Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the
    /// same as any other endpoint. Asset-intelligence and governance tables additionally need Pro.
    /// </para>
    /// </remarks>
    public Task<object> RunSql(RunSqlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/sql"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            RunSqlError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
