using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonTranscribe.Core;
using AmazonTranscribe.Core.Exceptions;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Core.Request;
using AmazonTranscribe.Core.Response;
using AmazonTranscribe.Errors;
using AmazonTranscribe.Requests.LanguageModelApi;

namespace AmazonTranscribe.Api;

public sealed class LanguageModelApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LanguageModelApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Language Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateLanguageModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom language model. When creating a new custom language model, you must specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique name for your model
    /// </remarks>
    public Task CreateLanguageModel(CreateLanguageModelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateLanguageModel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateLanguageModelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Language Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteLanguageModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive.
    /// </remarks>
    public Task DeleteLanguageModel(DeleteLanguageModelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteLanguageModel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteLanguageModelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Language Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeLanguageModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure.
    /// </remarks>
    public Task DescribeLanguageModel(DescribeLanguageModelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeLanguageModel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeLanguageModelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Language Models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLanguageModelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation.
    /// </remarks>
    public Task ListLanguageModels(ListLanguageModelsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListLanguageModels"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListLanguageModelsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Language Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLanguageModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the encryption configuration for an existing custom language model. You can use this operation to change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model training is required. Your custom language model must not be in the IN_PROGRESS state when you call this operation. You cannot submit another update while a previous update is in progress. Use to check the current state of your model. Your custom language model remains available for transcription jobs while the update is being processed.
    /// </remarks>
    public Task UpdateLanguageModel(UpdateLanguageModelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateLanguageModel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateLanguageModelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
