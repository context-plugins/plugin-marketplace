from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.billing_webhook_billing_webhook_post_error import (
    BillingWebhookBillingWebhookPostErrorBody,
    billing_webhook_billing_webhook_post_error_mapper,
)
from ..errors.checkout_billing_checkout_post_error import (
    CheckoutBillingCheckoutPostErrorBody,
    checkout_billing_checkout_post_error_mapper,
)
from ..server.server import Server


class Billing:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BillingWithRawResponse(client, server)

    def billing_success_billing_success_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.billing_success_billing_success_get(request_options=request_options))

    def billing_webhook_billing_webhook_post(
        self, *, stripe_signature: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Stripe calls this to confirm payments. Upgrades/downgrades the key.

        Args:
            stripe_signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.billing_webhook_billing_webhook_post(
                stripe_signature=stripe_signature, request_options=request_options
            ),
        )

    def checkout_billing_checkout_post(
        self,
        api_key: str,
        *,
        tier: str | None = "pro",
        interval: str | None = "month",
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Start a Stripe Checkout for a paid plan. Returns a payment URL.

        Args:
            api_key: the key you want to upgrade
            tier: pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)
            interval: 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.checkout_billing_checkout_post(
                api_key, tier=tier, interval=interval, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BillingWithRawResponse:
        return self._with_raw_response


class AsyncBilling:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBillingWithRawResponse(client, server)

    async def billing_success_billing_success_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.billing_success_billing_success_get(request_options=request_options)
        )

    async def billing_webhook_billing_webhook_post(
        self, *, stripe_signature: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Stripe calls this to confirm payments. Upgrades/downgrades the key.

        Args:
            stripe_signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.billing_webhook_billing_webhook_post(
                stripe_signature=stripe_signature, request_options=request_options
            ),
        )

    async def checkout_billing_checkout_post(
        self,
        api_key: str,
        *,
        tier: str | None = "pro",
        interval: str | None = "month",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Start a Stripe Checkout for a paid plan. Returns a payment URL.

        Args:
            api_key: the key you want to upgrade
            tier: pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)
            interval: 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.checkout_billing_checkout_post(
                api_key, tier=tier, interval=interval, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBillingWithRawResponse:
        return self._with_raw_response


class BillingWithRawResponse(BaseRawResponse[RawClient, Server]):
    def billing_success_billing_success_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/success"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def billing_webhook_billing_webhook_post(
        self, *, stripe_signature: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, BillingWebhookBillingWebhookPostErrorBody]:
        """Stripe calls this to confirm payments. Upgrades/downgrades the key.

        Args:
            stripe_signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/webhook"),
            headers=[param[str | None]("stripe-signature", stripe_signature), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=billing_webhook_billing_webhook_post_error_mapper,
            request_options=request_options,
        )

    def checkout_billing_checkout_post(
        self,
        api_key: str,
        *,
        tier: str | None = "pro",
        interval: str | None = "month",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CheckoutBillingCheckoutPostErrorBody]:
        """Start a Stripe Checkout for a paid plan. Returns a payment URL.

        Args:
            api_key: the key you want to upgrade
            tier: pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)
            interval: 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/checkout"),
            query_params=[
                param[str]("api_key", api_key), param[str | None]("tier", tier), param[str | None]("interval", interval)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=checkout_billing_checkout_post_error_mapper,
            request_options=request_options,
        )


class AsyncBillingWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def billing_success_billing_success_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/success"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def billing_webhook_billing_webhook_post(
        self, *, stripe_signature: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, BillingWebhookBillingWebhookPostErrorBody]:
        """Stripe calls this to confirm payments. Upgrades/downgrades the key.

        Args:
            stripe_signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/webhook"),
            headers=[param[str | None]("stripe-signature", stripe_signature), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=billing_webhook_billing_webhook_post_error_mapper,
            request_options=request_options,
        )

    async def checkout_billing_checkout_post(
        self,
        api_key: str,
        *,
        tier: str | None = "pro",
        interval: str | None = "month",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CheckoutBillingCheckoutPostErrorBody]:
        """Start a Stripe Checkout for a paid plan. Returns a payment URL.

        Args:
            api_key: the key you want to upgrade
            tier: pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)
            interval: 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/checkout"),
            query_params=[
                param[str]("api_key", api_key), param[str | None]("tier", tier), param[str | None]("interval", interval)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=checkout_billing_checkout_post_error_mapper,
            request_options=request_options,
        )
