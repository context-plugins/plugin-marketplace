using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Builtins;

namespace AmazonLex.Api;

public sealed class Builtins
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Builtins(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Builtin Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBuiltinIntentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBuiltinIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent action.
    /// </remarks>
    public Task<GetBuiltinIntentResponse> GetBuiltinIntent(GetBuiltinIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/intents/{signature}"),
            [new TemplateParam("signature", request.Signature)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBuiltinIntentResponse>(),
            GetBuiltinIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Builtin Intents
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBuiltinIntentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBuiltinIntentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the lex:GetBuiltinIntents action.
    /// </remarks>
    public Task<GetBuiltinIntentsResponse> GetBuiltinIntents(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/intents"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBuiltinIntentsResponse>(),
            GetBuiltinIntentsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Builtin Slot Types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBuiltinSlotTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBuiltinSlotTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.
    /// </remarks>
    public Task<GetBuiltinSlotTypesResponse> GetBuiltinSlotTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/slottypes"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBuiltinSlotTypesResponse>(),
            GetBuiltinSlotTypesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Built In Intents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBuiltInIntentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuiltInIntentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.
    /// </remarks>
    public Task<ListBuiltInIntentsResponse> ListBuiltInIntents(ListBuiltInIntentsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/locales/{localeId}/intents"),
            [new TemplateParam("localeId", request.LocaleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBuiltInIntentsResponse>(),
            ListBuiltInIntentsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Built In Slot Types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBuiltInSlotTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuiltInSlotTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of built-in slot types that meet the specified criteria.
    /// </remarks>
    public Task<ListBuiltInSlotTypesResponse> ListBuiltInSlotTypes(ListBuiltInSlotTypesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/locales/{localeId}/slottypes"),
            [new TemplateParam("localeId", request.LocaleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBuiltInSlotTypesResponse>(),
            ListBuiltInSlotTypesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
