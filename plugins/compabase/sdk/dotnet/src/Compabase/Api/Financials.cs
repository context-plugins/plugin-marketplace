using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Requests.Financials;

namespace Compabase.Api;

/// <summary>
/// Financial statements, original filings and financial statistics of one company.
/// </summary>
public sealed class Financials
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Financials(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Financial document inventory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsFinancialDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Metadata list of financial documents for the company (periods, types, names).
    /// Returns metadata only. Structured metrics and <c>esf_statement_lines</c> are on the
    /// profile and financial-statements endpoints.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsFinancialDocuments(GetCompaniesKrsByKrsFinancialDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/financial-documents"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsFinancialDocumentsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Financial statements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsFinancialStatementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns financial metrics only (without company profile or document files),
    /// grouped by statement year. Values include PLN/USD/EUR columns from
    /// <c>entity_financial_metrics</c> and structured <c>esf_statement_lines</c> when extracted.
    /// XML files are on the documents endpoint.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsFinancialStatements(GetCompaniesKrsByKrsFinancialStatementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/financial-statements"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsFinancialStatementsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Peer statistics &amp; rankings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsStatisticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Industry / region / country peer benchmarks and the company's rank positions.
    /// Use when <c>hasStatistics</c> on the full profile is <c>true</c>.
    /// <para>
    /// Response shape:
    /// - <c>company</c> – latest indexed figures (PLN/EUR/USD) for the company
    /// - <c>scopes</c> – rank in each peer group (<c>pkd_full</c>, <c>pkd_division</c>, <c>pkd_section</c>, <c>region</c>, <c>country</c>)
    /// - <c>benchmarks</c> – peer distribution per scope key (<c>median</c>, <c>p25</c>/<c>p75</c>/<c>p90</c>, <c>n_companies</c>, …)
    /// </para>
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsStatistics(GetCompaniesKrsByKrsStatisticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/statistics"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("locale", request.Locale)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsStatisticsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
