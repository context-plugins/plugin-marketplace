using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Dimensions;

namespace DoiT.Api;

/// <summary>
/// View available dimensions for analysis.
/// </summary>
public sealed class Dimensions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Dimensions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a dimension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DimensionsExternalApiGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDimensionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a dimension by type and key.
    /// </remarks>
    public Task<DimensionsExternalApiGetResponse> GetDimensions(GetDimensionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/dimension"),
            [],
            [new Param("type", request.Type), new Param("id", request.Id)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DimensionsExternalApiGetResponse>(),
            GetDimensionsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List dimensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DimensionsExternalApiListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDimensionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the dimensions that your account has access to.
    /// </remarks>
    public Task<DimensionsExternalApiListResponse> ListDimensions(ListDimensionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/dimensions"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DimensionsExternalApiListResponse>(),
            ListDimensionsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
