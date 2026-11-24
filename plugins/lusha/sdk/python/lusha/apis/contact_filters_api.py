from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_contact_countries_error import GetContactCountriesErrorBody, get_contact_countries_error_mapper
from ..errors.get_contact_data_points_error import GetContactDataPointsErrorBody, get_contact_data_points_error_mapper
from ..errors.get_contact_departments_error import GetContactDepartmentsErrorBody, get_contact_departments_error_mapper
from ..errors.get_contact_seniority_error import GetContactSeniorityErrorBody, get_contact_seniority_error_mapper
from ..errors.search_contact_locations_error import (
    SearchContactLocationsErrorBody,
    search_contact_locations_error_mapper,
)
from ..models.country_filter import CountryFilter
from ..models.location_filter import LocationFilter
from ..models.location_search_request import LocationSearchRequest, LocationSearchRequestDict
from ..server.server import Server


class ContactFiltersApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactFiltersApiWithRawResponse(client, server, auth)

    def get_contact_countries(self, *, request_options: RequestOptionsOrDict | None = None) -> list[CountryFilter]:
        """Get list of all available countries for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of countries with codes

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_countries(request_options=request_options))

    def get_contact_data_points(self, *, request_options: RequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available data points for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of data points

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_data_points(request_options=request_options))

    def get_contact_departments(self, *, request_options: RequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available departments for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of departments

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_departments(request_options=request_options))

    def get_contact_seniority(self, *, request_options: RequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available seniority levels for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of seniority levels

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_seniority(request_options=request_options))

    def search_contact_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[LocationFilter]:
        """Search for locations by text for contact filtering

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching locations

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_contact_locations(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ContactFiltersApiWithRawResponse:
        return self._with_raw_response


class AsyncContactFiltersApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactFiltersApiWithRawResponse(client, server, auth)

    async def get_contact_countries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[CountryFilter]:
        """Get list of all available countries for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of countries with codes

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_countries(request_options=request_options))

    async def get_contact_data_points(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available data points for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of data points

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_data_points(request_options=request_options))

    async def get_contact_departments(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available departments for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of departments

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_departments(request_options=request_options))

    async def get_contact_seniority(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available seniority levels for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of seniority levels

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_seniority(request_options=request_options))

    async def search_contact_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[LocationFilter]:
        """Search for locations by text for contact filtering

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching locations

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_contact_locations(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncContactFiltersApiWithRawResponse:
        return self._with_raw_response


class ContactFiltersApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_contact_countries(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CountryFilter], GetContactCountriesErrorBody]:
        """Get list of all available countries for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/all_countries"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[CountryFilter]],
            error_mapper=get_contact_countries_error_mapper,
            request_options=request_options,
        )

    def get_contact_data_points(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetContactDataPointsErrorBody]:
        """Get list of available data points for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/existing_data_points"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=get_contact_data_points_error_mapper,
            request_options=request_options,
        )

    def get_contact_departments(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetContactDepartmentsErrorBody]:
        """Get list of available departments for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/departments"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=get_contact_departments_error_mapper,
            request_options=request_options,
        )

    def get_contact_seniority(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetContactSeniorityErrorBody]:
        """Get list of available seniority levels for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/seniority"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=get_contact_seniority_error_mapper,
            request_options=request_options,
        )

    def search_contact_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[LocationFilter], SearchContactLocationsErrorBody]:
        """Search for locations by text for contact filtering

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/contacts/locations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LocationSearchRequest | LocationSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[LocationFilter]],
            error_mapper=search_contact_locations_error_mapper,
            request_options=request_options,
        )


class AsyncContactFiltersApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_contact_countries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[CountryFilter], GetContactCountriesErrorBody]:
        """Get list of all available countries for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/all_countries"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[CountryFilter]],
            error_mapper=get_contact_countries_error_mapper,
            request_options=request_options,
        )

    async def get_contact_data_points(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetContactDataPointsErrorBody]:
        """Get list of available data points for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/existing_data_points"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=get_contact_data_points_error_mapper,
            request_options=request_options,
        )

    async def get_contact_departments(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetContactDepartmentsErrorBody]:
        """Get list of available departments for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/departments"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=get_contact_departments_error_mapper,
            request_options=request_options,
        )

    async def get_contact_seniority(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetContactSeniorityErrorBody]:
        """Get list of available seniority levels for contact filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/contacts/seniority"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=get_contact_seniority_error_mapper,
            request_options=request_options,
        )

    async def search_contact_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[LocationFilter], SearchContactLocationsErrorBody]:
        """Search for locations by text for contact filtering

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/contacts/locations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LocationSearchRequest | LocationSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[LocationFilter]],
            error_mapper=search_contact_locations_error_mapper,
            request_options=request_options,
        )
