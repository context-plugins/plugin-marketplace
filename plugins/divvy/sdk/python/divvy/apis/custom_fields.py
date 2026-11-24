from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_custom_field_error import CreateCustomFieldErrorBody, create_custom_field_error_mapper
from ..errors.create_custom_field_values_error import (
    CreateCustomFieldValuesErrorBody,
    create_custom_field_values_error_mapper,
)
from ..errors.delete_custom_field_error import DeleteCustomFieldErrorBody, delete_custom_field_error_mapper
from ..errors.delete_custom_field_value_error import (
    DeleteCustomFieldValueErrorBody,
    delete_custom_field_value_error_mapper,
)
from ..errors.get_custom_field_error import GetCustomFieldErrorBody, get_custom_field_error_mapper
from ..errors.get_custom_field_values_error import GetCustomFieldValuesErrorBody, get_custom_field_values_error_mapper
from ..errors.list_custom_field_values_error import (
    ListCustomFieldValuesErrorBody,
    list_custom_field_values_error_mapper,
)
from ..errors.list_custom_fields_error import ListCustomFieldsErrorBody, list_custom_fields_error_mapper
from ..errors.update_custom_field_error import UpdateCustomFieldErrorBody, update_custom_field_error_mapper
from ..models.create_custom_field_request_dto import CreateCustomFieldRequestDto, CreateCustomFieldRequestDtoDict
from ..models.create_custom_field_value_request_dto import (
    CreateCustomFieldValueRequestDto,
    CreateCustomFieldValueRequestDtoDict,
)
from ..models.custom_field_response_dto import CustomFieldResponseDto
from ..models.custom_field_value_response_dto import CustomFieldValueResponseDto
from ..models.delete_custom_field_values_request_dto import (
    DeleteCustomFieldValuesRequestDto,
    DeleteCustomFieldValuesRequestDtoDict,
)
from ..models.pagination_response_dto_custom_field_response_dto import PaginationResponseDtoCustomFieldResponseDto
from ..models.pagination_response_dto_custom_field_value_response_dto import (
    PaginationResponseDtoCustomFieldValueResponseDto,
)
from ..models.update_custom_field_request_dto import UpdateCustomFieldRequestDto, UpdateCustomFieldRequestDtoDict
from ..server.server import Server


