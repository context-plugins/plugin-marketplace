using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.RiskVerifications;

namespace Bill.Api;

public sealed class RiskVerifications
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal RiskVerifications(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Add phone for risk verification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRiskVerificationPhoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.
    /// <para>
    /// You can check whether a phone number has been added for the user with <c>GET /v3/risk-verifications/phone</c>.
    /// </para>
    /// <para>
    /// After you add a phone number with this endpoint, you can initiate risk verification for the organization with <c>POST /v3/risk-verifications</c>.
    /// </para>
    /// </remarks>
    public Task CreateRiskVerificationPhone(CreateRiskVerificationPhoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/risk-verifications/phone"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateRiskVerificationPhoneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get phone status for risk verification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetPhoneStatusResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRiskVerificationPhoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.
    /// <para>
    /// In the response, if <c>hasPhone</c> is <c>false</c>, you can add a phone number for the user with <c>POST /v3/risk-verifications/phone</c>.
    /// </para>
    /// <para>
    /// After you add a phone number, you can initiate risk verification for the organization with <c>POST /v3/risk-verifications</c>.
    /// </para>
    /// </remarks>
    public Task<GetPhoneStatusResponseDto> GetRiskVerificationPhone(GetRiskVerificationPhoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/risk-verifications/phone"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetPhoneStatusResponseDto>(),
            GetRiskVerificationPhoneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get risk verification details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VerificationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRiskVerificationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get risk verification details for an existing organization.
    /// </remarks>
    public Task<VerificationResponseDto> GetRiskVerifications(GetRiskVerificationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/risk-verifications"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VerificationResponseDto>(),
            GetRiskVerificationsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Initiate risk verification for an organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VerificationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InitiateRiskVerificationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiate risk verification for an organization. The currently signed-in user must have the <c>ADMINISTRATOR</c> user role in the BILL organization to perform this operation.
    /// <para>
    /// <b>Note</b>: You must add a phone number for the signed-in user (with <c>POST /v3/risk-verifications/phone</c>) before you can initiate risk verification. BILL partners must add a phone number for a created user with <c>POST /v3/partner/risk-verifications/{userId}/phone</c>.
    /// </para>
    /// <para>
    /// As a BILL partner, when you create an organization and then create a user for that organization, it is important that you initiate risk verification with <c>POST /v3/risk-verifications</c>.
    /// </para>
    /// <para>
    /// BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization information. BILL sends an email notification for risk verification. When the check is complete, BILL approves the organization for BILL AP and AR operations.
    /// </para>
    /// </remarks>
    public Task<VerificationResponseDto> InitiateRiskVerifications(InitiateRiskVerificationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/risk-verifications"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<VerificationResponseDto>(),
            InitiateRiskVerificationsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
