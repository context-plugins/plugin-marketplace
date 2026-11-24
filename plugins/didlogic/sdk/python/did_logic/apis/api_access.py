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
    unwrap,
)
from ..errors.capabilities_show_error import CapabilitiesShowErrorBody, capabilities_show_error_mapper
from ..models.api_v1_capabilities_response import ApiV1CapabilitiesResponse
from ..server.server import Server


class ApiAccess:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApiAccessWithRawResponse(client, server, auth)

    def capabilities_show(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CapabilitiesResponse:
        """List the API operations your key may call, and the account it belongs to.

        Your account decides which parts of the API are open to it: API v1, buying and browsing numbers, SIP accounts,
        Click2Call, call recordings, the ASR report, sending SMS, risk checks and HLR lookups. This operation answers
        for any valid key, whatever is enabled, so it is also the cheapest way to check that a key works.

        Each entry is an HTTP method and a path exactly as this reference spells it, path parameters included
        (``/api/v1/sipaccounts/{id}``). An operation missing from the list is refused for your account. Checks that
        depend on the request itself, such as the number you ask for or a rate limit, are not reflected here.

        This operation does not list itself. An invalid key gets ``401 Unauthorized``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the operations open to this key and the account it belongs to

        Raises:
            ApiError: The key is not valid ``error`` is ``ApiV1Capabilities401Error1 | RawError``."""
        return unwrap(self._with_raw_response.capabilities_show(request_options=request_options))

    @property
    def with_raw_response(self) -> ApiAccessWithRawResponse:
        return self._with_raw_response


class AsyncApiAccess:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApiAccessWithRawResponse(client, server, auth)

    async def capabilities_show(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CapabilitiesResponse:
        """List the API operations your key may call, and the account it belongs to.

        Your account decides which parts of the API are open to it: API v1, buying and browsing numbers, SIP accounts,
        Click2Call, call recordings, the ASR report, sending SMS, risk checks and HLR lookups. This operation answers
        for any valid key, whatever is enabled, so it is also the cheapest way to check that a key works.

        Each entry is an HTTP method and a path exactly as this reference spells it, path parameters included
        (``/api/v1/sipaccounts/{id}``). An operation missing from the list is refused for your account. Checks that
        depend on the request itself, such as the number you ask for or a rate limit, are not reflected here.

        This operation does not list itself. An invalid key gets ``401 Unauthorized``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the operations open to this key and the account it belongs to

        Raises:
            ApiError: The key is not valid ``error`` is ``ApiV1Capabilities401Error1 | RawError``."""
        return unwrap(await self._with_raw_response.capabilities_show(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncApiAccessWithRawResponse:
        return self._with_raw_response


class ApiAccessWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def capabilities_show(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CapabilitiesResponse, CapabilitiesShowErrorBody]:
        """List the API operations your key may call, and the account it belongs to.

        Your account decides which parts of the API are open to it: API v1, buying and browsing numbers, SIP accounts,
        Click2Call, call recordings, the ASR report, sending SMS, risk checks and HLR lookups. This operation answers
        for any valid key, whatever is enabled, so it is also the cheapest way to check that a key works.

        Each entry is an HTTP method and a path exactly as this reference spells it, path parameters included
        (``/api/v1/sipaccounts/{id}``). An operation missing from the list is refused for your account. Checks that
        depend on the request itself, such as the number you ask for or a rate limit, are not reflected here.

        This operation does not list itself. An invalid key gets ``401 Unauthorized``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/capabilities"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CapabilitiesResponse],
            error_mapper=capabilities_show_error_mapper,
            request_options=request_options,
        )


class AsyncApiAccessWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def capabilities_show(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CapabilitiesResponse, CapabilitiesShowErrorBody]:
        """List the API operations your key may call, and the account it belongs to.

        Your account decides which parts of the API are open to it: API v1, buying and browsing numbers, SIP accounts,
        Click2Call, call recordings, the ASR report, sending SMS, risk checks and HLR lookups. This operation answers
        for any valid key, whatever is enabled, so it is also the cheapest way to check that a key works.

        Each entry is an HTTP method and a path exactly as this reference spells it, path parameters included
        (``/api/v1/sipaccounts/{id}``). An operation missing from the list is refused for your account. Checks that
        depend on the request itself, such as the number you ask for or a rate limit, are not reflected here.

        This operation does not list itself. An invalid key gets ``401 Unauthorized``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/capabilities"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CapabilitiesResponse],
            error_mapper=capabilities_show_error_mapper,
            request_options=request_options,
        )
