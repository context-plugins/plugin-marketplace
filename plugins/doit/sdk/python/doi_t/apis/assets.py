from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.create_asset_error import CreateAssetErrorBody, create_asset_error_mapper
from ..errors.get_asset_error import GetAssetErrorBody, get_asset_error_mapper
from ..errors.id_of_asset_error import IdOfAssetErrorBody, id_of_asset_error_mapper
from ..errors.id_of_assets_error import IdOfAssetsErrorBody, id_of_assets_error_mapper
from ..models.asset_item_detailed import AssetItemDetailed
from ..models.asset_response import AssetResponse
from ..models.billing_v1_assets_request import BillingV1AssetsRequest, BillingV1AssetsRequestDict
from ..models.billing_v1_assets_response import BillingV1AssetsResponse
from ..models.billing_v1_assets_response1 import BillingV1AssetsResponse1
from ..server.server import Server


class Assets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AssetsWithRawResponse(client, server, auth)

    def create_asset(
        self,
        *,
        type_: str | None = "amazon-web-services",
        mode: str | None = "New",
        account_name: str | None = "Account name",
        root_email: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AssetResponse:
        """Creates a new asset.

        Args:
            type_: Asset type. For example, amazon-web-services
            mode: Asset mode.
            account_name: The desired name of the account.
            root_email: The root account email.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Unexpected server
                error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.create_asset(
                type_=type_,
                mode=mode,
                account_name=account_name,
                root_email=root_email,
                request_options=request_options,
            ),
        )

    def get_asset(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AssetItemDetailed:
        """Returns the full details of an asset specified by the asset id.

        Args:
            id_: The unique id of an asset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Asset details returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_asset(id_, request_options=request_options))

    def id_of_asset(
        self,
        id_: str,
        *,
        body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillingV1AssetsResponse1:
        """Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

        Args:
            id_: The unique id of an asset.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Asset updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.id_of_asset(id_, body=body, request_options=request_options))

    def id_of_assets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillingV1AssetsResponse:
        """Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace
        subscriptions, etc. Assets are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "type:g-suite". Multiple filters can be connected using a pipe |. Note that using different keys in the
                same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of available assets returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.id_of_assets(
                max_results=max_results, page_token=page_token, filter_=filter_, request_options=request_options
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
        *,
        type_: str | None = "amazon-web-services",
        mode: str | None = "New",
        account_name: str | None = "Account name",
        root_email: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AssetResponse:
        """Creates a new asset.

        Args:
            type_: Asset type. For example, amazon-web-services
            mode: Asset mode.
            account_name: The desired name of the account.
            root_email: The root account email.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Unexpected server
                error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.create_asset(
                type_=type_,
                mode=mode,
                account_name=account_name,
                root_email=root_email,
                request_options=request_options,
            ),
        )

    async def get_asset(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AssetItemDetailed:
        """Returns the full details of an asset specified by the asset id.

        Args:
            id_: The unique id of an asset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Asset details returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_asset(id_, request_options=request_options))

    async def id_of_asset(
        self,
        id_: str,
        *,
        body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillingV1AssetsResponse1:
        """Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

        Args:
            id_: The unique id of an asset.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Asset updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.id_of_asset(id_, body=body, request_options=request_options))

    async def id_of_assets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillingV1AssetsResponse:
        """Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace
        subscriptions, etc. Assets are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "type:g-suite". Multiple filters can be connected using a pipe |. Note that using different keys in the
                same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of available assets returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.id_of_assets(
                max_results=max_results, page_token=page_token, filter_=filter_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAssetsWithRawResponse:
        return self._with_raw_response


class AssetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_asset(
        self,
        *,
        type_: str | None = "amazon-web-services",
        mode: str | None = "New",
        account_name: str | None = "Account name",
        root_email: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AssetResponse, CreateAssetErrorBody]:
        """Creates a new asset.

        Args:
            type_: Asset type. For example, amazon-web-services
            mode: Asset mode.
            account_name: The desired name of the account.
            root_email: The root account email.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/v1/createAsset"),
            query_params=[
                param[str | None]("type", type_),
                param[str | None]("mode", mode),
                param[str | None]("accountName", account_name),
                param[str | None]("rootEmail", root_email),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AssetResponse],
            error_mapper=create_asset_error_mapper,
            request_options=request_options,
        )

    def get_asset(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AssetItemDetailed, GetAssetErrorBody]:
        """Returns the full details of an asset specified by the asset id.

        Args:
            id_: The unique id of an asset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/assets/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AssetItemDetailed],
            error_mapper=get_asset_error_mapper,
            request_options=request_options,
        )

    def id_of_asset(
        self,
        id_: str,
        *,
        body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingV1AssetsResponse1, IdOfAssetErrorBody]:
        """Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

        Args:
            id_: The unique id of an asset.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/billing/v1/assets/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BillingV1AssetsRequest | BillingV1AssetsRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BillingV1AssetsResponse1],
            error_mapper=id_of_asset_error_mapper,
            request_options=request_options,
        )

    def id_of_assets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingV1AssetsResponse, IdOfAssetsErrorBody]:
        """Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace
        subscriptions, etc. Assets are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "type:g-suite". Multiple filters can be connected using a pipe |. Note that using different keys in the
                same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/assets"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BillingV1AssetsResponse],
            error_mapper=id_of_assets_error_mapper,
            request_options=request_options,
        )


class AsyncAssetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_asset(
        self,
        *,
        type_: str | None = "amazon-web-services",
        mode: str | None = "New",
        account_name: str | None = "Account name",
        root_email: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AssetResponse, CreateAssetErrorBody]:
        """Creates a new asset.

        Args:
            type_: Asset type. For example, amazon-web-services
            mode: Asset mode.
            account_name: The desired name of the account.
            root_email: The root account email.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/v1/createAsset"),
            query_params=[
                param[str | None]("type", type_),
                param[str | None]("mode", mode),
                param[str | None]("accountName", account_name),
                param[str | None]("rootEmail", root_email),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AssetResponse],
            error_mapper=create_asset_error_mapper,
            request_options=request_options,
        )

    async def get_asset(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AssetItemDetailed, GetAssetErrorBody]:
        """Returns the full details of an asset specified by the asset id.

        Args:
            id_: The unique id of an asset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/assets/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AssetItemDetailed],
            error_mapper=get_asset_error_mapper,
            request_options=request_options,
        )

    async def id_of_asset(
        self,
        id_: str,
        *,
        body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingV1AssetsResponse1, IdOfAssetErrorBody]:
        """Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

        Args:
            id_: The unique id of an asset.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/billing/v1/assets/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BillingV1AssetsRequest | BillingV1AssetsRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BillingV1AssetsResponse1],
            error_mapper=id_of_asset_error_mapper,
            request_options=request_options,
        )

    async def id_of_assets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingV1AssetsResponse, IdOfAssetsErrorBody]:
        """Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace
        subscriptions, etc. Assets are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is ``key:[<value>]``. e.g:
                "type:g-suite". Multiple filters can be connected using a pipe |. Note that using different keys in the
                same filter results in “AND,” while using the same key multiple times in the same filter results in
                “OR”.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/assets"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BillingV1AssetsResponse],
            error_mapper=id_of_assets_error_mapper,
            request_options=request_options,
        )
