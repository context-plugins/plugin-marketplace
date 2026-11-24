from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.hlr_create_error import HlrCreateErrorBody, hlr_create_error_mapper
from ..errors.hlr_history_error import HlrHistoryErrorBody, hlr_history_error_mapper
from ..models.api_v2_hlr_history_response import ApiV2HlrHistoryResponse
from ..models.api_v2_hlr_request import ApiV2HlrRequest, ApiV2HlrRequestDict
from ..models.api_v2_hlr_response import ApiV2HlrResponse
from ..models.enums.order import Order, OrderOrStr
from ..models.enums.status1 import Status1OrStr
from ..server.server import Server


class HlrLookups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HlrLookupsWithRawResponse(client, server, auth)

    def hlr_create(
        self, body: ApiV2HlrRequest | ApiV2HlrRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2HlrResponse:
        """Submits phone numbers for an HLR (Home Location Register) lookup (maximum 1500 numbers per request).

        Numbers must be supplied in **E.164 format** (e.g. ``+14155552671``); a leading ``+`` is added automatically
        when omitted.

        A single number resolves synchronously; larger batches are processed asynchronously — poll hlr_history for
        results. Lookups are performed independently of call setup and do not affect PDD. Results are not cached: each
        request re-queries the provider.

        ``hlr_request.task_id`` feeds hlr_history (``task_ids``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns the created HLR lookup task

        Raises:
            ApiError: returns unauthorized returns forbidden returns unprocessable entity for validation errors
                ``error`` is ``ApiV2Hlr401Error1 | ApiV2Hlr403Error1 | ApiV2Hlr422Error1 | RawError``."""
        return unwrap(self._with_raw_response.hlr_create(body, request_options=request_options))

    def hlr_history(
        self,
        *,
        ids: str | None = None,
        task_ids: str | None = None,
        number: str | None = None,
        number_start: int | None = None,
        status: Status1OrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2HlrHistoryResponse:
        """Returns the caller's HLR lookup logs — one per number checked — with the lookup result (validity, carrier,
        MCC/MNC, phone type, ported and risky flags, country). Supports filtering by number prefix, status, and date
        ranges, plus pagination.

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Filter logs by task IDs (comma-separated), from hlr_create
            number: Filter logs by specific phone numbers (comma-separated)
            number_start: Filter logs by phone-number prefix (starts-with)
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns the caller HLR logs filtered by number prefix

        Raises:
            ApiError: returns unauthorized returns forbidden ``error`` is ``ApiV2HlrHistory401Error1 |
                ApiV2HlrHistory403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.hlr_history(
                ids=ids,
                task_ids=task_ids,
                number=number,
                number_start=number_start,
                status=status,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                processed_at_from=processed_at_from,
                processed_at_to=processed_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> HlrLookupsWithRawResponse:
        return self._with_raw_response


class AsyncHlrLookups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHlrLookupsWithRawResponse(client, server, auth)

    async def hlr_create(
        self, body: ApiV2HlrRequest | ApiV2HlrRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2HlrResponse:
        """Submits phone numbers for an HLR (Home Location Register) lookup (maximum 1500 numbers per request).

        Numbers must be supplied in **E.164 format** (e.g. ``+14155552671``); a leading ``+`` is added automatically
        when omitted.

        A single number resolves synchronously; larger batches are processed asynchronously — poll hlr_history for
        results. Lookups are performed independently of call setup and do not affect PDD. Results are not cached: each
        request re-queries the provider.

        ``hlr_request.task_id`` feeds hlr_history (``task_ids``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns the created HLR lookup task

        Raises:
            ApiError: returns unauthorized returns forbidden returns unprocessable entity for validation errors
                ``error`` is ``ApiV2Hlr401Error1 | ApiV2Hlr403Error1 | ApiV2Hlr422Error1 | RawError``."""
        return unwrap(await self._with_raw_response.hlr_create(body, request_options=request_options))

    async def hlr_history(
        self,
        *,
        ids: str | None = None,
        task_ids: str | None = None,
        number: str | None = None,
        number_start: int | None = None,
        status: Status1OrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2HlrHistoryResponse:
        """Returns the caller's HLR lookup logs — one per number checked — with the lookup result (validity, carrier,
        MCC/MNC, phone type, ported and risky flags, country). Supports filtering by number prefix, status, and date
        ranges, plus pagination.

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Filter logs by task IDs (comma-separated), from hlr_create
            number: Filter logs by specific phone numbers (comma-separated)
            number_start: Filter logs by phone-number prefix (starts-with)
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns the caller HLR logs filtered by number prefix

        Raises:
            ApiError: returns unauthorized returns forbidden ``error`` is ``ApiV2HlrHistory401Error1 |
                ApiV2HlrHistory403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.hlr_history(
                ids=ids,
                task_ids=task_ids,
                number=number,
                number_start=number_start,
                status=status,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                processed_at_from=processed_at_from,
                processed_at_to=processed_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncHlrLookupsWithRawResponse:
        return self._with_raw_response


class HlrLookupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def hlr_create(
        self, body: ApiV2HlrRequest | ApiV2HlrRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2HlrResponse, HlrCreateErrorBody]:
        """Submits phone numbers for an HLR (Home Location Register) lookup (maximum 1500 numbers per request).

        Numbers must be supplied in **E.164 format** (e.g. ``+14155552671``); a leading ``+`` is added automatically
        when omitted.

        A single number resolves synchronously; larger batches are processed asynchronously — poll hlr_history for
        results. Lookups are performed independently of call setup and do not affect PDD. Results are not cached: each
        request re-queries the provider.

        ``hlr_request.task_id`` feeds hlr_history (``task_ids``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/hlr"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2HlrRequest | ApiV2HlrRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2HlrResponse],
            error_mapper=hlr_create_error_mapper,
            request_options=request_options,
        )

    def hlr_history(
        self,
        *,
        ids: str | None = None,
        task_ids: str | None = None,
        number: str | None = None,
        number_start: int | None = None,
        status: Status1OrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2HlrHistoryResponse, HlrHistoryErrorBody]:
        """Returns the caller's HLR lookup logs — one per number checked — with the lookup result (validity, carrier,
        MCC/MNC, phone type, ported and risky flags, country). Supports filtering by number prefix, status, and date
        ranges, plus pagination.

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Filter logs by task IDs (comma-separated), from hlr_create
            number: Filter logs by specific phone numbers (comma-separated)
            number_start: Filter logs by phone-number prefix (starts-with)
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/hlr/history"),
            query_params=[
                param[str | None]("ids", ids),
                param[str | None]("task_ids", task_ids),
                param[str | None]("number", number),
                param[int | None]("number_start", number_start),
                param[Status1OrStr | None]("status", status),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[Date | None]("processed_at_from", processed_at_from),
                param[Date | None]("processed_at_to", processed_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2HlrHistoryResponse],
            error_mapper=hlr_history_error_mapper,
            request_options=request_options,
        )


class AsyncHlrLookupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def hlr_create(
        self, body: ApiV2HlrRequest | ApiV2HlrRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2HlrResponse, HlrCreateErrorBody]:
        """Submits phone numbers for an HLR (Home Location Register) lookup (maximum 1500 numbers per request).

        Numbers must be supplied in **E.164 format** (e.g. ``+14155552671``); a leading ``+`` is added automatically
        when omitted.

        A single number resolves synchronously; larger batches are processed asynchronously — poll hlr_history for
        results. Lookups are performed independently of call setup and do not affect PDD. Results are not cached: each
        request re-queries the provider.

        ``hlr_request.task_id`` feeds hlr_history (``task_ids``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/hlr"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2HlrRequest | ApiV2HlrRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2HlrResponse],
            error_mapper=hlr_create_error_mapper,
            request_options=request_options,
        )

    async def hlr_history(
        self,
        *,
        ids: str | None = None,
        task_ids: str | None = None,
        number: str | None = None,
        number_start: int | None = None,
        status: Status1OrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2HlrHistoryResponse, HlrHistoryErrorBody]:
        """Returns the caller's HLR lookup logs — one per number checked — with the lookup result (validity, carrier,
        MCC/MNC, phone type, ported and risky flags, country). Supports filtering by number prefix, status, and date
        ranges, plus pagination.

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Filter logs by task IDs (comma-separated), from hlr_create
            number: Filter logs by specific phone numbers (comma-separated)
            number_start: Filter logs by phone-number prefix (starts-with)
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/hlr/history"),
            query_params=[
                param[str | None]("ids", ids),
                param[str | None]("task_ids", task_ids),
                param[str | None]("number", number),
                param[int | None]("number_start", number_start),
                param[Status1OrStr | None]("status", status),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[Date | None]("processed_at_from", processed_at_from),
                param[Date | None]("processed_at_to", processed_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2HlrHistoryResponse],
            error_mapper=hlr_history_error_mapper,
            request_options=request_options,
        )
