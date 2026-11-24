from __future__ import annotations

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
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_api_v1_test_login_error import GetApiV1TestLoginErrorBody, get_api_v1_test_login_error_mapper
from ..models.public_api_test_login_response import PublicApiTestLoginResponse
from ..server.server import Server


class Utility:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UtilityWithRawResponse(client, server, auth)

    def get_api_v1_test_login(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiTestLoginResponse:
        """This endpoint enables you to test the API connection to your organization's Soda Cloud account. Use this
        endpoint to verify that the authentication and authorization details are accurate and the API is ready to accept
        calls.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Utility``

        ## Rate limiting

        10 requests/10 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_test_login(request_options=request_options))

    @property
    def with_raw_response(self) -> UtilityWithRawResponse:
        return self._with_raw_response


class AsyncUtility:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUtilityWithRawResponse(client, server, auth)

    async def get_api_v1_test_login(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiTestLoginResponse:
        """This endpoint enables you to test the API connection to your organization's Soda Cloud account. Use this
        endpoint to verify that the authentication and authorization details are accurate and the API is ready to accept
        calls.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Utility``

        ## Rate limiting

        10 requests/10 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_test_login(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUtilityWithRawResponse:
        return self._with_raw_response


class UtilityWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_test_login(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiTestLoginResponse, GetApiV1TestLoginErrorBody]:
        """This endpoint enables you to test the API connection to your organization's Soda Cloud account. Use this
        endpoint to verify that the authentication and authorization details are accurate and the API is ready to accept
        calls.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Utility``

        ## Rate limiting

        10 requests/10 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/test-login"),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiTestLoginResponse],
            error_mapper=get_api_v1_test_login_error_mapper,
            request_options=request_options,
        )


class AsyncUtilityWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_test_login(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiTestLoginResponse, GetApiV1TestLoginErrorBody]:
        """This endpoint enables you to test the API connection to your organization's Soda Cloud account. Use this
        endpoint to verify that the authentication and authorization details are accurate and the API is ready to accept
        calls.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Utility``

        ## Rate limiting

        10 requests/10 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/test-login"),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiTestLoginResponse],
            error_mapper=get_api_v1_test_login_error_mapper,
            request_options=request_options,
        )
