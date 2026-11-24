using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.SmsApi;

namespace DidLogic.Api;

public sealed class SmsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SmsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Send SMS message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SmsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SmsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send an SMS message from a DID number owned by the authenticated user.
    /// <para>
    /// <b>Requirements:</b>
    /// - Source DID must be owned by user
    /// - Source DID must have SMS enabled
    /// - Sufficient account balance for SMS cost
    /// - Valid destination phone number
    /// </para>
    /// <para>
    /// <b>Cost:</b>
    /// - Charged per segment (160 characters)
    /// - Price varies by destination country
    /// </para>
    /// <para>
    /// <c>sms.id</c> feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.
    /// </para>
    /// </remarks>
    public Task<ApiV1SmsResponse1> SmsCreate(SmsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sms"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SmsResponse1>(),
            SmsCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sent SMS messages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SmsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SmsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve paginated list of SMS messages sent by the authenticated user.
    /// Note: Contact your account manager to set up a Relay URL for inbound messages.
    /// <para>
    /// <c>sms[].id</c> feeds sms_show. Full record: sms_show.
    /// </para>
    /// </remarks>
    public Task<ApiV1SmsResponse> SmsIndex(SmsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sms"),
            [],
            [new Param("page", request.Page), new Param("per_page", request.PerPage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SmsResponse>(),
            SmsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get SMS message details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SmsResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SmsShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific SMS message sent by the authenticated user.
    /// <para>
    /// <b>Returned Information:</b>
    /// - SMS ID and status
    /// - Source and destination numbers
    /// - Message content
    /// - Delivery status and timestamps
    /// - Cost and segment count
    /// </para>
    /// <para>
    /// Rows: sms_index.
    /// </para>
    /// </remarks>
    public Task<ApiV1SmsResponse3> SmsShow(SmsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sms/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SmsResponse3>(),
            SmsShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
