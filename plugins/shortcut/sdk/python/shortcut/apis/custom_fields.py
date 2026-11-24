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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_custom_field_error import DeleteCustomFieldErrorBody, delete_custom_field_error_mapper
from ..errors.get_custom_field_error import GetCustomFieldErrorBody, get_custom_field_error_mapper
from ..errors.list_custom_fields_error import ListCustomFieldsErrorBody, list_custom_fields_error_mapper
from ..errors.update_custom_field_error import UpdateCustomFieldErrorBody, update_custom_field_error_mapper
from ..models.custom_field import CustomField
from ..models.update_custom_field import UpdateCustomField, UpdateCustomFieldDict
from ..server.server import Server


class CustomFields:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomFieldsWithRawResponse(client, server, auth)

    def delete_custom_field(
        self, custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_field(custom_field_public_id, request_options=request_options)
        )

    def get_custom_field(
        self, custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomField:
        """Send a ``GET`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_custom_field(custom_field_public_id, request_options=request_options))

    def list_custom_fields(self, *, request_options: RequestOptionsOrDict | None = None) -> list[CustomField]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_custom_fields(request_options=request_options))

    def update_custom_field(
        self,
        custom_field_public_id: UUID,
        body: UpdateCustomField | UpdateCustomFieldDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomField:
        """Update Custom Field can be used to update the definition of a Custom Field. The order of items in the
        'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply
        omit it from the 'values' collection. New enum values may be created inline by including an object in the
        'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DataConflictError |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_custom_field(custom_field_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CustomFieldsWithRawResponse:
        return self._with_raw_response


class AsyncCustomFields:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomFieldsWithRawResponse(client, server, auth)

    async def delete_custom_field(
        self, custom_field_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_field(custom_field_public_id, request_options=request_options)
        )

    async def get_custom_field(
        self, custom_field_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomField:
        """Send a ``GET`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_field(custom_field_public_id, request_options=request_options)
        )

    async def list_custom_fields(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[CustomField]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_custom_fields(request_options=request_options))

    async def update_custom_field(
        self,
        custom_field_public_id: UUID,
        body: UpdateCustomField | UpdateCustomFieldDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomField:
        """Update Custom Field can be used to update the definition of a Custom Field. The order of items in the
        'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply
        omit it from the 'values' collection. New enum values may be created inline by including an object in the
        'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DataConflictError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_custom_field(
                custom_field_public_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomFieldsWithRawResponse:
        return self._with_raw_response


class CustomFieldsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_custom_field(
        self, custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCustomFieldErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/custom-fields/{custom-field-public-id}"),
            path_params=[param[UUID]("custom-field-public-id", custom_field_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_custom_field_error_mapper,
            request_options=request_options,
        )

    def get_custom_field(
        self, custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomField, GetCustomFieldErrorBody]:
        """Send a ``GET`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/custom-fields/{custom-field-public-id}"),
            path_params=[param[UUID]("custom-field-public-id", custom_field_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CustomField],
            error_mapper=get_custom_field_error_mapper,
            request_options=request_options,
        )

    def list_custom_fields(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CustomField], ListCustomFieldsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/custom-fields"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[CustomField]],
            error_mapper=list_custom_fields_error_mapper,
            request_options=request_options,
        )

    def update_custom_field(
        self,
        custom_field_public_id: UUID,
        body: UpdateCustomField | UpdateCustomFieldDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomField, UpdateCustomFieldErrorBody]:
        """Update Custom Field can be used to update the definition of a Custom Field. The order of items in the
        'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply
        omit it from the 'values' collection. New enum values may be created inline by including an object in the
        'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/custom-fields/{custom-field-public-id}"),
            path_params=[param[UUID]("custom-field-public-id", custom_field_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomField | UpdateCustomFieldDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CustomField],
            error_mapper=update_custom_field_error_mapper,
            request_options=request_options,
        )


class AsyncCustomFieldsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_custom_field(
        self, custom_field_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCustomFieldErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/custom-fields/{custom-field-public-id}"),
            path_params=[param[UUID]("custom-field-public-id", custom_field_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_custom_field_error_mapper,
            request_options=request_options,
        )

    async def get_custom_field(
        self, custom_field_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomField, GetCustomFieldErrorBody]:
        """Send a ``GET`` request.

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/custom-fields/{custom-field-public-id}"),
            path_params=[param[UUID]("custom-field-public-id", custom_field_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CustomField],
            error_mapper=get_custom_field_error_mapper,
            request_options=request_options,
        )

    async def list_custom_fields(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[CustomField], ListCustomFieldsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/custom-fields"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[CustomField]],
            error_mapper=list_custom_fields_error_mapper,
            request_options=request_options,
        )

    async def update_custom_field(
        self,
        custom_field_public_id: UUID,
        body: UpdateCustomField | UpdateCustomFieldDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomField, UpdateCustomFieldErrorBody]:
        """Update Custom Field can be used to update the definition of a Custom Field. The order of items in the
        'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply
        omit it from the 'values' collection. New enum values may be created inline by including an object in the
        'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

        Args:
            custom_field_public_id: The unique ID of the CustomField.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/custom-fields/{custom-field-public-id}"),
            path_params=[param[UUID]("custom-field-public-id", custom_field_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomField | UpdateCustomFieldDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CustomField],
            error_mapper=update_custom_field_error_mapper,
            request_options=request_options,
        )
