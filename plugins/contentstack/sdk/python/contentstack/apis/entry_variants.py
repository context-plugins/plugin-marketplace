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
from ..errors.get_all_entry_variants_error import GetAllEntryVariantsErrorBody, get_all_entry_variants_error_mapper
from ..errors.get_single_entry_variant_error import (
    GetSingleEntryVariantErrorBody,
    get_single_entry_variant_error_mapper,
)
from ..models.entry_variant import EntryVariant
from ..models.entry_variant_list import EntryVariantList
from ..server.server import Server


class EntryVariants:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EntryVariantsWithRawResponse(client, server, auth)

    def get_all_entry_variants(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntryVariantList:
        """Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field
        values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of variants for the specified entry.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_entry_variants(
                content_type_uid, entry_uid, api_key, access_token, request_options=request_options
            ),
        )

    def get_single_entry_variant(
        self,
        content_type_uid: str,
        entry_uid: str,
        variant_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntryVariant:
        """Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values
        for that variant.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            variant_uid: The unique identifier (UID) of the entry variant.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested entry variant object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_single_entry_variant(
                content_type_uid, entry_uid, variant_uid, api_key, access_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EntryVariantsWithRawResponse:
        return self._with_raw_response


class AsyncEntryVariants:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEntryVariantsWithRawResponse(client, server, auth)

    async def get_all_entry_variants(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntryVariantList:
        """Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field
        values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of variants for the specified entry.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_entry_variants(
                content_type_uid, entry_uid, api_key, access_token, request_options=request_options
            ),
        )

    async def get_single_entry_variant(
        self,
        content_type_uid: str,
        entry_uid: str,
        variant_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntryVariant:
        """Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values
        for that variant.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            variant_uid: The unique identifier (UID) of the entry variant.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested entry variant object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_single_entry_variant(
                content_type_uid, entry_uid, variant_uid, api_key, access_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEntryVariantsWithRawResponse:
        return self._with_raw_response


class EntryVariantsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_entry_variants(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntryVariantList, GetAllEntryVariantsErrorBody]:
        """Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field
        values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/variants"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[EntryVariantList],
            error_mapper=get_all_entry_variants_error_mapper,
            request_options=request_options,
        )

    def get_single_entry_variant(
        self,
        content_type_uid: str,
        entry_uid: str,
        variant_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntryVariant, GetSingleEntryVariantErrorBody]:
        """Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values
        for that variant.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            variant_uid: The unique identifier (UID) of the entry variant.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}"
            ),
            path_params=[
                param[str]("content_type_uid", content_type_uid),
                param[str]("entry_uid", entry_uid),
                param[str]("variant_uid", variant_uid),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[EntryVariant],
            error_mapper=get_single_entry_variant_error_mapper,
            request_options=request_options,
        )


class AsyncEntryVariantsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_entry_variants(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntryVariantList, GetAllEntryVariantsErrorBody]:
        """Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field
        values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/variants"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[EntryVariantList],
            error_mapper=get_all_entry_variants_error_mapper,
            request_options=request_options,
        )

    async def get_single_entry_variant(
        self,
        content_type_uid: str,
        entry_uid: str,
        variant_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntryVariant, GetSingleEntryVariantErrorBody]:
        """Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values
        for that variant.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            variant_uid: The unique identifier (UID) of the entry variant.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}"
            ),
            path_params=[
                param[str]("content_type_uid", content_type_uid),
                param[str]("entry_uid", entry_uid),
                param[str]("variant_uid", variant_uid),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[EntryVariant],
            error_mapper=get_single_entry_variant_error_mapper,
            request_options=request_options,
        )
