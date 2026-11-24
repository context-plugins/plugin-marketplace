from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.container_response import ContainerResponse
from ..models.content_publishing_limit_response import ContentPublishingLimitResponse
from ..models.create_container_request import CreateContainerRequest, CreateContainerRequestDict
from ..models.media_publish_request import MediaPublishRequest, MediaPublishRequestDict
from ..models.media_publish_response import MediaPublishResponse
from ..models.response_instagram_graph_publishing_api import ResponseInstagramGraphPublishingApi
from ..server.server import Server


class Publishing:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PublishingWithRawResponse(client, server)

    def create_media_container(
        self,
        user_id: str,
        body: CreateContainerRequest | CreateContainerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContainerResponse:
        """Create a media container for publishing content. Step 1 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Container created.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_media_container(user_id, body, request_options=request_options))

    def get_container(
        self,
        container_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResponseInstagramGraphPublishingApi:
        """Check the publishing status of a media container.

        Args:
            container_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Container status.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_container(
                container_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def get_content_publishing_limit(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContentPublishingLimitResponse:
        """Get current content publishing usage and rate limit status.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Publishing limit data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_content_publishing_limit(
                user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def publish_media(
        self,
        user_id: str,
        body: MediaPublishRequest | MediaPublishRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaPublishResponse:
        """Publish a media container. Step 2 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media published.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.publish_media(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PublishingWithRawResponse:
        return self._with_raw_response


class AsyncPublishing:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPublishingWithRawResponse(client, server)

    async def create_media_container(
        self,
        user_id: str,
        body: CreateContainerRequest | CreateContainerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContainerResponse:
        """Create a media container for publishing content. Step 1 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Container created.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_media_container(user_id, body, request_options=request_options)
        )

    async def get_container(
        self,
        container_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResponseInstagramGraphPublishingApi:
        """Check the publishing status of a media container.

        Args:
            container_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Container status.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_container(
                container_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def get_content_publishing_limit(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContentPublishingLimitResponse:
        """Get current content publishing usage and rate limit status.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Publishing limit data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_content_publishing_limit(
                user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def publish_media(
        self,
        user_id: str,
        body: MediaPublishRequest | MediaPublishRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaPublishResponse:
        """Publish a media container. Step 2 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media published.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.publish_media(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPublishingWithRawResponse:
        return self._with_raw_response


class PublishingWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_media_container(
        self,
        user_id: str,
        body: CreateContainerRequest | CreateContainerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContainerResponse, RawError]:
        """Create a media container for publishing content. Step 1 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{user_id}/media"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContainerRequest | CreateContainerRequestDict](body),
            decoder=json_decoder[ContainerResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_container(
        self,
        container_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResponseInstagramGraphPublishingApi, RawError]:
        """Check the publishing status of a media container.

        Args:
            container_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{container_id}"),
            path_params=[param[str]("container_id", container_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[ResponseInstagramGraphPublishingApi],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_content_publishing_limit(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentPublishingLimitResponse, RawError]:
        """Get current content publishing usage and rate limit status.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/content_publishing_limit"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[ContentPublishingLimitResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def publish_media(
        self,
        user_id: str,
        body: MediaPublishRequest | MediaPublishRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaPublishResponse, RawError]:
        """Publish a media container. Step 2 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{user_id}/media_publish"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MediaPublishRequest | MediaPublishRequestDict](body),
            decoder=json_decoder[MediaPublishResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPublishingWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_media_container(
        self,
        user_id: str,
        body: CreateContainerRequest | CreateContainerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContainerResponse, RawError]:
        """Create a media container for publishing content. Step 1 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{user_id}/media"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContainerRequest | CreateContainerRequestDict](body),
            decoder=async_json_decoder[ContainerResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_container(
        self,
        container_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResponseInstagramGraphPublishingApi, RawError]:
        """Check the publishing status of a media container.

        Args:
            container_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{container_id}"),
            path_params=[param[str]("container_id", container_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[ResponseInstagramGraphPublishingApi],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_content_publishing_limit(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContentPublishingLimitResponse, RawError]:
        """Get current content publishing usage and rate limit status.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/content_publishing_limit"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[ContentPublishingLimitResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def publish_media(
        self,
        user_id: str,
        body: MediaPublishRequest | MediaPublishRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaPublishResponse, RawError]:
        """Publish a media container. Step 2 of the publishing flow.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{user_id}/media_publish"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MediaPublishRequest | MediaPublishRequestDict](body),
            decoder=async_json_decoder[MediaPublishResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
