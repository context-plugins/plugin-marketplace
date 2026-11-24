from __future__ import annotations

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
from ..errors.get_shipping_rate_usage_error import GetShippingRateUsageErrorBody, get_shipping_rate_usage_error_mapper
from ..errors.get_shipping_rates_error import GetShippingRatesErrorBody, get_shipping_rates_error_mapper
from ..models.shipping_rate_request import ShippingRateRequest, ShippingRateRequestDict
from ..models.shipping_rate_response import ShippingRateResponse
from ..models.shipping_rate_usage_response import ShippingRateUsageResponse
from ..server.server import Server


class ShippingRates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ShippingRatesWithRawResponse(client, server, auth)

    def get_shipping_rate_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ShippingRateUsageResponse:
        """Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current independent Shipping Rates entitlement and usage.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks access to account usage. ``error`` is ``ApiErrorModel
                | RawError``."""
        return unwrap(self._with_raw_response.get_shipping_rate_usage(request_options=request_options))

    def get_shipping_rates(
        self,
        body: ShippingRateRequest | ShippingRateRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ShippingRateResponse:
        """Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and
        dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are
        returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay
        discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping
        request only when usable applicable rates are returned.

        Args:
            body: The request body.
            idempotency_key: Replays a completed identical quote without consuming another shipping request. Use a new
                key for a different request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usable shipping-rate estimates. One separate shipping request is consumed unless this is an idempotent
            replay.

        Raises:
            ApiError: Malformed JSON or invalid route or package details. Missing or invalid API key. Credential lacks
                access or the account has no active Shipping Rates subscription. Idempotency key conflict or an
                identical request with that key is still running. Request body exceeds 16 KB. No shipping services were
                available. No shipping request is consumed. Shipping rate limit or independent monthly shipping quota
                exceeded. Shipping-rate source is temporarily unavailable. No shipping request is consumed.
                Shipping-rate capacity is temporarily busy. No shipping request is consumed. ``error`` is
                ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_shipping_rates(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ShippingRatesWithRawResponse:
        return self._with_raw_response


class AsyncShippingRates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncShippingRatesWithRawResponse(client, server, auth)

    async def get_shipping_rate_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ShippingRateUsageResponse:
        """Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current independent Shipping Rates entitlement and usage.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks access to account usage. ``error`` is ``ApiErrorModel
                | RawError``."""
        return unwrap(await self._with_raw_response.get_shipping_rate_usage(request_options=request_options))

    async def get_shipping_rates(
        self,
        body: ShippingRateRequest | ShippingRateRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ShippingRateResponse:
        """Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and
        dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are
        returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay
        discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping
        request only when usable applicable rates are returned.

        Args:
            body: The request body.
            idempotency_key: Replays a completed identical quote without consuming another shipping request. Use a new
                key for a different request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usable shipping-rate estimates. One separate shipping request is consumed unless this is an idempotent
            replay.

        Raises:
            ApiError: Malformed JSON or invalid route or package details. Missing or invalid API key. Credential lacks
                access or the account has no active Shipping Rates subscription. Idempotency key conflict or an
                identical request with that key is still running. Request body exceeds 16 KB. No shipping services were
                available. No shipping request is consumed. Shipping rate limit or independent monthly shipping quota
                exceeded. Shipping-rate source is temporarily unavailable. No shipping request is consumed.
                Shipping-rate capacity is temporarily busy. No shipping request is consumed. ``error`` is
                ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_shipping_rates(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncShippingRatesWithRawResponse:
        return self._with_raw_response


class ShippingRatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_shipping_rate_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ShippingRateUsageResponse, GetShippingRateUsageErrorBody]:
        """Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/shipping/usage"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ShippingRateUsageResponse],
            error_mapper=get_shipping_rate_usage_error_mapper,
            request_options=request_options,
        )

    def get_shipping_rates(
        self,
        body: ShippingRateRequest | ShippingRateRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ShippingRateResponse, GetShippingRatesErrorBody]:
        """Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and
        dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are
        returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay
        discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping
        request only when usable applicable rates are returned.

        Args:
            body: The request body.
            idempotency_key: Replays a completed identical quote without consuming another shipping request. Use a new
                key for a different request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/shipping/rates"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ShippingRateRequest | ShippingRateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ShippingRateResponse],
            error_mapper=get_shipping_rates_error_mapper,
            request_options=request_options,
        )


class AsyncShippingRatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_shipping_rate_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ShippingRateUsageResponse, GetShippingRateUsageErrorBody]:
        """Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/shipping/usage"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ShippingRateUsageResponse],
            error_mapper=get_shipping_rate_usage_error_mapper,
            request_options=request_options,
        )

    async def get_shipping_rates(
        self,
        body: ShippingRateRequest | ShippingRateRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ShippingRateResponse, GetShippingRatesErrorBody]:
        """Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and
        dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are
        returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay
        discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping
        request only when usable applicable rates are returned.

        Args:
            body: The request body.
            idempotency_key: Replays a completed identical quote without consuming another shipping request. Use a new
                key for a different request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/shipping/rates"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ShippingRateRequest | ShippingRateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ShippingRateResponse],
            error_mapper=get_shipping_rates_error_mapper,
            request_options=request_options,
        )
