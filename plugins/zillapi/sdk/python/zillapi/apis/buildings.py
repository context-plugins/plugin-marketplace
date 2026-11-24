from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.enums.include_units import IncludeUnits, IncludeUnitsOrStr
from ..models.v1_buildings_by_url_response import V1BuildingsByUrlResponse
from ..server.server import Server


class Buildings:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuildingsWithRawResponse(client, server, auth)

    def get_building_by_url(
        self,
        url: str,
        *,
        include_units: IncludeUnitsOrStr | None = IncludeUnits.ALL,
        sync: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BuildingsByUrlResponse:
        """Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or
        /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1
        credit per unit returned; failed calls are free.

        Args:
            url: Building/apartments/community URL (must be /b/, /apartments/, or /community/).
            include_units: Which units to include.
            sync: When true (default) returns units synchronously. Set false for large buildings to run async and return
                a job_id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Building units returned synchronously

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_building_by_url(
                url, include_units=include_units, sync=sync, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BuildingsWithRawResponse:
        return self._with_raw_response


class AsyncBuildings:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuildingsWithRawResponse(client, server, auth)

    async def get_building_by_url(
        self,
        url: str,
        *,
        include_units: IncludeUnitsOrStr | None = IncludeUnits.ALL,
        sync: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BuildingsByUrlResponse:
        """Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or
        /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1
        credit per unit returned; failed calls are free.

        Args:
            url: Building/apartments/community URL (must be /b/, /apartments/, or /community/).
            include_units: Which units to include.
            sync: When true (default) returns units synchronously. Set false for large buildings to run async and return
                a job_id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Building units returned synchronously

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_building_by_url(
                url, include_units=include_units, sync=sync, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBuildingsWithRawResponse:
        return self._with_raw_response


class BuildingsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_building_by_url(
        self,
        url: str,
        *,
        include_units: IncludeUnitsOrStr | None = IncludeUnits.ALL,
        sync: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BuildingsByUrlResponse, RawError]:
        """Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or
        /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1
        credit per unit returned; failed calls are free.

        Args:
            url: Building/apartments/community URL (must be /b/, /apartments/, or /community/).
            include_units: Which units to include.
            sync: When true (default) returns units synchronously. Set false for large buildings to run async and return
                a job_id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/buildings/by-url"),
            query_params=[
                param[str]("url", url),
                param[IncludeUnitsOrStr | None]("include_units", include_units),
                param[bool | None]("sync", sync),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1BuildingsByUrlResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBuildingsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_building_by_url(
        self,
        url: str,
        *,
        include_units: IncludeUnitsOrStr | None = IncludeUnits.ALL,
        sync: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BuildingsByUrlResponse, RawError]:
        """Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or
        /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1
        credit per unit returned; failed calls are free.

        Args:
            url: Building/apartments/community URL (must be /b/, /apartments/, or /community/).
            include_units: Which units to include.
            sync: When true (default) returns units synchronously. Set false for large buildings to run async and return
                a job_id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/buildings/by-url"),
            query_params=[
                param[str]("url", url),
                param[IncludeUnitsOrStr | None]("include_units", include_units),
                param[bool | None]("sync", sync),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1BuildingsByUrlResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
