from __future__ import annotations

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
from ..errors.create_table_error import CreateTableErrorBody, create_table_error_mapper
from ..errors.update_table_error import UpdateTableErrorBody, update_table_error_mapper
from ..models.create_table_request import CreateTableRequest, CreateTableRequestDict
from ..models.meta_bases_tables_request import MetaBasesTablesRequest, MetaBasesTablesRequestDict
from ..models.table_schema import TableSchema
from ..server.server import Server


class Tables:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TablesWithRawResponse(client, server, auth)

    def create_table(
        self,
        base_id: str,
        body: CreateTableRequest | CreateTableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TableSchema:
        """Creates a new table within the specified base. The table must include a name and at least one field
        definition. Optionally include a description for the table.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created table with its schema.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_table(base_id, body, request_options=request_options))

    def update_table(
        self,
        base_id: str,
        table_id: str,
        body: MetaBasesTablesRequest | MetaBasesTablesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TableSchema:
        """Updates the name and/or description of an existing table. Only the provided fields will be modified.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated table schema.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_table(base_id, table_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> TablesWithRawResponse:
        return self._with_raw_response


class AsyncTables:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTablesWithRawResponse(client, server, auth)

    async def create_table(
        self,
        base_id: str,
        body: CreateTableRequest | CreateTableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TableSchema:
        """Creates a new table within the specified base. The table must include a name and at least one field
        definition. Optionally include a description for the table.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created table with its schema.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.create_table(base_id, body, request_options=request_options))

    async def update_table(
        self,
        base_id: str,
        table_id: str,
        body: MetaBasesTablesRequest | MetaBasesTablesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TableSchema:
        """Updates the name and/or description of an existing table. Only the provided fields will be modified.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated table schema.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_table(base_id, table_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTablesWithRawResponse:
        return self._with_raw_response


class TablesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_table(
        self,
        base_id: str,
        body: CreateTableRequest | CreateTableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TableSchema, CreateTableErrorBody]:
        """Creates a new table within the specified base. The table must include a name and at least one field
        definition. Optionally include a description for the table.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/meta/bases/{baseId}/tables"),
            path_params=[param[str]("baseId", base_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTableRequest | CreateTableRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TableSchema],
            error_mapper=create_table_error_mapper,
            request_options=request_options,
        )

    def update_table(
        self,
        base_id: str,
        table_id: str,
        body: MetaBasesTablesRequest | MetaBasesTablesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TableSchema, UpdateTableErrorBody]:
        """Updates the name and/or description of an existing table. Only the provided fields will be modified.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/meta/bases/{baseId}/tables/{tableId}"),
            path_params=[param[str]("baseId", base_id), param[str]("tableId", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MetaBasesTablesRequest | MetaBasesTablesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TableSchema],
            error_mapper=update_table_error_mapper,
            request_options=request_options,
        )


class AsyncTablesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_table(
        self,
        base_id: str,
        body: CreateTableRequest | CreateTableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TableSchema, CreateTableErrorBody]:
        """Creates a new table within the specified base. The table must include a name and at least one field
        definition. Optionally include a description for the table.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/meta/bases/{baseId}/tables"),
            path_params=[param[str]("baseId", base_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTableRequest | CreateTableRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TableSchema],
            error_mapper=create_table_error_mapper,
            request_options=request_options,
        )

    async def update_table(
        self,
        base_id: str,
        table_id: str,
        body: MetaBasesTablesRequest | MetaBasesTablesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TableSchema, UpdateTableErrorBody]:
        """Updates the name and/or description of an existing table. Only the provided fields will be modified.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/meta/bases/{baseId}/tables/{tableId}"),
            path_params=[param[str]("baseId", base_id), param[str]("tableId", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MetaBasesTablesRequest | MetaBasesTablesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TableSchema],
            error_mapper=update_table_error_mapper,
            request_options=request_options,
        )
