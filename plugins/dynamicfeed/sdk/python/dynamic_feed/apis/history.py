from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.history_v1_history_get_error import HistoryV1HistoryGetErrorBody, history_v1_history_get_error_mapper
from ..server.server import Server


class History:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = HistoryWithRawResponse(client, server)

    def history_v1_history_get(
        self, *, tool: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Archive coverage — what Dynamic Feed's permanent, append-only archive holds.

        • No ``tool`` → the set of tools captured + a count. • ``tool=`` → that tool's captured date partitions,
        earliest/latest, and day count.

        This is the availability index over the un-backfillable history (the permanence moat): it tells an agent which
        days are on record for a tool. Row-level point-in-time values ("what was the value at time T") are a premium
        query that layers on the same Hive-partitioned archive.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.history_v1_history_get(tool=tool, request_options=request_options))

    @property
    def with_raw_response(self) -> HistoryWithRawResponse:
        return self._with_raw_response


class AsyncHistory:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncHistoryWithRawResponse(client, server)

    async def history_v1_history_get(
        self, *, tool: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Archive coverage — what Dynamic Feed's permanent, append-only archive holds.

        • No ``tool`` → the set of tools captured + a count. • ``tool=`` → that tool's captured date partitions,
        earliest/latest, and day count.

        This is the availability index over the un-backfillable history (the permanence moat): it tells an agent which
        days are on record for a tool. Row-level point-in-time values ("what was the value at time T") are a premium
        query that layers on the same Hive-partitioned archive.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.history_v1_history_get(tool=tool, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncHistoryWithRawResponse:
        return self._with_raw_response


class HistoryWithRawResponse(BaseRawResponse[RawClient, Server]):
    def history_v1_history_get(
        self, *, tool: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, HistoryV1HistoryGetErrorBody]:
        """Archive coverage — what Dynamic Feed's permanent, append-only archive holds.

        • No ``tool`` → the set of tools captured + a count. • ``tool=`` → that tool's captured date partitions,
        earliest/latest, and day count.

        This is the availability index over the un-backfillable history (the permanence moat): it tells an agent which
        days are on record for a tool. Row-level point-in-time values ("what was the value at time T") are a premium
        query that layers on the same Hive-partitioned archive.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/history"),
            query_params=[param[str | None]("tool", tool)],
            decoder=json_decoder[Any],
            error_mapper=history_v1_history_get_error_mapper,
            request_options=request_options,
        )


class AsyncHistoryWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def history_v1_history_get(
        self, *, tool: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, HistoryV1HistoryGetErrorBody]:
        """Archive coverage — what Dynamic Feed's permanent, append-only archive holds.

        • No ``tool`` → the set of tools captured + a count. • ``tool=`` → that tool's captured date partitions,
        earliest/latest, and day count.

        This is the availability index over the un-backfillable history (the permanence moat): it tells an agent which
        days are on record for a tool. Row-level point-in-time values ("what was the value at time T") are a premium
        query that layers on the same Hive-partitioned archive.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/history"),
            query_params=[param[str | None]("tool", tool)],
            decoder=async_json_decoder[Any],
            error_mapper=history_v1_history_get_error_mapper,
            request_options=request_options,
        )
