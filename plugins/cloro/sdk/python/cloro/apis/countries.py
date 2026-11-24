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
from ..errors.get_countries_error import GetCountriesErrorBody, get_countries_error_mapper
from ..models.enums.model import ModelOrStr
from ..server.server import Server


class Countries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CountriesWithRawResponse(client, server, auth)

    def get_countries(
        self, *, model: ModelOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[str]:
        """Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries
        available for specific AI providers.

        Args:
            model: Filter countries available for a specific model. Omit to return all supported countries.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of supported country codes

        Raises:
            ApiError: Bad Request - Invalid model parameter Unauthorized - Authentication error Not Found - Route not
                found Too Many Requests - API key rate limit exceeded Internal Server Error ``error`` is
                ``ValidationErrorCloroDevCountriesApi | AuthenticationErrorCloroDevCountriesApi |
                NotFoundErrorCloroDevCountriesApi | RateLimitErrorCloroDevCountriesApi |
                InternalErrorCloroDevCountriesApi | RawError``."""
        return unwrap(self._with_raw_response.get_countries(model=model, request_options=request_options))

    @property
    def with_raw_response(self) -> CountriesWithRawResponse:
        return self._with_raw_response


class AsyncCountries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCountriesWithRawResponse(client, server, auth)

    async def get_countries(
        self, *, model: ModelOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[str]:
        """Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries
        available for specific AI providers.

        Args:
            model: Filter countries available for a specific model. Omit to return all supported countries.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of supported country codes

        Raises:
            ApiError: Bad Request - Invalid model parameter Unauthorized - Authentication error Not Found - Route not
                found Too Many Requests - API key rate limit exceeded Internal Server Error ``error`` is
                ``ValidationErrorCloroDevCountriesApi | AuthenticationErrorCloroDevCountriesApi |
                NotFoundErrorCloroDevCountriesApi | RateLimitErrorCloroDevCountriesApi |
                InternalErrorCloroDevCountriesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_countries(model=model, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCountriesWithRawResponse:
        return self._with_raw_response


class CountriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_countries(
        self, *, model: ModelOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetCountriesErrorBody]:
        """Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries
        available for specific AI providers.

        Args:
            model: Filter countries available for a specific model. Omit to return all supported countries.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countries"),
            query_params=[param[ModelOrStr | None]("model", model)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[str]],
            error_mapper=get_countries_error_mapper,
            request_options=request_options,
        )


class AsyncCountriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_countries(
        self, *, model: ModelOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetCountriesErrorBody]:
        """Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries
        available for specific AI providers.

        Args:
            model: Filter countries available for a specific model. Omit to return all supported countries.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countries"),
            query_params=[param[ModelOrStr | None]("model", model)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=get_countries_error_mapper,
            request_options=request_options,
        )
