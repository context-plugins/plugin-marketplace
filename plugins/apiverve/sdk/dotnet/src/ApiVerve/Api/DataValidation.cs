using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.DataValidation;

namespace ApiVerve.Api;

public sealed class DataValidation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataValidation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Card Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CardvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CardvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate a card number to ensure it is valid
    /// </remarks>
    public Task<V1CardvalidatorResponse> Cardvalidator(CardvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cardvalidator"),
            [],
            [new Param("number", request.Number)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CardvalidatorResponse>(),
            CardvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disposable Phone Number Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DisposablephoneResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisposablephoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.
    /// </remarks>
    public Task<V1DisposablephoneResponse> Disposablephone(DisposablephoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/disposablephone"),
            [],
            [new Param("phone", request.Phone)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DisposablephoneResponse>(),
            DisposablephoneError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disposable Email Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EmaildisposablecheckerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EmaildisposablecheckerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if an email address is disposable
    /// </remarks>
    public Task<V1EmaildisposablecheckerResponse> Emaildisposablechecker(EmaildisposablecheckerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/emaildisposablechecker"),
            [],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1EmaildisposablecheckerResponse>(),
            EmaildisposablecheckerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Email Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EmailvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EmailvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate if an email address is valid and exists
    /// </remarks>
    public Task<V1EmailvalidatorResponse> Emailvalidator(EmailvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/emailvalidator"),
            [],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1EmailvalidatorResponse>(),
            EmailvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Password Strength
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PasswordstrengthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PasswordstrengthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the strength of a password
    /// </remarks>
    public Task<V1PasswordstrengthResponse> Passwordstrength(PasswordstrengthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/passwordstrength"),
            [],
            [new Param("password", request.Password)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PasswordstrengthResponse>(),
            PasswordstrengthError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Phone Number Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PhonenumbervalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PhonenumbervalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate a phone number
    /// </remarks>
    public Task<V1PhonenumbervalidatorResponse> Phonenumbervalidator(PhonenumbervalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/phonenumbervalidator"),
            [],
            [new Param("number", request.Number), new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PhonenumbervalidatorResponse>(),
            PhonenumbervalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SEO Quick Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SeovalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SeovalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate the SEO metrics of a web page
    /// </remarks>
    public Task<V1SeovalidatorResponse> Seovalidator(SeovalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/seovalidator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SeovalidatorResponse>(),
            SeovalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Spam Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SpamdetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpamdetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against the spam database
    /// </remarks>
    public Task<V1SpamdetectorResponse> Spamdetector(SpamdetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/spamdetector"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SpamdetectorResponse>(),
            SpamdetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Username Profanity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UsernameprofanityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UsernameprofanityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if a username is inappropriate or profane
    /// </remarks>
    public Task<V1UsernameprofanityResponse> Usernameprofanity(UsernameprofanityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/usernameprofanity"),
            [],
            [new Param("username", request.Username)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UsernameprofanityResponse>(),
            UsernameprofanityError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
