from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_property_by_url_error import GetPropertyByUrlErrorBody, get_property_by_url_error_mapper
from ..models.agent_ok import AgentOk
from ..models.batch_property_request import BatchPropertyRequest, BatchPropertyRequestDict
from ..models.enums.extract_units import ExtractUnits, ExtractUnitsOrStr
from ..models.enums.status_zillapi_zillow_property_data_properties_api import (
    StatusZillapiZillowPropertyDataPropertiesApi,
    StatusZillapiZillowPropertyDataPropertiesApiOrStr,
)
from ..models.facts_ok import FactsOk
from ..models.job_accepted import JobAccepted
from ..models.nearby_ok import NearbyOk
from ..models.open_houses_ok import OpenHousesOk
from ..models.photos_ok import PhotosOk
from ..models.price_history_ok import PriceHistoryOk
from ..models.property_cached_ok import PropertyCachedOk
from ..models.property_ok import PropertyOk
from ..models.schools_ok import SchoolsOk
from ..models.tax_history_ok import TaxHistoryOk
from ..models.zestimate_ok import ZestimateOk
from ..server.server import Server


class Properties:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PropertiesWithRawResponse(client, server, auth)

    def create_batch_property_job(
        self,
        body: BatchPropertyRequest | BatchPropertyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobAccepted:
        """Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async:
        returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when
        the job completes; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Async job accepted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_batch_property_job(body, request_options=request_options))

    def get_property_agent(self, zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> AgentOk:
        """Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Listing agent + broker contact

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_agent(zpid, request_options=request_options))

    def get_property_by_address(
        self,
        address: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PropertyOk:
        """Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3
        credits per successful call because the address is resolved upstream; failed calls are free.

        Args:
            address: Full street address including city, state, and ZIP; geocoded upstream.
            status: Listing status to resolve.
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single property (an array of Property when extract_units is set and the URL is a multi-unit building)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_property_by_address(
                address, status=status, fields=fields, request_options=request_options
            ),
        )

    def get_property_by_url(
        self,
        url: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        extract_units: ExtractUnitsOrStr | None = ExtractUnits.DISABLED,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PropertyOk:
        """Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When
        ``extract_units`` is not ``disabled`` and the URL is a multi-unit building, ``data`` is returned as an array of
        unit records. Costs 1 credit per record returned; failed calls are free.

        Args:
            url: Full Zillow URL: homedetails, /b/, /community/, or /apartments/.
            status: Listing status to resolve.
            extract_units: For building URLs, which units to extract. ``disabled`` returns the parent record only; any
                other value returns an array of unit records.
            fields: Comma-separated dotted-path field projection, e.g.
                ``zpid,address.streetAddress,priceHistory[0].price``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single property (an array of Property when extract_units is set and the URL is a multi-unit building)

        Raises:
            ApiError: Standard error Auth missing/invalid Standard error Standard error Standard error Standard error
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_property_by_url(
                url, status=status, extract_units=extract_units, fields=fields, request_options=request_options
            ),
        )

    def get_property_by_zpid(
        self, zpid: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PropertyCachedOk:
        """Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful
        lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.

        Args:
            zpid: Zillow property id (numeric string).
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single property with cache info

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_property_by_zpid(zpid, fields=fields, request_options=request_options)
        )

    def get_property_facts(self, zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> FactsOk:
        """Return the full ``resoFacts`` MLS attribute set (appliances, flooring, parking, view, and hundreds of other
        fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster
        responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full resoFacts MLS attribute set

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_facts(zpid, request_options=request_options))

    def get_property_nearby(self, zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> NearbyOk:
        """Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comparable nearby listings (search-row shape)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_nearby(zpid, request_options=request_options))

    def get_property_open_houses(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OpenHousesOk:
        """Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching
        (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Open-house schedule and tour eligibility

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_open_houses(zpid, request_options=request_options))

    def get_property_photos(self, zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> PhotosOk:
        """Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1
        credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Property photos with multi-width sources and counts

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_photos(zpid, request_options=request_options))

    def get_property_price_history(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PriceHistoryOk:
        """Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Property price-history events

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_price_history(zpid, request_options=request_options))

    def get_property_schools(self, zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> SchoolsOk:
        """Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs
        1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schools associated with the property

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_schools(zpid, request_options=request_options))

    def get_property_tax_history(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaxHistoryOk:
        """Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Property tax-history rows

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_tax_history(zpid, request_options=request_options))

    def get_property_zestimate(self, zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ZestimateOk:
        """Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per
        successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Zestimate / rent zestimate

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_property_zestimate(zpid, request_options=request_options))

    @property
    def with_raw_response(self) -> PropertiesWithRawResponse:
        return self._with_raw_response


class AsyncProperties:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPropertiesWithRawResponse(client, server, auth)

    async def create_batch_property_job(
        self,
        body: BatchPropertyRequest | BatchPropertyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobAccepted:
        """Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async:
        returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when
        the job completes; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Async job accepted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_batch_property_job(body, request_options=request_options))

    async def get_property_agent(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AgentOk:
        """Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Listing agent + broker contact

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_agent(zpid, request_options=request_options))

    async def get_property_by_address(
        self,
        address: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PropertyOk:
        """Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3
        credits per successful call because the address is resolved upstream; failed calls are free.

        Args:
            address: Full street address including city, state, and ZIP; geocoded upstream.
            status: Listing status to resolve.
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single property (an array of Property when extract_units is set and the URL is a multi-unit building)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_property_by_address(
                address, status=status, fields=fields, request_options=request_options
            ),
        )

    async def get_property_by_url(
        self,
        url: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        extract_units: ExtractUnitsOrStr | None = ExtractUnits.DISABLED,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PropertyOk:
        """Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When
        ``extract_units`` is not ``disabled`` and the URL is a multi-unit building, ``data`` is returned as an array of
        unit records. Costs 1 credit per record returned; failed calls are free.

        Args:
            url: Full Zillow URL: homedetails, /b/, /community/, or /apartments/.
            status: Listing status to resolve.
            extract_units: For building URLs, which units to extract. ``disabled`` returns the parent record only; any
                other value returns an array of unit records.
            fields: Comma-separated dotted-path field projection, e.g.
                ``zpid,address.streetAddress,priceHistory[0].price``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single property (an array of Property when extract_units is set and the URL is a multi-unit building)

        Raises:
            ApiError: Standard error Auth missing/invalid Standard error Standard error Standard error Standard error
                ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_property_by_url(
                url, status=status, extract_units=extract_units, fields=fields, request_options=request_options
            ),
        )

    async def get_property_by_zpid(
        self, zpid: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PropertyCachedOk:
        """Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful
        lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.

        Args:
            zpid: Zillow property id (numeric string).
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single property with cache info

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_property_by_zpid(zpid, fields=fields, request_options=request_options)
        )

    async def get_property_facts(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FactsOk:
        """Return the full ``resoFacts`` MLS attribute set (appliances, flooring, parking, view, and hundreds of other
        fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster
        responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full resoFacts MLS attribute set

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_facts(zpid, request_options=request_options))

    async def get_property_nearby(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NearbyOk:
        """Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comparable nearby listings (search-row shape)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_nearby(zpid, request_options=request_options))

    async def get_property_open_houses(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OpenHousesOk:
        """Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching
        (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Open-house schedule and tour eligibility

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_open_houses(zpid, request_options=request_options))

    async def get_property_photos(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PhotosOk:
        """Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1
        credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Property photos with multi-width sources and counts

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_photos(zpid, request_options=request_options))

    async def get_property_price_history(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PriceHistoryOk:
        """Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Property price-history events

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_price_history(zpid, request_options=request_options))

    async def get_property_schools(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SchoolsOk:
        """Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs
        1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schools associated with the property

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_schools(zpid, request_options=request_options))

    async def get_property_tax_history(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaxHistoryOk:
        """Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Property tax-history rows

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_tax_history(zpid, request_options=request_options))

    async def get_property_zestimate(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ZestimateOk:
        """Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per
        successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Zestimate / rent zestimate

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_property_zestimate(zpid, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPropertiesWithRawResponse:
        return self._with_raw_response


class PropertiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_batch_property_job(
        self,
        body: BatchPropertyRequest | BatchPropertyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JobAccepted, RawError]:
        """Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async:
        returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when
        the job completes; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/properties/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchPropertyRequest | BatchPropertyRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JobAccepted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_agent(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AgentOk, RawError]:
        """Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/agent"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AgentOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_by_address(
        self,
        address: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PropertyOk, RawError]:
        """Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3
        credits per successful call because the address is resolved upstream; failed calls are free.

        Args:
            address: Full street address including city, state, and ZIP; geocoded upstream.
            status: Listing status to resolve.
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/by-address"),
            query_params=[
                param[str]("address", address),
                param[StatusZillapiZillowPropertyDataPropertiesApiOrStr | None]("status", status),
                param[str | None]("fields", fields),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PropertyOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_by_url(
        self,
        url: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        extract_units: ExtractUnitsOrStr | None = ExtractUnits.DISABLED,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PropertyOk, GetPropertyByUrlErrorBody]:
        """Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When
        ``extract_units`` is not ``disabled`` and the URL is a multi-unit building, ``data`` is returned as an array of
        unit records. Costs 1 credit per record returned; failed calls are free.

        Args:
            url: Full Zillow URL: homedetails, /b/, /community/, or /apartments/.
            status: Listing status to resolve.
            extract_units: For building URLs, which units to extract. ``disabled`` returns the parent record only; any
                other value returns an array of unit records.
            fields: Comma-separated dotted-path field projection, e.g.
                ``zpid,address.streetAddress,priceHistory[0].price``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/by-url"),
            query_params=[
                param[str]("url", url),
                param[StatusZillapiZillowPropertyDataPropertiesApiOrStr | None]("status", status),
                param[ExtractUnitsOrStr | None]("extract_units", extract_units),
                param[str | None]("fields", fields),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PropertyOk],
            error_mapper=get_property_by_url_error_mapper,
            request_options=request_options,
        )

    def get_property_by_zpid(
        self, zpid: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PropertyCachedOk, RawError]:
        """Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful
        lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.

        Args:
            zpid: Zillow property id (numeric string).
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}"),
            path_params=[param[str]("zpid", zpid)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PropertyCachedOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_facts(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FactsOk, RawError]:
        """Return the full ``resoFacts`` MLS attribute set (appliances, flooring, parking, view, and hundreds of other
        fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster
        responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/facts"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FactsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_nearby(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NearbyOk, RawError]:
        """Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/nearby"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[NearbyOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_open_houses(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OpenHousesOk, RawError]:
        """Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching
        (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/open-houses"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OpenHousesOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_photos(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PhotosOk, RawError]:
        """Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1
        credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/photos"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PhotosOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_price_history(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PriceHistoryOk, RawError]:
        """Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/price-history"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PriceHistoryOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_schools(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SchoolsOk, RawError]:
        """Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs
        1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/schools"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SchoolsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_tax_history(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaxHistoryOk, RawError]:
        """Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/tax-history"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TaxHistoryOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_property_zestimate(
        self, zpid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ZestimateOk, RawError]:
        """Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per
        successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/zestimate"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ZestimateOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPropertiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_batch_property_job(
        self,
        body: BatchPropertyRequest | BatchPropertyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JobAccepted, RawError]:
        """Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async:
        returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when
        the job completes; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/properties/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchPropertyRequest | BatchPropertyRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JobAccepted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_agent(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AgentOk, RawError]:
        """Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/agent"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AgentOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_by_address(
        self,
        address: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PropertyOk, RawError]:
        """Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3
        credits per successful call because the address is resolved upstream; failed calls are free.

        Args:
            address: Full street address including city, state, and ZIP; geocoded upstream.
            status: Listing status to resolve.
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/by-address"),
            query_params=[
                param[str]("address", address),
                param[StatusZillapiZillowPropertyDataPropertiesApiOrStr | None]("status", status),
                param[str | None]("fields", fields),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PropertyOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_by_url(
        self,
        url: str,
        *,
        status: (
            StatusZillapiZillowPropertyDataPropertiesApiOrStr | None
        ) = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE,
        extract_units: ExtractUnitsOrStr | None = ExtractUnits.DISABLED,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PropertyOk, GetPropertyByUrlErrorBody]:
        """Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When
        ``extract_units`` is not ``disabled`` and the URL is a multi-unit building, ``data`` is returned as an array of
        unit records. Costs 1 credit per record returned; failed calls are free.

        Args:
            url: Full Zillow URL: homedetails, /b/, /community/, or /apartments/.
            status: Listing status to resolve.
            extract_units: For building URLs, which units to extract. ``disabled`` returns the parent record only; any
                other value returns an array of unit records.
            fields: Comma-separated dotted-path field projection, e.g.
                ``zpid,address.streetAddress,priceHistory[0].price``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/by-url"),
            query_params=[
                param[str]("url", url),
                param[StatusZillapiZillowPropertyDataPropertiesApiOrStr | None]("status", status),
                param[ExtractUnitsOrStr | None]("extract_units", extract_units),
                param[str | None]("fields", fields),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PropertyOk],
            error_mapper=get_property_by_url_error_mapper,
            request_options=request_options,
        )

    async def get_property_by_zpid(
        self, zpid: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PropertyCachedOk, RawError]:
        """Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful
        lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.

        Args:
            zpid: Zillow property id (numeric string).
            fields: Comma-separated dotted-path field projection.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}"),
            path_params=[param[str]("zpid", zpid)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PropertyCachedOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_facts(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FactsOk, RawError]:
        """Return the full ``resoFacts`` MLS attribute set (appliances, flooring, parking, view, and hundreds of other
        fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster
        responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/facts"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FactsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_nearby(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NearbyOk, RawError]:
        """Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/nearby"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[NearbyOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_open_houses(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OpenHousesOk, RawError]:
        """Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching
        (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/open-houses"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OpenHousesOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_photos(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PhotosOk, RawError]:
        """Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1
        credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/photos"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PhotosOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_price_history(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PriceHistoryOk, RawError]:
        """Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/price-history"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PriceHistoryOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_schools(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SchoolsOk, RawError]:
        """Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs
        1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/schools"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SchoolsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_tax_history(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaxHistoryOk, RawError]:
        """Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful
        lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/tax-history"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TaxHistoryOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_property_zestimate(
        self, zpid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ZestimateOk, RawError]:
        """Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per
        successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

        Args:
            zpid: Zillow property id (numeric string).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/properties/{zpid}/zestimate"),
            path_params=[param[str]("zpid", zpid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ZestimateOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
