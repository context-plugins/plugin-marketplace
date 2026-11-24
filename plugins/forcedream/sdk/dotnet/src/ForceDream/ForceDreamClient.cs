using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ForceDream.Core;
using ForceDream.Core.Authentication;
using ForceDream.Core.Configuration;
using ForceDream.Core.Exceptions;
using ForceDream.Core.Logging;
using ForceDream.Core.Models;
using ForceDream.Core.Request;
using ForceDream.Core.Response;
using ForceDream.Errors;
using ForceDream.Requests;

namespace ForceDream;

/// <summary>
/// 33 M2M data bridges. HTTP 402 + Stripe payment.
/// </summary>
public sealed class ForceDreamClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public ForceDreamClient(HttpClient httpClient, ForceDreamClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ForceDreamClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FORCE_DREAM_LOG"),
            "ForceDreamClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
    }

    /// <summary>
    /// Outlier detection (£0.30)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnomalyDetectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task AnomalyDetection(AnomalyDetectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/anomaly_detection"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            AnomalyDetectionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text classification (£0.05)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClassificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task Classification(ClassificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/classification"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            ClassificationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Code writing (£0.50)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CodeGenerationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task CodeGeneration(CodeGenerationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/code_generation"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CodeGenerationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fraud IP check (£0.02)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FraudSignalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task FraudSignal(FraudSignalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/fraud_signal"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            FraudSignalError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lead quality score (£0.50)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LeadScoreError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task LeadScore(LeadScoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/lead_score"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            LeadScoreError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// LLM inference (£0.10)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModelInferenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task ModelInference(ModelInferenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/model_inference"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            ModelInferenceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Optimised prompts (£0.25)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PromptTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task PromptTemplate(PromptTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/prompt_template"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PromptTemplateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// WORM task verification (£0.20)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProofOfWorkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task ProofOfWork(ProofOfWorkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/proof_of_work"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            ProofOfWorkError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Vulnerability scan (£0.75)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SecurityScanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task SecurityScan(SecurityScanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/security_scan"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SecurityScanError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cached LLM embeddings (£0.05)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SemanticCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task SemanticCache(SemanticCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/semantic_cache"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SemanticCacheError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market sentiment (£0.10)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SentimentFeedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task SentimentFeed(SentimentFeedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/sentiment_feed"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SentimentFeedError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Document summary (£0.10)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SummarizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task Summarization(SummarizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/summarization"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SummarizationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tax rate (£0.01)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TaxJarLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task TaxJarLookup(TaxJarLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/tax_jar_lookup"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TaxJarLookupError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Language translation (£0.08)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task Translation(TranslationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/translation"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TranslationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Output verification (£0.15)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
    /// </remarks>
    public Task Validation(ValidationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/oracle/validation"),
            [],
            [],
            [
                new HeaderParam("X-Payment-Intent-Id", request.XPaymentIntentId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            ValidationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
