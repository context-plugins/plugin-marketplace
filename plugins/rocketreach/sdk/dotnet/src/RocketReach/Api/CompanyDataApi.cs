using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using RocketReach.Core;
using RocketReach.Core.Exceptions;
using RocketReach.Core.Models;
using RocketReach.Core.Request;
using RocketReach.Core.Response;
using RocketReach.Errors;
using RocketReach.Models;
using RocketReach.Requests.CompanyDataApi;

namespace RocketReach.Api;

public sealed class CompanyDataApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CompanyDataApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Company Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompiledCompanyApiSerializerWithExtendedCompanyAttributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCompanyLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Companies by Criteria
    /// </remarks>
    public Task<CompiledCompanyApiSerializerWithExtendedCompanyAttributes> CreateCompanyLookup(CreateCompanyLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/company/lookup/"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("id", request.Id),
                new Param("linkedin_url", request.LinkedinUrl),
                new Param("name", request.Name),
                new Param("ticker", request.Ticker),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompiledCompanyApiSerializerWithExtendedCompanyAttributes>(),
            CreateCompanyLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Company Search API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CompiledCompanyPublicDetails"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCompanySearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Companies by Criteria
    /// </remarks>
    public Task<IReadOnlyList<CompiledCompanyPublicDetails>> CreateCompanySearch(CreateCompanySearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/searchCompany"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("start", request.Start),
                new Param("page_size", request.PageSize),
                new Param("query", request.Query),
                new Param("order_by", request.OrderBy)),
            JsonResponse.Create<IReadOnlyList<CompiledCompanyPublicDetails>>(),
            CreateCompanySearchError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// People and Company Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProfileApiSerializerWithCompiledCompany"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePersonAndCompanyLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Person and Company Lookup
    /// </remarks>
    public Task<ProfileApiSerializerWithCompiledCompany> CreatePersonAndCompanyLookup(CreatePersonAndCompanyLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profile-company/lookup"),
            [],
            [
                new Param("current_employer", request.CurrentEmployer),
                new Param("email", request.Email),
                new Param("id", request.Id),
                new Param("linkedin_ext_url", request.LinkedinExtUrl),
                new Param("linkedin_url", request.LinkedinUrl),
                new Param("lookup_type", request.LookupType),
                new Param(request.Metadata),
                new Param("name", request.Name),
                new Param("npi_number", request.NpiNumber),
                new Param("phone", request.Phone),
                new Param("return_cached_emails", request.ReturnCachedEmails),
                new Param("title", request.Title),
                new Param("webhook_id", request.WebhookId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProfileApiSerializerWithCompiledCompany>(),
            CreatePersonAndCompanyLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ Universal Company Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompiledCompanyApiSerializerWithExtendedCompanyAttributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUniversalCompanyLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Companies by Criteria
    /// </remarks>
    public Task<CompiledCompanyApiSerializerWithExtendedCompanyAttributes> CreateUniversalCompanyLookup(CreateUniversalCompanyLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/company/lookup"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("id", request.Id),
                new Param("linkedin_url", request.LinkedinUrl),
                new Param("name", request.Name),
                new Param("ticker", request.Ticker),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompiledCompanyApiSerializerWithExtendedCompanyAttributes>(),
            CreateUniversalCompanyLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ Universal Company Search API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="UniversalCreditCompanySearchOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUniversalCompanySearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Companies by Criteria
    /// </remarks>
    public Task<IReadOnlyList<UniversalCreditCompanySearchOutput>> CreateUniversalCompanySearch(CreateUniversalCompanySearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/company/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("start", request.Start),
                new Param("page_size", request.PageSize),
                new Param("query", request.Query),
                new Param("order_by", request.OrderBy)),
            JsonResponse.Create<IReadOnlyList<UniversalCreditCompanySearchOutput>>(),
            CreateUniversalCompanySearchError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);
}
