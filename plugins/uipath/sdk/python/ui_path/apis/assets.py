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
from ..errors.create_asset_error import CreateAssetErrorBody, create_asset_error_mapper
from ..errors.delete_asset_error import DeleteAssetErrorBody, delete_asset_error_mapper
from ..errors.get_asset_error import GetAssetErrorBody, get_asset_error_mapper
from ..errors.list_assets_error import ListAssetsErrorBody, list_assets_error_mapper
from ..errors.update_asset_error import UpdateAssetErrorBody, update_asset_error_mapper
from ..models.asset import Asset, AssetDict
from ..models.o_data_asset_collection import ODataAssetCollection
from ..server.server import Server


class Assets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AssetsWithRawResponse(client, server, auth)

    def create_asset(
        self,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Asset:
        """Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer,
        Bool, or Credential. Credential assets store username and password pairs securely.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Asset created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_asset(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def delete_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be
        undone. Processes that reference this asset will fail until the asset is recreated.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Asset deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_asset(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def get_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Asset:
        """Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type,
        value, and folder scope.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested asset

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_asset(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def list_assets(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataAssetCollection:
        """Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials,
        text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and
        pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of assets

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_assets(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    def update_asset(
        self,
        key: int,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Asset:
        """Updates an existing asset by its unique integer identifier. The full asset object must be provided in the
        request body with the updated values.

        Args:
            key: The unique integer identifier of the entity
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Asset updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials The requested resource was not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_asset(
                key, body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AssetsWithRawResponse:
        return self._with_raw_response


class AsyncAssets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAssetsWithRawResponse(client, server, auth)

    async def create_asset(
        self,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Asset:
        """Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer,
        Bool, or Credential. Credential assets store username and password pairs securely.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Asset created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_asset(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def delete_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be
        undone. Processes that reference this asset will fail until the asset is recreated.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Asset deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_asset(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def get_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Asset:
        """Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type,
        value, and folder scope.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested asset

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_asset(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def list_assets(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataAssetCollection:
        """Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials,
        text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and
        pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of assets

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_assets(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    async def update_asset(
        self,
        key: int,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Asset:
        """Updates an existing asset by its unique integer identifier. The full asset object must be provided in the
        request body with the updated values.

        Args:
            key: The unique integer identifier of the entity
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Asset updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials The requested resource was not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_asset(
                key, body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAssetsWithRawResponse:
        return self._with_raw_response


class AssetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_asset(
        self,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, CreateAssetErrorBody]:
        """Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer,
        Bool, or Credential. Credential assets store username and password pairs securely.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Assets"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[Asset | AssetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Asset],
            error_mapper=create_asset_error_mapper,
            request_options=request_options,
        )

    def delete_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAssetErrorBody]:
        """Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be
        undone. Processes that reference this asset will fail until the asset is recreated.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/odata/Assets({key})"),
            path_params=[param[int]("key", key)],
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_asset_error_mapper,
            request_options=request_options,
        )

    def get_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, GetAssetErrorBody]:
        """Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type,
        value, and folder scope.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Assets({key})"),
            path_params=[param[int]("key", key)],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Asset],
            error_mapper=get_asset_error_mapper,
            request_options=request_options,
        )

    def list_assets(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataAssetCollection, ListAssetsErrorBody]:
        """Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials,
        text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and
        pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Assets"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataAssetCollection],
            error_mapper=list_assets_error_mapper,
            request_options=request_options,
        )

    def update_asset(
        self,
        key: int,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, UpdateAssetErrorBody]:
        """Updates an existing asset by its unique integer identifier. The full asset object must be provided in the
        request body with the updated values.

        Args:
            key: The unique integer identifier of the entity
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/odata/Assets({key})"),
            path_params=[param[int]("key", key)],
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[Asset | AssetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Asset],
            error_mapper=update_asset_error_mapper,
            request_options=request_options,
        )


class AsyncAssetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_asset(
        self,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, CreateAssetErrorBody]:
        """Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer,
        Bool, or Credential. Credential assets store username and password pairs securely.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Assets"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[Asset | AssetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Asset],
            error_mapper=create_asset_error_mapper,
            request_options=request_options,
        )

    async def delete_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAssetErrorBody]:
        """Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be
        undone. Processes that reference this asset will fail until the asset is recreated.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/odata/Assets({key})"),
            path_params=[param[int]("key", key)],
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_asset_error_mapper,
            request_options=request_options,
        )

    async def get_asset(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, GetAssetErrorBody]:
        """Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type,
        value, and folder scope.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Assets({key})"),
            path_params=[param[int]("key", key)],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Asset],
            error_mapper=get_asset_error_mapper,
            request_options=request_options,
        )

    async def list_assets(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataAssetCollection, ListAssetsErrorBody]:
        """Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials,
        text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and
        pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Assets"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataAssetCollection],
            error_mapper=list_assets_error_mapper,
            request_options=request_options,
        )

    async def update_asset(
        self,
        key: int,
        body: Asset | AssetDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Asset, UpdateAssetErrorBody]:
        """Updates an existing asset by its unique integer identifier. The full asset object must be provided in the
        request body with the updated values.

        Args:
            key: The unique integer identifier of the entity
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/odata/Assets({key})"),
            path_params=[param[int]("key", key)],
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[Asset | AssetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Asset],
            error_mapper=update_asset_error_mapper,
            request_options=request_options,
        )
