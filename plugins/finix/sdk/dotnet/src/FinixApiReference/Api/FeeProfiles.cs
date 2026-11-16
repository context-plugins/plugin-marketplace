using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.FeeProfiles;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>fee_profiles</c> represents a pricing scheme that automatically applies fees to each transaction. Changes to <c>fee_profiles</c> go into effect immediately.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/platform-payments/monetizing-payments/merchant-fee-profiles">Merchant Fee Profiles</see>
/// </para>
/// </summary>
public sealed class FeeProfiles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FeeProfiles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Fee Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeeProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFeeProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Fee Profile</c>.
    /// </remarks>
    public Task<FeeProfile> CreateFeeProfile(CreateFeeProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fee_profiles"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeeProfile>(),
            CreateFeeProfileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Fee Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeeProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFeeProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Fee Profile</c>.
    /// </remarks>
    public Task<FeeProfile> GetFeeProfile(GetFeeProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fee_profiles/{fee_profile_id}"),
            [new TemplateParam("fee_profile_id", request.FeeProfileId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeeProfile>(),
            GetFeeProfileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Fee Profiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFeeProfiles"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFeeProfilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of Fee Profile resources.
    /// </remarks>
    public Task<ListFeeProfiles> ListFeeProfiles(ListFeeProfilesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fee_profiles"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListFeeProfiles>(),
            ListFeeProfilesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
