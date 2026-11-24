from __future__ import annotations

from typing import Any
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
from ..errors.post_api_v1_sql_error import PostApiV1SqlErrorBody, post_api_v1_sql_error_mapper
from ..errors.run_sql_error import RunSqlErrorBody, run_sql_error_mapper
from ..models.api_sql_request import ApiSqlRequest, ApiSqlRequestDict
from ..models.api_v1_sql_request import ApiV1SqlRequest, ApiV1SqlRequestDict
from ..models.sql_response import SqlResponse
from ..server.server import Server


class Sql:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SqlWithRawResponse(client, server, auth)

    def post_api_v1_sql(
        self, body: ApiV1SqlRequest | ApiV1SqlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SqlResponse:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        ``grants`` is the US corpus in US dollars; Canadian T3010 filings are a separate view, ``grants_ca``, in
        Canadian dollars. Neither is a filter on the other, because a total spanning both adds CAD to USD.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Every response carries ``x_plinth.datasets``: the licence and required attribution for each corpus you can reach
        here. Which one answered is not knowable per query, so all of them are listed. The Canadian attribution is a
        condition of the licence — reproduce it wherever you publish figures drawn from it.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The rows the query returned.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_sql(body, request_options=request_options))

    def run_sql(
        self, body: ApiSqlRequest | ApiSqlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.run_sql(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SqlWithRawResponse:
        return self._with_raw_response


class AsyncSql:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSqlWithRawResponse(client, server, auth)

    async def post_api_v1_sql(
        self, body: ApiV1SqlRequest | ApiV1SqlRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SqlResponse:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        ``grants`` is the US corpus in US dollars; Canadian T3010 filings are a separate view, ``grants_ca``, in
        Canadian dollars. Neither is a filter on the other, because a total spanning both adds CAD to USD.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Every response carries ``x_plinth.datasets``: the licence and required attribution for each corpus you can reach
        here. Which one answered is not knowable per query, so all of them are listed. The Canadian attribution is a
        condition of the licence — reproduce it wherever you publish figures drawn from it.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The rows the query returned.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_sql(body, request_options=request_options))

    async def run_sql(
        self, body: ApiSqlRequest | ApiSqlRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.run_sql(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSqlWithRawResponse:
        return self._with_raw_response


class SqlWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_api_v1_sql(
        self, body: ApiV1SqlRequest | ApiV1SqlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SqlResponse, PostApiV1SqlErrorBody]:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        ``grants`` is the US corpus in US dollars; Canadian T3010 filings are a separate view, ``grants_ca``, in
        Canadian dollars. Neither is a filter on the other, because a total spanning both adds CAD to USD.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Every response carries ``x_plinth.datasets``: the licence and required attribution for each corpus you can reach
        here. Which one answered is not knowable per query, so all of them are listed. The Canadian attribution is a
        condition of the licence — reproduce it wherever you publish figures drawn from it.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sql"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SqlRequest | ApiV1SqlRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SqlResponse],
            error_mapper=post_api_v1_sql_error_mapper,
            request_options=request_options,
        )

    def run_sql(
        self, body: ApiSqlRequest | ApiSqlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RunSqlErrorBody]:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/sql"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiSqlRequest | ApiSqlRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=run_sql_error_mapper,
            request_options=request_options,
        )


class AsyncSqlWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_api_v1_sql(
        self, body: ApiV1SqlRequest | ApiV1SqlRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SqlResponse, PostApiV1SqlErrorBody]:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        ``grants`` is the US corpus in US dollars; Canadian T3010 filings are a separate view, ``grants_ca``, in
        Canadian dollars. Neither is a filter on the other, because a total spanning both adds CAD to USD.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Every response carries ``x_plinth.datasets``: the licence and required attribution for each corpus you can reach
        here. Which one answered is not knowable per query, so all of them are listed. The Canadian attribution is a
        condition of the licence — reproduce it wherever you publish figures drawn from it.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sql"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SqlRequest | ApiV1SqlRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SqlResponse],
            error_mapper=post_api_v1_sql_error_mapper,
            request_options=request_options,
        )

    async def run_sql(
        self, body: ApiSqlRequest | ApiSqlRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RunSqlErrorBody]:
        """Query the grants warehouse directly when the fixed endpoints can't express the question.

        Accepts ONE read-only statement: ``SELECT`` or ``WITH ... SELECT``. Multiple statements, any DDL/DML, and the
        file-reading functions (``read_parquet``, ``read_csv``, …) are rejected — you query named views, not files. The
        view list, every column, and the caveats that decide whether an answer is right are documented at
        https://data.useplinth.com/developers/schema.

        Two ceilings, and they bound different things. Results are capped at 2,000 rows (``truncated: true`` says you
        hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled after 30 seconds: the row cap
        limits the response, this limits the scan behind it. A cancelled query returns 400, so narrow it with a
        ``tax_year`` or ``funder_ein`` filter and retry.

        Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the same as
        any other endpoint. Asset-intelligence and governance tables additionally need Pro.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/sql"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiSqlRequest | ApiSqlRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=run_sql_error_mapper,
            request_options=request_options,
        )
