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
from ..errors.create_channel_namespace_error import (
    CreateChannelNamespaceErrorBody,
    create_channel_namespace_error_mapper,
)
from ..errors.delete_channel_namespace_error import (
    DeleteChannelNamespaceErrorBody,
    delete_channel_namespace_error_mapper,
)
from ..errors.get_channel_namespace_error import GetChannelNamespaceErrorBody, get_channel_namespace_error_mapper
from ..errors.list_channel_namespaces_error import ListChannelNamespacesErrorBody, list_channel_namespaces_error_mapper
from ..errors.update_channel_namespace_error import (
    UpdateChannelNamespaceErrorBody,
    update_channel_namespace_error_mapper,
)
from ..models.create_channel_namespace_response import CreateChannelNamespaceResponse
from ..models.get_channel_namespace_response import GetChannelNamespaceResponse
from ..models.list_channel_namespaces_response import ListChannelNamespacesResponse
from ..models.update_channel_namespace_response import UpdateChannelNamespaceResponse
from ..models.v2_apis_channel_namespaces_request import (
    V2ApisChannelNamespacesRequest,
    V2ApisChannelNamespacesRequestDict,
)
from ..models.v2_apis_channel_namespaces_request1 import (
    V2ApisChannelNamespacesRequest1,
    V2ApisChannelNamespacesRequest1Dict,
)
from ..server.server import Server


class Channelnamespaces:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChannelnamespacesWithRawResponse(client, server, auth)

    def create_channel_namespace(
        self,
        api_id: str,
        *,
        body: V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateChannelNamespaceResponse:
        """Creates a ChannelNamespace for an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException; ConflictException InternalFailureException
                NotFoundException ServiceQuotaExceededException UnauthorizedException ``error`` is ``BadRequestException
                | UnauthorizedException | ServiceQuotaExceededException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.create_channel_namespace(api_id, body=body, request_options=request_options)
        )

    def delete_channel_namespace(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a ChannelNamespace.

        Args:
            api_id: The ID of the Api associated with the ChannelNamespace.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.delete_channel_namespace(api_id, name, request_options=request_options))

    def get_channel_namespace(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetChannelNamespaceResponse:
        """Retrieves the channel namespace for a specified Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | AccessDeniedException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_channel_namespace(api_id, name, request_options=request_options))

    def list_channel_namespaces(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListChannelNamespacesResponse:
        """Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for
        the channel namespace. To retrieve code handlers, use GetChannelNamespace.

        Args:
            api_id: The Api ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_channel_namespaces(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def update_channel_namespace(
        self,
        api_id: str,
        name: str,
        *,
        body: V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateChannelNamespaceResponse:
        """Updates a ChannelNamespace associated with an Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_channel_namespace(api_id, name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ChannelnamespacesWithRawResponse:
        return self._with_raw_response


class AsyncChannelnamespaces:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChannelnamespacesWithRawResponse(client, server, auth)

    async def create_channel_namespace(
        self,
        api_id: str,
        *,
        body: V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateChannelNamespaceResponse:
        """Creates a ChannelNamespace for an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException; ConflictException InternalFailureException
                NotFoundException ServiceQuotaExceededException UnauthorizedException ``error`` is ``BadRequestException
                | UnauthorizedException | ServiceQuotaExceededException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_channel_namespace(api_id, body=body, request_options=request_options)
        )

    async def delete_channel_namespace(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a ChannelNamespace.

        Args:
            api_id: The ID of the Api associated with the ChannelNamespace.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_channel_namespace(api_id, name, request_options=request_options)
        )

    async def get_channel_namespace(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetChannelNamespaceResponse:
        """Retrieves the channel namespace for a specified Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | AccessDeniedException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_channel_namespace(api_id, name, request_options=request_options)
        )

    async def list_channel_namespaces(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListChannelNamespacesResponse:
        """Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for
        the channel namespace. To retrieve code handlers, use GetChannelNamespace.

        Args:
            api_id: The Api ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_channel_namespaces(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def update_channel_namespace(
        self,
        api_id: str,
        name: str,
        *,
        body: V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateChannelNamespaceResponse:
        """Updates a ChannelNamespace associated with an Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_channel_namespace(
                api_id, name, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChannelnamespacesWithRawResponse:
        return self._with_raw_response


class ChannelnamespacesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_channel_namespace(
        self,
        api_id: str,
        *,
        body: V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateChannelNamespaceResponse, CreateChannelNamespaceErrorBody]:
        """Creates a ChannelNamespace for an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateChannelNamespaceResponse],
            error_mapper=create_channel_namespace_error_mapper,
            request_options=request_options,
        )

    def delete_channel_namespace(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteChannelNamespaceErrorBody]:
        """Deletes a ChannelNamespace.

        Args:
            api_id: The ID of the Api associated with the ChannelNamespace.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_channel_namespace_error_mapper,
            request_options=request_options,
        )

    def get_channel_namespace(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetChannelNamespaceResponse, GetChannelNamespaceErrorBody]:
        """Retrieves the channel namespace for a specified Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetChannelNamespaceResponse],
            error_mapper=get_channel_namespace_error_mapper,
            request_options=request_options,
        )

    def list_channel_namespaces(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListChannelNamespacesResponse, ListChannelNamespacesErrorBody]:
        """Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for
        the channel namespace. To retrieve code handlers, use GetChannelNamespace.

        Args:
            api_id: The Api ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListChannelNamespacesResponse],
            error_mapper=list_channel_namespaces_error_mapper,
            request_options=request_options,
        )

    def update_channel_namespace(
        self,
        api_id: str,
        name: str,
        *,
        body: V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateChannelNamespaceResponse, UpdateChannelNamespaceErrorBody]:
        """Updates a ChannelNamespace associated with an Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateChannelNamespaceResponse],
            error_mapper=update_channel_namespace_error_mapper,
            request_options=request_options,
        )


class AsyncChannelnamespacesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_channel_namespace(
        self,
        api_id: str,
        *,
        body: V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateChannelNamespaceResponse, CreateChannelNamespaceErrorBody]:
        """Creates a ChannelNamespace for an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateChannelNamespaceResponse],
            error_mapper=create_channel_namespace_error_mapper,
            request_options=request_options,
        )

    async def delete_channel_namespace(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteChannelNamespaceErrorBody]:
        """Deletes a ChannelNamespace.

        Args:
            api_id: The ID of the Api associated with the ChannelNamespace.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_channel_namespace_error_mapper,
            request_options=request_options,
        )

    async def get_channel_namespace(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetChannelNamespaceResponse, GetChannelNamespaceErrorBody]:
        """Retrieves the channel namespace for a specified Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetChannelNamespaceResponse],
            error_mapper=get_channel_namespace_error_mapper,
            request_options=request_options,
        )

    async def list_channel_namespaces(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListChannelNamespacesResponse, ListChannelNamespacesErrorBody]:
        """Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for
        the channel namespace. To retrieve code handlers, use GetChannelNamespace.

        Args:
            api_id: The Api ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListChannelNamespacesResponse],
            error_mapper=list_channel_namespaces_error_mapper,
            request_options=request_options,
        )

    async def update_channel_namespace(
        self,
        api_id: str,
        name: str,
        *,
        body: V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateChannelNamespaceResponse, UpdateChannelNamespaceErrorBody]:
        """Updates a ChannelNamespace associated with an Api.

        Args:
            api_id: The Api ID.
            name: The name of the ChannelNamespace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateChannelNamespaceResponse],
            error_mapper=update_channel_namespace_error_mapper,
            request_options=request_options,
        )
