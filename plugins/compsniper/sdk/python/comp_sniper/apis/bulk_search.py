from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncEventStream,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    EventStream,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_text_decoder,
    async_text_event_decoder,
    json_body,
    param,
    text_decoder,
    text_event_decoder,
    unwrap,
)
from ..errors.bulk_search_error import BulkSearchErrorBody, bulk_search_error_mapper
from ..errors.download_bulk_search_csv_error import (
    DownloadBulkSearchCsvErrorBody,
    download_bulk_search_csv_error_mapper,
)
from ..models.bulk_search_request import BulkSearchRequest, BulkSearchRequestDict
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..server.server import Server


class BulkSearch:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BulkSearchWithRawResponse(client, server, auth)

    def bulk_search(
        self,
        body: BulkSearchRequest | BulkSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventStream[str]:
        """Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the
        selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result
        events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and
        may complete out of order.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Replay a completed run with the identical request body without repeating searches or
                consuming quota.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SSE stream containing start, result, and complete events.

        Raises:
            ApiError: Invalid keywords or shared options. Missing or invalid API key. Credential lacks comps:read scope.
                The idempotency key has another body, or a bulk run is already active. No keyword can be allocated
                because the selected monthly and credit balance is empty. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_search(
                body, x_credit_source=x_credit_source, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def download_bulk_search_csv(
        self, run_id: UUID, *, index: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        """Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same
        account's bearer credential.

        Args:
            run_id: Value sent with the request.
            index: Original zero-based keyword index. Omit for a combined CSV.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV export.

        Raises:
            ApiError: Invalid runId or index. Missing or invalid API key. Run or requested successful keyword not found.
                The run is still active. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.download_bulk_search_csv(run_id, index=index, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BulkSearchWithRawResponse:
        return self._with_raw_response


class AsyncBulkSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBulkSearchWithRawResponse(client, server, auth)

    async def bulk_search(
        self,
        body: BulkSearchRequest | BulkSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncEventStream[str]:
        """Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the
        selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result
        events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and
        may complete out of order.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Replay a completed run with the identical request body without repeating searches or
                consuming quota.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SSE stream containing start, result, and complete events.

        Raises:
            ApiError: Invalid keywords or shared options. Missing or invalid API key. Credential lacks comps:read scope.
                The idempotency key has another body, or a bulk run is already active. No keyword can be allocated
                because the selected monthly and credit balance is empty. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_search(
                body, x_credit_source=x_credit_source, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def download_bulk_search_csv(
        self, run_id: UUID, *, index: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same
        account's bearer credential.

        Args:
            run_id: Value sent with the request.
            index: Original zero-based keyword index. Omit for a combined CSV.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV export.

        Raises:
            ApiError: Invalid runId or index. Missing or invalid API key. Run or requested successful keyword not found.
                The run is still active. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.download_bulk_search_csv(run_id, index=index, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBulkSearchWithRawResponse:
        return self._with_raw_response


class BulkSearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_search(
        self,
        body: BulkSearchRequest | BulkSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventStream[str], BulkSearchErrorBody]:
        """Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the
        selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result
        events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and
        may complete out of order.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Replay a completed run with the identical request body without repeating searches or
                consuming quota.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/bulk-search"),
            headers=[
                param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source),
                param[str | None]("Idempotency-Key", idempotency_key),
            ],
            body=json_body[BulkSearchRequest | BulkSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=text_event_decoder[str](),
            error_mapper=bulk_search_error_mapper,
            request_options=request_options,
        )

    def download_bulk_search_csv(
        self, run_id: UUID, *, index: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, DownloadBulkSearchCsvErrorBody]:
        """Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same
        account's bearer credential.

        Args:
            run_id: Value sent with the request.
            index: Original zero-based keyword index. Omit for a combined CSV.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bulk-search/{runId}/download.csv"),
            path_params=[param[UUID]("runId", run_id)],
            query_params=[param[int | None]("index", index)],
            auth_scheme=self._auth.bearer_auth,
            decoder=text_decoder[str],
            error_mapper=download_bulk_search_csv_error_mapper,
            request_options=request_options,
        )


class AsyncBulkSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_search(
        self,
        body: BulkSearchRequest | BulkSearchRequestDict,
        *,
        x_credit_source: XCreditSourceOrStr | None = None,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncEventStream[str], BulkSearchErrorBody]:
        """Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the
        selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result
        events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and
        may complete out of order.

        Args:
            body: The request body.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            idempotency_key: Replay a completed run with the identical request body without repeating searches or
                consuming quota.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/bulk-search"),
            headers=[
                param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source),
                param[str | None]("Idempotency-Key", idempotency_key),
            ],
            body=json_body[BulkSearchRequest | BulkSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_text_event_decoder[str](),
            error_mapper=bulk_search_error_mapper,
            request_options=request_options,
        )

    async def download_bulk_search_csv(
        self, run_id: UUID, *, index: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, DownloadBulkSearchCsvErrorBody]:
        """Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same
        account's bearer credential.

        Args:
            run_id: Value sent with the request.
            index: Original zero-based keyword index. Omit for a combined CSV.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bulk-search/{runId}/download.csv"),
            path_params=[param[UUID]("runId", run_id)],
            query_params=[param[int | None]("index", index)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_text_decoder[str],
            error_mapper=download_bulk_search_csv_error_mapper,
            request_options=request_options,
        )
