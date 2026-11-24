using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.SipTrunks;

namespace CallNode.Api;

/// <summary>
/// Create, list, update, and delete saved SIP trunks (egress BYOC + ingress).
/// </summary>
public sealed class SipTrunks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SipTrunks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a SIP trunk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SipTrunk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSipTrunkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to
    /// your SIP host), ingress (accept inbound calls from your PBX/SBC), or
    /// both — you must supply an <c>egressHost</c> and/or one or more <c>allowedIps</c>.
    /// <para>
    /// Requires a verified (KYC) account. Trunks beyond your plan's included
    /// count incur your plan's additional-trunk monthly fee: the first attempt
    /// returns <c>402 monthly_fee_confirmation_required</c>; re-submit with
    /// <c>confirmMonthlyFee: true</c> to acknowledge the fee and create the trunk.
    /// </para>
    /// </remarks>
    public Task<SipTrunk> CreateSipTrunk(CreateSipTrunkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/trunks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SipTrunk>(),
            CreateSipTrunkError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a trunk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TrunksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSipTrunkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Soft-deletes the trunk. The row is retained (renamed to free the name
    /// slot) for call-detail history and traceback. A trunk included in your
    /// plan (<c>monthlyFeeApplies: false</c>) can't be deleted; disable it instead.
    /// </remarks>
    public Task<ApiV1TrunksResponse1> DeleteSipTrunk(DeleteSipTrunkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/trunks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TrunksResponse1>(),
            DeleteSipTrunkError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a trunk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SipTrunk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSipTrunkError"/> when the server returns an error response.</exception>
    public Task<SipTrunk> GetSipTrunk(GetSipTrunkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/trunks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SipTrunk>(),
            GetSipTrunkError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List your SIP trunks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TrunksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSipTrunksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns your saved SIP trunks alongside account-level trunk settings —
    /// your plan's included trunk count and additional-trunk fee, how many
    /// trunks are active, the egress source IP your endpoints must allow, and
    /// the ingress endpoint your PBX/SBC points at.
    /// </remarks>
    public Task<ApiV1TrunksResponse> ListSipTrunks(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/trunks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TrunksResponse>(),
            ListSipTrunksError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rotate a registration trunk's SIP password
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SipTrunk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RotateSipTrunkCredentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a new SIP password for a registration trunk, keeping the same
    /// username. This is the only recovery path for a lost password: CallNode
    /// stores a non-reversible digest, never the plaintext.
    /// <para>
    /// The new password is returned <b>once</b>, in <c>sipPassword</c>. The previous
    /// password stops working within about a minute, so update your PBX
    /// promptly — it will need to re-register.
    /// </para>
    /// </remarks>
    public Task<SipTrunk> RotateSipTrunkCredentials(RotateSipTrunkCredentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/trunks/{id}/rotate-credentials"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SipTrunk>(),
            RotateSipTrunkCredentialsError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a trunk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SipTrunk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSipTrunkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates any subset of a trunk's fields. Send <c>egressHost</c> as <c>null</c> or
    /// <c>""</c> to clear it and make the trunk ingress-only. The same validation
    /// codes as create apply; a request with no recognized fields returns
    /// <c>400 no_fields</c>.
    /// </remarks>
    public Task<SipTrunk> UpdateSipTrunk(UpdateSipTrunkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/trunks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SipTrunk>(),
            UpdateSipTrunkError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
