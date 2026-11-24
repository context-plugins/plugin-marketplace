using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Models;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;
using Bitly.Requests.CustomBitlinks;

namespace Bitly.Api;

/// <summary>
/// These endpoints are for updating custom Bitlinks only. Custom Bitlinks have both a BSD and a customized back-half (e.g., yourcompany.com/yourcampaign). If a link begins with the bit.ly domain or ends with an auto-generated random string it is not a custom Bitlink.
/// </summary>
public sealed class CustomBitlinks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CustomBitlinks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Custom Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomBitlinkBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddCustomBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint can also be used for initial redirects to a link.
    /// </remarks>
    public Task<CustomBitlinkBitlyCustomBitlinksApi> AddCustomBitlink(AddCustomBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_bitlinks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomBitlinkBitlyCustomBitlinksApi>(),
            AddCustomBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Clicks for a Custom Bitlink's Entire History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Clicks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClicksForCustomBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the click counts for the specified link. This returns an array with clicks based on a date.
    /// </remarks>
    public Task<Clicks> GetClicksForCustomBitlink(GetClicksForCustomBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_bitlinks/{custom_bitlink}/clicks"),
            [new TemplateParam("custom_bitlink", request.CustomBitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Clicks>(),
            GetClicksForCustomBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Custom Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomBitlinkBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the details and history of the specified link.
    /// </remarks>
    public Task<CustomBitlinkBitlyCustomBitlinksApi> GetCustomBitlink(GetCustomBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_bitlinks/{custom_bitlink}"),
            [new TemplateParam("custom_bitlink", request.CustomBitlink)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomBitlinkBitlyCustomBitlinksApi>(),
            GetCustomBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Custom Bitlink by Destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomBitlinkMetricsByDestinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns click metrics for the specified link by its historical destinations.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetCustomBitlinkMetricsByDestination(GetCustomBitlinkMetricsByDestinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_bitlinks/{custom_bitlink}/clicks_by_destination"),
            [new TemplateParam("custom_bitlink", request.CustomBitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetCustomBitlinkMetricsByDestinationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Custom Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomBitlinkBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move a keyword (or custom back-half) to a different Bitlink (domains must match).
    /// </remarks>
    public Task<CustomBitlinkBitlyCustomBitlinksApi> UpdateCustomBitlink(UpdateCustomBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_bitlinks/{custom_bitlink}"),
            [new TemplateParam("custom_bitlink", request.CustomBitlink)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomBitlinkBitlyCustomBitlinksApi>(),
            UpdateCustomBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