class CustomFields:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomFieldsWithRawResponse(client, server)

    def create_custom_field(
        self,
        body: CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomFieldResponseDto:
        """Create a new custom field.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a custom field response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_custom_field(body, api_token=api_token, request_options=request_options)
        )

    def create_custom_field_values(
        self,
        custom_field_id: str,
        body: CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CustomFieldValueResponseDto]:
        """Create a new value for an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a custom field value response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_custom_field_values(
                custom_field_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def delete_custom_field(
        self, custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not
        available in the list of custom fields.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a custom field response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_field(
                custom_field_id, api_token=api_token, request_options=request_options
            ),
        )

    def delete_custom_field_value(
        self,
        custom_field_id: str,
        body: DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing custom field value.

        A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In
        addition, the deleted value cannot be assigned to current or future transactions. The deleted value will
        continue to be assigned to past transactions.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a custom field value response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_field_value(
                custom_field_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def get_custom_field(
        self, custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CustomFieldResponseDto:
        """Get details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get custom field details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_custom_field(
                custom_field_id, api_token=api_token, request_options=request_options
            ),
        )

    def get_custom_field_values(
        self,
        custom_field_id: str,
        custom_field_value_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomFieldValueResponseDto:
        """Get details about an existing custom field value.

        Args:
            custom_field_id: Value sent with the request.
            custom_field_value_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get custom field value details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_custom_field_values(
                custom_field_id, custom_field_value_id, api_token=api_token, request_options=request_options
            ),
        )

    def list_custom_field_values(
        self,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCustomFieldValueResponseDto:
        """Get a list of custom field value objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        Args:
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of custom field values response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_custom_field_values(
                custom_field_id,
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def list_custom_fields(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCustomFieldResponseDto:
        """Get a list of custom field objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of custom fields response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_custom_fields(
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def update_custom_field(
        self,
        custom_field_id: str,
        body: UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomFieldResponseDto:
        """Update details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a custom field response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_custom_field(
                custom_field_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomFieldsWithRawResponse:
        return self._with_raw_response


class AsyncCustomFields:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomFieldsWithRawResponse(client, server)

    async def create_custom_field(
        self,
        body: CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldResponseDto:
        """Create a new custom field.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a custom field response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_custom_field(
                body, api_token=api_token, request_options=request_options
            ),
        )

    async def create_custom_field_values(
        self,
        custom_field_id: str,
        body: CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CustomFieldValueResponseDto]:
        """Create a new value for an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a custom field value response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_custom_field_values(
                custom_field_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def delete_custom_field(
        self,
        custom_field_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not
        available in the list of custom fields.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a custom field response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_field(
                custom_field_id, api_token=api_token, request_options=request_options
            ),
        )

    async def delete_custom_field_value(
        self,
        custom_field_id: str,
        body: DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing custom field value.

        A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In
        addition, the deleted value cannot be assigned to current or future transactions. The deleted value will
        continue to be assigned to past transactions.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a custom field value response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_field_value(
                custom_field_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def get_custom_field(
        self,
        custom_field_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldResponseDto:
        """Get details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get custom field details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_field(
                custom_field_id, api_token=api_token, request_options=request_options
            ),
        )

    async def get_custom_field_values(
        self,
        custom_field_id: str,
        custom_field_value_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldValueResponseDto:
        """Get details about an existing custom field value.

        Args:
            custom_field_id: Value sent with the request.
            custom_field_value_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get custom field value details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_field_values(
                custom_field_id, custom_field_value_id, api_token=api_token, request_options=request_options
            ),
        )

    async def list_custom_field_values(
        self,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCustomFieldValueResponseDto:
        """Get a list of custom field value objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        Args:
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of custom field values response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_custom_field_values(
                custom_field_id,
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def list_custom_fields(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCustomFieldResponseDto:
        """Get a list of custom field objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of custom fields response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_custom_fields(
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def update_custom_field(
        self,
        custom_field_id: str,
        body: UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldResponseDto:
        """Update details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a custom field response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_custom_field(
                custom_field_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomFieldsWithRawResponse:
        return self._with_raw_response


class CustomFieldsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_custom_field(
        self,
        body: CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponseDto, CreateCustomFieldErrorBody]:
        """Create a new custom field.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/custom-fields"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict](body),
            decoder=json_decoder[CustomFieldResponseDto],
            error_mapper=create_custom_field_error_mapper,
            request_options=request_options,
        )

    def create_custom_field_values(
        self,
        custom_field_id: str,
        body: CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CustomFieldValueResponseDto], CreateCustomFieldValuesErrorBody]:
        """Create a new value for an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict](body),
            decoder=json_decoder[list[CustomFieldValueResponseDto]],
            error_mapper=create_custom_field_values_error_mapper,
            request_options=request_options,
        )

    def delete_custom_field(
        self, custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCustomFieldErrorBody]:
        """Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not
        available in the list of custom fields.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_custom_field_error_mapper,
            request_options=request_options,
        )

    def delete_custom_field_value(
        self,
        custom_field_id: str,
        body: DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomFieldValueErrorBody]:
        """Delete an existing custom field value.

        A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In
        addition, the deleted value cannot be assigned to current or future transactions. The deleted value will
        continue to be assigned to past transactions.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=delete_custom_field_value_error_mapper,
            request_options=request_options,
        )

    def get_custom_field(
        self, custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomFieldResponseDto, GetCustomFieldErrorBody]:
        """Get details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[CustomFieldResponseDto],
            error_mapper=get_custom_field_error_mapper,
            request_options=request_options,
        )

    def get_custom_field_values(
        self,
        custom_field_id: str,
        custom_field_value_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldValueResponseDto, GetCustomFieldValuesErrorBody]:
        """Get details about an existing custom field value.

        Args:
            custom_field_id: Value sent with the request.
            custom_field_value_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values/{customFieldValueId}"),
            path_params=[
                param[str]("customFieldId", custom_field_id), param[str]("customFieldValueId", custom_field_value_id)
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[CustomFieldValueResponseDto],
            error_mapper=get_custom_field_values_error_mapper,
            request_options=request_options,
        )

    def list_custom_field_values(
        self,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCustomFieldValueResponseDto, ListCustomFieldValuesErrorBody]:
        """Get a list of custom field value objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        Args:
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoCustomFieldValueResponseDto],
            error_mapper=list_custom_field_values_error_mapper,
            request_options=request_options,
        )

    def list_custom_fields(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCustomFieldResponseDto, ListCustomFieldsErrorBody]:
        """Get a list of custom field objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoCustomFieldResponseDto],
            error_mapper=list_custom_fields_error_mapper,
            request_options=request_options,
        )

    def update_custom_field(
        self,
        custom_field_id: str,
        body: UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponseDto, UpdateCustomFieldErrorBody]:
        """Update details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict](body),
            decoder=json_decoder[CustomFieldResponseDto],
            error_mapper=update_custom_field_error_mapper,
            request_options=request_options,
        )


class AsyncCustomFieldsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_custom_field(
        self,
        body: CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponseDto, CreateCustomFieldErrorBody]:
        """Create a new custom field.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/custom-fields"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict](body),
            decoder=async_json_decoder[CustomFieldResponseDto],
            error_mapper=create_custom_field_error_mapper,
            request_options=request_options,
        )

    async def create_custom_field_values(
        self,
        custom_field_id: str,
        body: CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CustomFieldValueResponseDto], CreateCustomFieldValuesErrorBody]:
        """Create a new value for an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict](body),
            decoder=async_json_decoder[list[CustomFieldValueResponseDto]],
            error_mapper=create_custom_field_values_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_field(
        self,
        custom_field_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomFieldErrorBody]:
        """Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not
        available in the list of custom fields.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_custom_field_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_field_value(
        self,
        custom_field_id: str,
        body: DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomFieldValueErrorBody]:
        """Delete an existing custom field value.

        A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In
        addition, the deleted value cannot be assigned to current or future transactions. The deleted value will
        continue to be assigned to past transactions.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=delete_custom_field_value_error_mapper,
            request_options=request_options,
        )

    async def get_custom_field(
        self,
        custom_field_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponseDto, GetCustomFieldErrorBody]:
        """Get details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[CustomFieldResponseDto],
            error_mapper=get_custom_field_error_mapper,
            request_options=request_options,
        )

    async def get_custom_field_values(
        self,
        custom_field_id: str,
        custom_field_value_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldValueResponseDto, GetCustomFieldValuesErrorBody]:
        """Get details about an existing custom field value.

        Args:
            custom_field_id: Value sent with the request.
            custom_field_value_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values/{customFieldValueId}"),
            path_params=[
                param[str]("customFieldId", custom_field_id), param[str]("customFieldValueId", custom_field_value_id)
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[CustomFieldValueResponseDto],
            error_mapper=get_custom_field_values_error_mapper,
            request_options=request_options,
        )

    async def list_custom_field_values(
        self,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCustomFieldValueResponseDto, ListCustomFieldValuesErrorBody]:
        """Get a list of custom field value objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        Args:
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}/values"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoCustomFieldValueResponseDto],
            error_mapper=list_custom_field_values_error_mapper,
            request_options=request_options,
        )

    async def list_custom_fields(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCustomFieldResponseDto, ListCustomFieldsErrorBody]:
        """Get a list of custom field objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/custom-fields"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoCustomFieldResponseDto],
            error_mapper=list_custom_fields_error_mapper,
            request_options=request_options,
        )

    async def update_custom_field(
        self,
        custom_field_id: str,
        body: UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponseDto, UpdateCustomFieldErrorBody]:
        """Update details about an existing custom field.

        Args:
            custom_field_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/custom-fields/{customFieldId}"),
            path_params=[param[str]("customFieldId", custom_field_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict](body),
            decoder=async_json_decoder[CustomFieldResponseDto],
            error_mapper=update_custom_field_error_mapper,
            request_options=request_options,
        )
