using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonComprehend.Core;
using AmazonComprehend.Core.Exceptions;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Core.Request;
using AmazonComprehend.Core.Response;
using AmazonComprehend.Errors;
using AmazonComprehend.Requests.Operations;

namespace AmazonComprehend.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Classify Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClassifyDocument2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.
    /// </remarks>
    public Task ClassifyDocument2(ClassifyDocument2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ClassifyDocument"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ClassifyDocument2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Contains Pii Entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContainsPiiEntities2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
    /// </remarks>
    public Task ContainsPiiEntities2(ContainsPiiEntities2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ContainsPiiEntities"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ContainsPiiEntities2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Dominant Language
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectDominantLanguage2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.
    /// </remarks>
    public Task DetectDominantLanguage2(DetectDominantLanguage2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectDominantLanguage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectDominantLanguage2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectEntities2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.
    /// </remarks>
    public Task DetectEntities2(DetectEntities2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectEntities"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectEntities2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Key Phrases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectKeyPhrases2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects the key noun phrases found in the text.
    /// </remarks>
    public Task DetectKeyPhrases2(DetectKeyPhrases2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectKeyPhrases"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectKeyPhrases2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Pii Entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectPiiEntities2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
    /// </remarks>
    public Task DetectPiiEntities2(DetectPiiEntities2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectPiiEntities"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectPiiEntities2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Sentiment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectSentiment2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).
    /// </remarks>
    public Task DetectSentiment2(DetectSentiment2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectSentiment"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectSentiment2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Syntax
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectSyntax2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide.
    /// </remarks>
    public Task DetectSyntax2(DetectSyntax2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectSyntax"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectSyntax2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Targeted Sentiment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectTargetedSentiment2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DetectTargetedSentiment2(DetectTargetedSentiment2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectTargetedSentiment"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectTargetedSentiment2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Toxic Content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectToxicContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a results list that matches the size of the input list. For more information about toxicity detection, see Toxicity detection in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DetectToxicContent(DetectToxicContentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectToxicContent"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectToxicContentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
