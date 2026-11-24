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
from ..errors.create_voice_profile_error import CreateVoiceProfileErrorBody, create_voice_profile_error_mapper
from ..errors.delete_voice_profile_error import DeleteVoiceProfileErrorBody, delete_voice_profile_error_mapper
from ..errors.get_all_voice_profiles_error import GetAllVoiceProfilesErrorBody, get_all_voice_profiles_error_mapper
from ..errors.get_voice_profile_error import GetVoiceProfileErrorBody, get_voice_profile_error_mapper
from ..errors.update_voice_profile_error import UpdateVoiceProfileErrorBody, update_voice_profile_error_mapper
from ..models.create_voice_profile_request import CreateVoiceProfileRequest, CreateVoiceProfileRequestDict
from ..models.voice_profile import VoiceProfile
from ..models.voice_profile_list import VoiceProfileList
from ..server.server import Server


class VoiceProfiles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VoiceProfilesWithRawResponse(client, server, auth)

    def create_voice_profile(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VoiceProfile:
        """Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona
        guidelines, and example content for AI generation.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created Voice Profile.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_voice_profile(
                brand_kit_uid, organization_uid, body, request_options=request_options
            ),
        )

    def delete_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Voice Profile deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_voice_profile(
                brand_kit_uid, profile_uid, organization_uid, request_options=request_options
            ),
        )

    def get_all_voice_profiles(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VoiceProfileList:
        """Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style
        and tone used in AI content generation for that Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of Voice Profiles in the Brand Kit.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_voice_profiles(
                brand_kit_uid, organization_uid, request_options=request_options
            ),
        )

    def get_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VoiceProfile:
        """Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and
        example content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Voice Profile.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_voice_profile(
                brand_kit_uid, profile_uid, organization_uid, request_options=request_options
            ),
        )

    def update_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VoiceProfile:
        """Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Voice Profile.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_voice_profile(
                brand_kit_uid, profile_uid, organization_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VoiceProfilesWithRawResponse:
        return self._with_raw_response


class AsyncVoiceProfiles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVoiceProfilesWithRawResponse(client, server, auth)

    async def create_voice_profile(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VoiceProfile:
        """Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona
        guidelines, and example content for AI generation.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created Voice Profile.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_voice_profile(
                brand_kit_uid, organization_uid, body, request_options=request_options
            ),
        )

    async def delete_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Voice Profile deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_voice_profile(
                brand_kit_uid, profile_uid, organization_uid, request_options=request_options
            ),
        )

    async def get_all_voice_profiles(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VoiceProfileList:
        """Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style
        and tone used in AI content generation for that Brand Kit.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of Voice Profiles in the Brand Kit.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_voice_profiles(
                brand_kit_uid, organization_uid, request_options=request_options
            ),
        )

    async def get_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VoiceProfile:
        """Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and
        example content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Voice Profile.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_voice_profile(
                brand_kit_uid, profile_uid, organization_uid, request_options=request_options
            ),
        )

    async def update_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VoiceProfile:
        """Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Voice Profile.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_voice_profile(
                brand_kit_uid, profile_uid, organization_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVoiceProfilesWithRawResponse:
        return self._with_raw_response


class VoiceProfilesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_voice_profile(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VoiceProfile, CreateVoiceProfileErrorBody]:
        """Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona
        guidelines, and example content for AI generation.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateVoiceProfileRequest | CreateVoiceProfileRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[VoiceProfile],
            error_mapper=create_voice_profile_error_mapper,
            request_options=request_options,
        )

    def delete_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVoiceProfileErrorBody]:
        """Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid), param[str]("profile_uid", profile_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_voice_profile_error_mapper,
            request_options=request_options,
        )

    def get_all_voice_profiles(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VoiceProfileList, GetAllVoiceProfilesErrorBody]:
        """Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style
        and tone used in AI content generation for that Brand Kit.

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
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[VoiceProfileList],
            error_mapper=get_all_voice_profiles_error_mapper,
            request_options=request_options,
        )

    def get_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VoiceProfile, GetVoiceProfileErrorBody]:
        """Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and
        example content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid), param[str]("profile_uid", profile_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[VoiceProfile],
            error_mapper=get_voice_profile_error_mapper,
            request_options=request_options,
        )

    def update_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VoiceProfile, UpdateVoiceProfileErrorBody]:
        """Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid), param[str]("profile_uid", profile_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateVoiceProfileRequest | CreateVoiceProfileRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[VoiceProfile],
            error_mapper=update_voice_profile_error_mapper,
            request_options=request_options,
        )


class AsyncVoiceProfilesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_voice_profile(
        self,
        brand_kit_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VoiceProfile, CreateVoiceProfileErrorBody]:
        """Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona
        guidelines, and example content for AI generation.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateVoiceProfileRequest | CreateVoiceProfileRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[VoiceProfile],
            error_mapper=create_voice_profile_error_mapper,
            request_options=request_options,
        )

    async def delete_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVoiceProfileErrorBody]:
        """Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid), param[str]("profile_uid", profile_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_voice_profile_error_mapper,
            request_options=request_options,
        )

    async def get_all_voice_profiles(
        self, brand_kit_uid: str, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VoiceProfileList, GetAllVoiceProfilesErrorBody]:
        """Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style
        and tone used in AI content generation for that Brand Kit.

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
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[VoiceProfileList],
            error_mapper=get_all_voice_profiles_error_mapper,
            request_options=request_options,
        )

    async def get_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VoiceProfile, GetVoiceProfileErrorBody]:
        """Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and
        example content.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid), param[str]("profile_uid", profile_uid)],
            headers=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[VoiceProfile],
            error_mapper=get_voice_profile_error_mapper,
            request_options=request_options,
        )

    async def update_voice_profile(
        self,
        brand_kit_uid: str,
        profile_uid: str,
        organization_uid: str,
        body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VoiceProfile, UpdateVoiceProfileErrorBody]:
        """Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.

        Args:
            brand_kit_uid: The unique identifier of the Brand Kit.
            profile_uid: The unique identifier of the Voice Profile.
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_brand_kit_management_brand_kits_api(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"
            ),
            path_params=[param[str]("brand_kit_uid", brand_kit_uid), param[str]("profile_uid", profile_uid)],
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateVoiceProfileRequest | CreateVoiceProfileRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[VoiceProfile],
            error_mapper=update_voice_profile_error_mapper,
            request_options=request_options,
        )
