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
using ApiVerve.Requests.TextProcessing;

namespace ApiVerve.Api;

public sealed class TextProcessing
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TextProcessing(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Acronym Expander
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AcronymexpanderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcronymexpanderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Expand an acronym to its full meaning with AI assistance
    /// </remarks>
    public Task<V1AcronymexpanderResponse> Acronymexpander(AcronymexpanderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/acronymexpander"),
            [],
            [new Param("acronym", request.Acronym), new Param("context", request.Context)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AcronymexpanderResponse>(),
            AcronymexpanderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Anagram Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AnagramdetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnagramdetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if two texts are anagrams with detailed analysis
    /// </remarks>
    public Task<V1AnagramdetectorResponse> Anagramdetector(AnagramdetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/anagramdetector"),
            [],
            [
                new Param("text1", request.Text1),
                new Param("text2", request.Text2),
                new Param("ignorecase", request.Ignorecase),
                new Param("ignorespaces", request.Ignorespaces),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AnagramdetectorResponse>(),
            AnagramdetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Antonym Finder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AntonymResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AntonymError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given word.
    /// </remarks>
    public Task<V1AntonymResponse> Antonym(AntonymRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/antonym"),
            [],
            [new Param("word", request.Word), new Param("language", request.Language)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AntonymResponse>(),
            AntonymError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cron Expression Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CronparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CronparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse and validate cron expressions with detailed field analysis
    /// </remarks>
    public Task<V1CronparserResponse> Cronparser(CronparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cronparser"),
            [],
            [new Param("expression", request.Expression)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CronparserResponse>(),
            CronparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Data Masking
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DatamaskingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatamaskingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect and mask sensitive information in text
    /// </remarks>
    public Task<V1DatamaskingResponse> Datamasking(DatamaskingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/datamasking"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1DatamaskingResponse>(),
            DatamaskingError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Did You Mean
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DidyoumeanResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DidyoumeanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.
    /// </remarks>
    public Task<V1DidyoumeanResponse> Didyoumean(DidyoumeanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/didyoumean"),
            [],
            [new Param("query", request.Query)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DidyoumeanResponse>(),
            DidyoumeanError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Emoji Decorator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EmojidecoratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EmojidecoratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.
    /// </remarks>
    public Task<V1EmojidecoratorResponse> Emojidecorator(EmojidecoratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/emojidecorator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1EmojidecoratorResponse>(),
            EmojidecoratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Gibberish Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GibberishdetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GibberishdetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyze text to detect gibberish content
    /// </remarks>
    public Task<V1GibberishdetectorResponse> Gibberishdetector(GibberishdetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/gibberishdetector"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1GibberishdetectorResponse>(),
            GibberishdetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Grammar Check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GrammarcheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GrammarcheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected text.
    /// </remarks>
    public Task<V1GrammarcheckResponse> Grammarcheck(GrammarcheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/grammarcheck"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1GrammarcheckResponse>(),
            GrammarcheckError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ISBN Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IsbnvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IsbnvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate and parse ISBN-10 or ISBN-13 numbers
    /// </remarks>
    public Task<V1IsbnvalidatorResponse> Isbnvalidator(IsbnvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/isbnvalidator"),
            [],
            [new Param("isbn", request.Isbn)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IsbnvalidatorResponse>(),
            IsbnvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// JSON Schema Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JsonschemavalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JsonschemavalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate JSON data against a JSON schema
    /// </remarks>
    public Task<V1JsonschemavalidatorResponse> Jsonschemavalidator(JsonschemavalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jsonschemavalidator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1JsonschemavalidatorResponse>(),
            JsonschemavalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Keyword Extractor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1KeywordextractorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="KeywordextractorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract keywords from a body of text
    /// </remarks>
    public Task<V1KeywordextractorResponse> Keywordextractor(KeywordextractorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/keywordextractor"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1KeywordextractorResponse>(),
            KeywordextractorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Leet Speak
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LeetspeakResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LeetspeakError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet Speak.
    /// </remarks>
    public Task<V1LeetspeakResponse> Leetspeak(LeetspeakRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/leetspeak"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LeetspeakResponse>(),
            LeetspeakError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text Lemmatizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LemmatizerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LemmatizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lemmatize text
    /// </remarks>
    public Task<V1LemmatizerResponse> Lemmatizer(LemmatizerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/lemmatizer"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LemmatizerResponse>(),
            LemmatizerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Levenshtein Distance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LevenshteindistanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LevenshteindistanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate Levenshtein distance between two strings
    /// </remarks>
    public Task<V1LevenshteindistanceResponse> Levenshteindistance(LevenshteindistanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/levenshteindistance"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LevenshteindistanceResponse>(),
            LevenshteindistanceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Word Lexicon Analyzer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LexiconResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LexiconError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lexicon is a simple tool for analyzing words. It returns various properties of the word.
    /// </remarks>
    public Task<V1LexiconResponse> Lexicon(LexiconRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/lexicon"),
            [],
            [new Param("word", request.Word)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LexiconResponse>(),
            LexiconError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Line Sorter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LinesorterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LinesorterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sort lines of text alphabetically
    /// </remarks>
    public Task<V1LinesorterResponse> Linesorter(LinesorterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/linesorter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LinesorterResponse>(),
            LinesorterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Markdown Link Extractor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MarkdownlinkextractorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarkdownlinkextractorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse markdown and extract all links with categorization
    /// </remarks>
    public Task<V1MarkdownlinkextractorResponse> Markdownlinkextractor(MarkdownlinkextractorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/markdownlinkextractor"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MarkdownlinkextractorResponse>(),
            MarkdownlinkextractorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Palindrome Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PalindromecheckerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PalindromecheckerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if text is a palindrome with customizable options
    /// </remarks>
    public Task<V1PalindromecheckerResponse> Palindromechecker(PalindromecheckerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/palindromechecker"),
            [],
            [
                new Param("text", request.Text),
                new Param("ignorecase", request.Ignorecase),
                new Param("ignorespaces", request.Ignorespaces),
                new Param("ignorepunctuation", request.Ignorepunctuation),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PalindromecheckerResponse>(),
            PalindromecheckerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Parts Of Speech
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PartsofspeechResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PartsofspeechError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract nouns, verbs, adjectives, adverbs, etc. from text
    /// </remarks>
    public Task<V1PartsofspeechResponse> Partsofspeech(PartsofspeechRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/partsofspeech"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1PartsofspeechResponse>(),
            PartsofspeechError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Phonetic Encoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PhoneticResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PhoneticError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get phonetic codes for a word
    /// </remarks>
    public Task<V1PhoneticResponse> Phonetic(PhoneticRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/phonetic"),
            [],
            [new Param("word", request.Word), new Param("algorithm", request.Algorithm)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PhoneticResponse>(),
            PhoneticError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pig Latin
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PiglatinResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PiglatinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.
    /// </remarks>
    public Task<V1PiglatinResponse> Piglatin(PiglatinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/piglatin"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1PiglatinResponse>(),
            PiglatinError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Profanity Filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ProfanityfilterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProfanityfilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Filter out profanity words from a body of text
    /// </remarks>
    public Task<V1ProfanityfilterResponse> Profanityfilter(ProfanityfilterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/profanityfilter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ProfanityfilterResponse>(),
            ProfanityfilterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text Readability Score
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ReadabilityscoreResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReadabilityscoreError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate the readability score of text
    /// </remarks>
    public Task<V1ReadabilityscoreResponse> Readabilityscore(ReadabilityscoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/readabilityscore"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ReadabilityscoreResponse>(),
            ReadabilityscoreError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reading Time Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ReadingtimeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReadingtimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate estimated reading time for text content
    /// </remarks>
    public Task<V1ReadingtimeResponse> Readingtime(ReadingtimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/readingtime"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ReadingtimeResponse>(),
            ReadingtimeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Regex Tester
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RegextesterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RegextesterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Test regular expressions with detailed analysis and results
    /// </remarks>
    public Task<V1RegextesterResponse> Regextester(RegextesterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/regextester"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1RegextesterResponse>(),
            RegextesterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Punctuation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RemovepunctuationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemovepunctuationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove all punctuation marks from text
    /// </remarks>
    public Task<V1RemovepunctuationResponse> Removepunctuation(RemovepunctuationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/removepunctuation"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1RemovepunctuationResponse>(),
            RemovepunctuationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reverse Text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ReversetextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReversetextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reverse text character by character
    /// </remarks>
    public Task<V1ReversetextResponse> Reversetext(ReversetextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reversetext"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ReversetextResponse>(),
            ReversetextError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Slugify
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SlugifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SlugifyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert text to a URL-friendly slug
    /// </remarks>
    public Task<V1SlugifyResponse> Slugify(SlugifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/slugify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SlugifyResponse>(),
            SlugifyError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Spell Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SpellcheckerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpellcheckerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the spelling of a body of text
    /// </remarks>
    public Task<V1SpellcheckerResponse> Spellchecker(SpellcheckerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/spellchecker"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SpellcheckerResponse>(),
            SpellcheckerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Syllable Counter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SyllablecounterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SyllablecounterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Count syllables in words and text
    /// </remarks>
    public Task<V1SyllablecounterResponse> Syllablecounter(SyllablecounterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/syllablecounter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SyllablecounterResponse>(),
            SyllablecounterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tax ID Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TaxidvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TaxidvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate US Tax IDs (SSN, EIN, ITIN)
    /// </remarks>
    public Task<V1TaxidvalidatorResponse> Taxidvalidator(TaxidvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/taxidvalidator"),
            [],
            [new Param("taxid", request.Taxid)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TaxidvalidatorResponse>(),
            TaxidvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tense Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TenseconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TenseconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert text to past or future tense
    /// </remarks>
    public Task<V1TenseconverterResponse> Tenseconverter(TenseconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tenseconverter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TenseconverterResponse>(),
            TenseconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text Language
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TextlanguageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TextlanguageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect the language of a body of text
    /// </remarks>
    public Task<V1TextlanguageResponse> Textlanguage(TextlanguageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/textlanguage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TextlanguageResponse>(),
            TextlanguageError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text Similarity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TextsimilarityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TextsimilarityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the similarity between two texts
    /// </remarks>
    public Task<V1TextsimilarityResponse> Textsimilarity(TextsimilarityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/textsimilarity"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TextsimilarityResponse>(),
            TextsimilarityError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text Styler
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TextstylerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TextstylerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Text Styler is a simple tool for styling text in various ways. It returns the styled text.
    /// </remarks>
    public Task<V1TextstylerResponse> Textstyler(TextstylerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/textstyler"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TextstylerResponse>(),
            TextstylerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text Summarizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TextsummarizerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TextsummarizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Summarize a body of text. Useful for generating summaries of articles, reports, and more.
    /// </remarks>
    public Task<V1TextsummarizerResponse> Textsummarizer(TextsummarizerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/textsummarizer"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TextsummarizerResponse>(),
            TextsummarizerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text to Emoji
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TexttoemojiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TexttoemojiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the given text.
    /// </remarks>
    public Task<V1TexttoemojiResponse> Texttoemoji(TexttoemojiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/texttoemoji"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TexttoemojiResponse>(),
            TexttoemojiError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Title Case Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TitlecapitalizationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TitlecapitalizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert text to title case
    /// </remarks>
    public Task<V1TitlecapitalizationResponse> Titlecapitalization(TitlecapitalizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/titlecapitalization"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TitlecapitalizationResponse>(),
            TitlecapitalizationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Translator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TranslatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translate text from one language to another
    /// </remarks>
    public Task<V1TranslatorResponse> Translator(TranslatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/translator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TranslatorResponse>(),
            TranslatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Vowel Counter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1VowelcounterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VowelcounterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Count vowels and consonants in text with detailed breakdown
    /// </remarks>
    public Task<V1VowelcounterResponse> Vowelcounter(VowelcounterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vowelcounter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1VowelcounterResponse>(),
            VowelcounterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Website Readability
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebsitereadabilityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebsitereadabilityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyze the readability of a web page
    /// </remarks>
    public Task<V1WebsitereadabilityResponse> Websitereadability(WebsitereadabilityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/websitereadability"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WebsitereadabilityResponse>(),
            WebsitereadabilityError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Word Opposites
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordoppositeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordoppositeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the given word.
    /// </remarks>
    public Task<V1WordoppositeResponse> Wordopposite(WordoppositeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordopposite"),
            [],
            [new Param("word", request.Word)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordoppositeResponse>(),
            WordoppositeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Word Pronunciation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordpronunciationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordpronunciationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the pronunciation of a word
    /// </remarks>
    public Task<V1WordpronunciationResponse> Wordpronunciation(WordpronunciationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordpronunciation"),
            [],
            [new Param("word", request.Word)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordpronunciationResponse>(),
            WordpronunciationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rhyming Words
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordrhymesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordrhymesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of words that rhyme with the specified word
    /// </remarks>
    public Task<V1WordrhymesResponse> Wordrhymes(WordrhymesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordrhymes"),
            [],
            [new Param("word", request.Word), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordrhymesResponse>(),
            WordrhymesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
