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
using AmazonTranscribe.Requests.MedicalVocabulary;

namespace AmazonTranscribe.Api;

public sealed class MedicalVocabulary
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MedicalVocabulary(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Medical Vocabulary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMedicalVocabularyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.
    /// </remarks>
    public Task CreateMedicalVocabulary(CreateMedicalVocabularyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateMedicalVocabulary"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateMedicalVocabularyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Medical Vocabulary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMedicalVocabularyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.
    /// </remarks>
    public Task DeleteMedicalVocabulary(DeleteMedicalVocabularyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteMedicalVocabulary"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMedicalVocabularyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Medical Vocabulary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMedicalVocabularyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation.
    /// </remarks>
    public Task GetMedicalVocabulary(GetMedicalVocabularyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetMedicalVocabulary"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetMedicalVocabularyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Medical Vocabularies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMedicalVocabulariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation.
    /// </remarks>
    public Task ListMedicalVocabularies(ListMedicalVocabulariesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListMedicalVocabularies"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListMedicalVocabulariesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Medical Vocabulary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMedicalVocabularyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
    /// </remarks>
    public Task UpdateMedicalVocabulary(UpdateMedicalVocabularyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateMedicalVocabulary"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateMedicalVocabularyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
