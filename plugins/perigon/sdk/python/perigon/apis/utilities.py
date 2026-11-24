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
    param,
    unwrap,
)
from ..errors.get_limits_error import GetLimitsErrorBody, get_limits_error_mapper
from ..models.limits_result import LimitsResult
from ..server.server import Server


class Utilities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UtilitiesWithRawResponse(client, server, auth)

    def get_limits(
        self, *, api_keys: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> LimitsResult:
        """Returns the authenticated account's current API usage and the limits that apply to it: the number of requests
        made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.

        Optionally, pass one or more API keys via the ``apiKeys`` parameter to check their status. For each supplied key
        the response reports whether it is ``valid`` (exists and belongs to your account), ``enabled`` (a disabled key
        is 'off'), and whether its ``subscription`` is active.

        This endpoint is authenticated with your API key but is quota-exempt: calling it does **not** count against your
        monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and
        external dashboards that need to check whether an API key and subscription are active without consuming usage.

        Args:
            api_keys: Optional list of API keys whose validity and status should be checked. Each key is reported as
                valid only if it exists and belongs to your account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_limits(api_keys=api_keys, request_options=request_options))

    @property
    def with_raw_response(self) -> UtilitiesWithRawResponse:
        return self._with_raw_response


class AsyncUtilities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUtilitiesWithRawResponse(client, server, auth)

    async def get_limits(
        self, *, api_keys: list[str] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LimitsResult:
        """Returns the authenticated account's current API usage and the limits that apply to it: the number of requests
        made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.

        Optionally, pass one or more API keys via the ``apiKeys`` parameter to check their status. For each supplied key
        the response reports whether it is ``valid`` (exists and belongs to your account), ``enabled`` (a disabled key
        is 'off'), and whether its ``subscription`` is active.

        This endpoint is authenticated with your API key but is quota-exempt: calling it does **not** count against your
        monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and
        external dashboards that need to check whether an API key and subscription are active without consuming usage.

        Args:
            api_keys: Optional list of API keys whose validity and status should be checked. Each key is reported as
                valid only if it exists and belongs to your account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_limits(api_keys=api_keys, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUtilitiesWithRawResponse:
        return self._with_raw_response


class UtilitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_limits(
        self, *, api_keys: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LimitsResult, GetLimitsErrorBody]:
        """Returns the authenticated account's current API usage and the limits that apply to it: the number of requests
        made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.

        Optionally, pass one or more API keys via the ``apiKeys`` parameter to check their status. For each supplied key
        the response reports whether it is ``valid`` (exists and belongs to your account), ``enabled`` (a disabled key
        is 'off'), and whether its ``subscription`` is active.

        This endpoint is authenticated with your API key but is quota-exempt: calling it does **not** count against your
        monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and
        external dashboards that need to check whether an API key and subscription are active without consuming usage.

        Args:
            api_keys: Optional list of API keys whose validity and status should be checked. Each key is reported as
                valid only if it exists and belongs to your account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/limits"),
            query_params=[param[list[str] | None]("apiKeys", api_keys)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[LimitsResult],
            error_mapper=get_limits_error_mapper,
            request_options=request_options,
        )


class AsyncUtilitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_limits(
        self, *, api_keys: list[str] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LimitsResult, GetLimitsErrorBody]:
        """Returns the authenticated account's current API usage and the limits that apply to it: the number of requests
        made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.

        Optionally, pass one or more API keys via the ``apiKeys`` parameter to check their status. For each supplied key
        the response reports whether it is ``valid`` (exists and belongs to your account), ``enabled`` (a disabled key
        is 'off'), and whether its ``subscription`` is active.

        This endpoint is authenticated with your API key but is quota-exempt: calling it does **not** count against your
        monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and
        external dashboards that need to check whether an API key and subscription are active without consuming usage.

        Args:
            api_keys: Optional list of API keys whose validity and status should be checked. Each key is reported as
                valid only if it exists and belongs to your account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/limits"),
            query_params=[param[list[str] | None]("apiKeys", api_keys)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[LimitsResult],
            error_mapper=get_limits_error_mapper,
            request_options=request_options,
        )
