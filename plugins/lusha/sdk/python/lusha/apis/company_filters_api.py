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
from ..errors.get_company_industries_error import GetCompanyIndustriesErrorBody, get_company_industries_error_mapper
from ..errors.get_company_intent_topics_error import (
    GetCompanyIntentTopicsErrorBody,
    get_company_intent_topics_error_mapper,
)
from ..errors.get_company_naics_codes_error import GetCompanyNaicsCodesErrorBody, get_company_naics_codes_error_mapper
from ..errors.get_company_revenues_error import GetCompanyRevenuesErrorBody, get_company_revenues_error_mapper
from ..errors.get_company_sic_codes_error import GetCompanySicCodesErrorBody, get_company_sic_codes_error_mapper
from ..errors.get_company_sizes_error import GetCompanySizesErrorBody, get_company_sizes_error_mapper
from ..errors.search_company_locations_error import (
    SearchCompanyLocationsErrorBody,
    search_company_locations_error_mapper,
)
from ..errors.search_company_names_error import SearchCompanyNamesErrorBody, search_company_names_error_mapper
from ..errors.search_company_technologies_error import (
    SearchCompanyTechnologiesErrorBody,
    search_company_technologies_error_mapper,
)
from ..models.company_location_filter import CompanyLocationFilter
from ..models.company_name_result import CompanyNameResult
from ..models.company_name_search_request import CompanyNameSearchRequest, CompanyNameSearchRequestDict
from ..models.company_size_range import CompanySizeRange
from ..models.industry_label import IndustryLabel
from ..models.location_search_request import LocationSearchRequest, LocationSearchRequestDict
from ..models.naics_code import NaicsCode
from ..models.revenue_range import RevenueRange
from ..models.sic_code import SicCode
from ..models.technology import Technology
from ..models.technology_search_request import TechnologySearchRequest, TechnologySearchRequestDict
from ..server.server import Server


class CompanyFiltersApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompanyFiltersApiWithRawResponse(client, server, auth)

    def get_company_industries(self, *, request_options: RequestOptionsOrDict | None = None) -> list[IndustryLabel]:
        """Get list of available industries for company filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Industry hierarchy

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_industries(request_options=request_options))

    def get_company_intent_topics(self, *, request_options: RequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available intent topics

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Intent topics

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_intent_topics(request_options=request_options))

    def get_company_naics_codes(self, *, request_options: RequestOptionsOrDict | None = None) -> list[NaicsCode]:
        """Get list of available NAICS codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NAICS codes

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_naics_codes(request_options=request_options))

    def get_company_revenues(self, *, request_options: RequestOptionsOrDict | None = None) -> list[RevenueRange]:
        """Get list of available revenue ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Revenue ranges

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_revenues(request_options=request_options))

    def get_company_sic_codes(self, *, request_options: RequestOptionsOrDict | None = None) -> list[SicCode]:
        """Get list of available SIC codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SIC codes

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_sic_codes(request_options=request_options))

    def get_company_sizes(self, *, request_options: RequestOptionsOrDict | None = None) -> list[CompanySizeRange]:
        """Get list of available company size ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company size ranges

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_sizes(request_options=request_options))

    def search_company_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CompanyLocationFilter]:
        """Search for company locations by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching locations

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_company_locations(body, request_options=request_options))

    def search_company_names(
        self,
        body: CompanyNameSearchRequest | CompanyNameSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CompanyNameResult]:
        """Search for company names by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching companies

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_company_names(body, request_options=request_options))

    def search_company_technologies(
        self,
        body: TechnologySearchRequest | TechnologySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Technology]:
        """Search for technologies by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching technologies

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_company_technologies(body, request_options=request_options))

    @property
    def with_raw_response(self) -> CompanyFiltersApiWithRawResponse:
        return self._with_raw_response


class AsyncCompanyFiltersApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompanyFiltersApiWithRawResponse(client, server, auth)

    async def get_company_industries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[IndustryLabel]:
        """Get list of available industries for company filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Industry hierarchy

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_industries(request_options=request_options))

    async def get_company_intent_topics(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[str]:
        """Get list of available intent topics

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Intent topics

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_intent_topics(request_options=request_options))

    async def get_company_naics_codes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[NaicsCode]:
        """Get list of available NAICS codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NAICS codes

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_naics_codes(request_options=request_options))

    async def get_company_revenues(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[RevenueRange]:
        """Get list of available revenue ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Revenue ranges

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_revenues(request_options=request_options))

    async def get_company_sic_codes(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[SicCode]:
        """Get list of available SIC codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SIC codes

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_sic_codes(request_options=request_options))

    async def get_company_sizes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[CompanySizeRange]:
        """Get list of available company size ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company size ranges

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_sizes(request_options=request_options))

    async def search_company_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CompanyLocationFilter]:
        """Search for company locations by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching locations

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_company_locations(body, request_options=request_options))

    async def search_company_names(
        self,
        body: CompanyNameSearchRequest | CompanyNameSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CompanyNameResult]:
        """Search for company names by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching companies

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_company_names(body, request_options=request_options))

    async def search_company_technologies(
        self,
        body: TechnologySearchRequest | TechnologySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Technology]:
        """Search for technologies by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching technologies

        Raises:
            ApiError: Unauthorized - invalid or missing API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_company_technologies(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCompanyFiltersApiWithRawResponse:
        return self._with_raw_response


class CompanyFiltersApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_company_industries(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[IndustryLabel], GetCompanyIndustriesErrorBody]:
        """Get list of available industries for company filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/industries_labels"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[IndustryLabel]],
            error_mapper=get_company_industries_error_mapper,
            request_options=request_options,
        )

    def get_company_intent_topics(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetCompanyIntentTopicsErrorBody]:
        """Get list of available intent topics

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/intent_topics"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=get_company_intent_topics_error_mapper,
            request_options=request_options,
        )

    def get_company_naics_codes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[NaicsCode], GetCompanyNaicsCodesErrorBody]:
        """Get list of available NAICS codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/naics"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[NaicsCode]],
            error_mapper=get_company_naics_codes_error_mapper,
            request_options=request_options,
        )

    def get_company_revenues(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[RevenueRange], GetCompanyRevenuesErrorBody]:
        """Get list of available revenue ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/revenues"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[RevenueRange]],
            error_mapper=get_company_revenues_error_mapper,
            request_options=request_options,
        )

    def get_company_sic_codes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[SicCode], GetCompanySicCodesErrorBody]:
        """Get list of available SIC codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/sics"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[SicCode]],
            error_mapper=get_company_sic_codes_error_mapper,
            request_options=request_options,
        )

    def get_company_sizes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CompanySizeRange], GetCompanySizesErrorBody]:
        """Get list of available company size ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/sizes"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[CompanySizeRange]],
            error_mapper=get_company_sizes_error_mapper,
            request_options=request_options,
        )

    def search_company_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CompanyLocationFilter], SearchCompanyLocationsErrorBody]:
        """Search for company locations by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/companies/locations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LocationSearchRequest | LocationSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[CompanyLocationFilter]],
            error_mapper=search_company_locations_error_mapper,
            request_options=request_options,
        )

    def search_company_names(
        self,
        body: CompanyNameSearchRequest | CompanyNameSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CompanyNameResult], SearchCompanyNamesErrorBody]:
        """Search for company names by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/companies/names"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyNameSearchRequest | CompanyNameSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[CompanyNameResult]],
            error_mapper=search_company_names_error_mapper,
            request_options=request_options,
        )

    def search_company_technologies(
        self,
        body: TechnologySearchRequest | TechnologySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Technology], SearchCompanyTechnologiesErrorBody]:
        """Search for technologies by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/companies/technologies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TechnologySearchRequest | TechnologySearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[Technology]],
            error_mapper=search_company_technologies_error_mapper,
            request_options=request_options,
        )


class AsyncCompanyFiltersApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_company_industries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[IndustryLabel], GetCompanyIndustriesErrorBody]:
        """Get list of available industries for company filtering

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/industries_labels"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[IndustryLabel]],
            error_mapper=get_company_industries_error_mapper,
            request_options=request_options,
        )

    async def get_company_intent_topics(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], GetCompanyIntentTopicsErrorBody]:
        """Get list of available intent topics

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/intent_topics"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=get_company_intent_topics_error_mapper,
            request_options=request_options,
        )

    async def get_company_naics_codes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[NaicsCode], GetCompanyNaicsCodesErrorBody]:
        """Get list of available NAICS codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/naics"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[NaicsCode]],
            error_mapper=get_company_naics_codes_error_mapper,
            request_options=request_options,
        )

    async def get_company_revenues(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[RevenueRange], GetCompanyRevenuesErrorBody]:
        """Get list of available revenue ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/revenues"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[RevenueRange]],
            error_mapper=get_company_revenues_error_mapper,
            request_options=request_options,
        )

    async def get_company_sic_codes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[SicCode], GetCompanySicCodesErrorBody]:
        """Get list of available SIC codes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/sics"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[SicCode]],
            error_mapper=get_company_sic_codes_error_mapper,
            request_options=request_options,
        )

    async def get_company_sizes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[CompanySizeRange], GetCompanySizesErrorBody]:
        """Get list of available company size ranges

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/prospecting/filters/companies/sizes"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[CompanySizeRange]],
            error_mapper=get_company_sizes_error_mapper,
            request_options=request_options,
        )

    async def search_company_locations(
        self,
        body: LocationSearchRequest | LocationSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CompanyLocationFilter], SearchCompanyLocationsErrorBody]:
        """Search for company locations by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/companies/locations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LocationSearchRequest | LocationSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[CompanyLocationFilter]],
            error_mapper=search_company_locations_error_mapper,
            request_options=request_options,
        )

    async def search_company_names(
        self,
        body: CompanyNameSearchRequest | CompanyNameSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CompanyNameResult], SearchCompanyNamesErrorBody]:
        """Search for company names by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/companies/names"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyNameSearchRequest | CompanyNameSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[CompanyNameResult]],
            error_mapper=search_company_names_error_mapper,
            request_options=request_options,
        )

    async def search_company_technologies(
        self,
        body: TechnologySearchRequest | TechnologySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Technology], SearchCompanyTechnologiesErrorBody]:
        """Search for technologies by text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/filters/companies/technologies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TechnologySearchRequest | TechnologySearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[Technology]],
            error_mapper=search_company_technologies_error_mapper,
            request_options=request_options,
        )
