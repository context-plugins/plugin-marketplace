from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.list_blocks_error import ListBlocksErrorBody, list_blocks_error_mapper
from ..models.blocks_response import BlocksResponse
from ..server.server import Server


class Blocks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BlocksWithRawResponse(client, server, auth)

    def list_blocks(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BlocksResponse:
        """Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Bucket's content Blocks.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_blocks(slug, read_key=read_key, pretty=pretty, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BlocksWithRawResponse:
        return self._with_raw_response


class AsyncBlocks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBlocksWithRawResponse(client, server, auth)

    async def list_blocks(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BlocksResponse:
        """Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The Bucket's content Blocks.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_blocks(
                slug, read_key=read_key, pretty=pretty, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBlocksWithRawResponse:
        return self._with_raw_response


class BlocksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_blocks(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BlocksResponse, ListBlocksErrorBody]:
        """Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/blocks"),
            path_params=[param[str]("slug", slug)],
            query_params=[param[str | None]("read_key", read_key), param[bool | None]("pretty", pretty)],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[BlocksResponse],
            error_mapper=list_blocks_error_mapper,
            request_options=request_options,
        )


class AsyncBlocksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_blocks(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BlocksResponse, ListBlocksErrorBody]:
        """Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/blocks"),
            path_params=[param[str]("slug", slug)],
            query_params=[param[str | None]("read_key", read_key), param[bool | None]("pretty", pretty)],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[BlocksResponse],
            error_mapper=list_blocks_error_mapper,
            request_options=request_options,
        )
