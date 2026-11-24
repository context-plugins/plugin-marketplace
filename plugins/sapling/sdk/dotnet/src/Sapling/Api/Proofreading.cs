using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Sapling.Core;
using Sapling.Core.Authentication;
using Sapling.Core.Exceptions;
using Sapling.Core.Models;
using Sapling.Core.Request;
using Sapling.Core.Response;
using Sapling.Errors;
using Sapling.Models;
using Sapling.Models.AnyOf;
using Sapling.Requests.Proofreading;

namespace Sapling.Api;

/// <summary>
/// Grammar and spelling correction.
/// </summary>
public sealed class Proofreading
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Proofreading(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Record an accepted edit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EditsAcceptResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAcceptEditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves the suggestions shown to that user. The body must be a non-empty JSON object; include <c>user_id</c> or the feedback is not recorded.
    /// </remarks>
    public Task<ApiV1EditsAcceptResponse> SaplingAcceptEdit(SaplingAcceptEditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/edits/{edit_hash}/accept"),
            [new TemplateParam("edit_hash", request.EditHash)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1EditsAcceptResponse>(),
            SaplingAcceptEditError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a custom filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CustomFilterResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAddCustomFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Suppress suggestions that change <c>inp</c> into <c>out</c>. Note the request keys are <c>inp</c>/<c>out</c> while responses use <c>input</c>/<c>output</c>.
    /// </remarks>
    public Task<ApiV1CustomFilterResponse1> SaplingAddCustomFilter(SaplingAddCustomFilterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/custom_filter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CustomFilterResponse1>(),
            SaplingAddCustomFilterError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a custom mapping
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CustomMappingResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAddCustomMappingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Suggest <c>mapping</c> whenever <c>entry</c> appears in checked text.
    /// </remarks>
    public Task<ApiV1CustomMappingResponse1> SaplingAddCustomMapping(SaplingAddCustomMappingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/custom_mapping"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CustomMappingResponse1>(),
            SaplingAddCustomMappingError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a custom dictionary entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DictionaryResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAddDictionaryEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a word the grammar and spelling checkers should accept.
    /// </remarks>
    public Task<ApiV1DictionaryResponse1> SaplingAddDictionaryEntry(SaplingAddDictionaryEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/dictionary"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1DictionaryResponse1>(),
            SaplingAddDictionaryEntryError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDeleteCustomFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a filter by the <c>id</c> returned when listing or adding it.
    /// </remarks>
    public Task SaplingDeleteCustomFilter(SaplingDeleteCustomFilterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/custom_filter/{filter_id}"),
            [new TemplateParam("filter_id", request.FilterId)],
            [new Param("return_usage", request.ReturnUsage)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SaplingDeleteCustomFilterError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom mapping
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDeleteCustomMappingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a mapping by the <c>id</c> returned when listing or adding it.
    /// </remarks>
    public Task SaplingDeleteCustomMapping(SaplingDeleteCustomMappingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/custom_mapping/{mapping_id}"),
            [new TemplateParam("mapping_id", request.MappingId)],
            [new Param("return_usage", request.ReturnUsage)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SaplingDeleteCustomMappingError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom dictionary entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDeleteDictionaryEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove an entry by the <c>id</c> returned when listing or adding it.
    /// </remarks>
    public Task SaplingDeleteDictionaryEntry(SaplingDeleteDictionaryEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/dictionary/{entry_id}"),
            [new TemplateParam("entry_id", request.EntryId)],
            [new Param("return_usage", request.ReturnUsage)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SaplingDeleteDictionaryEntryError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Grammar and spelling check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EditsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingGrammarCheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive applied_text: the input with all suggested edits already applied (useful to return a corrected document in one call). Set include_error_categories=false to skip error classification and get only the corrections and offsets back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If the result carries a degraded object it is partial: some sentences may be missing some or all of their corrections (the edits returned are still valid); call again for a complete result.
    /// </remarks>
    public Task<ApiV1EditsResponse1> SaplingGrammarCheck(SaplingGrammarCheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/edits"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1EditsResponse1>(),
            SaplingGrammarCheckError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom filters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CustomFilterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingListCustomFiltersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rules that suppress a specific suggestion (input -&gt; output) from /api/v1/edits.
    /// </remarks>
    public Task<ApiV1CustomFilterResponse> SaplingListCustomFilters(SaplingListCustomFiltersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/custom_filter"),
            [],
            [new Param("return_usage", request.ReturnUsage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CustomFilterResponse>(),
            SaplingListCustomFiltersError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom mappings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CustomMappingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingListCustomMappingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Custom replacement rules (entry -&gt; mapping) applied as suggestions by /api/v1/edits.
    /// </remarks>
    public Task<ApiV1CustomMappingResponse> SaplingListCustomMappings(SaplingListCustomMappingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/custom_mapping"),
            [],
            [new Param("return_usage", request.ReturnUsage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CustomMappingResponse>(),
            SaplingListCustomMappingsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom dictionary entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiV1DictionaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingListDictionaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted by entry.
    /// </remarks>
    public Task<IReadOnlyList<ApiV1DictionaryResponse>> SaplingListDictionary(SaplingListDictionaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/dictionary"),
            [],
            [new Param("return_usage", request.ReturnUsage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ApiV1DictionaryResponse>>(),
            SaplingListDictionaryError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record a rejected edit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EditsRejectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingRejectEditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar suggestions are then suppressed for that user. The body must be a non-empty JSON object; include <c>user_id</c> or the feedback is not recorded.
    /// </remarks>
    public Task<ApiV1EditsRejectResponse> SaplingRejectEdit(SaplingRejectEditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/edits/{edit_hash}/reject"),
            [new TemplateParam("edit_hash", request.EditHash)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1EditsRejectResponse>(),
            SaplingRejectEditError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Spelling-only check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SpellcheckResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSpellcheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result carrying a degraded object is partial; call again for a complete result.
    /// </remarks>
    public Task<ApiV1SpellcheckResponse1> SaplingSpellcheck(SaplingSpellcheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/spellcheck"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SpellcheckResponse1>(),
            SaplingSpellcheckError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
