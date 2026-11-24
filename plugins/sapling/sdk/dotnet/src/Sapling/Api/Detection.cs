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
using Sapling.Requests.Detection;

namespace Sapling.Api;

/// <summary>
/// AI-content, language, PII, named-entity, and unsafe-content detection.
/// </summary>
public sealed class Detection
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Detection(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// AI-generated text detection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AidetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAiDetectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and 1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring &gt;= 0.5, which flags partially AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages), low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese, Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the non-English languages is scored by a multilingual model, and the response's version field names the model that scored the text. Other languages are scored by the English model and are less reliable.
    /// </remarks>
    public Task<ApiV1AidetectResponse> SaplingAiDetect(SaplingAiDetectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/aidetect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AidetectResponse>(),
            SaplingAiDetectError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// AI-generated text detection for a web page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UrlAidetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAiDetectUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 = likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default, and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an error, not a score. For long pages set sent_scores=false to keep the result small.
    /// </remarks>
    public Task<ApiV1UrlAidetectResponse> SaplingAiDetectUrl(SaplingAiDetectUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/url-aidetect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UrlAidetectResponse>(),
            SaplingAiDetectUrlError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect AI-generated text in a Word document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DocxAidetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAidetectDocxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. Billed like /api/v1/aidetect.
    /// </remarks>
    public Task<ApiV1DocxAidetectResponse> SaplingAidetectDocx(SaplingAidetectDocxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/docx-aidetect"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1DocxAidetectResponse>(),
            SaplingAidetectDocxError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect AI-generated text in an uploaded document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FileAidetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAidetectFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB); its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is flattened to its visible text. Billed like /api/v1/aidetect.
    /// </remarks>
    public Task<ApiV1FileAidetectResponse> SaplingAidetectFile(SaplingAidetectFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/file-aidetect"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1FileAidetectResponse>(),
            SaplingAidetectFileError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect AI-generated text in a PDF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PdfAidetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAidetectPdfError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. Billed like /api/v1/aidetect.
    /// </remarks>
    public Task<ApiV1PdfAidetectResponse> SaplingAidetectPdf(SaplingAidetectPdfRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pdf-aidetect"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1PdfAidetectResponse>(),
            SaplingAidetectPdfError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Language detection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1LangdetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDetectLanguageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK" are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).
    /// </remarks>
    public Task<ApiV1LangdetectResponse> SaplingDetectLanguage(SaplingDetectLanguageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/langdetect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1LangdetectResponse>(),
            SaplingDetectLanguageError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// PII detection and redaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PiiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDetectPiiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex + checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is then capped at 10000 characters).
    /// </remarks>
    public Task<ApiV1PiiResponse> SaplingDetectPii(SaplingDetectPiiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pii"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PiiResponse>(),
            SaplingDetectPiiError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Named-entity recognition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1NerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingNerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages, quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails, cards, IBANs...), this one finds names and real-world references.
    /// </remarks>
    public Task<ApiV1NerResponse> SaplingNer(SaplingNerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ner"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1NerResponse>(),
            SaplingNerError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Flag profanity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ProfanityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingProfanityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Split text on whitespace and label each token 1 (profane) or 0. Not billed.
    /// </remarks>
    public Task<ApiV1ProfanityResponse> SaplingProfanity(SaplingProfanityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/profanity"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ProfanityResponse>(),
            SaplingProfanityError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Content safety check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SafetyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSafetyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech, self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting the whole text.
    /// </remarks>
    public Task<ApiV1SafetyResponse> SaplingSafety(SaplingSafetyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/safety"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SafetyResponse>(),
            SaplingSafetyError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
