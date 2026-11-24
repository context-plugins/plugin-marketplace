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
using Sapling.Requests.Analysis;

namespace Sapling.Api;

/// <summary>
/// Tone, sentiment, readability, quality, SEO, classification, extraction, style-guide compliance, and inclusive language.
/// </summary>
public sealed class Analysis
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analysis(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Zero-shot text classification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ClassifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingClassifyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets, anything — without training data. Returns label (the best match, always one of your labels), labels (single-label: just the best match; multi-label: every label whose score &gt;= threshold, possibly empty), scores (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1 applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name, description} objects — a short description per label sharpens borderline decisions. Use context to say what the texts are (e.g. "support tickets for a billing product"). 2-20 labels.
    /// </remarks>
    public Task<ApiV1ClassifyResponse> SaplingClassify(SaplingClassifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/classify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ClassifyResponse>(),
            SaplingClassifyError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a style-guide rule set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StyleguideRulesetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDeleteStyleRulesetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a saved rule set by name. The name may be sent as a query parameter or as <c>name</c> in a JSON body.
    /// </remarks>
    public Task<ApiV1StyleguideRulesetsResponse> SaplingDeleteStyleRuleset(SaplingDeleteStyleRulesetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/styleguide/rulesets"),
            [],
            [new Param("name", request.Name), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1StyleguideRulesetsResponse>(),
            SaplingDeleteStyleRulesetError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Structured data extraction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ExtractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingExtractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value} map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use context to say what the document is. 1-20 fields.
    /// </remarks>
    public Task<ApiV1ExtractResponse> SaplingExtract(SaplingExtractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/extract"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ExtractResponse>(),
            SaplingExtractError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extract structured fields from an uploaded document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FileExtractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingExtractFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000 characters is not read; the response <c>document</c> object reports <c>truncated</c>. Billed like /api/v1/extract on the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute generation budget is spent.
    /// </remarks>
    public Task<ApiV1FileExtractResponse> SaplingExtractFile(SaplingExtractFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/file-extract"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1FileExtractResponse>(),
            SaplingExtractFileError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Inclusive-language check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1InclusiveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingInclusiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low / medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it directly.
    /// </remarks>
    public Task<ApiV1InclusiveResponse> SaplingInclusive(SaplingInclusiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/inclusive"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1InclusiveResponse>(),
            SaplingInclusiveError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List saved style-guide rule sets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StyleguideRulesetsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingListStyleRulesetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rule sets saved for this account (or the key's team), usable by name via the <c>ruleset</c> option of /api/v1/styleguide.
    /// </remarks>
    public Task<ApiV1StyleguideRulesetsResponse1> SaplingListStyleRulesets(SaplingListStyleRulesetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/styleguide/rulesets"),
            [],
            [new Param("return_usage", request.ReturnUsage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StyleguideRulesetsResponse1>(),
            SaplingListStyleRulesetsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Writing quality score
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1QualityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingQualityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric: overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate than the plain score.
    /// </remarks>
    public Task<ApiV1QualityResponse> SaplingQuality(SaplingQualityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/quality"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1QualityResponse>(),
            SaplingQualityError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Readability statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StatisticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingReadabilityStatisticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts of characters, words, and sentences.
    /// </remarks>
    public Task<ApiV1StatisticsResponse> SaplingReadabilityStatistics(SaplingReadabilityStatisticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/statistics"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1StatisticsResponse>(),
            SaplingReadabilityStatisticsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or replace a style-guide rule set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StyleguideRulesetsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSaveStyleRulesetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.
    /// </remarks>
    public Task<ApiV1StyleguideRulesetsResponse2> SaplingSaveStyleRuleset(SaplingSaveStyleRulesetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/styleguide/rulesets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1StyleguideRulesetsResponse2>(),
            SaplingSaveStyleRulesetError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sentiment analysis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SentimentResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSentimentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment with confidence scores.
    /// </remarks>
    public Task<ApiV1SentimentResponse1> SaplingSentiment(SaplingSentimentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sentiment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SentimentResponse1>(),
            SaplingSentimentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SEO analysis and metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SeoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSeoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs, reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first 100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the model aims for &lt;=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for 120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability formulas; unsupported languages get null readability.
    /// </remarks>
    public Task<ApiV1SeoResponse> SaplingSeo(SaplingSeoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/seo"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SeoResponse>(),
            SaplingSeoError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find similar terms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ThesaurusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingSimilarTermsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).
    /// </remarks>
    public Task<ApiV1ThesaurusResponse> SaplingSimilarTerms(SaplingSimilarTermsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/thesaurus"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ThesaurusResponse>(),
            SaplingSimilarTermsError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check text against a style guide
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StyleguideResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingStyleguideError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations list means the text complies. The text is checked as submitted (markup included), so offsets always index it directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).
    /// </remarks>
    public Task<ApiV1StyleguideResponse> SaplingStyleguide(SaplingStyleguideRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/styleguide"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1StyleguideResponse>(),
            SaplingStyleguideError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tone classification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ToneResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingToneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and per-sentence tone labels with confidence scores.
    /// </remarks>
    public Task<ApiV1ToneResponse1> SaplingTone(SaplingToneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tone"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ToneResponse1>(),
            SaplingToneError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
