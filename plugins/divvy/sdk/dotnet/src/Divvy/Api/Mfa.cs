using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.ErrorResponse;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Mfa;

namespace Divvy.Api;

public sealed class Mfa
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Mfa(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Generate MFA challenge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MfaChallengeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GenerateChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate an MFA challenge ID for creating an MFA-trusted API sign in session.
    /// <para>
    /// In the response, a <c>challengeId</c> is generated and a six-digit <c>token</c> is sent to the phone number that was registered with MFA setup.
    /// </para>
    /// <para>
    /// After you generate a challenge ID (with <c>POST /v3/mfa/challenge</c>), complete your MFA sign in by validating the MFA challenge (with <c>POST /v3/mfa/challenge/validate</c>). At this point, your API session is MFA trusted.
    /// </para>
    /// <para>
    /// There are two stages in the BILL MFA process.
    /// 1. <b>MFA setup</b>: Add a valid phone number for setting up MFA in the organization (with <c>POST /v3/mfa/setup</c>), and then complete the setup by validating the entered phone number (with <c>POST /v3/mfa/validate</c>). At this point, the phone number is registered for the MFA sign in operation.
    /// 2. <b>MFA sign in</b>: Generate an MFA challenge (with <c>POST /v3/mfa/challenge</c>), and then complete MFA sign in by validating the MFA challenge (with <c>POST /v3/mfa/challenge/validate</c>). At this point, your API session is MFA trusted.
    /// </para>
    /// <para>
    /// <b>Note</b>: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
    /// * Enable vendor <c>autoPay</c>
    /// * Enable recurring bill <c>autoPayment</c>
    /// * Create a payment or bulk payment
    /// * Create a bank account in a BILL organization
    /// * Reset MFA (Complete MFA setup and MFA sign-in again)
    /// </para>
    /// </remarks>
    public Task<MfaChallengeResponseDto> GenerateChallenge(GenerateChallengeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/mfa/challenge"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MfaChallengeResponseDto>(),
            GenerateChallengeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of MFA phone numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMfaPhoneResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of phone numbers that have been added for setting up MFA in the current organization.
    /// </remarks>
    public Task<ListMfaPhoneResponseDto> ListMfaPhones(ListMfaPhonesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/mfa/phones"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMfaPhoneResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add phone for MFA setup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MfaSetupResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a valid phone number for setting up MFA in the current organization.
    /// <para>
    /// In the response, a <c>setupId</c> is generated and a six-digit <c>token</c> is sent to the phone number. After you add a phone number (with <c>POST /v3/mfa/setup</c>), complete the MFA setup by validating the entered phone number (with <c>POST /v3/mfa/validate</c>). At this point, the phone number is registered for the MFA sign in operation.
    /// </para>
    /// <para>
    /// There are two stages in the BILL MFA process.
    /// 1. <b>MFA setup</b>: Add a valid phone number for setting up MFA in the organization (with <c>POST /v3/mfa/setup</c>), and then complete the setup by validating the entered phone number (with <c>POST /v3/mfa/validate</c>). At this point, the phone number is registered for the MFA sign in operation.
    /// 2. <b>MFA sign in</b>: Generate an MFA challenge (with <c>POST /v3/mfa/challenge</c>), and then complete MFA sign in by validating the MFA challenge (with <c>POST /v3/mfa/challenge/validate</c>). At this point, your API session is MFA trusted.
    /// </para>
    /// <para>
    /// <b>Note</b>: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
    /// * Enable vendor <c>autoPay</c>
    /// * Enable recurring bill <c>autoPayment</c>
    /// * Create a payment or bulk payment
    /// * Create a bank account in a BILL organization
    /// * Reset MFA (Complete MFA setup and MFA sign-in again)
    /// </para>
    /// </remarks>
    public Task<MfaSetupResponseDto> Setup(SetupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/mfa/setup"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MfaSetupResponseDto>(),
            SetupError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// MFA step-up for API session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MfaStepUpResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set your current API session as MFA trusted.
    /// <para>
    /// Ideally, when you sign in with <c>POST /v3/login</c>, set <c>rememberMeId</c> and <c>device</c> in your request to generate an MFA-trusted API session.
    /// </para>
    /// <para>
    /// In case you sign in without <c>rememberMeId</c> and <c>device</c> in your request, you can use this <c>POST /v3/mfa/step-up</c> endpoint to mark the current API session as MFA trusted.
    /// </para>
    /// </remarks>
    public Task<MfaStepUpResponseDto> StepUpSession(StepUpSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/mfa/step-up"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MfaStepUpResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate phone for MFA setup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate the phone number for setting up MFA in the current organization. This validation requires the <c>setupId</c> and <c>token</c> from <c>POST /v3/mfa/setup</c>.
    /// <para>
    /// After the validation is complete, the phone number is registered for the MFA sign in operation.
    /// </para>
    /// <para>
    /// There are two stages in the BILL MFA process.
    /// 1. <b>MFA setup</b>: Add a valid phone number for setting up MFA in the organization (with <c>POST /v3/mfa/setup</c>), and then complete the setup by validating the entered phone number (with <c>POST /v3/mfa/validate</c>). At this point, the phone number is registered for the MFA sign in operation.
    /// 2. <b>MFA sign in</b>: Generate an MFA challenge (with <c>POST /v3/mfa/challenge</c>), and then complete MFA sign in by validating the MFA challenge (with <c>POST /v3/mfa/challenge/validate</c>). At this point, your API session is MFA trusted.
    /// </para>
    /// <para>
    /// <b>Note</b>: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
    /// * Enable vendor <c>autoPay</c>
    /// * Enable recurring bill <c>autoPayment</c>
    /// * Create a payment or bulk payment
    /// * Create a bank account in a BILL organization
    /// * Reset MFA (Complete MFA setup and MFA sign-in again)
    /// </para>
    /// </remarks>
    public Task<StatusDto> Validate(ValidateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/mfa/setup/validate"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StatusDto>(),
            ValidateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate MFA challenge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MfaChallengeValidateResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidateChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the <c>challengeId</c> and <c>token</c> from <c>POST /v3/mfa/challenge</c>.
    /// <para>
    /// After the validation is complete, your API session is MFA trusted.
    /// </para>
    /// <para>
    /// There are two stages in the BILL MFA process.
    /// 1. <b>MFA setup</b>: Add a valid phone number for setting up MFA in the organization (with <c>POST /v3/mfa/setup</c>), and then complete the setup by validating the entered phone number (with <c>POST /v3/mfa/validate</c>). At this point, the phone number is registered for the MFA sign in operation.
    /// 2. <b>MFA sign in</b>: Generate an MFA challenge (with <c>POST /v3/mfa/challenge</c>), and then complete MFA sign in by validating the MFA challenge (with <c>POST /v3/mfa/challenge/validate</c>). At this point, your API session is MFA trusted.
    /// </para>
    /// <para>
    /// <b>Note</b>: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
    /// * Enable vendor <c>autoPay</c>
    /// * Enable recurring bill <c>autoPayment</c>
    /// * Create a payment or bulk payment
    /// * Create a bank account for a BILL organization
    /// * Reset MFA (Complete MFA setup and MFA sign-in again)
    /// </para>
    /// </remarks>
    public Task<MfaChallengeValidateResponseDto> ValidateChallenge(ValidateChallengeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/mfa/challenge/validate"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MfaChallengeValidateResponseDto>(),
            ValidateChallengeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
