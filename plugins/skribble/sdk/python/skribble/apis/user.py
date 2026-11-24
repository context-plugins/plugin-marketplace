from __future__ import annotations

from pydantic import EmailStr

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
from ..errors.get_user_signature_qualities_error import (
    GetUserSignatureQualitiesErrorBody,
    get_user_signature_qualities_error_mapper,
)
from ..models.user_signature_qualities_response import UserSignatureQualitiesResponse
from ..server.server import Server


class User:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserWithRawResponse(client, server, auth)

    def get_user_signature_qualities(
        self, *, username: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> UserSignatureQualitiesResponse:
        """Returns the effective signature ``quality`` that will be applied when the given ``username`` signs a
        document.

        The resulting quality is determined by the combination of the requested ``quality`` and ``legislation``, where
        ``any`` matches any legislation.

        For example, if you create a ``SignatureRequest`` with ``quality=AES_MINIMAL`` and ``legislation=ZERTES``, this
        endpoint will indicate the final quality the user will sign with — typically ``QES``, as ``AES_MINIMAL``
        upgrades to ``QES`` when the user's settings allow it.

        Args:
            username: Username to find
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_user_signature_qualities(username=username, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UserWithRawResponse:
        return self._with_raw_response


class AsyncUser:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserWithRawResponse(client, server, auth)

    async def get_user_signature_qualities(
        self, *, username: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UserSignatureQualitiesResponse:
        """Returns the effective signature ``quality`` that will be applied when the given ``username`` signs a
        document.

        The resulting quality is determined by the combination of the requested ``quality`` and ``legislation``, where
        ``any`` matches any legislation.

        For example, if you create a ``SignatureRequest`` with ``quality=AES_MINIMAL`` and ``legislation=ZERTES``, this
        endpoint will indicate the final quality the user will sign with — typically ``QES``, as ``AES_MINIMAL``
        upgrades to ``QES`` when the user's settings allow it.

        Args:
            username: Username to find
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_signature_qualities(
                username=username, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUserWithRawResponse:
        return self._with_raw_response


class UserWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_user_signature_qualities(
        self, *, username: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserSignatureQualitiesResponse, GetUserSignatureQualitiesErrorBody]:
        """Returns the effective signature ``quality`` that will be applied when the given ``username`` signs a
        document.

        The resulting quality is determined by the combination of the requested ``quality`` and ``legislation``, where
        ``any`` matches any legislation.

        For example, if you create a ``SignatureRequest`` with ``quality=AES_MINIMAL`` and ``legislation=ZERTES``, this
        endpoint will indicate the final quality the user will sign with — typically ``QES``, as ``AES_MINIMAL``
        upgrades to ``QES`` when the user's settings allow it.

        Args:
            username: Username to find
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_user_api("/user/signature-qualities"),
            query_params=[param[EmailStr | None]("username", username)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[UserSignatureQualitiesResponse],
            error_mapper=get_user_signature_qualities_error_mapper,
            request_options=request_options,
        )


class AsyncUserWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_user_signature_qualities(
        self, *, username: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserSignatureQualitiesResponse, GetUserSignatureQualitiesErrorBody]:
        """Returns the effective signature ``quality`` that will be applied when the given ``username`` signs a
        document.

        The resulting quality is determined by the combination of the requested ``quality`` and ``legislation``, where
        ``any`` matches any legislation.

        For example, if you create a ``SignatureRequest`` with ``quality=AES_MINIMAL`` and ``legislation=ZERTES``, this
        endpoint will indicate the final quality the user will sign with — typically ``QES``, as ``AES_MINIMAL``
        upgrades to ``QES`` when the user's settings allow it.

        Args:
            username: Username to find
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_user_api("/user/signature-qualities"),
            query_params=[param[EmailStr | None]("username", username)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[UserSignatureQualitiesResponse],
            error_mapper=get_user_signature_qualities_error_mapper,
            request_options=request_options,
        )
