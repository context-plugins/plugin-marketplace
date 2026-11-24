using System;
using System.Collections.Generic;
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
using Lusha.Requests.CompanyFiltersApi;

namespace Lusha.Api;

/// <summary>
/// Available filters for company searches
/// </summary>
public sealed class CompanyFiltersApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CompanyFiltersApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Industries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="IndustryLabel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyIndustriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available industries for company filtering
    /// </remarks>
    public Task<IReadOnlyList<IndustryLabel>> GetCompanyIndustries(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/industries_labels"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<IndustryLabel>>(),
            GetCompanyIndustriesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Intent Topics
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyIntentTopicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available intent topics
    /// </remarks>
    public Task<IReadOnlyList<string>> GetCompanyIntentTopics(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/intent_topics"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            GetCompanyIntentTopicsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// NAICS Codes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="NaicsCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyNaicsCodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available NAICS codes
    /// </remarks>
    public Task<IReadOnlyList<NaicsCode>> GetCompanyNaicsCodes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/naics"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<NaicsCode>>(),
            GetCompanyNaicsCodesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revenues
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="RevenueRange"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyRevenuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available revenue ranges
    /// </remarks>
    public Task<IReadOnlyList<RevenueRange>> GetCompanyRevenues(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/revenues"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<RevenueRange>>(),
            GetCompanyRevenuesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SIC Codes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="SicCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySicCodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available SIC codes
    /// </remarks>
    public Task<IReadOnlyList<SicCode>> GetCompanySicCodes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/sics"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<SicCode>>(),
            GetCompanySicCodesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sizes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CompanySizeRange"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySizesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available company size ranges
    /// </remarks>
    public Task<IReadOnlyList<CompanySizeRange>> GetCompanySizes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/sizes"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CompanySizeRange>>(),
            GetCompanySizesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CompanyLocationFilter"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompanyLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for company locations by text
    /// </remarks>
    public Task<IReadOnlyList<CompanyLocationFilter>> SearchCompanyLocations(SearchCompanyLocationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/locations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<CompanyLocationFilter>>(),
            SearchCompanyLocationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Names
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CompanyNameResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompanyNamesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for company names by text
    /// </remarks>
    public Task<IReadOnlyList<CompanyNameResult>> SearchCompanyNames(SearchCompanyNamesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/names"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<CompanyNameResult>>(),
            SearchCompanyNamesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Technologies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Technology"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompanyTechnologiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for technologies by text
    /// </remarks>
    public Task<IReadOnlyList<Technology>> SearchCompanyTechnologies(SearchCompanyTechnologiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/companies/technologies"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<Technology>>(),
            SearchCompanyTechnologiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
