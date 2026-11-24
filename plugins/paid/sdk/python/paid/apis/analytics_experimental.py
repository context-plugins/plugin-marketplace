from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.execute_analytics_query_error import ExecuteAnalyticsQueryErrorBody, execute_analytics_query_error_mapper
from ..errors.get_analytics_schema_error import GetAnalyticsSchemaErrorBody, get_analytics_schema_error_mapper
from ..errors.get_signals_metadata_error import GetSignalsMetadataErrorBody, get_signals_metadata_error_mapper
from ..models.analytics_query_request import AnalyticsQueryRequest, AnalyticsQueryRequestDict
from ..models.analytics_query_response import AnalyticsQueryResponse
from ..models.analytics_schema_response import AnalyticsSchemaResponse
from ..models.signals_metadata_response import SignalsMetadataResponse
from ..server.server import Server


class AnalyticsExperimental:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AnalyticsExperimentalWithRawResponse(client, server)

    def execute_analytics_query(
        self,
        authorization: str,
        *,
        body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsQueryResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a
        query, call ``getAnalyticsSchema`` (GET /schema) for the available views and columns, and ``getSignalsMetadata``
        (GET /signals/metadata) for the JSON paths inside ``fact_signal.data``. Results are automatically scoped to your
        organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

        Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but
        ``fact_cost.cost_amount`` is fractional cents (Decimal) since a single AI call usually costs less than a cent;
        64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them
        client-side. Query signal payloads via JSON paths, e.g. ``SELECT data.country::String AS country, count() FROM
        fact_signal GROUP BY country``.

        Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via ``meta.truncated``).
        Prefer aggregates and a ``created_at`` date filter on large tables — this endpoint is for interactive analytics,
        not bulk export.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 408 429 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.execute_analytics_query(authorization, body=body, request_options=request_options)
        )

    def get_analytics_schema(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AnalyticsSchemaResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions.
        Dimensions (``dim_*``) describe entities; facts (``fact_*``) are event/transaction tables that join to
        dimensions via the ``*_id`` columns described in each comment.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_analytics_schema(authorization, request_options=request_options))

    def get_signals_metadata(
        self,
        authorization: str,
        *,
        signal_name: str | None = None,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignalsMetadataResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the JSON paths (and their observed types) present in the ``data`` payload of your signals within a time
        window (default: last 30 days), grouped by signal name. Use the returned paths in queries against
        ``fact_signal``, e.g. ``WHERE data.::String = '...'``.

        Args:
            authorization: API Key authentication using Bearer token
            signal_name: Restrict discovery to a single signal name.
            from_date: Start of the discovery window. Defaults to 30 days ago.
            to_date: End of the discovery window. Defaults to now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_signals_metadata(
                authorization,
                signal_name=signal_name,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AnalyticsExperimentalWithRawResponse:
        return self._with_raw_response


class AsyncAnalyticsExperimental:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAnalyticsExperimentalWithRawResponse(client, server)

    async def execute_analytics_query(
        self,
        authorization: str,
        *,
        body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsQueryResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a
        query, call ``getAnalyticsSchema`` (GET /schema) for the available views and columns, and ``getSignalsMetadata``
        (GET /signals/metadata) for the JSON paths inside ``fact_signal.data``. Results are automatically scoped to your
        organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

        Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but
        ``fact_cost.cost_amount`` is fractional cents (Decimal) since a single AI call usually costs less than a cent;
        64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them
        client-side. Query signal payloads via JSON paths, e.g. ``SELECT data.country::String AS country, count() FROM
        fact_signal GROUP BY country``.

        Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via ``meta.truncated``).
        Prefer aggregates and a ``created_at`` date filter on large tables — this endpoint is for interactive analytics,
        not bulk export.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 408 429 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.execute_analytics_query(
                authorization, body=body, request_options=request_options
            ),
        )

    async def get_analytics_schema(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnalyticsSchemaResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions.
        Dimensions (``dim_*``) describe entities; facts (``fact_*``) are event/transaction tables that join to
        dimensions via the ``*_id`` columns described in each comment.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_analytics_schema(authorization, request_options=request_options)
        )

    async def get_signals_metadata(
        self,
        authorization: str,
        *,
        signal_name: str | None = None,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignalsMetadataResponse:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the JSON paths (and their observed types) present in the ``data`` payload of your signals within a time
        window (default: last 30 days), grouped by signal name. Use the returned paths in queries against
        ``fact_signal``, e.g. ``WHERE data.::String = '...'``.

        Args:
            authorization: API Key authentication using Bearer token
            signal_name: Restrict discovery to a single signal name.
            from_date: Start of the discovery window. Defaults to 30 days ago.
            to_date: End of the discovery window. Defaults to now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signals_metadata(
                authorization,
                signal_name=signal_name,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAnalyticsExperimentalWithRawResponse:
        return self._with_raw_response


class AnalyticsExperimentalWithRawResponse(BaseRawResponse[RawClient, Server]):
    def execute_analytics_query(
        self,
        authorization: str,
        *,
        body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsQueryResponse, ExecuteAnalyticsQueryErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a
        query, call ``getAnalyticsSchema`` (GET /schema) for the available views and columns, and ``getSignalsMetadata``
        (GET /signals/metadata) for the JSON paths inside ``fact_signal.data``. Results are automatically scoped to your
        organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

        Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but
        ``fact_cost.cost_amount`` is fractional cents (Decimal) since a single AI call usually costs less than a cent;
        64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them
        client-side. Query signal payloads via JSON paths, e.g. ``SELECT data.country::String AS country, count() FROM
        fact_signal GROUP BY country``.

        Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via ``meta.truncated``).
        Prefer aggregates and a ``created_at`` date filter on large tables — this endpoint is for interactive analytics,
        not bulk export.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/analytics/query"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnalyticsQueryRequest | AnalyticsQueryRequestDict | None](body),
            decoder=json_decoder[AnalyticsQueryResponse],
            error_mapper=execute_analytics_query_error_mapper,
            request_options=request_options,
        )

    def get_analytics_schema(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsSchemaResponse, GetAnalyticsSchemaErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions.
        Dimensions (``dim_*``) describe entities; facts (``fact_*``) are event/transaction tables that join to
        dimensions via the ``*_id`` columns described in each comment.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/analytics/schema"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AnalyticsSchemaResponse],
            error_mapper=get_analytics_schema_error_mapper,
            request_options=request_options,
        )

    def get_signals_metadata(
        self,
        authorization: str,
        *,
        signal_name: str | None = None,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignalsMetadataResponse, GetSignalsMetadataErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the JSON paths (and their observed types) present in the ``data`` payload of your signals within a time
        window (default: last 30 days), grouped by signal name. Use the returned paths in queries against
        ``fact_signal``, e.g. ``WHERE data.::String = '...'``.

        Args:
            authorization: API Key authentication using Bearer token
            signal_name: Restrict discovery to a single signal name.
            from_date: Start of the discovery window. Defaults to 30 days ago.
            to_date: End of the discovery window. Defaults to now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/analytics/signals/metadata"
            ),
            query_params=[
                param[str | None]("signalName", signal_name),
                param[RFC3339DateTime | None]("fromDate", from_date),
                param[RFC3339DateTime | None]("toDate", to_date),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SignalsMetadataResponse],
            error_mapper=get_signals_metadata_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyticsExperimentalWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def execute_analytics_query(
        self,
        authorization: str,
        *,
        body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsQueryResponse, ExecuteAnalyticsQueryErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a
        query, call ``getAnalyticsSchema`` (GET /schema) for the available views and columns, and ``getSignalsMetadata``
        (GET /signals/metadata) for the JSON paths inside ``fact_signal.data``. Results are automatically scoped to your
        organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

        Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but
        ``fact_cost.cost_amount`` is fractional cents (Decimal) since a single AI call usually costs less than a cent;
        64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them
        client-side. Query signal payloads via JSON paths, e.g. ``SELECT data.country::String AS country, count() FROM
        fact_signal GROUP BY country``.

        Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via ``meta.truncated``).
        Prefer aggregates and a ``created_at`` date filter on large tables — this endpoint is for interactive analytics,
        not bulk export.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/analytics/query"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnalyticsQueryRequest | AnalyticsQueryRequestDict | None](body),
            decoder=async_json_decoder[AnalyticsQueryResponse],
            error_mapper=execute_analytics_query_error_mapper,
            request_options=request_options,
        )

    async def get_analytics_schema(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsSchemaResponse, GetAnalyticsSchemaErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions.
        Dimensions (``dim_*``) describe entities; facts (``fact_*``) are event/transaction tables that join to
        dimensions via the ``*_id`` columns described in each comment.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/experimental/analytics/schema"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AnalyticsSchemaResponse],
            error_mapper=get_analytics_schema_error_mapper,
            request_options=request_options,
        )

    async def get_signals_metadata(
        self,
        authorization: str,
        *,
        signal_name: str | None = None,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignalsMetadataResponse, GetSignalsMetadataErrorBody]:
        """⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2
        backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

        Lists the JSON paths (and their observed types) present in the ``data`` payload of your signals within a time
        window (default: last 30 days), grouped by signal name. Use the returned paths in queries against
        ``fact_signal``, e.g. ``WHERE data.::String = '...'``.

        Args:
            authorization: API Key authentication using Bearer token
            signal_name: Restrict discovery to a single signal name.
            from_date: Start of the discovery window. Defaults to 30 days ago.
            to_date: End of the discovery window. Defaults to now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api(
                "/experimental/analytics/signals/metadata"
            ),
            query_params=[
                param[str | None]("signalName", signal_name),
                param[RFC3339DateTime | None]("fromDate", from_date),
                param[RFC3339DateTime | None]("toDate", to_date),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SignalsMetadataResponse],
            error_mapper=get_signals_metadata_error_mapper,
            request_options=request_options,
        )
