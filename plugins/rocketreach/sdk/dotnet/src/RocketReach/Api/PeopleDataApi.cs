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
using RocketReach.Requests.PeopleDataApi;

namespace RocketReach.Api;

public sealed class PeopleDataApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PeopleDataApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// People Lookup Status API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ProfileApiCompiledCompany"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckPersonLookupStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check Person Lookup Status
    /// </remarks>
    public Task<IReadOnlyList<ProfileApiCompiledCompany>> CheckPersonLookupStatus(CheckPersonLookupStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/checkStatus"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ProfileApiCompiledCompany>>(),
            CheckPersonLookupStatusError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ Universal People Lookup Status API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="UniversalCreditPersonLookupOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckUniversalPersonLookupStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check Universal Person Lookup Status
    /// </remarks>
    public Task<IReadOnlyList<UniversalCreditPersonLookupOutput>> CheckUniversalPersonLookupStatus(CheckUniversalPersonLookupStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/person/check_status"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<UniversalCreditPersonLookupOutput>>(),
            CheckUniversalPersonLookupStatusError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePersonAndCompanyLookup2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Person and Company Lookup
    /// </remarks>
    public Task<ProfileApiSerializerWithCompiledCompany> CreatePersonAndCompanyLookup2(CreatePersonAndCompanyLookup2Request request,
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
            CreatePersonAndCompanyLookup2Error.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk People Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePersonBulkLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk People Lookup by Criteria
    /// </remarks>
    public Task CreatePersonBulkLookup(CreatePersonBulkLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulkLookup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("queries", request.Queries),
                new Param("profile_list", request.ProfileList),
                new Param("webhook_id", request.WebhookId)),
            VoidResponse.Instance,
            CreatePersonBulkLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// People Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProfileApiWithMetadataCompiledCompany"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePersonLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Person Enrichment API
    /// </remarks>
    public Task<ProfileApiWithMetadataCompiledCompany> CreatePersonLookup(CreatePersonLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/lookup"),
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
            JsonResponse.Create<ProfileApiWithMetadataCompiledCompany>(),
            CreatePersonLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// People Search API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ProfileSearchResultSerializerBase"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePersonSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search People by Criteria
    /// </remarks>
    public Task<IReadOnlyList<ProfileSearchResultSerializerBase>> CreatePersonSearch(CreatePersonSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("start", request.Start),
                new Param("page_size", request.PageSize),
                new Param("query", request.Query),
                new Param("order_by", request.OrderBy)),
            JsonResponse.Create<IReadOnlyList<ProfileSearchResultSerializerBase>>(),
            CreatePersonSearchError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ Universal Bulk People Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUniversalPersonBulkLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk People Lookup by Criteria
    /// </remarks>
    public Task CreateUniversalPersonBulkLookup(CreateUniversalPersonBulkLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/person/bulk_lookup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("queries", request.Queries),
                new Param("profile_list", request.ProfileList),
                new Param("webhook_id", request.WebhookId)),
            VoidResponse.Instance,
            CreateUniversalPersonBulkLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ Universal People Lookup API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UniversalCreditPersonLookupOutputWithMetadata"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUniversalPersonLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Person Enrichment API
    /// </remarks>
    public Task<UniversalCreditPersonLookupOutputWithMetadata> CreateUniversalPersonLookup(CreateUniversalPersonLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/person/lookup"),
            [],
            [
                new Param("current_employer", request.CurrentEmployer),
                new Param("email", request.Email),
                new Param("id", request.Id),
                new Param("linkedin_ext_url", request.LinkedinExtUrl),
                new Param("linkedin_url", request.LinkedinUrl),
                new Param(request.Metadata),
                new Param("name", request.Name),
                new Param("npi_number", request.NpiNumber),
                new Param("phone", request.Phone),
                new Param("return_cached_emails", request.ReturnCachedEmails),
                new Param("reveal_detailed_person_enrichment", request.RevealDetailedPersonEnrichment),
                new Param("reveal_healthcare_enrichment", request.RevealHealthcareEnrichment),
                new Param("reveal_personal_email", request.RevealPersonalEmail),
                new Param("reveal_phone", request.RevealPhone),
                new Param("reveal_professional_email", request.RevealProfessionalEmail),
                new Param("title", request.Title),
                new Param("webhook_id", request.WebhookId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UniversalCreditPersonLookupOutputWithMetadata>(),
            CreateUniversalPersonLookupError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ Universal People Search API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="UniversalCreditPersonSearchOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUniversalPersonSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search People by Criteria
    /// </remarks>
    public Task<IReadOnlyList<UniversalCreditPersonSearchOutput>> CreateUniversalPersonSearch(CreateUniversalPersonSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/person/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("start", request.Start),
                new Param("page_size", request.PageSize),
                new Param("query", request.Query),
                new Param("order_by", request.OrderBy)),
            JsonResponse.Create<IReadOnlyList<UniversalCreditPersonSearchOutput>>(),
            CreateUniversalPersonSearchError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);
}
