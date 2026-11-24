from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.list_wholesale_areas_error import ListWholesaleAreasErrorBody, list_wholesale_areas_error_mapper
from ..errors.list_wholesale_countries_error import (
    ListWholesaleCountriesErrorBody,
    list_wholesale_countries_error_mapper,
)
from ..errors.list_wholesale_states_error import ListWholesaleStatesErrorBody, list_wholesale_states_error_mapper
from ..errors.order_wholesale_number_error import OrderWholesaleNumberErrorBody, order_wholesale_number_error_mapper
from ..errors.update_wholesale_delivery_error import (
    UpdateWholesaleDeliveryErrorBody,
    update_wholesale_delivery_error_mapper,
)
from ..models.api_v1_wholesale_areas_response import ApiV1WholesaleAreasResponse
from ..models.api_v1_wholesale_countries_response import ApiV1WholesaleCountriesResponse
from ..models.api_v1_wholesale_numbers_delivery_request import (
    ApiV1WholesaleNumbersDeliveryRequest,
    ApiV1WholesaleNumbersDeliveryRequestDict,
)
from ..models.api_v1_wholesale_numbers_delivery_response import ApiV1WholesaleNumbersDeliveryResponse
from ..models.api_v1_wholesale_numbers_request import ApiV1WholesaleNumbersRequest, ApiV1WholesaleNumbersRequestDict
from ..models.api_v1_wholesale_numbers_response import ApiV1WholesaleNumbersResponse
from ..models.api_v1_wholesale_states_response import ApiV1WholesaleStatesResponse
from ..server.server import Server


