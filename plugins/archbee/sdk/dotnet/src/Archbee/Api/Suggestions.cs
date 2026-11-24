using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core;
using Archbee.Core.Exceptions;
using Archbee.Core.Models;
using Archbee.Core.Request;
using Archbee.Core.Response;
using Archbee.Errors;
using Archbee.Models;
using Archbee.Requests.Suggestions;

namespace Archbee.Api;

/// <summary>
/// Reader-submitted suggested changes — merge or discard
/// </summary>
public sealed class Suggestions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Suggestions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Discard suggestion document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuggestChangeDiscardResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DiscardSuggestionDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Discard and delete a suggestion document without merging it into the base document. The suggestion document must have a docId starting with 'SUGGEST-'.
    /// </remarks>
    public Task<SuggestChangeDiscardResponse> DiscardSuggestionDocument(DiscardSuggestionDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/suggest-change/discard"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuggestChangeDiscardResponse>(),
            DiscardSuggestionDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Merge suggestion into main document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuggestChangeMergeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MergeSuggestionIntoMainDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Merge a suggestion document into the base document. The suggestion document must have a docId starting with 'SUGGEST-'.
    /// </remarks>
    public Task<SuggestChangeMergeResponse> MergeSuggestionIntoMainDocument(MergeSuggestionIntoMainDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/suggest-change/merge"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuggestChangeMergeResponse>(),
            MergeSuggestionIntoMainDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
