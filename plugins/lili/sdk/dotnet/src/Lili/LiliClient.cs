using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lili.Core;
using Lili.Core.Configuration;
using Lili.Core.ErrorResponse;
using Lili.Core.Exceptions;
using Lili.Core.Extensions;
using Lili.Core.Logging;
using Lili.Core.Models;
using Lili.Core.Request;
using Lili.Core.Response;
using Lili.Errors;
using Lili.Models;
using Lili.Requests;

namespace Lili;

/// <summary>
/// Operations tagged Lili across 3 of this provider's published API definitions: lili-application-api-openapi.yml, lili-customer-management-api-openapi.yml, lili-webhooks-api-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class LiliClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public LiliClient(HttpClient httpClient, LiliClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "LiliClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("LILI_LOG"),
            "LiliClient",
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
        _auth = new AuthSchemes(options);
    }

    /// <summary>
    /// Create Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Create Webhook API registers a new Webhook Listener in the Lili platform.
    /// <para>
    /// As part of the response object, a token is returned. This token will be returned on any future webhook call to ensure webhook legitimacy.
    /// </para>
    /// </remarks>
    public Task<WebhookCreateResponse> AddWebhook(AddWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/webhooks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookCreateResponse>(),
            AddWebhookError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Bank Letter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a PDF containing a bank letter for a customer
    /// </remarks>
    public Task CreatePaymentNotification(CreatePaymentNotificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/{customerId}/bankLetter"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Delete Webhook API is used to completely delete a registered webhook.
    /// </remarks>
    public Task DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/webhooks/{webhookId}"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWebhookError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get All Webhooks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Get all webhooks returns a list of all the webhooks the platform registered in Lili
    /// </remarks>
    public Task<WebhookListResponse> GetAll(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/webhooks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookListResponse>(),
            GetAllError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Webhook Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Get Webhook Details returns the details of an webhook that was registered in the Lili system.
    /// </remarks>
    public Task<WebhookResponse> GetWebhook(GetWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/webhooks/{webhookId}"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookResponse>(),
            GetWebhookError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a list of payments related to the customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PaymentListResponse> PaymentList(PaymentListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/partner/payments"),
            [],
            [
                new Param("customerId", request.CustomerId),
                new Param("receiverAccountNumber", request.ReceiverAccountNumber),
                new Param("startDate", request.StartDate?.ToIso8601()),
                new Param("endDate", request.EndDate?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentListResponse>(),
            RawErrorResponse.Instance,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Register a payment transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a payment notification in the Lili system
    /// </remarks>
    public Task<PaymentResponse> PutLiliApiV1Payments(PutLiliApiV1PaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/payments"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentResponse>(),
            RawErrorResponse.Instance,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Application
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LeadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RegisterAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Create Application API is used to create a new Application in the Lili platform.
    /// <para>
    /// The respon contains a UUID representing the applicant that was created in the Lili platform, and a URL that allows initializing the application process with the pre-filled information.
    /// </para>
    /// </remarks>
    public Task<LeadResponse> RegisterAccount(RegisterAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/lead"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LeadResponse>(),
            RegisterAccountError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Lead
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLeadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Update Lead API is used to update an existing lead in the Lili platform.
    /// </remarks>
    public Task UpdateLead(UpdateLeadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/lead/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UpdateLeadError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is used to disable an active webhook, or reactivate it.
    /// </remarks>
    public Task<WebhookResponse> UpdateWebhook(UpdateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/webhooks/{webhookId}"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookResponse>(),
            UpdateWebhookError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Additional Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadAdditionalDocError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Upload Additional Document API is used to upload an additional document to the Lili platform for a given lead.
    /// </remarks>
    public Task UploadAdditionalDoc(UploadAdditionalDocRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/lili/api/v1/lead/{customerId}/upload"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UploadAdditionalDocError.Response,
            _auth.AccessKey,
            requestOptions,
            cancellationToken);
}
