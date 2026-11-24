from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.get_all_assets_error import GetAllAssetsErrorBody, get_all_assets_error_mapper
from ..errors.get_single_asset_error import GetSingleAssetErrorBody, get_single_asset_error_mapper
from ..errors.upload_asset_error import UploadAssetErrorBody, upload_asset_error_mapper
from ..models.asset import Asset
from ..models.asset2 import Asset2
from ..models.asset_list import AssetList
from ..server.server import Server


class Assets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AssetsWithRawResponse(client, server, auth)

    def get_all_assets(
        self,
        api_key: str,
        access_token: str,
        *,
        skip: int | None = 0,
        limit: int | None = 100,
        include_count: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AssetList:
        """Fetches a list of all published assets in the stack including images, videos, and documents. Supports
        pagination, filtering, and field selection.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            include_count: Set to true to include the total count of assets in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of assets in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_all_assets(
                api_key,
                access_token,
                skip=skip,
                limit=limit,
                include_count=include_count,
                request_options=request_options,
            ),
        )

    def get_single_asset(
        self, asset_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Asset:
        """Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and
        content type.

        Args:
            asset_uid: The unique identifier (UID) of the asset.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested asset object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_single_asset(asset_uid, api_key, access_token, request_options=request_options)
        )

    def upload_asset(
        self,
        api_key: str,
        *,
        authtoken: str | None = None,
        asset_upload: FileInput | None = None,
        asset_title: str | None = None,
        asset_description: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Asset2:
        """Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata
        such as title, description, and tags.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            asset_upload: The asset file to upload.
            asset_title: Display title for the asset.
            asset_description: Description of the asset content.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly uploaded asset.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.upload_asset(
                api_key,
                authtoken=authtoken,
                asset_upload=asset_upload,
                asset_title=asset_title,
                asset_description=asset_description,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AssetsWithRawResponse:
        return self._with_raw_response


class AsyncAssets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAssetsWithRawResponse(client, server, auth)

    async def get_all_assets(
        self,
        api_key: str,
        access_token: str,
        *,
        skip: int | None = 0,
        limit: int | None = 100,
        include_count: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AssetList:
        """Fetches a list of all published assets in the stack including images, videos, and documents. Supports
        pagination, filtering, and field selection.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            include_count: Set to true to include the total count of assets in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of assets in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_assets(
                api_key,
                access_token,
                skip=skip,
                limit=limit,
                include_count=include_count,
                request_options=request_options,
            ),
        )

    async def get_single_asset(
        self,
        asset_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Asset:
        """Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and
        content type.

        Args:
            asset_uid: The unique identifier (UID) of the asset.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested asset object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_single_asset(
                asset_uid, api_key, access_token, request_options=request_options
            ),
        )

    async def upload_asset(
        self,
        api_key: str,
        *,
        authtoken: str | None = None,
        asset_upload: AsyncFileInput | None = None,
        asset_title: str | None = None,
        asset_description: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Asset2:
        """Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata
        such as title, description, and tags.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            asset_upload: The asset file to upload.
            asset_title: Display title for the asset.
            asset_description: Description of the asset content.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly uploaded asset.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_asset(
                api_key,
                authtoken=authtoken,
                asset_upload=asset_upload,
                asset_title=asset_title,
                asset_description=asset_description,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAssetsWithRawResponse:
        return self._with_raw_response


class AssetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_assets(
        self,
        api_key: str,
        access_token: str,
        *,
        skip: int | None = 0,
        limit: int | None = 100,
        include_count: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AssetList, GetAllAssetsErrorBody]:
        """Fetches a list of all published assets in the stack including images, videos, and documents. Supports
        pagination, filtering, and field selection.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            include_count: Set to true to include the total count of assets in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/assets"),
            query_params=[
                param[int | None]("skip", skip),
                param[int | None]("limit", limit),
                param[bool | None]("include_count", include_count),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[AssetList],
            error_mapper=get_all_assets_error_mapper,
            request_options=request_options,
        )

    def get_single_asset(
        self, asset_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Asset, GetSingleAssetErrorBody]:
        """Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and
        content type.

        Args:
            asset_uid: The unique identifier (UID) of the asset.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/assets/{asset_uid}"),
            path_params=[param[str]("asset_uid", asset_uid)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[Asset],
            error_mapper=get_single_asset_error_mapper,
            request_options=request_options,
        )

    def upload_asset(
        self,
        api_key: str,
        *,
        authtoken: str | None = None,
        asset_upload: FileInput | None = None,
        asset_title: str | None = None,
        asset_description: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset2, UploadAssetErrorBody]:
        """Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata
        such as title, description, and tags.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            asset_upload: The asset file to upload.
            asset_title: Display title for the asset.
            asset_description: Description of the asset content.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api("/assets"),
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=multipart_body(
                file_part("asset[upload]", asset_upload) if asset_upload is not None else None,
                param[str | None]("asset[title]", asset_title),
                param[str | None]("asset[description]", asset_description),
            ),
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[Asset2],
            error_mapper=upload_asset_error_mapper,
            request_options=request_options,
        )


class AsyncAssetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_assets(
        self,
        api_key: str,
        access_token: str,
        *,
        skip: int | None = 0,
        limit: int | None = 100,
        include_count: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AssetList, GetAllAssetsErrorBody]:
        """Fetches a list of all published assets in the stack including images, videos, and documents. Supports
        pagination, filtering, and field selection.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            include_count: Set to true to include the total count of assets in the response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/assets"),
            query_params=[
                param[int | None]("skip", skip),
                param[int | None]("limit", limit),
                param[bool | None]("include_count", include_count),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[AssetList],
            error_mapper=get_all_assets_error_mapper,
            request_options=request_options,
        )

    async def get_single_asset(
        self,
        asset_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, GetSingleAssetErrorBody]:
        """Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and
        content type.

        Args:
            asset_uid: The unique identifier (UID) of the asset.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/assets/{asset_uid}"),
            path_params=[param[str]("asset_uid", asset_uid)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[Asset],
            error_mapper=get_single_asset_error_mapper,
            request_options=request_options,
        )

    async def upload_asset(
        self,
        api_key: str,
        *,
        authtoken: str | None = None,
        asset_upload: AsyncFileInput | None = None,
        asset_title: str | None = None,
        asset_description: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset2, UploadAssetErrorBody]:
        """Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata
        such as title, description, and tags.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            asset_upload: The asset file to upload.
            asset_title: Display title for the asset.
            asset_description: Description of the asset content.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api("/assets"),
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=multipart_body(
                file_part("asset[upload]", asset_upload) if asset_upload is not None else None,
                param[str | None]("asset[title]", asset_title),
                param[str | None]("asset[description]", asset_description),
            ),
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[Asset2],
            error_mapper=upload_asset_error_mapper,
            request_options=request_options,
        )
