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
from ..errors.create_field_error import CreateFieldErrorBody, create_field_error_mapper
from ..errors.update_field_error import UpdateFieldErrorBody, update_field_error_mapper
from ..models.create_field_request import CreateFieldRequest, CreateFieldRequestDict
from ..models.field_schema import FieldSchema
from ..models.meta_bases_tables_fields_field_id_request import (
    MetaBasesTablesFieldsFieldIdRequest,
    MetaBasesTablesFieldsFieldIdRequestDict,
)
from ..server.server import Server


class Fields:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FieldsWithRawResponse(client, server, auth)

    def create_field(
        self,
        base_id: str,
        table_id: str,
        body: CreateFieldRequest | CreateFieldRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FieldSchema:
        """Creates a new field in the specified table. The field must include a name and type. Some field types (like
        singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed
        field types cannot be created via the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created field definition.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_field(base_id, table_id, body, request_options=request_options))

    def update_field(
        self,
        base_id: str,
        table_id: str,
        field_id: str,
        body: MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FieldSchema:
        """Updates the name, description, or configuration options of an existing field. Only the provided properties
        will be modified. Not all field properties can be updated after creation.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            field_id: The unique identifier of the field (starts with 'fld').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated field definition.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_field(base_id, table_id, field_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FieldsWithRawResponse:
        return self._with_raw_response


class AsyncFields:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFieldsWithRawResponse(client, server, auth)

    async def create_field(
        self,
        base_id: str,
        table_id: str,
        body: CreateFieldRequest | CreateFieldRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FieldSchema:
        """Creates a new field in the specified table. The field must include a name and type. Some field types (like
        singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed
        field types cannot be created via the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created field definition.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_field(base_id, table_id, body, request_options=request_options)
        )

    async def update_field(
        self,
        base_id: str,
        table_id: str,
        field_id: str,
        body: MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FieldSchema:
        """Updates the name, description, or configuration options of an existing field. Only the provided properties
        will be modified. Not all field properties can be updated after creation.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            field_id: The unique identifier of the field (starts with 'fld').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated field definition.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_field(
                base_id, table_id, field_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFieldsWithRawResponse:
        return self._with_raw_response


class FieldsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_field(
        self,
        base_id: str,
        table_id: str,
        body: CreateFieldRequest | CreateFieldRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FieldSchema, CreateFieldErrorBody]:
        """Creates a new field in the specified table. The field must include a name and type. Some field types (like
        singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed
        field types cannot be created via the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/meta/bases/{baseId}/tables/{tableId}/fields"),
            path_params=[param[str]("baseId", base_id), param[str]("tableId", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFieldRequest | CreateFieldRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FieldSchema],
            error_mapper=create_field_error_mapper,
            request_options=request_options,
        )

    def update_field(
        self,
        base_id: str,
        table_id: str,
        field_id: str,
        body: MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FieldSchema, UpdateFieldErrorBody]:
        """Updates the name, description, or configuration options of an existing field. Only the provided properties
        will be modified. Not all field properties can be updated after creation.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            field_id: The unique identifier of the field (starts with 'fld').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}"),
            path_params=[
                param[str]("baseId", base_id), param[str]("tableId", table_id), param[str]("fieldId", field_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FieldSchema],
            error_mapper=update_field_error_mapper,
            request_options=request_options,
        )


class AsyncFieldsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_field(
        self,
        base_id: str,
        table_id: str,
        body: CreateFieldRequest | CreateFieldRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FieldSchema, CreateFieldErrorBody]:
        """Creates a new field in the specified table. The field must include a name and type. Some field types (like
        singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed
        field types cannot be created via the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/meta/bases/{baseId}/tables/{tableId}/fields"),
            path_params=[param[str]("baseId", base_id), param[str]("tableId", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFieldRequest | CreateFieldRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FieldSchema],
            error_mapper=create_field_error_mapper,
            request_options=request_options,
        )

    async def update_field(
        self,
        base_id: str,
        table_id: str,
        field_id: str,
        body: MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FieldSchema, UpdateFieldErrorBody]:
        """Updates the name, description, or configuration options of an existing field. Only the provided properties
        will be modified. Not all field properties can be updated after creation.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id: The unique identifier of the table (starts with 'tbl').
            field_id: The unique identifier of the field (starts with 'fld').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}"),
            path_params=[
                param[str]("baseId", base_id), param[str]("tableId", table_id), param[str]("fieldId", field_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FieldSchema],
            error_mapper=update_field_error_mapper,
            request_options=request_options,
        )
