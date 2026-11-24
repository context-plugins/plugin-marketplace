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
using Lusha.Requests.ContactFiltersApi;

namespace Lusha.Api;

/// <summary>
/// Available filters for contact searches
/// </summary>
public sealed class ContactFiltersApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContactFiltersApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Countries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CountryFilter"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of all available countries for contact filtering
    /// </remarks>
    public Task<IReadOnlyList<CountryFilter>> GetContactCountries(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/contacts/all_countries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CountryFilter>>(),
            GetContactCountriesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Data Points
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactDataPointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available data points for contact filtering
    /// </remarks>
    public Task<IReadOnlyList<string>> GetContactDataPoints(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/contacts/existing_data_points"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            GetContactDataPointsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Departments
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactDepartmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available departments for contact filtering
    /// </remarks>
    public Task<IReadOnlyList<string>> GetContactDepartments(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/contacts/departments"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            GetContactDepartmentsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Seniority
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactSeniorityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get list of available seniority levels for contact filtering
    /// </remarks>
    public Task<IReadOnlyList<string>> GetContactSeniority(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/contacts/seniority"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            GetContactSeniorityError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="LocationFilter"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchContactLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for locations by text for contact filtering
    /// </remarks>
    public Task<IReadOnlyList<LocationFilter>> SearchContactLocations(SearchContactLocationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/filters/contacts/locations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<LocationFilter>>(),
            SearchContactLocationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
