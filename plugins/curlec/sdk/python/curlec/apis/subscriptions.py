from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.cancel_subscription_error import CancelSubscriptionErrorBody, cancel_subscription_error_mapper
from ..errors.cancel_subscription_scheduled_changes_error import (
    CancelSubscriptionScheduledChangesErrorBody,
    cancel_subscription_scheduled_changes_error_mapper,
)
from ..errors.create_subscription_error import CreateSubscriptionErrorBody, create_subscription_error_mapper
from ..errors.delete_subscription_offer_error import (
    DeleteSubscriptionOfferErrorBody,
    delete_subscription_offer_error_mapper,
)
from ..errors.fetch_subscription_error import FetchSubscriptionErrorBody, fetch_subscription_error_mapper
from ..errors.fetch_subscription_scheduled_changes_error import (
    FetchSubscriptionScheduledChangesErrorBody,
    fetch_subscription_scheduled_changes_error_mapper,
)
from ..errors.list_subscriptions_error import ListSubscriptionsErrorBody, list_subscriptions_error_mapper
from ..errors.pause_subscription_error import PauseSubscriptionErrorBody, pause_subscription_error_mapper
from ..errors.resume_subscription_error import ResumeSubscriptionErrorBody, resume_subscription_error_mapper
from ..errors.update_subscription_error import UpdateSubscriptionErrorBody, update_subscription_error_mapper
from ..models.subscription import Subscription
from ..models.subscriptions_cancel_request import SubscriptionsCancelRequest, SubscriptionsCancelRequestDict
from ..models.subscriptions_pause_request import SubscriptionsPauseRequest, SubscriptionsPauseRequestDict
from ..models.subscriptions_request import SubscriptionsRequest, SubscriptionsRequestDict
from ..models.subscriptions_request1 import SubscriptionsRequest1, SubscriptionsRequest1Dict
from ..models.subscriptions_response import SubscriptionsResponse
from ..models.subscriptions_resume_request import SubscriptionsResumeRequest, SubscriptionsResumeRequestDict
from ..models.subscriptions_retrieve_scheduled_changes_response import SubscriptionsRetrieveScheduledChangesResponse
from ..server.server import Server


