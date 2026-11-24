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
from ..errors.get_states_error import GetStatesErrorBody, get_states_error_mapper
from ..models.v1_states_response import V1StatesResponse
from ..server.server import Server


class States:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StatesWithRawResponse(client, server, auth)

    def get_states(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[V1StatesResponse]:
        """Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other
        country values return an empty array.

        Args:
            country: ISO 3166-1 alpha-2 country code. Only "US" returns results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of supported states

        Raises:
            ApiError: Bad Request — missing or invalid country parameter Unauthorized - Authentication error Too Many
                Requests - API key rate limit exceeded Internal Server Error ``error`` is
                ``ValidationErrorCloroDevCountriesApi | AuthenticationErrorCloroDevCountriesApi |
                RateLimitErrorCloroDevStatesApi | InternalErrorCloroDevCountriesApi | RawError``."""
        return unwrap(self._with_raw_response.get_states(country, request_options=request_options))

    @property
    def with_raw_response(self) -> StatesWithRawResponse:
        return self._with_raw_response


class AsyncStates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStatesWithRawResponse(client, server, auth)

    async def get_states(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[V1StatesResponse]:
        """Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other
        country values return an empty array.

        Args:
            country: ISO 3166-1 alpha-2 country code. Only "US" returns results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of supported states

        Raises:
            ApiError: Bad Request — missing or invalid country parameter Unauthorized - Authentication error Too Many
                Requests - API key rate limit exceeded Internal Server Error ``error`` is
                ``ValidationErrorCloroDevCountriesApi | AuthenticationErrorCloroDevCountriesApi |
                RateLimitErrorCloroDevStatesApi | InternalErrorCloroDevCountriesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_states(country, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStatesWithRawResponse:
        return self._with_raw_response


class StatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_states(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[V1StatesResponse], GetStatesErrorBody]:
        """Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other
        country values return an empty array.

        Args:
            country: ISO 3166-1 alpha-2 country code. Only "US" returns results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/states"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[V1StatesResponse]],
            error_mapper=get_states_error_mapper,
            request_options=request_options,
        )


class AsyncStatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_states(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[V1StatesResponse], GetStatesErrorBody]:
        """Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other
        country values return an empty array.

        Args:
            country: ISO 3166-1 alpha-2 country code. Only "US" returns results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/states"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[V1StatesResponse]],
            error_mapper=get_states_error_mapper,
            request_options=request_options,
        )
