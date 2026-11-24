from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.event_dto import EventDto
from ..models.pagination_dto_subscription_response_dto import PaginationDtoSubscriptionResponseDto
from ..models.security_key_dto import SecurityKeyDto
from ..models.send_test_event_request_dto import SendTestEventRequestDto, SendTestEventRequestDtoDict
from ..models.subscription_request_dto import SubscriptionRequestDto, SubscriptionRequestDtoDict
from ..models.subscription_response_dto import SubscriptionResponseDto
from ..models.subscription_update_request_dto import SubscriptionUpdateRequestDto, SubscriptionUpdateRequestDtoDict
from ..models.subscription_with_security_key_response_dto import SubscriptionWithSecurityKeyResponseDto
from ..server.server import Server


class Subscriptions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SubscriptionsWithRawResponse(client, server)

    def create_new_security_key(
        self,
        subscription_id: str,
        x_idempotent_key: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SecurityKeyDto:
        """Create a new security key for your subscription.

        When you create a new subscription, a one-time ``securityKey`` is one of the generated values in the response.
        All event notifications sent to your ``notificationUrl`` are signed with this key using the HMAC-SHA256
        algorithm. The key is sent as the ``x-bill-sha-signature`` header value in the notification.

        You can use the security key to verify all notifications sent to you. It is good practice to keep the security
        key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key
        based on your desired frequency.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            createNewSecurityKey 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_new_security_key(
                subscription_id,
                x_idempotent_key,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def create_subscription(
        self,
        x_idempotent_key: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionWithSecurityKeyResponseDto:
        """Create a new event subscription. You can subscribe to multiple events with a single request. You can create
        up to 10 webhook subscriptions per organization.

        BILL provides a full catalog of all the events that you can subscribe to with ``GET /v3/events/catalog``. See
        Get events catalog in the API reference for more information.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            createSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_subscription(
                x_idempotent_key,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def delete_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            deleteSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_subscription(
                subscription_id,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def get_all_subscriptions(
        self,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationDtoSubscriptionResponseDto:
        """Get a list of all your created subscriptions.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getAllSubscriptions 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_all_subscriptions(
                max_=max_,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def get_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponseDto:
        """Get details about an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_subscription(
                subscription_id,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def replace_subscription(
        self,
        subscription_id: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponseDto:
        """Update the events that you are subscribed to.

        You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace
        the ``bill.created`` event with ``bill.updated`` in your subscription.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            replaceSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.replace_subscription(
                subscription_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def send_test_event(
        self,
        subscription_id: str,
        body: SendTestEventRequestDto | SendTestEventRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventDto:
        """Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a
        test event notification to your specified notification URL.

        In your request, all the fields are optional. To see specific information in the test event notification, you
        can set ``eventType``, ``version``, and any details. You can get the BILL events catalog with ``GET
        /v3/events/catalog``.

        **Note**: All the fields in the test event notification are test values. You cannot use any of the test values
        for any other operation.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            sendTestEvent 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.send_test_event(
                subscription_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def update_subscription(
        self,
        subscription_id: str,
        body: SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponseDto:
        """Update details about a subscription.

        You can use the PATCH operation to modify existing subscription details, such as ``name``, ``status``, and
        ``notificationUrl``.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            updateSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_subscription(
                subscription_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SubscriptionsWithRawResponse:
        return self._with_raw_response


class AsyncSubscriptions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSubscriptionsWithRawResponse(client, server)

    async def create_new_security_key(
        self,
        subscription_id: str,
        x_idempotent_key: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SecurityKeyDto:
        """Create a new security key for your subscription.

        When you create a new subscription, a one-time ``securityKey`` is one of the generated values in the response.
        All event notifications sent to your ``notificationUrl`` are signed with this key using the HMAC-SHA256
        algorithm. The key is sent as the ``x-bill-sha-signature`` header value in the notification.

        You can use the security key to verify all notifications sent to you. It is good practice to keep the security
        key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key
        based on your desired frequency.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            createNewSecurityKey 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_new_security_key(
                subscription_id,
                x_idempotent_key,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def create_subscription(
        self,
        x_idempotent_key: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionWithSecurityKeyResponseDto:
        """Create a new event subscription. You can subscribe to multiple events with a single request. You can create
        up to 10 webhook subscriptions per organization.

        BILL provides a full catalog of all the events that you can subscribe to with ``GET /v3/events/catalog``. See
        Get events catalog in the API reference for more information.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            createSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_subscription(
                x_idempotent_key,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def delete_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            deleteSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_subscription(
                subscription_id,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def get_all_subscriptions(
        self,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationDtoSubscriptionResponseDto:
        """Get a list of all your created subscriptions.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getAllSubscriptions 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_subscriptions(
                max_=max_,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def get_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponseDto:
        """Get details about an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_subscription(
                subscription_id,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def replace_subscription(
        self,
        subscription_id: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponseDto:
        """Update the events that you are subscribed to.

        You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace
        the ``bill.created`` event with ``bill.updated`` in your subscription.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            replaceSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.replace_subscription(
                subscription_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def send_test_event(
        self,
        subscription_id: str,
        body: SendTestEventRequestDto | SendTestEventRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventDto:
        """Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a
        test event notification to your specified notification URL.

        In your request, all the fields are optional. To see specific information in the test event notification, you
        can set ``eventType``, ``version``, and any details. You can get the BILL events catalog with ``GET
        /v3/events/catalog``.

        **Note**: All the fields in the test event notification are test values. You cannot use any of the test values
        for any other operation.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            sendTestEvent 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.send_test_event(
                subscription_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def update_subscription(
        self,
        subscription_id: str,
        body: SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponseDto:
        """Update details about a subscription.

        You can use the PATCH operation to modify existing subscription details, such as ``name``, ``status``, and
        ``notificationUrl``.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            updateSubscription 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_subscription(
                subscription_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                app_key=app_key,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSubscriptionsWithRawResponse:
        return self._with_raw_response


class SubscriptionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_new_security_key(
        self,
        subscription_id: str,
        x_idempotent_key: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SecurityKeyDto, RawError]:
        """Create a new security key for your subscription.

        When you create a new subscription, a one-time ``securityKey`` is one of the generated values in the response.
        All event notifications sent to your ``notificationUrl`` are signed with this key using the HMAC-SHA256
        algorithm. The key is sent as the ``x-bill-sha-signature`` header value in the notification.

        You can use the security key to verify all notifications sent to you. It is good practice to keep the security
        key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key
        based on your desired frequency.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}/security_key"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str]("X-Idempotent-Key", x_idempotent_key),
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[SecurityKeyDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_subscription(
        self,
        x_idempotent_key: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionWithSecurityKeyResponseDto, RawError]:
        """Create a new event subscription. You can subscribe to multiple events with a single request. You can create
        up to 10 webhook subscriptions per organization.

        BILL provides a full catalog of all the events that you can subscribe to with ``GET /v3/events/catalog``. See
        Get events catalog in the API reference for more information.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api("/v3/subscriptions"),
            headers=[
                param[str]("X-Idempotent-Key", x_idempotent_key),
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SubscriptionRequestDto | SubscriptionRequestDtoDict](body),
            decoder=json_decoder[SubscriptionWithSecurityKeyResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_all_subscriptions(
        self,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationDtoSubscriptionResponseDto, RawError]:
        """Get a list of all your created subscriptions.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/subscriptions"),
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=json_decoder[PaginationDtoSubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponseDto, RawError]:
        """Get details about an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=json_decoder[SubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def replace_subscription(
        self,
        subscription_id: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponseDto, RawError]:
        """Update the events that you are subscribed to.

        You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace
        the ``bill.created`` event with ``bill.updated`` in your subscription.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SubscriptionRequestDto | SubscriptionRequestDtoDict](body),
            decoder=json_decoder[SubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def send_test_event(
        self,
        subscription_id: str,
        body: SendTestEventRequestDto | SendTestEventRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventDto, RawError]:
        """Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a
        test event notification to your specified notification URL.

        In your request, all the fields are optional. To see specific information in the test event notification, you
        can set ``eventType``, ``version``, and any details. You can get the BILL events catalog with ``GET
        /v3/events/catalog``.

        **Note**: All the fields in the test event notification are test values. You cannot use any of the test values
        for any other operation.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}/test"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SendTestEventRequestDto | SendTestEventRequestDtoDict](body),
            decoder=json_decoder[EventDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_subscription(
        self,
        subscription_id: str,
        body: SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponseDto, RawError]:
        """Update details about a subscription.

        You can use the PATCH operation to modify existing subscription details, such as ``name``, ``status``, and
        ``notificationUrl``.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict](body),
            decoder=json_decoder[SubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSubscriptionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_new_security_key(
        self,
        subscription_id: str,
        x_idempotent_key: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SecurityKeyDto, RawError]:
        """Create a new security key for your subscription.

        When you create a new subscription, a one-time ``securityKey`` is one of the generated values in the response.
        All event notifications sent to your ``notificationUrl`` are signed with this key using the HMAC-SHA256
        algorithm. The key is sent as the ``x-bill-sha-signature`` header value in the notification.

        You can use the security key to verify all notifications sent to you. It is good practice to keep the security
        key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key
        based on your desired frequency.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}/security_key"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str]("X-Idempotent-Key", x_idempotent_key),
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[SecurityKeyDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_subscription(
        self,
        x_idempotent_key: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionWithSecurityKeyResponseDto, RawError]:
        """Create a new event subscription. You can subscribe to multiple events with a single request. You can create
        up to 10 webhook subscriptions per organization.

        BILL provides a full catalog of all the events that you can subscribe to with ``GET /v3/events/catalog``. See
        Get events catalog in the API reference for more information.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            x_idempotent_key: Idempotency key. The key must be in the UUID4 format.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api("/v3/subscriptions"),
            headers=[
                param[str]("X-Idempotent-Key", x_idempotent_key),
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SubscriptionRequestDto | SubscriptionRequestDtoDict](body),
            decoder=async_json_decoder[SubscriptionWithSecurityKeyResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Delete an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_all_subscriptions(
        self,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationDtoSubscriptionResponseDto, RawError]:
        """Get a list of all your created subscriptions.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        **Note**: In this list operation, pagination is available only in one direction. The ``nextPage`` value is
        available in the response for you to retrieve the next page of results. However, you cannot retrieve the
        previous page of results.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/subscriptions"),
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=async_json_decoder[PaginationDtoSubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_subscription(
        self,
        subscription_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponseDto, RawError]:
        """Get details about an existing subscription.

        Args:
            subscription_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
            ],
            decoder=async_json_decoder[SubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def replace_subscription(
        self,
        subscription_id: str,
        body: SubscriptionRequestDto | SubscriptionRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponseDto, RawError]:
        """Update the events that you are subscribed to.

        You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace
        the ``bill.created`` event with ``bill.updated`` in your subscription.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SubscriptionRequestDto | SubscriptionRequestDtoDict](body),
            decoder=async_json_decoder[SubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def send_test_event(
        self,
        subscription_id: str,
        body: SendTestEventRequestDto | SendTestEventRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventDto, RawError]:
        """Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a
        test event notification to your specified notification URL.

        In your request, all the fields are optional. To see specific information in the test event notification, you
        can set ``eventType``, ``version``, and any details. You can get the BILL events catalog with ``GET
        /v3/events/catalog``.

        **Note**: All the fields in the test event notification are test values. You cannot use any of the test values
        for any other operation.

        See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL
        events.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}/test"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SendTestEventRequestDto | SendTestEventRequestDtoDict](body),
            decoder=async_json_decoder[EventDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_subscription(
        self,
        subscription_id: str,
        body: SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        app_key: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponseDto, RawError]:
        """Update details about a subscription.

        You can use the PATCH operation to modify existing subscription details, such as ``name``, ``status``, and
        ``notificationUrl``.

        Args:
            subscription_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            app_key: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_connect_events_api("/v3/subscriptions/{subscriptionId}"),
            path_params=[param[str]("subscriptionId", subscription_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[str | None]("appKey", app_key),
                param[str | None]("apiToken", api_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict](body),
            decoder=async_json_decoder[SubscriptionResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
