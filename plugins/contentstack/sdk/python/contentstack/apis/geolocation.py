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
    param,
    unwrap,
)
from ..errors.get_geo_cities_error import GetGeoCitiesErrorBody, get_geo_cities_error_mapper
from ..errors.get_geo_countries_error import GetGeoCountriesErrorBody, get_geo_countries_error_mapper
from ..errors.get_geo_regions_error import GetGeoRegionsErrorBody, get_geo_regions_error_mapper
from ..models.geo_list import GeoList
from ..server.server import Server


class Geolocation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GeolocationWithRawResponse(client, server, auth)

    def get_geo_cities(self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> GeoList:
        """Retrieves the list of cities available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of cities.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_geo_cities(x_project_uid, request_options=request_options))

    def get_geo_countries(self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> GeoList:
        """Retrieves the list of countries available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of countries.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_geo_countries(x_project_uid, request_options=request_options))

    def get_geo_regions(self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> GeoList:
        """Retrieves the list of geographic regions available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of geographic regions.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_geo_regions(x_project_uid, request_options=request_options))

    @property
    def with_raw_response(self) -> GeolocationWithRawResponse:
        return self._with_raw_response


class AsyncGeolocation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGeolocationWithRawResponse(client, server, auth)

    async def get_geo_cities(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GeoList:
        """Retrieves the list of cities available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of cities.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_geo_cities(x_project_uid, request_options=request_options))

    async def get_geo_countries(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GeoList:
        """Retrieves the list of countries available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of countries.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_geo_countries(x_project_uid, request_options=request_options))

    async def get_geo_regions(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GeoList:
        """Retrieves the list of geographic regions available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of geographic regions.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_geo_regions(x_project_uid, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGeolocationWithRawResponse:
        return self._with_raw_response


class GeolocationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_geo_cities(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GeoList, GetGeoCitiesErrorBody]:
        """Retrieves the list of cities available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/geolocation/cities"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[GeoList],
            error_mapper=get_geo_cities_error_mapper,
            request_options=request_options,
        )

    def get_geo_countries(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GeoList, GetGeoCountriesErrorBody]:
        """Retrieves the list of countries available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/geolocation/countries"
            ),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[GeoList],
            error_mapper=get_geo_countries_error_mapper,
            request_options=request_options,
        )

    def get_geo_regions(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GeoList, GetGeoRegionsErrorBody]:
        """Retrieves the list of geographic regions available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/geolocation/regions"
            ),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[GeoList],
            error_mapper=get_geo_regions_error_mapper,
            request_options=request_options,
        )


class AsyncGeolocationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_geo_cities(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GeoList, GetGeoCitiesErrorBody]:
        """Retrieves the list of cities available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/geolocation/cities"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[GeoList],
            error_mapper=get_geo_cities_error_mapper,
            request_options=request_options,
        )

    async def get_geo_countries(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GeoList, GetGeoCountriesErrorBody]:
        """Retrieves the list of countries available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/geolocation/countries"
            ),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[GeoList],
            error_mapper=get_geo_countries_error_mapper,
            request_options=request_options,
        )

    async def get_geo_regions(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GeoList, GetGeoRegionsErrorBody]:
        """Retrieves the list of geographic regions available for location-based audience targeting rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/geolocation/regions"
            ),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[GeoList],
            error_mapper=get_geo_regions_error_mapper,
            request_options=request_options,
        )
