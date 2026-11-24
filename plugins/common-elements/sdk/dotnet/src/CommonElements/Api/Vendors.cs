using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.Vendors;

namespace CommonElements.Api;

public sealed class Vendors
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Vendors(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The full public profile for one verified vendor: identity, self-reported…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1VendorsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VendorsDetailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The full public profile for one verified vendor: identity, self-reported service offerings, review summary, and the neutral, independently-sourced trust profile (workers' comp status, professional licenses, enforcement history) pulled from public records.
    /// <list type="bullet">
    ///   <item><description>Never returns private contact data, street address lines, phone, or email. That data does not exist on this endpoint at all, not merely hidden.</description></item>
    ///   <item><description>Distinguish self-asserted from verified: description/services_offered/certifications/license_number are what the vendor states about itself; trust_profile is what public records independently confirm.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1VendorsResponse1> VendorsDetail(VendorsDetailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/vendors/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1VendorsResponse1>(),
            VendorsDetailError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search the public vendor directory: verified vendors only, ranked by review…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1VendorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VendorsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search the public vendor directory: verified vendors only, ranked by review rating. Filter by name/description text, state (home or served), or service category.
    /// <para>
    /// <b>Plan:</b> Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Only verified vendors are listed. Coverage grows as vendors complete verification — see the note this endpoint returns on an empty result for the current count.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1VendorsResponse> VendorsList(VendorsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/vendors"),
            [],
            [
                new Param("q", request.Q),
                new Param("state", request.State),
                new Param("category", request.Category),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1VendorsResponse>(),
            VendorsListError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Published reviews for a vendor, newest first
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1VendorsReviewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VendorsReviewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each one is a verified-buyer review, not an open review anyone can post.
    /// <list type="bullet">
    ///   <item><description>Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection neutral.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1VendorsReviewsResponse> VendorsReviews(VendorsReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/vendors/{id}/reviews"),
            [new TemplateParam("id", request.Id)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1VendorsReviewsResponse>(),
            VendorsReviewsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