class Wholesale:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WholesaleWithRawResponse(client, server, auth)

    def list_wholesale_areas(
        self,
        *,
        country_id: str | None = None,
        state_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WholesaleAreasResponse:
        """Areas with available stock and ``estMonthlyUsd`` — YOUR contract price per number in that area, resolved
        server-side. There is no per-number search on wholesale inventory: you order from an area and a number is
        allocated.

        The first fetch for a large country (the UK has 600+ rate centres) can take up to a minute; results are cached
        server-side for ~10 minutes. Stock above zero does not guarantee an order succeeds — on an order failure, pick a
        different area rather than retrying the same one.

        Args:
            country_id: Value sent with the request.
            state_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Areas offering wholesale numbers.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Wholesale
                not active, or verification incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_wholesale_areas(
                country_id=country_id, state_id=state_id, request_options=request_options
            ),
        )

    def list_wholesale_countries(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1WholesaleCountriesResponse:
        """Countries where wholesale inventory exists — US and international.

        All ``/api/v1/wholesale`` endpoints are gated per request: wholesale must be ACTIVE on your account (arranged
        with our team — raise a Wholesale Activation request from the dashboard) and your business verification must be
        complete. Otherwise requests return ``403 wholesale_not_activated`` or ``403 account_not_verified``.

        ``countryId`` values are opaque signed tokens with a short lifetime — fetch them per ordering session and never
        persist them.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Countries with wholesale inventory.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Wholesale
                not active on this account, or business verification incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_wholesale_countries(request_options=request_options))

    def list_wholesale_states(
        self, *, country_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1WholesaleStatesResponse:
        """Regions for a country. Many countries have none — an empty list means go straight to areas with just the
        ``countryId``.

        Args:
            country_id: From ``/wholesale/countries``. Defaults to the US when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Regions (possibly empty).

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Wholesale
                not active, or verification incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_wholesale_states(country_id=country_id, request_options=request_options)
        )

    def order_wholesale_number(
        self,
        body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WholesaleNumbersResponse:
        """Allocates a number from an area and starts delivering its inbound calls to your SIP endpoint. Prepaid: the
        first month at your contract rate is charged from your wallet at allocation, then monthly; inbound minutes are
        charged per call as they complete.

        ``deliverTo`` accepts three forms:
        - a bare host (``pbx.example.com`` or a public IP) — we deliver as
        ``sip:@host``
        - a sip: URI containing ``{number}`` — replaced with the allocated number
        - a full ``sip:`` URI, used verbatim

        Allocation can take up to ~40 seconds. On ``order_failed`` for a specific area, order from a DIFFERENT area —
        retrying the same one will not help.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Number allocated, delivering, and charged.

        Raises:
            ApiError: Missing/invalid areaId or deliverTo (private hosts are refused). Insufficient wallet balance —
                nothing was ordered. Wholesale not active, verification incomplete, or rates not configured. The area
                could not be provisioned — order from a different area. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.order_wholesale_number(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    def update_wholesale_delivery(
        self,
        id_: str,
        body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WholesaleNumbersDeliveryResponse:
        """Changes the delivery destination of an existing wholesale number — same ``deliverTo`` forms as ordering,
        resolved against the known number. Clearing delivery is not allowed: a wholesale number with no destination
        silently drops every call.

        Args:
            id_: The number's id (from the order response or your numbers list).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delivery updated.

        Raises:
            ApiError: Invalid destination. Not a wholesale number on your account. The number has been released.
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_wholesale_delivery(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WholesaleWithRawResponse:
        return self._with_raw_response


class AsyncWholesale:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWholesaleWithRawResponse(client, server, auth)

    async def list_wholesale_areas(
        self,
        *,
        country_id: str | None = None,
        state_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WholesaleAreasResponse:
        """Areas with available stock and ``estMonthlyUsd`` — YOUR contract price per number in that area, resolved
        server-side. There is no per-number search on wholesale inventory: you order from an area and a number is
        allocated.

        The first fetch for a large country (the UK has 600+ rate centres) can take up to a minute; results are cached
        server-side for ~10 minutes. Stock above zero does not guarantee an order succeeds — on an order failure, pick a
        different area rather than retrying the same one.

        Args:
            country_id: Value sent with the request.
            state_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Areas offering wholesale numbers.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Wholesale
                not active, or verification incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_wholesale_areas(
                country_id=country_id, state_id=state_id, request_options=request_options
            ),
        )

    async def list_wholesale_countries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1WholesaleCountriesResponse:
        """Countries where wholesale inventory exists — US and international.

        All ``/api/v1/wholesale`` endpoints are gated per request: wholesale must be ACTIVE on your account (arranged
        with our team — raise a Wholesale Activation request from the dashboard) and your business verification must be
        complete. Otherwise requests return ``403 wholesale_not_activated`` or ``403 account_not_verified``.

        ``countryId`` values are opaque signed tokens with a short lifetime — fetch them per ordering session and never
        persist them.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Countries with wholesale inventory.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Wholesale
                not active on this account, or business verification incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_wholesale_countries(request_options=request_options))

    async def list_wholesale_states(
        self, *, country_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1WholesaleStatesResponse:
        """Regions for a country. Many countries have none — an empty list means go straight to areas with just the
        ``countryId``.

        Args:
            country_id: From ``/wholesale/countries``. Defaults to the US when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Regions (possibly empty).

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. Wholesale
                not active, or verification incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_wholesale_states(country_id=country_id, request_options=request_options)
        )

    async def order_wholesale_number(
        self,
        body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WholesaleNumbersResponse:
        """Allocates a number from an area and starts delivering its inbound calls to your SIP endpoint. Prepaid: the
        first month at your contract rate is charged from your wallet at allocation, then monthly; inbound minutes are
        charged per call as they complete.

        ``deliverTo`` accepts three forms:
        - a bare host (``pbx.example.com`` or a public IP) — we deliver as
        ``sip:@host``
        - a sip: URI containing ``{number}`` — replaced with the allocated number
        - a full ``sip:`` URI, used verbatim

        Allocation can take up to ~40 seconds. On ``order_failed`` for a specific area, order from a DIFFERENT area —
        retrying the same one will not help.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Number allocated, delivering, and charged.

        Raises:
            ApiError: Missing/invalid areaId or deliverTo (private hosts are refused). Insufficient wallet balance —
                nothing was ordered. Wholesale not active, verification incomplete, or rates not configured. The area
                could not be provisioned — order from a different area. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.order_wholesale_number(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    async def update_wholesale_delivery(
        self,
        id_: str,
        body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WholesaleNumbersDeliveryResponse:
        """Changes the delivery destination of an existing wholesale number — same ``deliverTo`` forms as ordering,
        resolved against the known number. Clearing delivery is not allowed: a wholesale number with no destination
        silently drops every call.

        Args:
            id_: The number's id (from the order response or your numbers list).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delivery updated.

        Raises:
            ApiError: Invalid destination. Not a wholesale number on your account. The number has been released.
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_wholesale_delivery(id_, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWholesaleWithRawResponse:
        return self._with_raw_response


class WholesaleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_wholesale_areas(
        self,
        *,
        country_id: str | None = None,
        state_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WholesaleAreasResponse, ListWholesaleAreasErrorBody]:
        """Areas with available stock and ``estMonthlyUsd`` — YOUR contract price per number in that area, resolved
        server-side. There is no per-number search on wholesale inventory: you order from an area and a number is
        allocated.

        The first fetch for a large country (the UK has 600+ rate centres) can take up to a minute; results are cached
        server-side for ~10 minutes. Stock above zero does not guarantee an order succeeds — on an order failure, pick a
        different area rather than retrying the same one.

        Args:
            country_id: Value sent with the request.
            state_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/wholesale/areas"),
            query_params=[param[str | None]("countryId", country_id), param[str | None]("stateId", state_id)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1WholesaleAreasResponse],
            error_mapper=list_wholesale_areas_error_mapper,
            request_options=request_options,
        )

    def list_wholesale_countries(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1WholesaleCountriesResponse, ListWholesaleCountriesErrorBody]:
        """Countries where wholesale inventory exists — US and international.

        All ``/api/v1/wholesale`` endpoints are gated per request: wholesale must be ACTIVE on your account (arranged
        with our team — raise a Wholesale Activation request from the dashboard) and your business verification must be
        complete. Otherwise requests return ``403 wholesale_not_activated`` or ``403 account_not_verified``.

        ``countryId`` values are opaque signed tokens with a short lifetime — fetch them per ordering session and never
        persist them.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/wholesale/countries"),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1WholesaleCountriesResponse],
            error_mapper=list_wholesale_countries_error_mapper,
            request_options=request_options,
        )

    def list_wholesale_states(
        self, *, country_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1WholesaleStatesResponse, ListWholesaleStatesErrorBody]:
        """Regions for a country. Many countries have none — an empty list means go straight to areas with just the
        ``countryId``.

        Args:
            country_id: From ``/wholesale/countries``. Defaults to the US when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/wholesale/states"),
            query_params=[param[str | None]("countryId", country_id)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1WholesaleStatesResponse],
            error_mapper=list_wholesale_states_error_mapper,
            request_options=request_options,
        )

    def order_wholesale_number(
        self,
        body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WholesaleNumbersResponse, OrderWholesaleNumberErrorBody]:
        """Allocates a number from an area and starts delivering its inbound calls to your SIP endpoint. Prepaid: the
        first month at your contract rate is charged from your wallet at allocation, then monthly; inbound minutes are
        charged per call as they complete.

        ``deliverTo`` accepts three forms:
        - a bare host (``pbx.example.com`` or a public IP) — we deliver as
        ``sip:@host``
        - a sip: URI containing ``{number}`` — replaced with the allocated number
        - a full ``sip:`` URI, used verbatim

        Allocation can take up to ~40 seconds. On ``order_failed`` for a specific area, order from a DIFFERENT area —
        retrying the same one will not help.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/wholesale/numbers"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1WholesaleNumbersResponse],
            error_mapper=order_wholesale_number_error_mapper,
            request_options=request_options,
        )

    def update_wholesale_delivery(
        self,
        id_: str,
        body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WholesaleNumbersDeliveryResponse, UpdateWholesaleDeliveryErrorBody]:
        """Changes the delivery destination of an existing wholesale number — same ``deliverTo`` forms as ordering,
        resolved against the known number. Clearing delivery is not allowed: a wholesale number with no destination
        silently drops every call.

        Args:
            id_: The number's id (from the order response or your numbers list).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/wholesale/numbers/{id}/delivery"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1WholesaleNumbersDeliveryResponse],
            error_mapper=update_wholesale_delivery_error_mapper,
            request_options=request_options,
        )


class AsyncWholesaleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_wholesale_areas(
        self,
        *,
        country_id: str | None = None,
        state_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WholesaleAreasResponse, ListWholesaleAreasErrorBody]:
        """Areas with available stock and ``estMonthlyUsd`` — YOUR contract price per number in that area, resolved
        server-side. There is no per-number search on wholesale inventory: you order from an area and a number is
        allocated.

        The first fetch for a large country (the UK has 600+ rate centres) can take up to a minute; results are cached
        server-side for ~10 minutes. Stock above zero does not guarantee an order succeeds — on an order failure, pick a
        different area rather than retrying the same one.

        Args:
            country_id: Value sent with the request.
            state_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/wholesale/areas"),
            query_params=[param[str | None]("countryId", country_id), param[str | None]("stateId", state_id)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1WholesaleAreasResponse],
            error_mapper=list_wholesale_areas_error_mapper,
            request_options=request_options,
        )

    async def list_wholesale_countries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1WholesaleCountriesResponse, ListWholesaleCountriesErrorBody]:
        """Countries where wholesale inventory exists — US and international.

        All ``/api/v1/wholesale`` endpoints are gated per request: wholesale must be ACTIVE on your account (arranged
        with our team — raise a Wholesale Activation request from the dashboard) and your business verification must be
        complete. Otherwise requests return ``403 wholesale_not_activated`` or ``403 account_not_verified``.

        ``countryId`` values are opaque signed tokens with a short lifetime — fetch them per ordering session and never
        persist them.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/wholesale/countries"),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1WholesaleCountriesResponse],
            error_mapper=list_wholesale_countries_error_mapper,
            request_options=request_options,
        )

    async def list_wholesale_states(
        self, *, country_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1WholesaleStatesResponse, ListWholesaleStatesErrorBody]:
        """Regions for a country. Many countries have none — an empty list means go straight to areas with just the
        ``countryId``.

        Args:
            country_id: From ``/wholesale/countries``. Defaults to the US when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/wholesale/states"),
            query_params=[param[str | None]("countryId", country_id)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1WholesaleStatesResponse],
            error_mapper=list_wholesale_states_error_mapper,
            request_options=request_options,
        )

    async def order_wholesale_number(
        self,
        body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WholesaleNumbersResponse, OrderWholesaleNumberErrorBody]:
        """Allocates a number from an area and starts delivering its inbound calls to your SIP endpoint. Prepaid: the
        first month at your contract rate is charged from your wallet at allocation, then monthly; inbound minutes are
        charged per call as they complete.

        ``deliverTo`` accepts three forms:
        - a bare host (``pbx.example.com`` or a public IP) — we deliver as
        ``sip:@host``
        - a sip: URI containing ``{number}`` — replaced with the allocated number
        - a full ``sip:`` URI, used verbatim

        Allocation can take up to ~40 seconds. On ``order_failed`` for a specific area, order from a DIFFERENT area —
        retrying the same one will not help.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/wholesale/numbers"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1WholesaleNumbersResponse],
            error_mapper=order_wholesale_number_error_mapper,
            request_options=request_options,
        )

    async def update_wholesale_delivery(
        self,
        id_: str,
        body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WholesaleNumbersDeliveryResponse, UpdateWholesaleDeliveryErrorBody]:
        """Changes the delivery destination of an existing wholesale number — same ``deliverTo`` forms as ordering,
        resolved against the known number. Clearing delivery is not allowed: a wholesale number with no destination
        silently drops every call.

        Args:
            id_: The number's id (from the order response or your numbers list).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/wholesale/numbers/{id}/delivery"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1WholesaleNumbersDeliveryResponse],
            error_mapper=update_wholesale_delivery_error_mapper,
            request_options=request_options,
        )
