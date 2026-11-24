from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.sync_content_error import SyncContentErrorBody, sync_content_error_mapper
from ..models.enums.type1_contentstack_content_delivery_synchronization_api import (
    Type1ContentstackContentDeliverySynchronizationApiOrStr,
)
from ..models.sync_response import SyncResponse
from ..server.server import Server


class Synchronization:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SynchronizationWithRawResponse(client, server, auth)

    def sync_content(
        self,
        api_key: str,
        access_token: str,
        *,
        init: bool | None = None,
        sync_token: str | None = None,
        pagination_token: str | None = None,
        type_: Type1ContentstackContentDeliverySynchronizationApiOrStr | None = None,
        content_type_uid: str | None = None,
        locale: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncResponse:
        """Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use
        init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only
        the changes since the last sync.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            init: Set to true to initiate the first sync and receive a sync token.
            sync_token: The token received from a previous sync response. Use to fetch only changes since the last sync.
            pagination_token: Token to retrieve the next page of results in a large sync response.
            type_: Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted,
                asset_published, asset_unpublished, asset_deleted, content_type_deleted.
            content_type_uid: Filter sync results to a specific content type UID.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sync results with a sync_token or pagination_token for continuation.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.sync_content(
                api_key,
                access_token,
                init=init,
                sync_token=sync_token,
                pagination_token=pagination_token,
                type_=type_,
                content_type_uid=content_type_uid,
                locale=locale,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SynchronizationWithRawResponse:
        return self._with_raw_response


class AsyncSynchronization:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSynchronizationWithRawResponse(client, server, auth)

    async def sync_content(
        self,
        api_key: str,
        access_token: str,
        *,
        init: bool | None = None,
        sync_token: str | None = None,
        pagination_token: str | None = None,
        type_: Type1ContentstackContentDeliverySynchronizationApiOrStr | None = None,
        content_type_uid: str | None = None,
        locale: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncResponse:
        """Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use
        init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only
        the changes since the last sync.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            init: Set to true to initiate the first sync and receive a sync token.
            sync_token: The token received from a previous sync response. Use to fetch only changes since the last sync.
            pagination_token: Token to retrieve the next page of results in a large sync response.
            type_: Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted,
                asset_published, asset_unpublished, asset_deleted, content_type_deleted.
            content_type_uid: Filter sync results to a specific content type UID.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sync results with a sync_token or pagination_token for continuation.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.sync_content(
                api_key,
                access_token,
                init=init,
                sync_token=sync_token,
                pagination_token=pagination_token,
                type_=type_,
                content_type_uid=content_type_uid,
                locale=locale,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSynchronizationWithRawResponse:
        return self._with_raw_response


class SynchronizationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sync_content(
        self,
        api_key: str,
        access_token: str,
        *,
        init: bool | None = None,
        sync_token: str | None = None,
        pagination_token: str | None = None,
        type_: Type1ContentstackContentDeliverySynchronizationApiOrStr | None = None,
        content_type_uid: str | None = None,
        locale: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncResponse, SyncContentErrorBody]:
        """Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use
        init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only
        the changes since the last sync.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            init: Set to true to initiate the first sync and receive a sync token.
            sync_token: The token received from a previous sync response. Use to fetch only changes since the last sync.
            pagination_token: Token to retrieve the next page of results in a large sync response.
            type_: Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted,
                asset_published, asset_unpublished, asset_deleted, content_type_deleted.
            content_type_uid: Filter sync results to a specific content type UID.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/stacks/sync"),
            query_params=[
                param[bool | None]("init", init),
                param[str | None]("sync_token", sync_token),
                param[str | None]("pagination_token", pagination_token),
                param[Type1ContentstackContentDeliverySynchronizationApiOrStr | None]("type", type_),
                param[str | None]("content_type_uid", content_type_uid),
                param[str | None]("locale", locale),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[SyncResponse],
            error_mapper=sync_content_error_mapper,
            request_options=request_options,
        )


class AsyncSynchronizationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sync_content(
        self,
        api_key: str,
        access_token: str,
        *,
        init: bool | None = None,
        sync_token: str | None = None,
        pagination_token: str | None = None,
        type_: Type1ContentstackContentDeliverySynchronizationApiOrStr | None = None,
        content_type_uid: str | None = None,
        locale: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncResponse, SyncContentErrorBody]:
        """Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use
        init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only
        the changes since the last sync.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            init: Set to true to initiate the first sync and receive a sync token.
            sync_token: The token received from a previous sync response. Use to fetch only changes since the last sync.
            pagination_token: Token to retrieve the next page of results in a large sync response.
            type_: Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted,
                asset_published, asset_unpublished, asset_deleted, content_type_deleted.
            content_type_uid: Filter sync results to a specific content type UID.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/stacks/sync"),
            query_params=[
                param[bool | None]("init", init),
                param[str | None]("sync_token", sync_token),
                param[str | None]("pagination_token", pagination_token),
                param[Type1ContentstackContentDeliverySynchronizationApiOrStr | None]("type", type_),
                param[str | None]("content_type_uid", content_type_uid),
                param[str | None]("locale", locale),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[SyncResponse],
            error_mapper=sync_content_error_mapper,
            request_options=request_options,
        )