class Subscriptions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SubscriptionsWithRawResponse(client, server, auth)

    def cancel_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end
        of the current cycle before cancelling.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription cancelled.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_subscription(id_, body=body, request_options=request_options))

    def cancel_subscription_scheduled_changes(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Subscription:
        """Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scheduled changes cancelled.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_subscription_scheduled_changes(id_, request_options=request_options)
        )

    def create_subscription(
        self,
        body: SubscriptionsRequest | SubscriptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment
        mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized.
        Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on
        your Razorpay account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription created. Send short_url to the customer for mandate authorization.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_subscription(body, request_options=request_options))

    def delete_subscription_offer(
        self, sub_id: str, offer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing
        cycle.

        Args:
            sub_id: Subscription ID (sub_*).
            offer_id: Offer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Offer removed from subscription.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_subscription_offer(sub_id, offer_id, request_options=request_options)
        )

    def fetch_subscription(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Subscription:
        """Get current status and full details of a subscription.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_subscription(id_, request_options=request_options))

    def fetch_subscription_scheduled_changes(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SubscriptionsRetrieveScheduledChangesResponse:
        """Retrieve any pending plan or quantity changes scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scheduled changes for the subscription.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.fetch_subscription_scheduled_changes(id_, request_options=request_options)
        )

    def list_subscriptions(
        self,
        *,
        plan_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionsResponse:
        """Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.

        Args:
            plan_id: Filter by plan ID.
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of subscriptions.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_subscriptions(
                plan_id=plan_id, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def pause_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Pause an active subscription. No charges will be attempted while paused. Resume with POST
        /subscriptions/{id}/resume.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription paused.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.pause_subscription(id_, body=body, request_options=request_options))

    def resume_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Resume a paused subscription. Charging resumes on the next scheduled cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription resumed.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.resume_subscription(id_, body=body, request_options=request_options))

    def update_subscription(
        self,
        id_: str,
        body: SubscriptionsRequest1 | SubscriptionsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for
        immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot
        change plan mid-cycle without creating a new cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_subscription(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SubscriptionsWithRawResponse:
        return self._with_raw_response


class AsyncSubscriptions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSubscriptionsWithRawResponse(client, server, auth)

    async def cancel_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end
        of the current cycle before cancelling.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription cancelled.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_subscription(id_, body=body, request_options=request_options)
        )

    async def cancel_subscription_scheduled_changes(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Subscription:
        """Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scheduled changes cancelled.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_subscription_scheduled_changes(id_, request_options=request_options)
        )

    async def create_subscription(
        self,
        body: SubscriptionsRequest | SubscriptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment
        mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized.
        Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on
        your Razorpay account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription created. Send short_url to the customer for mandate authorization.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_subscription(body, request_options=request_options))

    async def delete_subscription_offer(
        self, sub_id: str, offer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing
        cycle.

        Args:
            sub_id: Subscription ID (sub_*).
            offer_id: Offer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Offer removed from subscription.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_subscription_offer(sub_id, offer_id, request_options=request_options)
        )

    async def fetch_subscription(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Subscription:
        """Get current status and full details of a subscription.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_subscription(id_, request_options=request_options))

    async def fetch_subscription_scheduled_changes(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubscriptionsRetrieveScheduledChangesResponse:
        """Retrieve any pending plan or quantity changes scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scheduled changes for the subscription.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_subscription_scheduled_changes(id_, request_options=request_options)
        )

    async def list_subscriptions(
        self,
        *,
        plan_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionsResponse:
        """Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.

        Args:
            plan_id: Filter by plan ID.
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of subscriptions.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_subscriptions(
                plan_id=plan_id, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def pause_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Pause an active subscription. No charges will be attempted while paused. Resume with POST
        /subscriptions/{id}/resume.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription paused.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.pause_subscription(id_, body=body, request_options=request_options))

    async def resume_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Resume a paused subscription. Charging resumes on the next scheduled cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription resumed.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.resume_subscription(id_, body=body, request_options=request_options)
        )

    async def update_subscription(
        self,
        id_: str,
        body: SubscriptionsRequest1 | SubscriptionsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Subscription:
        """Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for
        immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot
        change plan mid-cycle without creating a new cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_subscription(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSubscriptionsWithRawResponse:
        return self._with_raw_response


class SubscriptionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, CancelSubscriptionErrorBody]:
        """Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end
        of the current cycle before cancelling.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/cancel"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=cancel_subscription_error_mapper,
            request_options=request_options,
        )

    def cancel_subscription_scheduled_changes(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Subscription, CancelSubscriptionScheduledChangesErrorBody]:
        """Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/cancel_scheduled_changes"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=cancel_subscription_scheduled_changes_error_mapper,
            request_options=request_options,
        )

    def create_subscription(
        self,
        body: SubscriptionsRequest | SubscriptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, CreateSubscriptionErrorBody]:
        """Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment
        mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized.
        Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on
        your Razorpay account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsRequest | SubscriptionsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=create_subscription_error_mapper,
            request_options=request_options,
        )

    def delete_subscription_offer(
        self, sub_id: str, offer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteSubscriptionOfferErrorBody]:
        """Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing
        cycle.

        Args:
            sub_id: Subscription ID (sub_*).
            offer_id: Offer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/subscriptions/{sub_id}/{offer_id}"),
            path_params=[param[str]("sub_id", sub_id), param[str]("offer_id", offer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Any],
            error_mapper=delete_subscription_offer_error_mapper,
            request_options=request_options,
        )

    def fetch_subscription(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Subscription, FetchSubscriptionErrorBody]:
        """Get current status and full details of a subscription.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=fetch_subscription_error_mapper,
            request_options=request_options,
        )

    def fetch_subscription_scheduled_changes(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionsRetrieveScheduledChangesResponse, FetchSubscriptionScheduledChangesErrorBody]:
        """Retrieve any pending plan or quantity changes scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscriptions/{id}/retrieve_scheduled_changes"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[SubscriptionsRetrieveScheduledChangesResponse],
            error_mapper=fetch_subscription_scheduled_changes_error_mapper,
            request_options=request_options,
        )

    def list_subscriptions(
        self,
        *,
        plan_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsResponse, ListSubscriptionsErrorBody]:
        """Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.

        Args:
            plan_id: Filter by plan ID.
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscriptions"),
            query_params=[
                param[str | None]("plan_id", plan_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[SubscriptionsResponse],
            error_mapper=list_subscriptions_error_mapper,
            request_options=request_options,
        )

    def pause_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, PauseSubscriptionErrorBody]:
        """Pause an active subscription. No charges will be attempted while paused. Resume with POST
        /subscriptions/{id}/resume.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/pause"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=pause_subscription_error_mapper,
            request_options=request_options,
        )

    def resume_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, ResumeSubscriptionErrorBody]:
        """Resume a paused subscription. Charging resumes on the next scheduled cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/resume"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=resume_subscription_error_mapper,
            request_options=request_options,
        )

    def update_subscription(
        self,
        id_: str,
        body: SubscriptionsRequest1 | SubscriptionsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, UpdateSubscriptionErrorBody]:
        """Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for
        immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot
        change plan mid-cycle without creating a new cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsRequest1 | SubscriptionsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Subscription],
            error_mapper=update_subscription_error_mapper,
            request_options=request_options,
        )


class AsyncSubscriptionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, CancelSubscriptionErrorBody]:
        """Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end
        of the current cycle before cancelling.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/cancel"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=cancel_subscription_error_mapper,
            request_options=request_options,
        )

    async def cancel_subscription_scheduled_changes(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Subscription, CancelSubscriptionScheduledChangesErrorBody]:
        """Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/cancel_scheduled_changes"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=cancel_subscription_scheduled_changes_error_mapper,
            request_options=request_options,
        )

    async def create_subscription(
        self,
        body: SubscriptionsRequest | SubscriptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, CreateSubscriptionErrorBody]:
        """Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment
        mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized.
        Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on
        your Razorpay account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsRequest | SubscriptionsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=create_subscription_error_mapper,
            request_options=request_options,
        )

    async def delete_subscription_offer(
        self, sub_id: str, offer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteSubscriptionOfferErrorBody]:
        """Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing
        cycle.

        Args:
            sub_id: Subscription ID (sub_*).
            offer_id: Offer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/subscriptions/{sub_id}/{offer_id}"),
            path_params=[param[str]("sub_id", sub_id), param[str]("offer_id", offer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Any],
            error_mapper=delete_subscription_offer_error_mapper,
            request_options=request_options,
        )

    async def fetch_subscription(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Subscription, FetchSubscriptionErrorBody]:
        """Get current status and full details of a subscription.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=fetch_subscription_error_mapper,
            request_options=request_options,
        )

    async def fetch_subscription_scheduled_changes(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionsRetrieveScheduledChangesResponse, FetchSubscriptionScheduledChangesErrorBody]:
        """Retrieve any pending plan or quantity changes scheduled for the next billing cycle.

        Args:
            id_: Subscription ID (sub_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscriptions/{id}/retrieve_scheduled_changes"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[SubscriptionsRetrieveScheduledChangesResponse],
            error_mapper=fetch_subscription_scheduled_changes_error_mapper,
            request_options=request_options,
        )

    async def list_subscriptions(
        self,
        *,
        plan_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsResponse, ListSubscriptionsErrorBody]:
        """Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.

        Args:
            plan_id: Filter by plan ID.
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscriptions"),
            query_params=[
                param[str | None]("plan_id", plan_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[SubscriptionsResponse],
            error_mapper=list_subscriptions_error_mapper,
            request_options=request_options,
        )

    async def pause_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, PauseSubscriptionErrorBody]:
        """Pause an active subscription. No charges will be attempted while paused. Resume with POST
        /subscriptions/{id}/resume.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/pause"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=pause_subscription_error_mapper,
            request_options=request_options,
        )

    async def resume_subscription(
        self,
        id_: str,
        *,
        body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, ResumeSubscriptionErrorBody]:
        """Resume a paused subscription. Charging resumes on the next scheduled cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/subscriptions/{id}/resume"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=resume_subscription_error_mapper,
            request_options=request_options,
        )

    async def update_subscription(
        self,
        id_: str,
        body: SubscriptionsRequest1 | SubscriptionsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Subscription, UpdateSubscriptionErrorBody]:
        """Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for
        immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot
        change plan mid-cycle without creating a new cycle.

        Args:
            id_: Subscription ID (sub_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/subscriptions/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionsRequest1 | SubscriptionsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Subscription],
            error_mapper=update_subscription_error_mapper,
            request_options=request_options,
        )
