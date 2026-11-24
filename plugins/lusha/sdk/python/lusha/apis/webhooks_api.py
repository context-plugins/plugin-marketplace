from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_opt_out_subscription_error import (
    CreateOptOutSubscriptionErrorBody,
    create_opt_out_subscription_error_mapper,
)
from ..errors.create_subscription_error import CreateSubscriptionErrorBody, create_subscription_error_mapper
from ..errors.delete_subscriptions_error import DeleteSubscriptionsErrorBody, delete_subscriptions_error_mapper
from ..errors.get_account_secret_error import GetAccountSecretErrorBody, get_account_secret_error_mapper
from ..errors.get_audit_log_stats_error import GetAuditLogStatsErrorBody, get_audit_log_stats_error_mapper
from ..errors.get_audit_logs_error import GetAuditLogsErrorBody, get_audit_logs_error_mapper
from ..errors.get_subscription_by_id_error import GetSubscriptionByIdErrorBody, get_subscription_by_id_error_mapper
from ..errors.list_subscriptions_error import ListSubscriptionsErrorBody, list_subscriptions_error_mapper
from ..errors.regenerate_account_secret_error import (
    RegenerateAccountSecretErrorBody,
    regenerate_account_secret_error_mapper,
)
from ..errors.test_subscription_error import TestSubscriptionErrorBody, test_subscription_error_mapper
from ..errors.update_subscription_error import UpdateSubscriptionErrorBody, update_subscription_error_mapper
from ..models.api_account_secret_regenerate_response import ApiAccountSecretRegenerateResponse
from ..models.api_account_secret_response import ApiAccountSecretResponse
from ..models.api_subscriptions_delete_request import ApiSubscriptionsDeleteRequest, ApiSubscriptionsDeleteRequestDict
from ..models.audit_log_stats_response import AuditLogStatsResponse
from ..models.audit_logs_response import AuditLogsResponse
from ..models.create_opt_out_subscription_request import (
    CreateOptOutSubscriptionRequest,
    CreateOptOutSubscriptionRequestDict,
)
from ..models.create_subscription_request import CreateSubscriptionRequest, CreateSubscriptionRequestDict
from ..models.create_subscription_response import CreateSubscriptionResponse
from ..models.delete_subscription_response import DeleteSubscriptionResponse
from ..models.enums.mode import Mode, ModeOrStr
from ..models.enums.status_lusha_webhooks_api import StatusLushaWebhooksApiOrStr
from ..models.opt_out_subscription_response import OptOutSubscriptionResponse
from ..models.subscription_list_response import SubscriptionListResponse
from ..models.subscription_response import SubscriptionResponse
from ..models.subscription_without_secret import SubscriptionWithoutSecret
from ..models.test_subscription_response import TestSubscriptionResponse
from ..models.update_subscription_request import UpdateSubscriptionRequest, UpdateSubscriptionRequestDict
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_opt_out_subscription(
        self,
        body: CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OptOutSubscriptionResponse:
        """Subscribe to real-time notifications when a contact opts out of data processing. When a contact requests
        removal, Lusha sends an ``OptOutWebhookPayload`` to your endpoint so you can action the removal in your own
        systems (CRM, outreach tools, etc.).

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/opt-out**

        ---

        **How it works:**
        - Create one opt-out subscription per account (scoped to ``contact`` entity type)
        - Lusha delivers a POST request to your URL whenever a contact opts out
        - The payload includes the contact identity, opt-out date, and the specific data points (emails and/or phones)
            that must be removed

        **Payload you'll receive:** ```json
        {
        "contactId": "987654321", "fullName": "Jane Doe", "companyName": "Acme Corp", "jobTitle": "Director of Product",
        "linkedinUrl": "https://www.linkedin.com/in/jane-doe", "contactOptOutDate": "2026-04-22 14:32:11.412",
        "contactExposureDate": "2025-08-03 09:15:47", "datapoints": [ { "datapointId": "+14155550199", "datapointType":
        "phone" }, { "datapointId": "jane.doe@acme.com", "datapointType": "email" }
        ],
        "partnerClientId": "acme-crm-tenant-42"
        }
        ```

        > **Important:** Signature verification applies the same way as standard webhook deliveries. See Security &
            Verification for details.

        > **Note:** Ensure your account has a webhook secret before creating this subscription. See Regenerate Account
            Secret.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Opt-out subscription created successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - feature not
                available or opt-out subscription already exists Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_opt_out_subscription(body, request_options=request_options))

    def create_subscription(
        self,
        body: CreateSubscriptionRequest | CreateSubscriptionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateSubscriptionResponse:
        """Creates one or more webhook subscriptions for real-time signal notifications.

        **Delivery & Reliability:**
        - Webhooks are delivered with automatic retry on failures
        - Maximum 3 retry attempts with exponential backoff
        - Subscriptions auto-disable after max retries exceeded
        - All deliveries are logged in audit logs

        > **Note:** Your webhook endpoint must respond with a proper acknowledgment.
        See Client Response Format below for details.

        > **Limit:** Maximum 25 subscriptions per request

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions**

        ---

        ### Webhook Payload You'll Receive When a signal is triggered, this payload is sent to your webhook URL: ```json
        {
        "id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c", "type": "promotion", "entityType": "contact", "entityId":
        "4158887495", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "personId": 4158887495,
        "currentCompanyId": 40823133, "currentCompanyName": "OMG Hospitality Group LLC", "currentDomain":
        "omghospitalitygroup.com", "currentTitle": "Bartender", "currentDepartments": [ { "id": 7, "value": "Other" }
        ],
        "previousCompanyName": "First Watch Restaurants", "previousDomain": "firstwatch.com", "signalDate": "2025-07-01"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```
        **Example — Company News Signal:** ```json
        {
        "id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45", "type": "commercialActivityNews", "entityType": "company",
        "entityId": "33222678", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "companyId": "33222678",
        "companyName": "Lusha", "domain": "lusha.com", "signalId": "1503910", "eventType": "partnership",
        "eventSummary": "Lusha announced a strategic partnership with Salesforce.", "articlePublishedDate":
        "2025-06-15", "articleTitle": "Lusha Partners with Salesforce", "articleHighlight": "The partnership enables
        Salesforce users to access Lusha data directly within their CRM.", "eventEffectiveDate": "2025-06-10",
        "articleUrl": "https://example.com/lusha-salesforce-partnership"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```

        **Headers Included:**

        | Header | Description |
        |--------|-------------|
        | ``X-Lusha-Signature`` | HMAC-SHA256 signature for verification |
        | ``X-Lusha-Timestamp`` | Unix timestamp of the request |
        | ``Content-Type`` | application/json |
        | ``User-Agent`` | Lusha-Webhooks/1.0 |

        ---
        ⚠️ **Important:** Ensure your account has a webhook secret before creating subscriptions. Create one via the
        Regenerate Account Secret endpoint.

        ---

        ### Client Response Format (Required)

        When your webhook endpoint receives a delivery, it **must** acknowledge receipt with this response:

        **Required Response:** ````json
        {
        "received": true, "timestamp": "2026-02-05T10:30:45.123Z", "webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
        }
        ````

        Response Requirements

        | Requirement | Value |
        |-------------|-------|
        | **HTTP Status** | ``201 Created`` (recommended) or any ``2xx`` status |
        | **Content-Type** | ``application/json`` |
        | **Response Time** | Within 10 seconds |

        Field Descriptions & Implementation Guide

        **Field Descriptions:**
        * ``received`` (boolean, required): Confirmation flag - must be ``true``
        * ``timestamp`` (string, required): ISO 8601 timestamp of receipt
        * ``webhookId`` (string, required): Echo the ``id`` from webhook payload

        **Implementation Example:** ```javascript app.post('/webhook', async (req, res) => { // 1. Verify signature if
        (!verifyWebhookSignature(req)) { return res.status(401).json({ error: 'Invalid signature' });
        }

        // 2. Queue for async processing await queueWebhook(req.body);

        // 3. Acknowledge immediately res.status(201).json({ received: true, timestamp: new Date().toISOString(),
        webhookId: req.body.id
        });
        ```

        **Important Notes:**
        * Return acknowledgment **before** heavy processing
        * Non-2xx responses trigger retry mechanism
        * After 3 failed retries, subscription is disabled

        ----

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscriptions created (full or partial success)

        Raises:
            ApiError: Bad request - URL validation failed or invalid input Unauthorized - invalid or missing API key
                Forbidden - feature not available or limit reached Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_subscription(body, request_options=request_options))

    def delete_subscriptions(
        self,
        body: ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteSubscriptionResponse:
        """Delete one or more webhook subscriptions. Returns detailed results for each deletion with partial success
        support.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/delete**

        ---

        **Behavior:**
        - Each subscription is processed independently
        - Returns detailed results for each item including deleted subscription info
        - Invalid ID formats are gracefully handled and reported as NOT_FOUND
        - Duplicate IDs are automatically deduplicated
        - Deletion is permanent and cannot be undone

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete operation completed (full or partial success)

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_subscriptions(body, request_options=request_options))

    def get_account_secret(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiAccountSecretResponse:
        """Retrieve the current account webhook secret.

        *Endpoint*: **(GET) https://api.lusha.com/api/account/secret**

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account secret retrieved successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Account secret not found Internal server error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_account_secret(request_options=request_options))

    def get_audit_log_stats(
        self, *, subscription_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> AuditLogStatsResponse:
        """Get delivery statistics for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**

        Args:
            subscription_id: Filter statistics by subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Statistics retrieved successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_audit_log_stats(
                subscription_id=subscription_id, request_options=request_options
            ),
        )

    def get_audit_logs(
        self,
        *,
        subscription_id: str | None = None,
        status: StatusLushaWebhooksApiOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuditLogsResponse:
        """Retrieve webhook delivery logs for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs**

        **What's Logged:**
        - All webhook delivery attempts (success and failures)
        - HTTP status codes and response times
        - Error messages for failed deliveries
        - Delivery timestamps and duration metrics

        **Filtering:**
        - Filter by subscription ID to see logs for specific subscriptions
        - Filter by status to see only successes, failures, or permanent failures

        **Rate Limit:** 100 requests/minute per account

        > **Note:** Logs are retained for 90 days (successful) and 180 days (failed/DLQ)

        Args:
            subscription_id: Filter by subscription ID
            status: Filter by delivery status
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audit logs retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_audit_logs(
                subscription_id=subscription_id,
                status=status,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def get_subscription_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SubscriptionWithoutSecret:
        """Returns a single webhook subscription by ID.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**

        Args:
            id_: Subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Not found - resource not found Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_subscription_by_id(id_, request_options=request_options))

    def list_subscriptions(
        self, *, limit: int | None = 10, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> SubscriptionListResponse:
        """Returns all webhook subscriptions for your account with pagination support.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions**

        **Pagination:**
        - Results are sorted by ``createdAt`` in descending order (newest first)
        - Default limit: 10, max limit: 100
        - Use ``offset`` for pagination through large result sets

        > **Note:** The webhook ``secret`` is never returned in list responses for security.

        Args:
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of subscriptions retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_subscriptions(limit=limit, offset=offset, request_options=request_options)
        )

    def regenerate_account_secret(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiAccountSecretRegenerateResponse:
        """Regenerate the account webhook secret. Affects **all subscriptions** for the account.

        *Endpoint*: **(POST) https://api.lusha.com/api/account/secret/regenerate**

        **Behavior:**
        - If a secret already exists: Replaces with new secret (old secret is invalidated)
        - If no secret exists: Creates new secret automatically

        **Important Notes:**
        - The secret is only shown once in the response. Store it securely.
        - This endpoint always succeeds (upsert operation)
        - Regenerating invalidates the old secret for **all subscriptions** (if one existed)
        - An account secret must exist before webhooks can be delivered

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account secret regenerated successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.regenerate_account_secret(request_options=request_options))

    def test_subscription(
        self, id_: str, *, mode: ModeOrStr | None = Mode.FULL, request_options: RequestOptionsOrDict | None = None
    ) -> TestSubscriptionResponse:
        """Test a webhook subscription by sending a test signal. Supports three test modes.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/{id}/test**
        ---
        **Test Modes:**
        - ``direct`` - Quick HTTP check only (validates URL responds correctly)
        - ``kafka`` - Fanout handler only (tests Kafka message processing)
        - ``full`` - Complete Kafka flow (default - end-to-end test)

        **Important Notes:**
        - Test deliveries do NOT consume credits
        - Test payloads use mock data
        - Useful for verifying webhook configuration before going live

        Args:
            id_: Subscription ID
            mode: Test mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test executed successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Subscription does not
                belong to your account Not found - resource not found Internal server error ``error`` is ``ErrorResponse
                | RawError``."""
        return unwrap(self._with_raw_response.test_subscription(id_, mode=mode, request_options=request_options))

    def update_subscription(
        self,
        id_: str,
        body: UpdateSubscriptionRequest | UpdateSubscriptionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Updates an existing webhook subscription. All fields are optional.

        *Endpoint*: **(PATCH) https://api.lusha.com/api/subscriptions/{id}**

        ---
        **Reactivating Disabled Subscriptions:**

        When setting ``isActive: true`` on a previously disabled subscription, the system automatically:
        - Clears the ``blockReason`` field
        - Clears the ``blockedAt`` timestamp
        - Resets the retry counter

        **Regenerating Secrets:**

        Set ``regenerateSecret: true`` to generate a new webhook secret. The new secret:
        - Affects **all subscriptions** for your account
        - Is only shown once in the response
        - Immediately invalidates the old secret
        ---

        Args:
            id_: Subscription ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription updated successfully

        Raises:
            ApiError: Bad request - invalid input data Not found - resource not found Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_subscription(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_opt_out_subscription(
        self,
        body: CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OptOutSubscriptionResponse:
        """Subscribe to real-time notifications when a contact opts out of data processing. When a contact requests
        removal, Lusha sends an ``OptOutWebhookPayload`` to your endpoint so you can action the removal in your own
        systems (CRM, outreach tools, etc.).

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/opt-out**

        ---

        **How it works:**
        - Create one opt-out subscription per account (scoped to ``contact`` entity type)
        - Lusha delivers a POST request to your URL whenever a contact opts out
        - The payload includes the contact identity, opt-out date, and the specific data points (emails and/or phones)
            that must be removed

        **Payload you'll receive:** ```json
        {
        "contactId": "987654321", "fullName": "Jane Doe", "companyName": "Acme Corp", "jobTitle": "Director of Product",
        "linkedinUrl": "https://www.linkedin.com/in/jane-doe", "contactOptOutDate": "2026-04-22 14:32:11.412",
        "contactExposureDate": "2025-08-03 09:15:47", "datapoints": [ { "datapointId": "+14155550199", "datapointType":
        "phone" }, { "datapointId": "jane.doe@acme.com", "datapointType": "email" }
        ],
        "partnerClientId": "acme-crm-tenant-42"
        }
        ```

        > **Important:** Signature verification applies the same way as standard webhook deliveries. See Security &
            Verification for details.

        > **Note:** Ensure your account has a webhook secret before creating this subscription. See Regenerate Account
            Secret.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Opt-out subscription created successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - feature not
                available or opt-out subscription already exists Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.create_opt_out_subscription(body, request_options=request_options))

    async def create_subscription(
        self,
        body: CreateSubscriptionRequest | CreateSubscriptionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateSubscriptionResponse:
        """Creates one or more webhook subscriptions for real-time signal notifications.

        **Delivery & Reliability:**
        - Webhooks are delivered with automatic retry on failures
        - Maximum 3 retry attempts with exponential backoff
        - Subscriptions auto-disable after max retries exceeded
        - All deliveries are logged in audit logs

        > **Note:** Your webhook endpoint must respond with a proper acknowledgment.
        See Client Response Format below for details.

        > **Limit:** Maximum 25 subscriptions per request

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions**

        ---

        ### Webhook Payload You'll Receive When a signal is triggered, this payload is sent to your webhook URL: ```json
        {
        "id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c", "type": "promotion", "entityType": "contact", "entityId":
        "4158887495", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "personId": 4158887495,
        "currentCompanyId": 40823133, "currentCompanyName": "OMG Hospitality Group LLC", "currentDomain":
        "omghospitalitygroup.com", "currentTitle": "Bartender", "currentDepartments": [ { "id": 7, "value": "Other" }
        ],
        "previousCompanyName": "First Watch Restaurants", "previousDomain": "firstwatch.com", "signalDate": "2025-07-01"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```
        **Example — Company News Signal:** ```json
        {
        "id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45", "type": "commercialActivityNews", "entityType": "company",
        "entityId": "33222678", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "companyId": "33222678",
        "companyName": "Lusha", "domain": "lusha.com", "signalId": "1503910", "eventType": "partnership",
        "eventSummary": "Lusha announced a strategic partnership with Salesforce.", "articlePublishedDate":
        "2025-06-15", "articleTitle": "Lusha Partners with Salesforce", "articleHighlight": "The partnership enables
        Salesforce users to access Lusha data directly within their CRM.", "eventEffectiveDate": "2025-06-10",
        "articleUrl": "https://example.com/lusha-salesforce-partnership"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```

        **Headers Included:**

        | Header | Description |
        |--------|-------------|
        | ``X-Lusha-Signature`` | HMAC-SHA256 signature for verification |
        | ``X-Lusha-Timestamp`` | Unix timestamp of the request |
        | ``Content-Type`` | application/json |
        | ``User-Agent`` | Lusha-Webhooks/1.0 |

        ---
        ⚠️ **Important:** Ensure your account has a webhook secret before creating subscriptions. Create one via the
        Regenerate Account Secret endpoint.

        ---

        ### Client Response Format (Required)

        When your webhook endpoint receives a delivery, it **must** acknowledge receipt with this response:

        **Required Response:** ````json
        {
        "received": true, "timestamp": "2026-02-05T10:30:45.123Z", "webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
        }
        ````

        Response Requirements

        | Requirement | Value |
        |-------------|-------|
        | **HTTP Status** | ``201 Created`` (recommended) or any ``2xx`` status |
        | **Content-Type** | ``application/json`` |
        | **Response Time** | Within 10 seconds |

        Field Descriptions & Implementation Guide

        **Field Descriptions:**
        * ``received`` (boolean, required): Confirmation flag - must be ``true``
        * ``timestamp`` (string, required): ISO 8601 timestamp of receipt
        * ``webhookId`` (string, required): Echo the ``id`` from webhook payload

        **Implementation Example:** ```javascript app.post('/webhook', async (req, res) => { // 1. Verify signature if
        (!verifyWebhookSignature(req)) { return res.status(401).json({ error: 'Invalid signature' });
        }

        // 2. Queue for async processing await queueWebhook(req.body);

        // 3. Acknowledge immediately res.status(201).json({ received: true, timestamp: new Date().toISOString(),
        webhookId: req.body.id
        });
        ```

        **Important Notes:**
        * Return acknowledgment **before** heavy processing
        * Non-2xx responses trigger retry mechanism
        * After 3 failed retries, subscription is disabled

        ----

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscriptions created (full or partial success)

        Raises:
            ApiError: Bad request - URL validation failed or invalid input Unauthorized - invalid or missing API key
                Forbidden - feature not available or limit reached Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.create_subscription(body, request_options=request_options))

    async def delete_subscriptions(
        self,
        body: ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteSubscriptionResponse:
        """Delete one or more webhook subscriptions. Returns detailed results for each deletion with partial success
        support.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/delete**

        ---

        **Behavior:**
        - Each subscription is processed independently
        - Returns detailed results for each item including deleted subscription info
        - Invalid ID formats are gracefully handled and reported as NOT_FOUND
        - Duplicate IDs are automatically deduplicated
        - Deletion is permanent and cannot be undone

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete operation completed (full or partial success)

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_subscriptions(body, request_options=request_options))

    async def get_account_secret(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiAccountSecretResponse:
        """Retrieve the current account webhook secret.

        *Endpoint*: **(GET) https://api.lusha.com/api/account/secret**

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account secret retrieved successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Account secret not found Internal server error ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_account_secret(request_options=request_options))

    async def get_audit_log_stats(
        self, *, subscription_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuditLogStatsResponse:
        """Get delivery statistics for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**

        Args:
            subscription_id: Filter statistics by subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Statistics retrieved successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_audit_log_stats(
                subscription_id=subscription_id, request_options=request_options
            ),
        )

    async def get_audit_logs(
        self,
        *,
        subscription_id: str | None = None,
        status: StatusLushaWebhooksApiOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuditLogsResponse:
        """Retrieve webhook delivery logs for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs**

        **What's Logged:**
        - All webhook delivery attempts (success and failures)
        - HTTP status codes and response times
        - Error messages for failed deliveries
        - Delivery timestamps and duration metrics

        **Filtering:**
        - Filter by subscription ID to see logs for specific subscriptions
        - Filter by status to see only successes, failures, or permanent failures

        **Rate Limit:** 100 requests/minute per account

        > **Note:** Logs are retained for 90 days (successful) and 180 days (failed/DLQ)

        Args:
            subscription_id: Filter by subscription ID
            status: Filter by delivery status
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audit logs retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_audit_logs(
                subscription_id=subscription_id,
                status=status,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def get_subscription_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubscriptionWithoutSecret:
        """Returns a single webhook subscription by ID.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**

        Args:
            id_: Subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Not found - resource not found Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_subscription_by_id(id_, request_options=request_options))

    async def list_subscriptions(
        self,
        *,
        limit: int | None = 10,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionListResponse:
        """Returns all webhook subscriptions for your account with pagination support.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions**

        **Pagination:**
        - Results are sorted by ``createdAt`` in descending order (newest first)
        - Default limit: 10, max limit: 100
        - Use ``offset`` for pagination through large result sets

        > **Note:** The webhook ``secret`` is never returned in list responses for security.

        Args:
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of subscriptions retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_subscriptions(
                limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def regenerate_account_secret(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiAccountSecretRegenerateResponse:
        """Regenerate the account webhook secret. Affects **all subscriptions** for the account.

        *Endpoint*: **(POST) https://api.lusha.com/api/account/secret/regenerate**

        **Behavior:**
        - If a secret already exists: Replaces with new secret (old secret is invalidated)
        - If no secret exists: Creates new secret automatically

        **Important Notes:**
        - The secret is only shown once in the response. Store it securely.
        - This endpoint always succeeds (upsert operation)
        - Regenerating invalidates the old secret for **all subscriptions** (if one existed)
        - An account secret must exist before webhooks can be delivered

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account secret regenerated successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.regenerate_account_secret(request_options=request_options))

    async def test_subscription(
        self, id_: str, *, mode: ModeOrStr | None = Mode.FULL, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TestSubscriptionResponse:
        """Test a webhook subscription by sending a test signal. Supports three test modes.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/{id}/test**
        ---
        **Test Modes:**
        - ``direct`` - Quick HTTP check only (validates URL responds correctly)
        - ``kafka`` - Fanout handler only (tests Kafka message processing)
        - ``full`` - Complete Kafka flow (default - end-to-end test)

        **Important Notes:**
        - Test deliveries do NOT consume credits
        - Test payloads use mock data
        - Useful for verifying webhook configuration before going live

        Args:
            id_: Subscription ID
            mode: Test mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test executed successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Subscription does not
                belong to your account Not found - resource not found Internal server error ``error`` is ``ErrorResponse
                | RawError``."""
        return unwrap(await self._with_raw_response.test_subscription(id_, mode=mode, request_options=request_options))

    async def update_subscription(
        self,
        id_: str,
        body: UpdateSubscriptionRequest | UpdateSubscriptionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Updates an existing webhook subscription. All fields are optional.

        *Endpoint*: **(PATCH) https://api.lusha.com/api/subscriptions/{id}**

        ---
        **Reactivating Disabled Subscriptions:**

        When setting ``isActive: true`` on a previously disabled subscription, the system automatically:
        - Clears the ``blockReason`` field
        - Clears the ``blockedAt`` timestamp
        - Resets the retry counter

        **Regenerating Secrets:**

        Set ``regenerateSecret: true`` to generate a new webhook secret. The new secret:
        - Affects **all subscriptions** for your account
        - Is only shown once in the response
        - Immediately invalidates the old secret
        ---

        Args:
            id_: Subscription ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription updated successfully

        Raises:
            ApiError: Bad request - invalid input data Not found - resource not found Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_subscription(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_opt_out_subscription(
        self,
        body: CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OptOutSubscriptionResponse, CreateOptOutSubscriptionErrorBody]:
        """Subscribe to real-time notifications when a contact opts out of data processing. When a contact requests
        removal, Lusha sends an ``OptOutWebhookPayload`` to your endpoint so you can action the removal in your own
        systems (CRM, outreach tools, etc.).

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/opt-out**

        ---

        **How it works:**
        - Create one opt-out subscription per account (scoped to ``contact`` entity type)
        - Lusha delivers a POST request to your URL whenever a contact opts out
        - The payload includes the contact identity, opt-out date, and the specific data points (emails and/or phones)
            that must be removed

        **Payload you'll receive:** ```json
        {
        "contactId": "987654321", "fullName": "Jane Doe", "companyName": "Acme Corp", "jobTitle": "Director of Product",
        "linkedinUrl": "https://www.linkedin.com/in/jane-doe", "contactOptOutDate": "2026-04-22 14:32:11.412",
        "contactExposureDate": "2025-08-03 09:15:47", "datapoints": [ { "datapointId": "+14155550199", "datapointType":
        "phone" }, { "datapointId": "jane.doe@acme.com", "datapointType": "email" }
        ],
        "partnerClientId": "acme-crm-tenant-42"
        }
        ```

        > **Important:** Signature verification applies the same way as standard webhook deliveries. See Security &
            Verification for details.

        > **Note:** Ensure your account has a webhook secret before creating this subscription. See Regenerate Account
            Secret.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions/opt-out"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[OptOutSubscriptionResponse],
            error_mapper=create_opt_out_subscription_error_mapper,
            request_options=request_options,
        )

    def create_subscription(
        self,
        body: CreateSubscriptionRequest | CreateSubscriptionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSubscriptionResponse, CreateSubscriptionErrorBody]:
        """Creates one or more webhook subscriptions for real-time signal notifications.

        **Delivery & Reliability:**
        - Webhooks are delivered with automatic retry on failures
        - Maximum 3 retry attempts with exponential backoff
        - Subscriptions auto-disable after max retries exceeded
        - All deliveries are logged in audit logs

        > **Note:** Your webhook endpoint must respond with a proper acknowledgment.
        See Client Response Format below for details.

        > **Limit:** Maximum 25 subscriptions per request

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions**

        ---

        ### Webhook Payload You'll Receive When a signal is triggered, this payload is sent to your webhook URL: ```json
        {
        "id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c", "type": "promotion", "entityType": "contact", "entityId":
        "4158887495", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "personId": 4158887495,
        "currentCompanyId": 40823133, "currentCompanyName": "OMG Hospitality Group LLC", "currentDomain":
        "omghospitalitygroup.com", "currentTitle": "Bartender", "currentDepartments": [ { "id": 7, "value": "Other" }
        ],
        "previousCompanyName": "First Watch Restaurants", "previousDomain": "firstwatch.com", "signalDate": "2025-07-01"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```
        **Example — Company News Signal:** ```json
        {
        "id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45", "type": "commercialActivityNews", "entityType": "company",
        "entityId": "33222678", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "companyId": "33222678",
        "companyName": "Lusha", "domain": "lusha.com", "signalId": "1503910", "eventType": "partnership",
        "eventSummary": "Lusha announced a strategic partnership with Salesforce.", "articlePublishedDate":
        "2025-06-15", "articleTitle": "Lusha Partners with Salesforce", "articleHighlight": "The partnership enables
        Salesforce users to access Lusha data directly within their CRM.", "eventEffectiveDate": "2025-06-10",
        "articleUrl": "https://example.com/lusha-salesforce-partnership"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```

        **Headers Included:**

        | Header | Description |
        |--------|-------------|
        | ``X-Lusha-Signature`` | HMAC-SHA256 signature for verification |
        | ``X-Lusha-Timestamp`` | Unix timestamp of the request |
        | ``Content-Type`` | application/json |
        | ``User-Agent`` | Lusha-Webhooks/1.0 |

        ---
        ⚠️ **Important:** Ensure your account has a webhook secret before creating subscriptions. Create one via the
        Regenerate Account Secret endpoint.

        ---

        ### Client Response Format (Required)

        When your webhook endpoint receives a delivery, it **must** acknowledge receipt with this response:

        **Required Response:** ````json
        {
        "received": true, "timestamp": "2026-02-05T10:30:45.123Z", "webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
        }
        ````

        Response Requirements

        | Requirement | Value |
        |-------------|-------|
        | **HTTP Status** | ``201 Created`` (recommended) or any ``2xx`` status |
        | **Content-Type** | ``application/json`` |
        | **Response Time** | Within 10 seconds |

        Field Descriptions & Implementation Guide

        **Field Descriptions:**
        * ``received`` (boolean, required): Confirmation flag - must be ``true``
        * ``timestamp`` (string, required): ISO 8601 timestamp of receipt
        * ``webhookId`` (string, required): Echo the ``id`` from webhook payload

        **Implementation Example:** ```javascript app.post('/webhook', async (req, res) => { // 1. Verify signature if
        (!verifyWebhookSignature(req)) { return res.status(401).json({ error: 'Invalid signature' });
        }

        // 2. Queue for async processing await queueWebhook(req.body);

        // 3. Acknowledge immediately res.status(201).json({ received: true, timestamp: new Date().toISOString(),
        webhookId: req.body.id
        });
        ```

        **Important Notes:**
        * Return acknowledgment **before** heavy processing
        * Non-2xx responses trigger retry mechanism
        * After 3 failed retries, subscription is disabled

        ----

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSubscriptionRequest | CreateSubscriptionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CreateSubscriptionResponse],
            error_mapper=create_subscription_error_mapper,
            request_options=request_options,
        )

    def delete_subscriptions(
        self,
        body: ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteSubscriptionResponse, DeleteSubscriptionsErrorBody]:
        """Delete one or more webhook subscriptions. Returns detailed results for each deletion with partial success
        support.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/delete**

        ---

        **Behavior:**
        - Each subscription is processed independently
        - Returns detailed results for each item including deleted subscription info
        - Invalid ID formats are gracefully handled and reported as NOT_FOUND
        - Duplicate IDs are automatically deduplicated
        - Deletion is permanent and cannot be undone

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[DeleteSubscriptionResponse],
            error_mapper=delete_subscriptions_error_mapper,
            request_options=request_options,
        )

    def get_account_secret(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiAccountSecretResponse, GetAccountSecretErrorBody]:
        """Retrieve the current account webhook secret.

        *Endpoint*: **(GET) https://api.lusha.com/api/account/secret**

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/account/secret"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiAccountSecretResponse],
            error_mapper=get_account_secret_error_mapper,
            request_options=request_options,
        )

    def get_audit_log_stats(
        self, *, subscription_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuditLogStatsResponse, GetAuditLogStatsErrorBody]:
        """Get delivery statistics for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**

        Args:
            subscription_id: Filter statistics by subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/audit-logs/stats"),
            query_params=[param[str | None]("subscriptionId", subscription_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AuditLogStatsResponse],
            error_mapper=get_audit_log_stats_error_mapper,
            request_options=request_options,
        )

    def get_audit_logs(
        self,
        *,
        subscription_id: str | None = None,
        status: StatusLushaWebhooksApiOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuditLogsResponse, GetAuditLogsErrorBody]:
        """Retrieve webhook delivery logs for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs**

        **What's Logged:**
        - All webhook delivery attempts (success and failures)
        - HTTP status codes and response times
        - Error messages for failed deliveries
        - Delivery timestamps and duration metrics

        **Filtering:**
        - Filter by subscription ID to see logs for specific subscriptions
        - Filter by status to see only successes, failures, or permanent failures

        **Rate Limit:** 100 requests/minute per account

        > **Note:** Logs are retained for 90 days (successful) and 180 days (failed/DLQ)

        Args:
            subscription_id: Filter by subscription ID
            status: Filter by delivery status
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/audit-logs"),
            query_params=[
                param[str | None]("subscriptionId", subscription_id),
                param[StatusLushaWebhooksApiOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AuditLogsResponse],
            error_mapper=get_audit_logs_error_mapper,
            request_options=request_options,
        )

    def get_subscription_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionWithoutSecret, GetSubscriptionByIdErrorBody]:
        """Returns a single webhook subscription by ID.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**

        Args:
            id_: Subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SubscriptionWithoutSecret],
            error_mapper=get_subscription_by_id_error_mapper,
            request_options=request_options,
        )

    def list_subscriptions(
        self, *, limit: int | None = 10, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionListResponse, ListSubscriptionsErrorBody]:
        """Returns all webhook subscriptions for your account with pagination support.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions**

        **Pagination:**
        - Results are sorted by ``createdAt`` in descending order (newest first)
        - Default limit: 10, max limit: 100
        - Use ``offset`` for pagination through large result sets

        > **Note:** The webhook ``secret`` is never returned in list responses for security.

        Args:
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/subscriptions"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SubscriptionListResponse],
            error_mapper=list_subscriptions_error_mapper,
            request_options=request_options,
        )

    def regenerate_account_secret(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiAccountSecretRegenerateResponse, RegenerateAccountSecretErrorBody]:
        """Regenerate the account webhook secret. Affects **all subscriptions** for the account.

        *Endpoint*: **(POST) https://api.lusha.com/api/account/secret/regenerate**

        **Behavior:**
        - If a secret already exists: Replaces with new secret (old secret is invalidated)
        - If no secret exists: Creates new secret automatically

        **Important Notes:**
        - The secret is only shown once in the response. Store it securely.
        - This endpoint always succeeds (upsert operation)
        - Regenerating invalidates the old secret for **all subscriptions** (if one existed)
        - An account secret must exist before webhooks can be delivered

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/account/secret/regenerate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiAccountSecretRegenerateResponse],
            error_mapper=regenerate_account_secret_error_mapper,
            request_options=request_options,
        )

    def test_subscription(
        self, id_: str, *, mode: ModeOrStr | None = Mode.FULL, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TestSubscriptionResponse, TestSubscriptionErrorBody]:
        """Test a webhook subscription by sending a test signal. Supports three test modes.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/{id}/test**
        ---
        **Test Modes:**
        - ``direct`` - Quick HTTP check only (validates URL responds correctly)
        - ``kafka`` - Fanout handler only (tests Kafka message processing)
        - ``full`` - Complete Kafka flow (default - end-to-end test)

        **Important Notes:**
        - Test deliveries do NOT consume credits
        - Test payloads use mock data
        - Useful for verifying webhook configuration before going live

        Args:
            id_: Subscription ID
            mode: Test mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions/{id}/test"),
            path_params=[param[str]("id", id_)],
            query_params=[param[ModeOrStr | None]("mode", mode)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TestSubscriptionResponse],
            error_mapper=test_subscription_error_mapper,
            request_options=request_options,
        )

    def update_subscription(
        self,
        id_: str,
        body: UpdateSubscriptionRequest | UpdateSubscriptionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, UpdateSubscriptionErrorBody]:
        """Updates an existing webhook subscription. All fields are optional.

        *Endpoint*: **(PATCH) https://api.lusha.com/api/subscriptions/{id}**

        ---
        **Reactivating Disabled Subscriptions:**

        When setting ``isActive: true`` on a previously disabled subscription, the system automatically:
        - Clears the ``blockReason`` field
        - Clears the ``blockedAt`` timestamp
        - Resets the retry counter

        **Regenerating Secrets:**

        Set ``regenerateSecret: true`` to generate a new webhook secret. The new secret:
        - Affects **all subscriptions** for your account
        - Is only shown once in the response
        - Immediately invalidates the old secret
        ---

        Args:
            id_: Subscription ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSubscriptionRequest | UpdateSubscriptionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=update_subscription_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_opt_out_subscription(
        self,
        body: CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OptOutSubscriptionResponse, CreateOptOutSubscriptionErrorBody]:
        """Subscribe to real-time notifications when a contact opts out of data processing. When a contact requests
        removal, Lusha sends an ``OptOutWebhookPayload`` to your endpoint so you can action the removal in your own
        systems (CRM, outreach tools, etc.).

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/opt-out**

        ---

        **How it works:**
        - Create one opt-out subscription per account (scoped to ``contact`` entity type)
        - Lusha delivers a POST request to your URL whenever a contact opts out
        - The payload includes the contact identity, opt-out date, and the specific data points (emails and/or phones)
            that must be removed

        **Payload you'll receive:** ```json
        {
        "contactId": "987654321", "fullName": "Jane Doe", "companyName": "Acme Corp", "jobTitle": "Director of Product",
        "linkedinUrl": "https://www.linkedin.com/in/jane-doe", "contactOptOutDate": "2026-04-22 14:32:11.412",
        "contactExposureDate": "2025-08-03 09:15:47", "datapoints": [ { "datapointId": "+14155550199", "datapointType":
        "phone" }, { "datapointId": "jane.doe@acme.com", "datapointType": "email" }
        ],
        "partnerClientId": "acme-crm-tenant-42"
        }
        ```

        > **Important:** Signature verification applies the same way as standard webhook deliveries. See Security &
            Verification for details.

        > **Note:** Ensure your account has a webhook secret before creating this subscription. See Regenerate Account
            Secret.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions/opt-out"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[OptOutSubscriptionResponse],
            error_mapper=create_opt_out_subscription_error_mapper,
            request_options=request_options,
        )

    async def create_subscription(
        self,
        body: CreateSubscriptionRequest | CreateSubscriptionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSubscriptionResponse, CreateSubscriptionErrorBody]:
        """Creates one or more webhook subscriptions for real-time signal notifications.

        **Delivery & Reliability:**
        - Webhooks are delivered with automatic retry on failures
        - Maximum 3 retry attempts with exponential backoff
        - Subscriptions auto-disable after max retries exceeded
        - All deliveries are logged in audit logs

        > **Note:** Your webhook endpoint must respond with a proper acknowledgment.
        See Client Response Format below for details.

        > **Limit:** Maximum 25 subscriptions per request

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions**

        ---

        ### Webhook Payload You'll Receive When a signal is triggered, this payload is sent to your webhook URL: ```json
        {
        "id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c", "type": "promotion", "entityType": "contact", "entityId":
        "4158887495", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "personId": 4158887495,
        "currentCompanyId": 40823133, "currentCompanyName": "OMG Hospitality Group LLC", "currentDomain":
        "omghospitalitygroup.com", "currentTitle": "Bartender", "currentDepartments": [ { "id": 7, "value": "Other" }
        ],
        "previousCompanyName": "First Watch Restaurants", "previousDomain": "firstwatch.com", "signalDate": "2025-07-01"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```
        **Example — Company News Signal:** ```json
        {
        "id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45", "type": "commercialActivityNews", "entityType": "company",
        "entityId": "33222678", "subscriptionId": "507f1f77bcf86cd799439011", "data": { "companyId": "33222678",
        "companyName": "Lusha", "domain": "lusha.com", "signalId": "1503910", "eventType": "partnership",
        "eventSummary": "Lusha announced a strategic partnership with Salesforce.", "articlePublishedDate":
        "2025-06-15", "articleTitle": "Lusha Partners with Salesforce", "articleHighlight": "The partnership enables
        Salesforce users to access Lusha data directly within their CRM.", "eventEffectiveDate": "2025-06-10",
        "articleUrl": "https://example.com/lusha-salesforce-partnership"
        },
        "timestamp": "2026-01-14T16:16:35.841Z", "billing": { "creditsCharged": 1
        }
        }
        ```

        **Headers Included:**

        | Header | Description |
        |--------|-------------|
        | ``X-Lusha-Signature`` | HMAC-SHA256 signature for verification |
        | ``X-Lusha-Timestamp`` | Unix timestamp of the request |
        | ``Content-Type`` | application/json |
        | ``User-Agent`` | Lusha-Webhooks/1.0 |

        ---
        ⚠️ **Important:** Ensure your account has a webhook secret before creating subscriptions. Create one via the
        Regenerate Account Secret endpoint.

        ---

        ### Client Response Format (Required)

        When your webhook endpoint receives a delivery, it **must** acknowledge receipt with this response:

        **Required Response:** ````json
        {
        "received": true, "timestamp": "2026-02-05T10:30:45.123Z", "webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
        }
        ````

        Response Requirements

        | Requirement | Value |
        |-------------|-------|
        | **HTTP Status** | ``201 Created`` (recommended) or any ``2xx`` status |
        | **Content-Type** | ``application/json`` |
        | **Response Time** | Within 10 seconds |

        Field Descriptions & Implementation Guide

        **Field Descriptions:**
        * ``received`` (boolean, required): Confirmation flag - must be ``true``
        * ``timestamp`` (string, required): ISO 8601 timestamp of receipt
        * ``webhookId`` (string, required): Echo the ``id`` from webhook payload

        **Implementation Example:** ```javascript app.post('/webhook', async (req, res) => { // 1. Verify signature if
        (!verifyWebhookSignature(req)) { return res.status(401).json({ error: 'Invalid signature' });
        }

        // 2. Queue for async processing await queueWebhook(req.body);

        // 3. Acknowledge immediately res.status(201).json({ received: true, timestamp: new Date().toISOString(),
        webhookId: req.body.id
        });
        ```

        **Important Notes:**
        * Return acknowledgment **before** heavy processing
        * Non-2xx responses trigger retry mechanism
        * After 3 failed retries, subscription is disabled

        ----

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSubscriptionRequest | CreateSubscriptionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CreateSubscriptionResponse],
            error_mapper=create_subscription_error_mapper,
            request_options=request_options,
        )

    async def delete_subscriptions(
        self,
        body: ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteSubscriptionResponse, DeleteSubscriptionsErrorBody]:
        """Delete one or more webhook subscriptions. Returns detailed results for each deletion with partial success
        support.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/delete**

        ---

        **Behavior:**
        - Each subscription is processed independently
        - Returns detailed results for each item including deleted subscription info
        - Invalid ID formats are gracefully handled and reported as NOT_FOUND
        - Duplicate IDs are automatically deduplicated
        - Deletion is permanent and cannot be undone

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[DeleteSubscriptionResponse],
            error_mapper=delete_subscriptions_error_mapper,
            request_options=request_options,
        )

    async def get_account_secret(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiAccountSecretResponse, GetAccountSecretErrorBody]:
        """Retrieve the current account webhook secret.

        *Endpoint*: **(GET) https://api.lusha.com/api/account/secret**

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/account/secret"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiAccountSecretResponse],
            error_mapper=get_account_secret_error_mapper,
            request_options=request_options,
        )

    async def get_audit_log_stats(
        self, *, subscription_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuditLogStatsResponse, GetAuditLogStatsErrorBody]:
        """Get delivery statistics for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**

        Args:
            subscription_id: Filter statistics by subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/audit-logs/stats"),
            query_params=[param[str | None]("subscriptionId", subscription_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AuditLogStatsResponse],
            error_mapper=get_audit_log_stats_error_mapper,
            request_options=request_options,
        )

    async def get_audit_logs(
        self,
        *,
        subscription_id: str | None = None,
        status: StatusLushaWebhooksApiOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuditLogsResponse, GetAuditLogsErrorBody]:
        """Retrieve webhook delivery logs for your account.

        *Endpoint*: **(GET) https://api.lusha.com/api/audit-logs**

        **What's Logged:**
        - All webhook delivery attempts (success and failures)
        - HTTP status codes and response times
        - Error messages for failed deliveries
        - Delivery timestamps and duration metrics

        **Filtering:**
        - Filter by subscription ID to see logs for specific subscriptions
        - Filter by status to see only successes, failures, or permanent failures

        **Rate Limit:** 100 requests/minute per account

        > **Note:** Logs are retained for 90 days (successful) and 180 days (failed/DLQ)

        Args:
            subscription_id: Filter by subscription ID
            status: Filter by delivery status
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/audit-logs"),
            query_params=[
                param[str | None]("subscriptionId", subscription_id),
                param[StatusLushaWebhooksApiOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AuditLogsResponse],
            error_mapper=get_audit_logs_error_mapper,
            request_options=request_options,
        )

    async def get_subscription_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionWithoutSecret, GetSubscriptionByIdErrorBody]:
        """Returns a single webhook subscription by ID.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**

        Args:
            id_: Subscription ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SubscriptionWithoutSecret],
            error_mapper=get_subscription_by_id_error_mapper,
            request_options=request_options,
        )

    async def list_subscriptions(
        self,
        *,
        limit: int | None = 10,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionListResponse, ListSubscriptionsErrorBody]:
        """Returns all webhook subscriptions for your account with pagination support.

        *Endpoint*: **(GET) https://api.lusha.com/api/subscriptions**

        **Pagination:**
        - Results are sorted by ``createdAt`` in descending order (newest first)
        - Default limit: 10, max limit: 100
        - Use ``offset`` for pagination through large result sets

        > **Note:** The webhook ``secret`` is never returned in list responses for security.

        Args:
            limit: Maximum number of results (1-100)
            offset: Number of results to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/subscriptions"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SubscriptionListResponse],
            error_mapper=list_subscriptions_error_mapper,
            request_options=request_options,
        )

    async def regenerate_account_secret(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiAccountSecretRegenerateResponse, RegenerateAccountSecretErrorBody]:
        """Regenerate the account webhook secret. Affects **all subscriptions** for the account.

        *Endpoint*: **(POST) https://api.lusha.com/api/account/secret/regenerate**

        **Behavior:**
        - If a secret already exists: Replaces with new secret (old secret is invalidated)
        - If no secret exists: Creates new secret automatically

        **Important Notes:**
        - The secret is only shown once in the response. Store it securely.
        - This endpoint always succeeds (upsert operation)
        - Regenerating invalidates the old secret for **all subscriptions** (if one existed)
        - An account secret must exist before webhooks can be delivered

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/account/secret/regenerate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiAccountSecretRegenerateResponse],
            error_mapper=regenerate_account_secret_error_mapper,
            request_options=request_options,
        )

    async def test_subscription(
        self, id_: str, *, mode: ModeOrStr | None = Mode.FULL, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TestSubscriptionResponse, TestSubscriptionErrorBody]:
        """Test a webhook subscription by sending a test signal. Supports three test modes.

        *Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/{id}/test**
        ---
        **Test Modes:**
        - ``direct`` - Quick HTTP check only (validates URL responds correctly)
        - ``kafka`` - Fanout handler only (tests Kafka message processing)
        - ``full`` - Complete Kafka flow (default - end-to-end test)

        **Important Notes:**
        - Test deliveries do NOT consume credits
        - Test payloads use mock data
        - Useful for verifying webhook configuration before going live

        Args:
            id_: Subscription ID
            mode: Test mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/subscriptions/{id}/test"),
            path_params=[param[str]("id", id_)],
            query_params=[param[ModeOrStr | None]("mode", mode)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TestSubscriptionResponse],
            error_mapper=test_subscription_error_mapper,
            request_options=request_options,
        )

    async def update_subscription(
        self,
        id_: str,
        body: UpdateSubscriptionRequest | UpdateSubscriptionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, UpdateSubscriptionErrorBody]:
        """Updates an existing webhook subscription. All fields are optional.

        *Endpoint*: **(PATCH) https://api.lusha.com/api/subscriptions/{id}**

        ---
        **Reactivating Disabled Subscriptions:**

        When setting ``isActive: true`` on a previously disabled subscription, the system automatically:
        - Clears the ``blockReason`` field
        - Clears the ``blockedAt`` timestamp
        - Resets the retry counter

        **Regenerating Secrets:**

        Set ``regenerateSecret: true`` to generate a new webhook secret. The new secret:
        - Affects **all subscriptions** for your account
        - Is only shown once in the response
        - Immediately invalidates the old secret
        ---

        Args:
            id_: Subscription ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSubscriptionRequest | UpdateSubscriptionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=update_subscription_error_mapper,
            request_options=request_options,
        )
