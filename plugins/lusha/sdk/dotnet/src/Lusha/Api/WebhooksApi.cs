using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Models;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;
using Lusha.Requests.WebhooksApi;

namespace Lusha.Api;

/// <summary>
/// Subscribe to real-time notifications when contacts change jobs or companies experience key business events.
/// </summary>
public sealed class WebhooksApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WebhooksApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Opt-Out Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OptOutSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOptOutSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subscribe to real-time notifications when a contact opts out of data processing. When a contact requests removal, Lusha sends an <c>OptOutWebhookPayload</c> to your endpoint so you can action the removal in your own systems (CRM, outreach tools, etc.).
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/subscriptions/opt-out</b>
    /// </para>
    /// <para>
    /// ---
    /// </para>
    /// <para>
    /// <b>How it works:</b>
    /// - Create one opt-out subscription per account (scoped to <c>contact</c> entity type)
    /// - Lusha delivers a POST request to your URL whenever a contact opts out
    /// - The payload includes the contact identity, opt-out date, and the specific data points (emails and/or phones) that must be removed
    /// </para>
    /// <para>
    /// <b>Payload you'll receive:</b>
    /// <code>
    /// {
    /// "contactId": "987654321",
    /// "fullName": "Jane Doe",
    /// "companyName": "Acme Corp",
    /// "jobTitle": "Director of Product",
    /// "linkedinUrl": "https://www.linkedin.com/in/jane-doe",
    /// "contactOptOutDate": "2026-04-22 14:32:11.412",
    /// "contactExposureDate": "2025-08-03 09:15:47",
    /// "datapoints": [
    /// { "datapointId": "+14155550199", "datapointType": "phone" },
    /// { "datapointId": "jane.doe@acme.com", "datapointType": "email" }
    /// ],
    /// "partnerClientId": "acme-crm-tenant-42"
    /// }
    /// </code>
    /// </para>
    /// <para>
    /// &gt; <b>Important:</b> Signature verification applies the same way as standard webhook deliveries. See Security &amp; Verification for details.
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> Ensure your account has a webhook secret before creating this subscription. See Regenerate Account Secret.
    /// </para>
    /// </remarks>
    public Task<OptOutSubscriptionResponse> CreateOptOutSubscription(CreateOptOutSubscriptionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions/opt-out"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OptOutSubscriptionResponse>(),
            CreateOptOutSubscriptionError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates one or more webhook subscriptions for real-time signal notifications.
    /// <para>
    /// <b>Delivery &amp; Reliability:</b>
    /// - Webhooks are delivered with automatic retry on failures
    /// - Maximum 3 retry attempts with exponential backoff
    /// - Subscriptions auto-disable after max retries exceeded
    /// - All deliveries are logged in audit logs
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> Your webhook endpoint must respond with a proper acknowledgment.
    /// See Client Response Format below for details.
    /// </para>
    /// <para>
    /// &gt; <b>Limit:</b> Maximum 25 subscriptions per request
    /// </para>
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/subscriptions</b>
    /// </para>
    /// <para>
    /// ---
    /// </para>
    /// <para>
    /// ### Webhook Payload You'll Receive
    /// When a signal is triggered, this payload is sent to your webhook URL:
    /// <code>
    /// {
    /// "id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c",
    /// "type": "promotion",
    /// "entityType": "contact",
    /// "entityId": "4158887495",
    /// "subscriptionId": "507f1f77bcf86cd799439011",
    /// "data": {
    /// "personId": 4158887495,
    /// "currentCompanyId": 40823133,
    /// "currentCompanyName": "OMG Hospitality Group LLC",
    /// "currentDomain": "omghospitalitygroup.com",
    /// "currentTitle": "Bartender",
    /// "currentDepartments": [
    /// { "id": 7, "value": "Other" }
    /// ],
    /// "previousCompanyName": "First Watch Restaurants",
    /// "previousDomain": "firstwatch.com",
    /// "signalDate": "2025-07-01"
    /// },
    /// "timestamp": "2026-01-14T16:16:35.841Z",
    /// "billing": {
    /// "creditsCharged": 1
    /// }
    /// }
    /// </code>
    /// <b>Example — Company News Signal:</b>
    /// <code>
    /// {
    /// "id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45",
    /// "type": "commercialActivityNews",
    /// "entityType": "company",
    /// "entityId": "33222678",
    /// "subscriptionId": "507f1f77bcf86cd799439011",
    /// "data": {
    /// "companyId": "33222678",
    /// "companyName": "Lusha",
    /// "domain": "lusha.com",
    /// "signalId": "1503910",
    /// "eventType": "partnership",
    /// "eventSummary": "Lusha announced a strategic partnership with Salesforce.",
    /// "articlePublishedDate": "2025-06-15",
    /// "articleTitle": "Lusha Partners with Salesforce",
    /// "articleHighlight": "The partnership enables Salesforce users to access Lusha data directly within their CRM.",
    /// "eventEffectiveDate": "2025-06-10",
    /// "articleUrl": "https://example.com/lusha-salesforce-partnership"
    /// },
    /// "timestamp": "2026-01-14T16:16:35.841Z",
    /// "billing": {
    /// "creditsCharged": 1
    /// }
    /// }
    /// </code>
    /// </para>
    /// <para>
    /// <b>Headers Included:</b>
    /// </para>
    /// <para>
    /// | Header | Description |
    /// |--------|-------------|
    /// | <c>X-Lusha-Signature</c> | HMAC-SHA256 signature for verification |
    /// | <c>X-Lusha-Timestamp</c> | Unix timestamp of the request |
    /// | <c>Content-Type</c> | application/json |
    /// | <c>User-Agent</c> | Lusha-Webhooks/1.0 |
    /// </para>
    /// <para>
    /// ---
    /// ⚠️ <b>Important:</b> Ensure your account has a webhook secret before creating subscriptions.
    /// Create one via the Regenerate Account Secret endpoint.
    /// </para>
    /// <para>
    /// ---
    /// </para>
    /// <para>
    /// ### Client Response Format (Required)
    /// </para>
    /// <para>
    /// When your webhook endpoint receives a delivery, it <b>must</b> acknowledge receipt with this response:
    /// </para>
    /// <para>
    /// <b>Required Response:</b>
    /// <code>
    /// {
    /// "received": true,
    /// "timestamp": "2026-02-05T10:30:45.123Z",
    /// "webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
    /// }
    /// </code>
    /// </para>
    /// <para>
    /// Response Requirements
    /// </para>
    /// <para>
    /// | Requirement | Value |
    /// |-------------|-------|
    /// | <b>HTTP Status</b> | <c>201 Created</c> (recommended) or any <c>2xx</c> status |
    /// | <b>Content-Type</b> | <c>application/json</c> |
    /// | <b>Response Time</b> | Within 10 seconds |
    /// </para>
    /// <para>
    /// Field Descriptions &amp; Implementation Guide
    /// </para>
    /// <para>
    /// <b>Field Descriptions:</b>
    /// * <c>received</c> (boolean, required): Confirmation flag - must be <c>true</c>
    /// * <c>timestamp</c> (string, required): ISO 8601 timestamp of receipt
    /// * <c>webhookId</c> (string, required): Echo the <c>id</c> from webhook payload
    /// </para>
    /// <para>
    /// <b>Implementation Example:</b>
    /// <code>
    /// app.post('/webhook', async (req, res) =&gt; {
    /// // 1. Verify signature
    /// if (!verifyWebhookSignature(req)) {
    /// return res.status(401).json({ error: 'Invalid signature' });
    /// }
    /// </para>
    /// <para>
    /// // 2. Queue for async processing
    /// await queueWebhook(req.body);
    /// </para>
    /// <para>
    /// // 3. Acknowledge immediately
    /// res.status(201).json({
    /// received: true,
    /// timestamp: new Date().toISOString(),
    /// webhookId: req.body.id
    /// });
    /// <code>
    /// </para>
    /// <para>
    /// <b>Important Notes:</b>
    /// * Return acknowledgment <b>before</b> heavy processing
    /// * Non-2xx responses trigger retry mechanism
    /// * After 3 failed retries, subscription is disabled
    /// </para>
    /// <para>
    /// ----
    /// </para>
    /// </remarks>
    public Task<CreateSubscriptionResponse> CreateSubscription(CreateSubscriptionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateSubscriptionResponse>(),
            CreateSubscriptionError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSubscriptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete one or more webhook subscriptions. Returns detailed results for each deletion with partial success support.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/subscriptions/delete</b>
    /// </para>
    /// <para>
    /// ---
    /// </para>
    /// <para>
    /// <b>Behavior:</b>
    /// - Each subscription is processed independently
    /// - Returns detailed results for each item including deleted subscription info
    /// - Invalid ID formats are gracefully handled and reported as NOT_FOUND
    /// - Duplicate IDs are automatically deduplicated
    /// - Deletion is permanent and cannot be undone
    /// </para>
    /// </remarks>
    public Task<DeleteSubscriptionResponse> DeleteSubscriptions(DeleteSubscriptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions/delete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteSubscriptionResponse>(),
            DeleteSubscriptionsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Account Secret
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiAccountSecretResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountSecretError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the current account webhook secret.
    /// <para>
    /// *Endpoint*: <b>(GET) https://api.lusha.com/api/account/secret</b>
    /// </para>
    /// </remarks>
    public Task<ApiAccountSecretResponse> GetAccountSecret(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/account/secret"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiAccountSecretResponse>(),
            GetAccountSecretError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Audit Log Statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuditLogStatsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAuditLogStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get delivery statistics for your account.
    /// <para>
    /// *Endpoint*: <b>(GET) https://api.lusha.com/api/audit-logs/stats</b>
    /// </para>
    /// </remarks>
    public Task<AuditLogStatsResponse> GetAuditLogStats(GetAuditLogStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/audit-logs/stats"),
            [],
            [new Param("subscriptionId", request.SubscriptionId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuditLogStatsResponse>(),
            GetAuditLogStatsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Audit Logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuditLogsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAuditLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve webhook delivery logs for your account.
    /// <para>
    /// *Endpoint*: <b>(GET) https://api.lusha.com/api/audit-logs</b>
    /// </para>
    /// <para>
    /// <b>What's Logged:</b>
    /// - All webhook delivery attempts (success and failures)
    /// - HTTP status codes and response times
    /// - Error messages for failed deliveries
    /// - Delivery timestamps and duration metrics
    /// </para>
    /// <para>
    /// <b>Filtering:</b>
    /// - Filter by subscription ID to see logs for specific subscriptions
    /// - Filter by status to see only successes, failures, or permanent failures
    /// </para>
    /// <para>
    /// <b>Rate Limit:</b> 100 requests/minute per account
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> Logs are retained for 90 days (successful) and 180 days (failed/DLQ)
    /// </para>
    /// </remarks>
    public Task<AuditLogsResponse> GetAuditLogs(GetAuditLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/audit-logs"),
            [],
            [
                new Param("subscriptionId", request.SubscriptionId),
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuditLogsResponse>(),
            GetAuditLogsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Subscription by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionWithoutSecret"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubscriptionByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single webhook subscription by ID.
    /// <para>
    /// *Endpoint*: <b>(GET) https://api.lusha.com/api/subscriptions/{id}</b>
    /// </para>
    /// </remarks>
    public Task<SubscriptionWithoutSecret> GetSubscriptionById(GetSubscriptionByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionWithoutSecret>(),
            GetSubscriptionByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSubscriptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all webhook subscriptions for your account with pagination support.
    /// <para>
    /// *Endpoint*: <b>(GET) https://api.lusha.com/api/subscriptions</b>
    /// </para>
    /// <para>
    /// <b>Pagination:</b>
    /// - Results are sorted by <c>createdAt</c> in descending order (newest first)
    /// - Default limit: 10, max limit: 100
    /// - Use <c>offset</c> for pagination through large result sets
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> The webhook <c>secret</c> is never returned in list responses for security.
    /// </para>
    /// </remarks>
    public Task<SubscriptionListResponse> ListSubscriptions(ListSubscriptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionListResponse>(),
            ListSubscriptionsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Regenerate Account Secret
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiAccountSecretRegenerateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RegenerateAccountSecretError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Regenerate the account webhook secret. Affects <b>all subscriptions</b> for the account.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/account/secret/regenerate</b>
    /// </para>
    /// <para>
    /// <b>Behavior:</b>
    /// - If a secret already exists: Replaces with new secret (old secret is invalidated)
    /// - If no secret exists: Creates new secret automatically
    /// </para>
    /// <para>
    /// <b>Important Notes:</b>
    /// - The secret is only shown once in the response. Store it securely.
    /// - This endpoint always succeeds (upsert operation)
    /// - Regenerating invalidates the old secret for <b>all subscriptions</b> (if one existed)
    /// - An account secret must exist before webhooks can be delivered
    /// </para>
    /// </remarks>
    public Task<ApiAccountSecretRegenerateResponse> RegenerateAccountSecret(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/account/secret/regenerate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiAccountSecretRegenerateResponse>(),
            RegenerateAccountSecretError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Test a webhook subscription by sending a test signal. Supports three test modes.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/subscriptions/{id}/test</b>
    /// ---
    /// <b>Test Modes:</b>
    /// - <c>direct</c> - Quick HTTP check only (validates URL responds correctly)
    /// - <c>kafka</c> - Fanout handler only (tests Kafka message processing)
    /// - <c>full</c> - Complete Kafka flow (default - end-to-end test)
    /// </para>
    /// <para>
    /// <b>Important Notes:</b>
    /// - Test deliveries do NOT consume credits
    /// - Test payloads use mock data
    /// - Useful for verifying webhook configuration before going live
    /// </para>
    /// </remarks>
    public Task<TestSubscriptionResponse> TestSubscription(TestSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions/{id}/test"),
            [new TemplateParam("id", request.Id)],
            [new Param("mode", request.Mode)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<TestSubscriptionResponse>(),
            TestSubscriptionError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing webhook subscription. All fields are optional.
    /// <para>
    /// *Endpoint*: <b>(PATCH) https://api.lusha.com/api/subscriptions/{id}</b>
    /// </para>
    /// <para>
    /// ---
    /// <b>Reactivating Disabled Subscriptions:</b>
    /// </para>
    /// <para>
    /// When setting <c>isActive: true</c> on a previously disabled subscription, the system automatically:
    /// - Clears the <c>blockReason</c> field
    /// - Clears the <c>blockedAt</c> timestamp
    /// - Resets the retry counter
    /// </para>
    /// <para>
    /// <b>Regenerating Secrets:</b>
    /// </para>
    /// <para>
    /// Set <c>regenerateSecret: true</c> to generate a new webhook secret. The new secret:
    /// - Affects <b>all subscriptions</b> for your account
    /// - Is only shown once in the response
    /// - Immediately invalidates the old secret
    /// ---
    /// </para>
    /// </remarks>
    public Task<SubscriptionResponse> UpdateSubscription(UpdateSubscriptionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/subscriptions/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponse>(),
            UpdateSubscriptionError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
