from __future__ import annotations

from uuid import UUID, uuid4

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_brand_kit_error import CreateBrandKitErrorBody, create_brand_kit_error_mapper
from ..errors.delete_brand_kit_error import DeleteBrandKitErrorBody, delete_brand_kit_error_mapper
from ..errors.get_all_brand_kits_error import GetAllBrandKitsErrorBody, get_all_brand_kits_error_mapper
from ..errors.get_brand_kit_error import GetBrandKitErrorBody, get_brand_kit_error_mapper
from ..errors.update_brand_kit_error import UpdateBrandKitErrorBody, update_brand_kit_error_mapper
from ..models.brand_kit import BrandKit
from ..models.brand_kit_list import BrandKitList
from ..models.create_brand_kit_request import CreateBrandKitRequest, CreateBrandKitRequestDict
from ..server.server import Server


class BrandKits:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BrandKitsWithRawResponse(client, server, auth)

    def create_brand_kit(
        self,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrandKit:
        """Creates a new Brand Kit in the organization with brand identity configuration including name, description,
        guidelines, and associated metadata.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created Brand Kit.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_brand_kit(organization_uid, body, request_options=request_options))

    def delete_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge
        vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Brand Kit deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_brand_kit(brand_kit_uid, organization_uid, request_options=request_options)
        )

    def get_all_brand_kits(
        self,
        organization_uid: str,
        *,
        skip: int | None = 0,
        limit: int | None = 25,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrandKitList:
        """Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit
        contains brand identity information used for AI content generation.

        Args:
            organization_uid: The unique identifier of the organization.
            skip: Number of records to skip for pagination.
            limit: Maximum number of records to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of Brand Kits in the organization.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_brand_kits(
                organization_uid, skip=skip, limit=limit, request_options=request_options
            ),
        )

    def get_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BrandKit:
        """Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice
        profiles, and associated knowledge vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Brand Kit.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_brand_kit(brand_kit_uid, organization_uid, request_options=request_options)
        )

    def update_brand_kit(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BrandKit:
        """Updates the configuration and brand identity information for an existing Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Brand Kit.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_brand_kit(
                brand_kit_uid, organization_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BrandKitsWithRawResponse:
        return self._with_raw_response


class AsyncBrandKits:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBrandKitsWithRawResponse(client, server, auth)

    async def create_brand_kit(
        self,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrandKit:
        """Creates a new Brand Kit in the organization with brand identity configuration including name, description,
        guidelines, and associated metadata.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created Brand Kit.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_brand_kit(organization_uid, body, request_options=request_options)
        )

    async def delete_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge
        vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Brand Kit deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_brand_kit(
                brand_kit_uid, organization_uid, request_options=request_options
            ),
        )

    async def get_all_brand_kits(
        self,
        organization_uid: str,
        *,
        skip: int | None = 0,
        limit: int | None = 25,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrandKitList:
        """Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit
        contains brand identity information used for AI content generation.

        Args:
            organization_uid: The unique identifier of the organization.
            skip: Number of records to skip for pagination.
            limit: Maximum number of records to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of Brand Kits in the organization.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_brand_kits(
                organization_uid, skip=skip, limit=limit, request_options=request_options
            ),
        )

    async def get_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BrandKit:
        """Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice
        profiles, and associated knowledge vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Brand Kit.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_brand_kit(
                brand_kit_uid, organization_uid, request_options=request_options
            ),
        )

    async def update_brand_kit(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BrandKit:
        """Updates the configuration and brand identity information for an existing Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Brand Kit.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_brand_kit(
                brand_kit_uid, organization_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBrandKitsWithRawResponse:
        return self._with_raw_response


class BrandKitsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_brand_kit(
        self,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrandKit, CreateBrandKitErrorBody]:
        """Creates a new Brand Kit in the organization with brand identity configuration including name, description,
        guidelines, and associated metadata.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api("/v1/brand-kits"),
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBrandKitRequest | CreateBrandKitRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[BrandKit],
            error_mapper=create_brand_kit_error_mapper,
            request_options=request_options,
        )

    def delete_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBrandKitErrorBody]:
        """Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge
        vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_brand_kit_error_mapper,
            request_options=request_options,
        )

    def get_all_brand_kits(
        self,
        organization_uid: str,
        *,
        skip: int | None = 0,
        limit: int | None = 25,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrandKitList, GetAllBrandKitsErrorBody]:
        """Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit
        contains brand identity information used for AI content generation.

        Args:
            organization_uid: The unique identifier of the organization.
            skip: Number of records to skip for pagination.
            limit: Maximum number of records to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api("/v1/brand-kits"),
            query_params=[param[int | None]("skip", skip), param[int | None]("limit", limit)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[BrandKitList],
            error_mapper=get_all_brand_kits_error_mapper,
            request_options=request_options,
        )

    def get_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BrandKit, GetBrandKitErrorBody]:
        """Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice
        profiles, and associated knowledge vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[BrandKit],
            error_mapper=get_brand_kit_error_mapper,
            request_options=request_options,
        )

    def update_brand_kit(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BrandKit, UpdateBrandKitErrorBody]:
        """Updates the configuration and brand identity information for an existing Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBrandKitRequest | CreateBrandKitRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[BrandKit],
            error_mapper=update_brand_kit_error_mapper,
            request_options=request_options,
        )


class AsyncBrandKitsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_brand_kit(
        self,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrandKit, CreateBrandKitErrorBody]:
        """Creates a new Brand Kit in the organization with brand identity configuration including name, description,
        guidelines, and associated metadata.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api("/v1/brand-kits"),
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBrandKitRequest | CreateBrandKitRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[BrandKit],
            error_mapper=create_brand_kit_error_mapper,
            request_options=request_options,
        )

    async def delete_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBrandKitErrorBody]:
        """Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge
        vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_brand_kit_error_mapper,
            request_options=request_options,
        )

    async def get_all_brand_kits(
        self,
        organization_uid: str,
        *,
        skip: int | None = 0,
        limit: int | None = 25,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrandKitList, GetAllBrandKitsErrorBody]:
        """Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit
        contains brand identity information used for AI content generation.

        Args:
            organization_uid: The unique identifier of the organization.
            skip: Number of records to skip for pagination.
            limit: Maximum number of records to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api("/v1/brand-kits"),
            query_params=[param[int | None]("skip", skip), param[int | None]("limit", limit)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[BrandKitList],
            error_mapper=get_all_brand_kits_error_mapper,
            request_options=request_options,
        )

    async def get_brand_kit(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BrandKit, GetBrandKitErrorBody]:
        """Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice
        profiles, and associated knowledge vault content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[BrandKit],
            error_mapper=get_brand_kit_error_mapper,
            request_options=request_options,
        )

    async def update_brand_kit(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateBrandKitRequest | CreateBrandKitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BrandKit, UpdateBrandKitErrorBody]:
        """Updates the configuration and brand identity information for an existing Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBrandKitRequest | CreateBrandKitRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[BrandKit],
            error_mapper=update_brand_kit_error_mapper,
            request_options=request_options,
        )
