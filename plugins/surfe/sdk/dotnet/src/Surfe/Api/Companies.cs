using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Surfe.Core;
using Surfe.Core.Exceptions;
using Surfe.Core.Models;
using Surfe.Core.Request;
using Surfe.Core.Response;
using Surfe.Errors;
using Surfe.Models;
using Surfe.Requests.Companies;

namespace Surfe.Api;

/// <summary>
/// Search and enrich organizations.
/// </summary>
public sealed class Companies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Companies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Enrich companies (get)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyEnrichmentResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyEnrichmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.
    /// </remarks>
    public Task<CompanyEnrichmentResult> GetCompanyEnrichment(GetCompanyEnrichmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/enrich/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanyEnrichmentResult>(),
            GetCompanyEnrichmentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location, keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance is insufficient.
    /// </remarks>
    public Task<CompanySearchResponse> SearchCompanies(SearchCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanySearchResponse>(),
            SearchCompaniesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enrich companies (start)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnrichmentJobAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCompanyEnrichmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for polling or a webhook callback.
    /// </remarks>
    public Task<EnrichmentJobAccepted> StartCompanyEnrichment(StartCompanyEnrichmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnrichmentJobAccepted>(),
            StartCompanyEnrichmentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
