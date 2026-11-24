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
using AmazonComprehend.Requests.AmazonComprehendApi;

namespace AmazonComprehend.Api;

public sealed class AmazonComprehendApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AmazonComprehendApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch Detect Dominant Language
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDetectDominantLanguageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.
    /// </remarks>
    public Task BatchDetectDominantLanguage(BatchDetectDominantLanguageOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchDetectDominantLanguage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchDetectDominantLanguageError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Detect Entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDetectEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see Entities in the Comprehend Developer Guide.
    /// </remarks>
    public Task BatchDetectEntities(BatchDetectEntitiesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchDetectEntities"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchDetectEntitiesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Detect Key Phrases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDetectKeyPhrasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects the key noun phrases found in a batch of documents.
    /// </remarks>
    public Task BatchDetectKeyPhrases(BatchDetectKeyPhrasesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchDetectKeyPhrases"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchDetectKeyPhrasesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Detect Sentiment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDetectSentimentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.
    /// </remarks>
    public Task BatchDetectSentiment(BatchDetectSentimentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchDetectSentiment"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchDetectSentimentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Detect Syntax
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDetectSyntaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see Syntax in the Comprehend Developer Guide.
    /// </remarks>
    public Task BatchDetectSyntax(BatchDetectSyntaxOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchDetectSyntax"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchDetectSyntaxError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Detect Targeted Sentiment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDetectTargetedSentimentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task BatchDetectTargetedSentiment(BatchDetectTargetedSentimentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchDetectTargetedSentiment"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchDetectTargetedSentimentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Classify Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClassifyDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.
    /// </remarks>
    public Task ClassifyDocument(ClassifyDocumentOperationRequest request,
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
            ClassifyDocumentError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ContainsPiiEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
    /// </remarks>
    public Task ContainsPiiEntities(ContainsPiiEntitiesOperationRequest request,
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
            ContainsPiiEntitiesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task CreateDataset(CreateDatasetOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateDataset"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateDatasetError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Document Classifier
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDocumentClassifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see Training classifier models in the Comprehend Developer Guide.
    /// </remarks>
    public Task CreateDocumentClassifier(CreateDocumentClassifierOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateDocumentClassifier"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateDocumentClassifierError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEndpointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see Managing endpoints.
    /// </remarks>
    public Task CreateEndpoint(CreateEndpointOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateEndpoint"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateEndpointError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Entity Recognizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEntityRecognizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the DescribeEntityRecognizer API.
    /// </remarks>
    public Task CreateEntityRecognizer(CreateEntityRecognizerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateEntityRecognizer"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateEntityRecognizerError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Flywheel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFlywheelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model. To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task CreateFlywheel(CreateFlywheelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateFlywheel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateFlywheelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Document Classifier
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDocumentClassifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use.
    /// </remarks>
    public Task DeleteDocumentClassifier(DeleteDocumentClassifierOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteDocumentClassifier"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDocumentClassifierError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEndpointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see Managing endpoints.
    /// </remarks>
    public Task DeleteEndpoint(DeleteEndpointOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteEndpoint"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEndpointError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Entity Recognizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEntityRecognizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use.
    /// </remarks>
    public Task DeleteEntityRecognizer(DeleteEntityRecognizerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteEntityRecognizer"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEntityRecognizerError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Flywheel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFlywheelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DeleteFlywheel(DeleteFlywheelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteFlywheel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteFlywheelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a resource-based policy that is attached to a custom model.
    /// </remarks>
    public Task DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteResourcePolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the dataset that you specify. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DescribeDataset(DescribeDatasetOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeDataset"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeDatasetError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Document Classification Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeDocumentClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
    /// </remarks>
    public Task DescribeDocumentClassificationJob(DescribeDocumentClassificationJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeDocumentClassificationJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeDocumentClassificationJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Document Classifier
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeDocumentClassifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a document classifier.
    /// </remarks>
    public Task DescribeDocumentClassifier(DescribeDocumentClassifierOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeDocumentClassifier"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeDocumentClassifierError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Dominant Language Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeDominantLanguageDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
    /// </remarks>
    public Task DescribeDominantLanguageDetectionJob(DescribeDominantLanguageDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeDominantLanguageDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeDominantLanguageDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeEndpointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see Managing endpoints.
    /// </remarks>
    public Task DescribeEndpoint(DescribeEndpointOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeEndpoint"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeEndpointError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Entities Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeEntitiesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
    /// </remarks>
    public Task DescribeEntitiesDetectionJob(DescribeEntitiesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeEntitiesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeEntitiesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Entity Recognizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeEntityRecognizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
    /// </remarks>
    public Task DescribeEntityRecognizer(DescribeEntityRecognizerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeEntityRecognizer"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeEntityRecognizerError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Events Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeEventsDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the status and details of an events detection job.
    /// </remarks>
    public Task DescribeEventsDetectionJob(DescribeEventsDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeEventsDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeEventsDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Flywheel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeFlywheelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides configuration information about the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DescribeFlywheel(DescribeFlywheelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeFlywheel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeFlywheelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Flywheel Iteration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeFlywheelIterationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DescribeFlywheelIteration(DescribeFlywheelIterationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeFlywheelIteration"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeFlywheelIterationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Key Phrases Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeKeyPhrasesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
    /// </remarks>
    public Task DescribeKeyPhrasesDetectionJob(DescribeKeyPhrasesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeKeyPhrasesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeKeyPhrasesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Pii Entities Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribePiiEntitiesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
    /// </remarks>
    public Task DescribePiiEntitiesDetectionJob(DescribePiiEntitiesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribePiiEntitiesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribePiiEntitiesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.
    /// </remarks>
    public Task DescribeResourcePolicy(DescribeResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeResourcePolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Sentiment Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSentimentDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
    /// </remarks>
    public Task DescribeSentimentDetectionJob(DescribeSentimentDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeSentimentDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeSentimentDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Targeted Sentiment Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTargetedSentimentDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.
    /// </remarks>
    public Task DescribeTargetedSentimentDetectionJob(DescribeTargetedSentimentDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeTargetedSentimentDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeTargetedSentimentDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Topics Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTopicsDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
    /// </remarks>
    public Task DescribeTopicsDetectionJob(DescribeTopicsDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeTopicsDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeTopicsDetectionJobError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectDominantLanguageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.
    /// </remarks>
    public Task DetectDominantLanguage(DetectDominantLanguageOperationRequest request,
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
            DetectDominantLanguageError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.
    /// </remarks>
    public Task DetectEntities(DetectEntitiesOperationRequest request,
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
            DetectEntitiesError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectKeyPhrasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects the key noun phrases found in the text.
    /// </remarks>
    public Task DetectKeyPhrases(DetectKeyPhrasesOperationRequest request,
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
            DetectKeyPhrasesError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectPiiEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
    /// </remarks>
    public Task DetectPiiEntities(DetectPiiEntitiesOperationRequest request,
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
            DetectPiiEntitiesError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectSentimentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).
    /// </remarks>
    public Task DetectSentiment(DetectSentimentOperationRequest request,
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
            DetectSentimentError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectSyntaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide.
    /// </remarks>
    public Task DetectSyntax(DetectSyntaxOperationRequest request,
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
            DetectSyntaxError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DetectTargetedSentimentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task DetectTargetedSentiment(DetectTargetedSentimentOperationRequest request,
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
            DetectTargetedSentimentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImportModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it. The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.
    /// </remarks>
    public Task ImportModel(ImportModelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ImportModel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ImportModelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDatasetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the datasets that you have configured in this Region. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task ListDatasets(ListDatasetsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDatasets"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDatasetsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Document Classification Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocumentClassificationJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the documentation classification jobs that you have submitted.
    /// </remarks>
    public Task ListDocumentClassificationJobs(ListDocumentClassificationJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDocumentClassificationJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDocumentClassificationJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Document Classifier Summaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocumentClassifierSummariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of summaries of the document classifiers that you have created
    /// </remarks>
    public Task ListDocumentClassifierSummaries(ListDocumentClassifierSummariesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDocumentClassifierSummaries"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDocumentClassifierSummariesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Document Classifiers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocumentClassifiersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the document classifiers that you have created.
    /// </remarks>
    public Task ListDocumentClassifiers(ListDocumentClassifiersOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDocumentClassifiers"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDocumentClassifiersError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Dominant Language Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDominantLanguageDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the dominant language detection jobs that you have submitted.
    /// </remarks>
    public Task ListDominantLanguageDetectionJobs(ListDominantLanguageDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDominantLanguageDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDominantLanguageDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Endpoints
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEndpointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing endpoints.
    /// </remarks>
    public Task ListEndpoints(ListEndpointsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListEndpoints"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListEndpointsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Entities Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEntitiesDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the entity detection jobs that you have submitted.
    /// </remarks>
    public Task ListEntitiesDetectionJobs(ListEntitiesDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListEntitiesDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListEntitiesDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Entity Recognizer Summaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEntityRecognizerSummariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of summaries for the entity recognizers that you have created.
    /// </remarks>
    public Task ListEntityRecognizerSummaries(ListEntityRecognizerSummariesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListEntityRecognizerSummaries"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListEntityRecognizerSummariesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Entity Recognizers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEntityRecognizersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.
    /// </remarks>
    public Task ListEntityRecognizers(ListEntityRecognizersOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListEntityRecognizers"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListEntityRecognizersError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Events Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEventsDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the events detection jobs that you have submitted.
    /// </remarks>
    public Task ListEventsDetectionJobs(ListEventsDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListEventsDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListEventsDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Flywheel Iteration History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFlywheelIterationHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task ListFlywheelIterationHistory(ListFlywheelIterationHistoryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListFlywheelIterationHistory"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListFlywheelIterationHistoryError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Flywheels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFlywheelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the flywheels that you have created.
    /// </remarks>
    public Task ListFlywheels(ListFlywheelsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListFlywheels"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListFlywheelsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Key Phrases Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListKeyPhrasesDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of key phrase detection jobs that you have submitted.
    /// </remarks>
    public Task ListKeyPhrasesDetectionJobs(ListKeyPhrasesDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListKeyPhrasesDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListKeyPhrasesDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Pii Entities Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPiiEntitiesDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the PII entity detection jobs that you have submitted.
    /// </remarks>
    public Task ListPiiEntitiesDetectionJobs(ListPiiEntitiesDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListPiiEntitiesDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListPiiEntitiesDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sentiment Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSentimentDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of sentiment detection jobs that you have submitted.
    /// </remarks>
    public Task ListSentimentDetectionJobs(ListSentimentDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListSentimentDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListSentimentDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tags For Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all tags associated with a given Amazon Comprehend resource.
    /// </remarks>
    public Task ListTagsForResource(ListTagsForResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTagsForResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTagsForResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Targeted Sentiment Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTargetedSentimentDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of targeted sentiment detection jobs that you have submitted.
    /// </remarks>
    public Task ListTargetedSentimentDetectionJobs(ListTargetedSentimentDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTargetedSentimentDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTargetedSentimentDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Topics Detection Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTopicsDetectionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the topic detection jobs that you have submitted.
    /// </remarks>
    public Task ListTopicsDetectionJobs(ListTopicsDetectionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTopicsDetectionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTopicsDetectionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.
    /// </remarks>
    public Task PutResourcePolicy(PutResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#PutResourcePolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Document Classification Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartDocumentClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous document classification job using a custom classification model. Use the DescribeDocumentClassificationJob operation to track the progress of the job.
    /// </remarks>
    public Task StartDocumentClassificationJob(StartDocumentClassificationJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartDocumentClassificationJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartDocumentClassificationJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Dominant Language Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartDominantLanguageDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
    /// </remarks>
    public Task StartDominantLanguageDetectionJob(StartDominantLanguageDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartDominantLanguageDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartDominantLanguageDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Entities Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartEntitiesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job. This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to provide access to the recognizer being used to detect the custom entity.
    /// </remarks>
    public Task StartEntitiesDetectionJob(StartEntitiesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartEntitiesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartEntitiesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Events Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartEventsDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous event detection job for a collection of documents.
    /// </remarks>
    public Task StartEventsDetectionJob(StartEventsDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartEventsDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartEventsDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Flywheel Iteration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartFlywheelIterationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
    /// </remarks>
    public Task StartFlywheelIteration(StartFlywheelIterationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartFlywheelIteration"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartFlywheelIterationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Key Phrases Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartKeyPhrasesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
    /// </remarks>
    public Task StartKeyPhrasesDetectionJob(StartKeyPhrasesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartKeyPhrasesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartKeyPhrasesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Pii Entities Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartPiiEntitiesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous PII entity detection job for a collection of documents.
    /// </remarks>
    public Task StartPiiEntitiesDetectionJob(StartPiiEntitiesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartPiiEntitiesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartPiiEntitiesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Sentiment Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartSentimentDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.
    /// </remarks>
    public Task StartSentimentDetectionJob(StartSentimentDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartSentimentDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartSentimentDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Targeted Sentiment Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartTargetedSentimentDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the DescribeTargetedSentimentDetectionJob operation to track the status of a job.
    /// </remarks>
    public Task StartTargetedSentimentDetectionJob(StartTargetedSentimentDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartTargetedSentimentDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartTargetedSentimentDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Topics Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartTopicsDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.
    /// </remarks>
    public Task StartTopicsDetectionJob(StartTopicsDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartTopicsDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartTopicsDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Dominant Language Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopDominantLanguageDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.
    /// </remarks>
    public Task StopDominantLanguageDetectionJob(StopDominantLanguageDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopDominantLanguageDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopDominantLanguageDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Entities Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopEntitiesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.
    /// </remarks>
    public Task StopEntitiesDetectionJob(StopEntitiesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopEntitiesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopEntitiesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Events Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopEventsDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops an events detection job in progress.
    /// </remarks>
    public Task StopEventsDetectionJob(StopEventsDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopEventsDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopEventsDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Key Phrases Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopKeyPhrasesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.
    /// </remarks>
    public Task StopKeyPhrasesDetectionJob(StopKeyPhrasesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopKeyPhrasesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopKeyPhrasesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Pii Entities Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopPiiEntitiesDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a PII entities detection job in progress.
    /// </remarks>
    public Task StopPiiEntitiesDetectionJob(StopPiiEntitiesDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopPiiEntitiesDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopPiiEntitiesDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Sentiment Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopSentimentDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.
    /// </remarks>
    public Task StopSentimentDetectionJob(StopSentimentDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopSentimentDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopSentimentDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Targeted Sentiment Detection Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopTargetedSentimentDetectionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.
    /// </remarks>
    public Task StopTargetedSentimentDetectionJob(StopTargetedSentimentDetectionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopTargetedSentimentDetectionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopTargetedSentimentDetectionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Training Document Classifier
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopTrainingDocumentClassifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.
    /// </remarks>
    public Task StopTrainingDocumentClassifier(StopTrainingDocumentClassifierOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopTrainingDocumentClassifier"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopTrainingDocumentClassifierError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Training Entity Recognizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopTrainingEntityRecognizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.
    /// </remarks>
    public Task StopTrainingEntityRecognizer(StopTrainingEntityRecognizerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StopTrainingEntityRecognizer"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopTrainingEntityRecognizerError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
    /// </remarks>
    public Task TagResource(TagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#TagResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Untag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UntagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a specific tag associated with an Amazon Comprehend resource.
    /// </remarks>
    public Task UntagResource(UntagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UntagResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UntagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEndpointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.
    /// </remarks>
    public Task UpdateEndpoint(UpdateEndpointOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateEndpoint"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateEndpointError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Flywheel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFlywheelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the configuration information for an existing flywheel.
    /// </remarks>
    public Task UpdateFlywheel(UpdateFlywheelOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateFlywheel"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateFlywheelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
