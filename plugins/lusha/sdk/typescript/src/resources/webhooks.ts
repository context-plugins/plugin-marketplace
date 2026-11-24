import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiAccountSecretRegenerateResponseSchema,
  type ApiAccountSecretRegenerateResponse,
} from "../models/api-account-secret-regenerate-response.js";
import {
  apiAccountSecretResponseSchema,
  type ApiAccountSecretResponse,
} from "../models/api-account-secret-response.js";
import {
  apiSubscriptionsDeleteRequestInternalSchema,
  type ApiSubscriptionsDeleteRequest,
} from "../models/api-subscriptions-delete-request.js";
import {
  auditLogStatsResponseSchema,
  type AuditLogStatsResponse,
} from "../models/audit-log-stats-response.js";
import { auditLogsResponseInternalSchema, type AuditLogsResponse } from "../models/audit-logs-response.js";
import {
  createOptOutSubscriptionRequestInternalSchema,
  type CreateOptOutSubscriptionRequest,
} from "../models/create-opt-out-subscription-request.js";
import {
  createSubscriptionRequestInternalSchema,
  type CreateSubscriptionRequest,
} from "../models/create-subscription-request.js";
import {
  createSubscriptionResponseInternalSchema,
  type CreateSubscriptionResponse,
} from "../models/create-subscription-response.js";
import {
  deleteSubscriptionResponseSchema,
  type DeleteSubscriptionResponse,
} from "../models/delete-subscription-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Mode, modeSchema } from "../models/mode.js";
import {
  optOutSubscriptionResponseInternalSchema,
  type OptOutSubscriptionResponse,
} from "../models/opt-out-subscription-response.js";
import {
  statusLushaWebhooksApiSchema,
  type StatusLushaWebhooksApi,
} from "../models/status-lusha-webhooks-api.js";
import {
  subscriptionListResponseInternalSchema,
  type SubscriptionListResponse,
} from "../models/subscription-list-response.js";
import {
  subscriptionResponseInternalSchema,
  type SubscriptionResponse,
} from "../models/subscription-response.js";
import {
  subscriptionWithoutSecretInternalSchema,
  type SubscriptionWithoutSecret,
} from "../models/subscription-without-secret.js";
import {
  testSubscriptionResponseInternalSchema,
  type TestSubscriptionResponse,
} from "../models/test-subscription-response.js";
import {
  updateSubscriptionRequestInternalSchema,
  type UpdateSubscriptionRequest,
} from "../models/update-subscription-request.js";
import type { Servers } from "../servers.js";

/**
 * Subscribe to real-time notifications when contacts change jobs or companies experience key
 * business events.
 */
