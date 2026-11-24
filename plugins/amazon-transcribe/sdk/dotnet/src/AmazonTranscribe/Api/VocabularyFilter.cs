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
using AmazonTranscribe.Requests.VocabularyFilter;

namespace AmazonTranscribe.Api;

public sealed class VocabularyFilter
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VocabularyFilter(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Vocabulary Filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVocabularyFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.
    /// </remarks>
    public Task CreateVocabularyFilter(CreateVocabularyFilterOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateVocabularyFilter"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateVocabularyFilterError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Vocabulary Filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteVocabularyFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.
    /// </remarks>
    public Task DeleteVocabularyFilter(DeleteVocabularyFilterOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteVocabularyFilter"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteVocabularyFilterError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Vocabulary Filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVocabularyFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation.
    /// </remarks>
    public Task GetVocabularyFilter(GetVocabularyFilterOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetVocabularyFilter"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetVocabularyFilterError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Vocabulary Filters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVocabularyFiltersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation.
    /// </remarks>
    public Task ListVocabularyFilters(ListVocabularyFiltersOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListVocabularyFilters"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListVocabularyFiltersError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Vocabulary Filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateVocabularyFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include either Words or VocabularyFilterFileUri in your request.
    /// </remarks>
    public Task UpdateVocabularyFilter(UpdateVocabularyFilterOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateVocabularyFilter"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateVocabularyFilterError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
