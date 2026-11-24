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
from ..errors.create_type_error import CreateTypeErrorBody, create_type_error_mapper
from ..errors.delete_type_error import DeleteTypeErrorBody, delete_type_error_mapper
from ..errors.get_type_error import GetTypeErrorBody, get_type_error_mapper
from ..errors.list_types_by_association_error import (
    ListTypesByAssociationErrorBody,
    list_types_by_association_error_mapper,
)
from ..errors.list_types_error import ListTypesErrorBody, list_types_error_mapper
from ..errors.update_type_error import UpdateTypeErrorBody, update_type_error_mapper
from ..models.create_type_response import CreateTypeResponse
from ..models.enums.format import FormatOrStr
from ..models.get_type_response import GetTypeResponse
from ..models.list_types_by_association_response import ListTypesByAssociationResponse
from ..models.list_types_response import ListTypesResponse
from ..models.update_type_response import UpdateTypeResponse
from ..models.v1_apis_types_request import V1ApisTypesRequest, V1ApisTypesRequestDict
from ..models.v1_apis_types_request1 import V1ApisTypesRequest1, V1ApisTypesRequest1Dict
from ..server.server import Server


class Types:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TypesWithRawResponse(client, server, auth)

    def create_type(
        self,
        api_id: str,
        *,
        body: V1ApisTypesRequest | V1ApisTypesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateTypeResponse:
        """Creates a Type object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_type(api_id, body=body, request_options=request_options))

    def delete_type(self, api_id: str, type_name: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_type(api_id, type_name, request_options=request_options))

    def get_type(
        self, api_id: str, type_name: str, format_: FormatOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetTypeResponse:
        """Retrieves a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            format_: The type format: SDL or JSON.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_type(api_id, type_name, format_, request_options=request_options))

    def list_types(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTypesResponse:
        """Lists the types for a given API.

        Args:
            api_id: The API ID.
            format_: The type format: SDL or JSON.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.list_types(
                api_id, format_, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def list_types_by_association(
        self,
        merged_api_identifier: str,
        association_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTypesByAssociationResponse:
        """Lists Type objects by the source API association ID.

        Args:
            merged_api_identifier: The identifier of the AppSync Merged API. This is generated by the AppSync service.
                In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
                merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full
                resource ARN of the merged API.
            association_id: The ID generated by the AppSync service for the source API association.
            format_: The format type.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.list_types_by_association(
                merged_api_identifier,
                association_id,
                format_,
                next_token=next_token,
                max_results=max_results,
                request_options=request_options,
            ),
        )

    def update_type(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateTypeResponse:
        """Updates a Type object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.update_type(api_id, type_name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TypesWithRawResponse:
        return self._with_raw_response


class AsyncTypes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTypesWithRawResponse(client, server, auth)

    async def create_type(
        self,
        api_id: str,
        *,
        body: V1ApisTypesRequest | V1ApisTypesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateTypeResponse:
        """Creates a Type object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.create_type(api_id, body=body, request_options=request_options))

    async def delete_type(
        self, api_id: str, type_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_type(api_id, type_name, request_options=request_options))

    async def get_type(
        self,
        api_id: str,
        type_name: str,
        format_: FormatOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetTypeResponse:
        """Retrieves a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            format_: The type format: SDL or JSON.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_type(api_id, type_name, format_, request_options=request_options)
        )

    async def list_types(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTypesResponse:
        """Lists the types for a given API.

        Args:
            api_id: The API ID.
            format_: The type format: SDL or JSON.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_types(
                api_id, format_, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def list_types_by_association(
        self,
        merged_api_identifier: str,
        association_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTypesByAssociationResponse:
        """Lists Type objects by the source API association ID.

        Args:
            merged_api_identifier: The identifier of the AppSync Merged API. This is generated by the AppSync service.
                In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
                merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full
                resource ARN of the merged API.
            association_id: The ID generated by the AppSync service for the source API association.
            format_: The format type.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_types_by_association(
                merged_api_identifier,
                association_id,
                format_,
                next_token=next_token,
                max_results=max_results,
                request_options=request_options,
            ),
        )

    async def update_type(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateTypeResponse:
        """Updates a Type object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_type(api_id, type_name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTypesWithRawResponse:
        return self._with_raw_response


class TypesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_type(
        self,
        api_id: str,
        *,
        body: V1ApisTypesRequest | V1ApisTypesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateTypeResponse, CreateTypeErrorBody]:
        """Creates a Type object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesRequest | V1ApisTypesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateTypeResponse],
            error_mapper=create_type_error_mapper,
            request_options=request_options,
        )

    def delete_type(
        self, api_id: str, type_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteTypeErrorBody]:
        """Deletes a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_type_error_mapper,
            request_options=request_options,
        )

    def get_type(
        self, api_id: str, type_name: str, format_: FormatOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetTypeResponse, GetTypeErrorBody]:
        """Retrieves a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            format_: The type format: SDL or JSON.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            query_params=[param[FormatOrStr]("format", format_)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetTypeResponse],
            error_mapper=get_type_error_mapper,
            request_options=request_options,
        )

    def list_types(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTypesResponse, ListTypesErrorBody]:
        """Lists the types for a given API.

        Args:
            api_id: The API ID.
            format_: The type format: SDL or JSON.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[
                param[FormatOrStr]("format", format_),
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTypesResponse],
            error_mapper=list_types_error_mapper,
            request_options=request_options,
        )

    def list_types_by_association(
        self,
        merged_api_identifier: str,
        association_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTypesByAssociationResponse, ListTypesByAssociationErrorBody]:
        """Lists Type objects by the source API association ID.

        Args:
            merged_api_identifier: The identifier of the AppSync Merged API. This is generated by the AppSync service.
                In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
                merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full
                resource ARN of the merged API.
            association_id: The ID generated by the AppSync service for the source API association.
            format_: The format type.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types"
            ),
            path_params=[
                param[str]("mergedApiIdentifier", merged_api_identifier), param[str]("associationId", association_id)
            ],
            query_params=[
                param[FormatOrStr]("format", format_),
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTypesByAssociationResponse],
            error_mapper=list_types_by_association_error_mapper,
            request_options=request_options,
        )

    def update_type(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateTypeResponse, UpdateTypeErrorBody]:
        """Updates a Type object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateTypeResponse],
            error_mapper=update_type_error_mapper,
            request_options=request_options,
        )


class AsyncTypesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_type(
        self,
        api_id: str,
        *,
        body: V1ApisTypesRequest | V1ApisTypesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateTypeResponse, CreateTypeErrorBody]:
        """Creates a Type object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesRequest | V1ApisTypesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateTypeResponse],
            error_mapper=create_type_error_mapper,
            request_options=request_options,
        )

    async def delete_type(
        self, api_id: str, type_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteTypeErrorBody]:
        """Deletes a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_type_error_mapper,
            request_options=request_options,
        )

    async def get_type(
        self,
        api_id: str,
        type_name: str,
        format_: FormatOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTypeResponse, GetTypeErrorBody]:
        """Retrieves a Type object.

        Args:
            api_id: The API ID.
            type_name: The type name.
            format_: The type format: SDL or JSON.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            query_params=[param[FormatOrStr]("format", format_)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetTypeResponse],
            error_mapper=get_type_error_mapper,
            request_options=request_options,
        )

    async def list_types(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTypesResponse, ListTypesErrorBody]:
        """Lists the types for a given API.

        Args:
            api_id: The API ID.
            format_: The type format: SDL or JSON.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[
                param[FormatOrStr]("format", format_),
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTypesResponse],
            error_mapper=list_types_error_mapper,
            request_options=request_options,
        )

    async def list_types_by_association(
        self,
        merged_api_identifier: str,
        association_id: str,
        format_: FormatOrStr,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTypesByAssociationResponse, ListTypesByAssociationErrorBody]:
        """Lists Type objects by the source API association ID.

        Args:
            merged_api_identifier: The identifier of the AppSync Merged API. This is generated by the AppSync service.
                In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
                merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full
                resource ARN of the merged API.
            association_id: The ID generated by the AppSync service for the source API association.
            format_: The format type.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types"
            ),
            path_params=[
                param[str]("mergedApiIdentifier", merged_api_identifier), param[str]("associationId", association_id)
            ],
            query_params=[
                param[FormatOrStr]("format", format_),
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTypesByAssociationResponse],
            error_mapper=list_types_by_association_error_mapper,
            request_options=request_options,
        )

    async def update_type(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateTypeResponse, UpdateTypeErrorBody]:
        """Updates a Type object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateTypeResponse],
            error_mapper=update_type_error_mapper,
            request_options=request_options,
        )
