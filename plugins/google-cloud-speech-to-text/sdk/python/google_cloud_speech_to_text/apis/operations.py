from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.speech_operations_get_error import SpeechOperationsGetErrorBody, speech_operations_get_error_mapper
from ..errors.speech_operations_list_error import SpeechOperationsListErrorBody, speech_operations_list_error_mapper
from ..models.list_operations_response import ListOperationsResponse
from ..models.operation import Operation
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def speech_operations_get(
        self, operations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.speech_operations_get(operations_id, request_options=request_options))

    def speech_operations_list(
        self,
        *,
        filter_: str | None = None,
        name: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListOperationsResponse:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            filter_: The standard list filter.
            name: The name of the operation's parent resource.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_operations_list(
                filter_=filter_,
                name=name,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def speech_operations_get(
        self, operations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_operations_get(operations_id, request_options=request_options)
        )

    async def speech_operations_list(
        self,
        *,
        filter_: str | None = None,
        name: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListOperationsResponse:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            filter_: The standard list filter.
            name: The name of the operation's parent resource.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_operations_list(
                filter_=filter_,
                name=name,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def speech_operations_get(
        self, operations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Operation, SpeechOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/operations/{operationsId}"),
            path_params=[param[str]("operationsId", operations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=speech_operations_get_error_mapper,
            request_options=request_options,
        )

    def speech_operations_list(
        self,
        *,
        filter_: str | None = None,
        name: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOperationsResponse, SpeechOperationsListErrorBody]:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            filter_: The standard list filter.
            name: The name of the operation's parent resource.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/operations"),
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("name", name),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListOperationsResponse],
            error_mapper=speech_operations_list_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def speech_operations_get(
        self, operations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Operation, SpeechOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/operations/{operationsId}"),
            path_params=[param[str]("operationsId", operations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=speech_operations_get_error_mapper,
            request_options=request_options,
        )

    async def speech_operations_list(
        self,
        *,
        filter_: str | None = None,
        name: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOperationsResponse, SpeechOperationsListErrorBody]:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            filter_: The standard list filter.
            name: The name of the operation's parent resource.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/operations"),
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("name", name),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListOperationsResponse],
            error_mapper=speech_operations_list_error_mapper,
            request_options=request_options,
        )