export class Webhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Opt-Out Subscription
   *
   * @remarks
   * Subscribe to real-time notifications when a contact opts out of data processing. When a contact
   * requests removal, Lusha sends an `OptOutWebhookPayload` to your endpoint so you can action the
   * removal in your own systems (CRM, outreach tools, etc.).
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/opt-out**
   *
   * ---
   *
   * **How it works:**
   * - Create one opt-out subscription per account (scoped to `contact` entity type)
   * - Lusha delivers a POST request to your URL whenever a contact opts out
   * - The payload includes the contact identity, opt-out date, and the specific data points (emails
   *   and/or phones) that must be removed
   *
   * **Payload you'll receive:**
   * ```json
   * {
   * "contactId": "987654321",
   * "fullName": "Jane Doe",
   * "companyName": "Acme Corp",
   * "jobTitle": "Director of Product",
   * "linkedinUrl": "https://www.linkedin.com/in/jane-doe",
   * "contactOptOutDate": "2026-04-22 14:32:11.412",
   * "contactExposureDate": "2025-08-03 09:15:47",
   * "datapoints": [
   * { "datapointId": "+14155550199", "datapointType": "phone" },
   * { "datapointId": "jane.doe@acme.com", "datapointType": "email" }
   * ],
   * "partnerClientId": "acme-crm-tenant-42"
   * }
   * ```
   *
   * > **Important:** Signature verification applies the same way as standard webhook deliveries.
   * See Security & Verification for details.
   *
   * > **Note:** Ensure your account has a webhook secret before creating this subscription. See
   * Regenerate Account Secret.
   *
   * @returns Opt-out subscription created successfully
   *
   * @throws {@link Webhooks.CreateOptOutSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOptOutSubscription(
    request: Webhooks.CreateOptOutSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<OptOutSubscriptionResponse, Webhooks.CreateOptOutSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/subscriptions/opt-out"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOptOutSubscriptionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: optOutSubscriptionResponseInternalSchema },
        errorFactory: Webhooks.CreateOptOutSubscriptionError,
      },
      options,
    );
  }

  /**
   * Create Subscription
   *
   * @remarks
   * Creates one or more webhook subscriptions for real-time signal notifications.
   *
   * **Delivery & Reliability:**
   * - Webhooks are delivered with automatic retry on failures
   * - Maximum 3 retry attempts with exponential backoff
   * - Subscriptions auto-disable after max retries exceeded
   * - All deliveries are logged in audit logs
   *
   * > **Note:** Your webhook endpoint must respond with a proper acknowledgment. See Client
   * Response Format below for details.
   *
   * > **Limit:** Maximum 25 subscriptions per request
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions**
   *
   * ---
   *
   * ### Webhook Payload You'll Receive
   * When a signal is triggered, this payload is sent to your webhook URL:
   * ```json
   * {
   * "id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c",
   * "type": "promotion",
   * "entityType": "contact",
   * "entityId": "4158887495",
   * "subscriptionId": "507f1f77bcf86cd799439011",
   * "data": {
   * "personId": 4158887495,
   * "currentCompanyId": 40823133,
   * "currentCompanyName": "OMG Hospitality Group LLC",
   * "currentDomain": "omghospitalitygroup.com",
   * "currentTitle": "Bartender",
   * "currentDepartments": [
   * { "id": 7, "value": "Other" }
   * ],
   * "previousCompanyName": "First Watch Restaurants",
   * "previousDomain": "firstwatch.com",
   * "signalDate": "2025-07-01"
   * },
   * "timestamp": "2026-01-14T16:16:35.841Z",
   * "billing": {
   * "creditsCharged": 1
   * }
   * }
   * ```
   * **Example — Company News Signal:**
   * ```json
   * {
   * "id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45",
   * "type": "commercialActivityNews",
   * "entityType": "company",
   * "entityId": "33222678",
   * "subscriptionId": "507f1f77bcf86cd799439011",
   * "data": {
   * "companyId": "33222678",
   * "companyName": "Lusha",
   * "domain": "lusha.com",
   * "signalId": "1503910",
   * "eventType": "partnership",
   * "eventSummary": "Lusha announced a strategic partnership with Salesforce.",
   * "articlePublishedDate": "2025-06-15",
   * "articleTitle": "Lusha Partners with Salesforce",
   * "articleHighlight": "The partnership enables Salesforce users to access Lusha data directly within their CRM.",
   * "eventEffectiveDate": "2025-06-10",
   * "articleUrl": "https://example.com/lusha-salesforce-partnership"
   * },
   * "timestamp": "2026-01-14T16:16:35.841Z",
   * "billing": {
   * "creditsCharged": 1
   * }
   * }
   * ```
   *
   * **Headers Included:**
   *
   * | Header | Description |
   * |--------|-------------|
   * | `X-Lusha-Signature` | HMAC-SHA256 signature for verification |
   * | `X-Lusha-Timestamp` | Unix timestamp of the request |
   * | `Content-Type` | application/json |
   * | `User-Agent` | Lusha-Webhooks/1.0 |
   *
   * --- ⚠️ **Important:** Ensure your account has a webhook secret before creating subscriptions.
   * Create one via the Regenerate Account Secret endpoint.
   *
   * ---
   *
   * ### Client Response Format (Required)
   *
   * When your webhook endpoint receives a delivery, it **must** acknowledge receipt with this
   * response:
   *
   * **Required Response:**
   * ````json
   * {
   * "received": true,
   * "timestamp": "2026-02-05T10:30:45.123Z",
   * "webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
   * }
   * ````
   *
   * Response Requirements
   *
   * | Requirement | Value |
   * |-------------|-------|
   * | **HTTP Status** | `201 Created` (recommended) or any `2xx` status |
   * | **Content-Type** | `application/json` |
   * | **Response Time** | Within 10 seconds |
   *
   * Field Descriptions & Implementation Guide
   *
   * **Field Descriptions:**
   * * `received` (boolean, required): Confirmation flag - must be `true`
   * * `timestamp` (string, required): ISO 8601 timestamp of receipt
   * * `webhookId` (string, required): Echo the `id` from webhook payload
   *
   * **Implementation Example:**
   * ```javascript
   * app.post('/webhook', async (req, res) => {
   * // 1. Verify signature
   * if (!verifyWebhookSignature(req)) {
   * return res.status(401).json({ error: 'Invalid signature' });
   * }
   *
   * // 2. Queue for async processing
   * await queueWebhook(req.body);
   *
   * // 3. Acknowledge immediately
   * res.status(201).json({
   * received: true,
   * timestamp: new Date().toISOString(),
   * webhookId: req.body.id
   * });
   * ```
   *
   * **Important Notes:**
   * * Return acknowledgment **before** heavy processing
   * * Non-2xx responses trigger retry mechanism
   * * After 3 failed retries, subscription is disabled
   *
   * ----
   *
   * @returns Subscriptions created (full or partial success)
   *
   * @throws {@link Webhooks.CreateSubscriptionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscription(
    request: Webhooks.CreateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateSubscriptionResponse, Webhooks.CreateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/subscriptions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSubscriptionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: createSubscriptionResponseInternalSchema },
        errorFactory: Webhooks.CreateSubscriptionError,
      },
      options,
    );
  }

  /**
   * Delete Subscriptions
   *
   * @remarks
   * Delete one or more webhook subscriptions. Returns detailed results for each deletion with
   * partial success support.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/delete**
   *
   * ---
   *
   * **Behavior:**
   * - Each subscription is processed independently
   * - Returns detailed results for each item including deleted subscription info
   * - Invalid ID formats are gracefully handled and reported as NOT_FOUND
   * - Duplicate IDs are automatically deduplicated
   * - Deletion is permanent and cannot be undone
   *
   * @returns Delete operation completed (full or partial success)
   *
   * @throws {@link Webhooks.DeleteSubscriptionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscriptions(
    request: Webhooks.DeleteSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteSubscriptionResponse, Webhooks.DeleteSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/subscriptions/delete"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiSubscriptionsDeleteRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: deleteSubscriptionResponseSchema },
        errorFactory: Webhooks.DeleteSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Get Account Secret
   *
   * @remarks
   * Retrieve the current account webhook secret.
   *
   * *Endpoint*: **(GET) https://api.lusha.com/api/account/secret**
   *
   * @returns Account secret retrieved successfully
   *
   * @throws {@link Webhooks.GetAccountSecretError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountSecret(
    options?: RequestOptions,
  ): ApiPromise<ApiAccountSecretResponse, Webhooks.GetAccountSecretError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/account/secret"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAccountSecretResponseSchema },
        errorFactory: Webhooks.GetAccountSecretError,
      },
      options,
    );
  }

  /**
   * Get Audit Log Statistics
   *
   * @remarks
   * Get delivery statistics for your account.
   *
   * *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**
   *
   * @returns Statistics retrieved successfully
   *
   * @throws {@link Webhooks.GetAuditLogStatsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuditLogStats(
    request: Webhooks.GetAuditLogStatsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AuditLogStatsResponse, Webhooks.GetAuditLogStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/audit-logs/stats"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditLogStatsResponseSchema },
        errorFactory: Webhooks.GetAuditLogStatsError,
      },
      options,
    );
  }

  /**
   * Get Audit Logs
   *
   * @remarks
   * Retrieve webhook delivery logs for your account.
   *
   * *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs**
   *
   * **What's Logged:**
   * - All webhook delivery attempts (success and failures)
   * - HTTP status codes and response times
   * - Error messages for failed deliveries
   * - Delivery timestamps and duration metrics
   *
   * **Filtering:**
   * - Filter by subscription ID to see logs for specific subscriptions
   * - Filter by status to see only successes, failures, or permanent failures
   *
   * **Rate Limit:** 100 requests/minute per account
   *
   * > **Note:** Logs are retained for 90 days (successful) and 180 days (failed/DLQ)
   *
   * @returns Audit logs retrieved successfully
   *
   * @throws {@link Webhooks.GetAuditLogsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuditLogs(
    request: Webhooks.GetAuditLogsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AuditLogsResponse, Webhooks.GetAuditLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/audit-logs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "subscriptionId", value: request.subscriptionId, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusLushaWebhooksApiSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditLogsResponseInternalSchema },
        errorFactory: Webhooks.GetAuditLogsError,
      },
      options,
    );
  }

  /**
   * Get Subscription by ID
   *
   * @remarks
   * Returns a single webhook subscription by ID.
   *
   * *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**
   *
   * @returns Subscription retrieved successfully
   *
   * @throws {@link Webhooks.GetSubscriptionByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionById(
    request: Webhooks.GetSubscriptionByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionWithoutSecret, Webhooks.GetSubscriptionByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/subscriptions/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionWithoutSecretInternalSchema },
        errorFactory: Webhooks.GetSubscriptionByIdError,
      },
      options,
    );
  }

  /**
   * List Subscriptions
   *
   * @remarks
   * Returns all webhook subscriptions for your account with pagination support.
   *
   * *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions**
   *
   * **Pagination:**
   * - Results are sorted by `createdAt` in descending order (newest first)
   * - Default limit: 10, max limit: 100
   * - Use `offset` for pagination through large result sets
   *
   * > **Note:** The webhook `secret` is never returned in list responses for security.
   *
   * @returns List of subscriptions retrieved successfully
   *
   * @throws {@link Webhooks.ListSubscriptionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubscriptions(
    request: Webhooks.ListSubscriptionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SubscriptionListResponse, Webhooks.ListSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/subscriptions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionListResponseInternalSchema },
        errorFactory: Webhooks.ListSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Regenerate Account Secret
   *
   * @remarks
   * Regenerate the account webhook secret. Affects **all subscriptions** for the account.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/account/secret/regenerate**
   *
   * **Behavior:**
   * - If a secret already exists: Replaces with new secret (old secret is invalidated)
   * - If no secret exists: Creates new secret automatically
   *
   * **Important Notes:**
   * - The secret is only shown once in the response. Store it securely.
   * - This endpoint always succeeds (upsert operation)
   * - Regenerating invalidates the old secret for **all subscriptions** (if one existed)
   * - An account secret must exist before webhooks can be delivered
   *
   * @returns Account secret regenerated successfully
   *
   * @throws {@link Webhooks.RegenerateAccountSecretError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regenerateAccountSecret(
    options?: RequestOptions,
  ): ApiPromise<ApiAccountSecretRegenerateResponse, Webhooks.RegenerateAccountSecretError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/account/secret/regenerate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAccountSecretRegenerateResponseSchema },
        errorFactory: Webhooks.RegenerateAccountSecretError,
      },
      options,
    );
  }

  /**
   * Test Subscription
   *
   * @remarks
   * Test a webhook subscription by sending a test signal. Supports three test modes.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/{id}/test** --- **Test Modes:**
   * - `direct` - Quick HTTP check only (validates URL responds correctly)
   * - `kafka` - Fanout handler only (tests Kafka message processing)
   * - `full` - Complete Kafka flow (default - end-to-end test)
   *
   * **Important Notes:**
   * - Test deliveries do NOT consume credits
   * - Test payloads use mock data
   * - Useful for verifying webhook configuration before going live
   *
   * @returns Test executed successfully
   *
   * @throws {@link Webhooks.TestSubscriptionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testSubscription(
    request: Webhooks.TestSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<TestSubscriptionResponse, Webhooks.TestSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/subscriptions/{id}/test"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "mode", value: request.mode, schema: s.defaulted(modeSchema, Mode.Full) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: testSubscriptionResponseInternalSchema },
        errorFactory: Webhooks.TestSubscriptionError,
      },
      options,
    );
  }

  /**
   * Update Subscription
   *
   * @remarks
   * Updates an existing webhook subscription. All fields are optional.
   *
   * *Endpoint*: **(PATCH) https://api.lusha.com/api/subscriptions/{id}**
   *
   * --- **Reactivating Disabled Subscriptions:**
   *
   * When setting `isActive: true` on a previously disabled subscription, the system automatically:
   * - Clears the `blockReason` field
   * - Clears the `blockedAt` timestamp
   * - Resets the retry counter
   *
   * **Regenerating Secrets:**
   *
   * Set `regenerateSecret: true` to generate a new webhook secret. The new secret:
   * - Affects **all subscriptions** for your account
   * - Is only shown once in the response
   * - Immediately invalidates the old secret ---
   *
   * @returns Subscription updated successfully
   *
   * @throws {@link Webhooks.UpdateSubscriptionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscription(
    request: Webhooks.UpdateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Webhooks.UpdateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/subscriptions/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateSubscriptionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Webhooks.UpdateSubscriptionError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateOptOutSubscriptionRequestParams = {
    body: CreateOptOutSubscriptionRequest;
  };

  export class CreateOptOutSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOptOutSubscriptionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateSubscriptionRequestParams = {
    body: CreateSubscriptionRequest;
  };

  export class CreateSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSubscriptionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteSubscriptionsRequest = {
    body: ApiSubscriptionsDeleteRequest;
  };

  export class DeleteSubscriptionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSubscriptionsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetAccountSecretError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountSecretError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAuditLogStatsRequest = {
    /** Filter statistics by subscription ID */
    subscriptionId?: string;
  };

  export class GetAuditLogStatsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuditLogStatsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAuditLogsRequest = {
    /** Filter by subscription ID */
    subscriptionId?: string;
    /** Filter by delivery status */
    status?: StatusLushaWebhooksApi;
    /** Maximum number of results (1-100) @default 50 */
    limit?: number;
    /** Number of results to skip @default 0 */
    offset?: number;
  };

  export const getAuditLogsRequestSchema: Schema<GetAuditLogsRequest> = s.lazySchema(() =>
    s.object<GetAuditLogsRequest>({
      subscriptionId: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusLushaWebhooksApiSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class GetAuditLogsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuditLogsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSubscriptionByIdRequest = {
    /** Subscription ID */
    id: string;
  };

  export class GetSubscriptionByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriptionByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSubscriptionsRequest = {
    /** Maximum number of results (1-100) @default 10 */
    limit?: number;
    /** Number of results to skip @default 0 */
    offset?: number;
  };

  export const listSubscriptionsRequestSchema: Schema<ListSubscriptionsRequest> = s.lazySchema(() =>
    s.object<ListSubscriptionsRequest>({
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class ListSubscriptionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSubscriptionsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class RegenerateAccountSecretError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RegenerateAccountSecretError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TestSubscriptionRequest = {
    /** Subscription ID */
    id: string;
    /** Test mode @default Mode.Full */
    mode?: Mode;
  };

  export class TestSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestSubscriptionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSubscriptionRequestParams = {
    /** Subscription ID */
    id: string;
    body: UpdateSubscriptionRequest;
  };

  export class UpdateSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSubscriptionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
