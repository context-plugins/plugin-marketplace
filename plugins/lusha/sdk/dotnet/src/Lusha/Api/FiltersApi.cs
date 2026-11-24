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
using Lusha.Requests.FiltersApi;

namespace Lusha.Api;

/// <summary>
/// <b>Filter APIs:</b> Retrieve available filter values for prospecting.
/// <para>
/// Use the discovery endpoints to list all available filter types, then fetch valid values for a specific filter type before building a prospecting request.
/// </para>
/// <para>
/// <b>Contact filter types:</b> <c>departments</c>, <c>seniority</c>, <c>existingDataPoints</c>, <c>countries</c>, <c>locations</c>
/// </para>
/// <para>
/// <b>Company filter types:</b> <c>names</c>, <c>sizes</c>, <c>revenues</c>, <c>locations</c>, <c>sics</c>, <c>naics</c>, <c>industriesLabels</c>, <c>intentTopics</c>, <c>technologies</c>
/// </para>
/// </summary>
public sealed class FiltersApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FiltersApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Company Filter Types (Discovery)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FilterTypesDiscoveryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyFilterTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all available filter types for company prospecting and whether each requires a search query.
    /// </remarks>
    public Task<FilterTypesDiscoveryResponse> GetCompanyFilterTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/prospecting/filters"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FilterTypesDiscoveryResponse>(),
            GetCompanyFilterTypesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Company Filter Values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FilterValuesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyFilterValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns valid values for a single company filter type.
    /// <para>
    /// | Filter type | Query required? |
    /// |---|---|
    /// | <c>sizes</c> | No |
    /// | <c>revenues</c> | No |
    /// | <c>sics</c> | No |
    /// | <c>naics</c> | No |
    /// | <c>intentTopics</c> | No |
    /// | <c>industriesLabels</c> | No |
    /// | <c>names</c> | Yes (2-256 chars) |
    /// | <c>technologies</c> | Yes (2-256 chars) |
    /// | <c>locations</c> | Yes (2-256 chars) |
    /// </para>
    /// </remarks>
    public Task<FilterValuesResponse> GetCompanyFilterValues(GetCompanyFilterValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/prospecting/filters/{filterType}"),
            [new TemplateParam("filterType", request.FilterType)],
            [new Param("query", request.Query)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FilterValuesResponse>(),
            GetCompanyFilterValuesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contact Filter Types (Discovery)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FilterTypesDiscoveryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactFilterTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all available filter types for contact prospecting and whether each requires a search query.
    /// </remarks>
    public Task<FilterTypesDiscoveryResponse> GetContactFilterTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/prospecting/filters"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FilterTypesDiscoveryResponse>(),
            GetContactFilterTypesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contact Filter Values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FilterValuesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactFilterValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns valid values for a single contact filter type.
    /// <para>
    /// | Filter type | Query required? |
    /// |---|---|
    /// | <c>departments</c> | No |
    /// | <c>seniority</c> | No |
    /// | <c>existingDataPoints</c> | No |
    /// | <c>countries</c> | No |
    /// | <c>locations</c> | Yes (2-256 chars) |
    /// </para>
    /// </remarks>
    public Task<FilterValuesResponse> GetContactFilterValues(GetContactFilterValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/prospecting/filters/{filterType}"),
            [new TemplateParam("filterType", request.FilterType)],
            [new Param("query", request.Query)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FilterValuesResponse>(),
            GetContactFilterValuesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
