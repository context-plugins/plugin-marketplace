using System;
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
using Sapling.Requests.Generation;

namespace Sapling.Api;

/// <summary>
/// Text rewriting, summarization, translation, and completion.
/// </summary>
public sealed class Generation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Generation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Record an accepted completion
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompleteAcceptResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAcceptCompletionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report that the user accepted an autocomplete suggestion. <c>context</c> must be exactly the <c>{query, completion}</c> object the completion hash was computed from — extra keys fail the hash check.
    /// </remarks>
    public Task<ApiV1CompleteAcceptResponse> SaplingAcceptCompletion(SaplingAcceptCompletionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/complete/{completion_hash}/accept"),
            [new TemplateParam("completion_hash", request.CompletionHash)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CompleteAcceptResponse>(),
            SaplingAcceptCompletionError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Autocomplete a sentence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompleteResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAutocompleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200 characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete enabled; other keys get an explicit error back.
    /// </remarks>
    public Task<ApiV1CompleteResponse1> SaplingAutocomplete(SaplingAutocompleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/complete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CompleteResponse1>(),
            SaplingAutocompleteError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Paraphrase text (deprecated)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ParaphraseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingParaphraseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation, exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.
    /// </remarks>
    public Task<ApiV1ParaphraseResponse> SaplingParaphrase(SaplingParaphraseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/paraphrase"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ParaphraseResponse>(),
            SaplingParaphraseError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rephrase / paraphrase
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1RephraseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingRephraseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase"); num_results controls how many alternatives are returned (default 5).
    /// </remarks>
    public Task<ApiV1RephraseResponse> SaplingRephrase(SaplingRephraseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/rephrase"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1RephraseResponse>(),
            SaplingRephraseError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Split run-on sentences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SentenceSplitResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSentenceSplitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.
    /// </remarks>
    public Task<ApiV1SentenceSplitResponse> SaplingSentenceSplit(SaplingSentenceSplitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sentence_split"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SentenceSplitResponse>(),
            SaplingSentenceSplitError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Plain-language simplification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SimplifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSimplifyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rewrite a text in plain language at a target reading level, keeping all of its content, structure and language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable. Use preserve_terms for names or defined terms that must survive verbatim. Pairs with sapling_readability_statistics for scoring text first.
    /// </remarks>
    public Task<ApiV1SimplifyResponse> SaplingSimplify(SaplingSimplifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/simplify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SimplifyResponse>(),
            SaplingSimplifyError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SummarizeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSummarizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose <c>summary</c> plus a <c>key_points</c> list, sized by the optional <c>length</c> option.
    /// </remarks>
    public Task<ApiV1SummarizeResponse> SaplingSummarize(SaplingSummarizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/summarize"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SummarizeResponse>(),
            SaplingSummarizeError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize an uploaded document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FileSummarizeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSummarizeFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters is not read; the response <c>document</c> object reports <c>truncated</c>. Billed like /api/v1/summarize on the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute generation budget is spent.
    /// </remarks>
    public Task<ApiV1FileSummarizeResponse> SaplingSummarizeFile(SaplingSummarizeFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/file-summarize"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1FileSummarizeResponse>(),
            SaplingSummarizeFileError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Translate text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TranslateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingTranslateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translate a text into a target language with an LLM. Returns translation, the detected source language (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks a formal or informal register where the target language distinguishes them.
    /// </remarks>
    public Task<ApiV1TranslateResponse> SaplingTranslate(SaplingTranslateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/translate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TranslateResponse>(),
            SaplingTranslateError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
