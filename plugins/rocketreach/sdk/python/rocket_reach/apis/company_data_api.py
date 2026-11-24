from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from pydantic import EmailStr

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    form_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_company_lookup_error import CreateCompanyLookupErrorBody, create_company_lookup_error_mapper
from ..errors.create_company_search_error import CreateCompanySearchErrorBody, create_company_search_error_mapper
from ..errors.create_person_and_company_lookup_error import (
    CreatePersonAndCompanyLookupErrorBody,
    create_person_and_company_lookup_error_mapper,
)
from ..errors.create_universal_company_lookup_error import (
    CreateUniversalCompanyLookupErrorBody,
    create_universal_company_lookup_error_mapper,
)
from ..errors.create_universal_company_search_error import (
    CreateUniversalCompanySearchErrorBody,
    create_universal_company_search_error_mapper,
)
from ..models.company_query import CompanyQuery, CompanyQueryDict
from ..models.company_query1 import CompanyQuery1, CompanyQuery1Dict
from ..models.compiled_company_api_serializer_with_extended_company_attributes import (
    CompiledCompanyApiSerializerWithExtendedCompanyAttributes,
)
from ..models.compiled_company_public_details import CompiledCompanyPublicDetails
from ..models.enums.lookup_type import LookupTypeOrStr
from ..models.enums.order_by_enum import OrderByEnum, OrderByEnumOrStr
from ..models.profile_api_serializer_with_compiled_company import ProfileApiSerializerWithCompiledCompany
from ..models.universal_credit_company_search_output import UniversalCreditCompanySearchOutput
from ..server.server import Server


class CompanyDataApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompanyDataApiWithRawResponse(client, server, auth)

    def create_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompiledCompanyApiSerializerWithExtendedCompanyAttributes:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data for the company lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_company_lookup(
                domain=domain,
                id_=id_,
                linkedin_url=linkedin_url,
                name=name,
                ticker=ticker,
                request_options=request_options,
            ),
        )

    def create_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: CompanyQuery1 | CompanyQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CompiledCompanyPublicDetails]:
        """Search Companies by Criteria

        Args:
            start: Start index of the request results (counting from 1)
            page_size: Maximum number of results to return per page [1-100]
            query: Search query object for the request
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Companies search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_company_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    def create_person_and_company_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        lookup_type: LookupTypeOrStr | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProfileApiSerializerWithCompiledCompany:
        """Person and Company Lookup

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
            lookup_type: Lookup type for the request * ``standard`` - standard * ``premium`` - premium * ``premium
                (feeds disabled)`` - premium (feeds disabled) * ``bulk`` - bulk * ``phone`` - phone * ``enrich`` -
                enrich
            metadata: User metadata about the profile, such as external ids, tags, notes, etc.
            name: Name of the desired profile. Must specify along with ``current_employer``. - Example: ``Jamie
                Gullbrand``
            npi_number: An NPI number for the desired profile (US healthcare professional). - Example: ``1234567890``
            phone: A phone number for the desired profile in either E.164 format or international format. - Example:
                ``+15555555555``
            return_cached_emails: Controls whether cached emails are included in the initial response when ``lookup
                status = progress``. When set to ``false``, all email fields will be null until the lookup is complete
                and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with
                fully verified emails (``status = complete``). Defaults to ``true``. <b>NOTE: Default will change to
                false on September 1st, 2026. No cached emails will be returned in the initial response. Use
                /checkStatus or webhooks to retrieve fully verified emails.</b>
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data and company data for the person / company lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_person_and_company_lookup(
                current_employer=current_employer,
                email=email,
                id_=id_,
                linkedin_ext_url=linkedin_ext_url,
                linkedin_url=linkedin_url,
                lookup_type=lookup_type,
                metadata=metadata,
                name=name,
                npi_number=npi_number,
                phone=phone,
                return_cached_emails=return_cached_emails,
                title=title,
                webhook_id=webhook_id,
                request_options=request_options,
            ),
        )

    def create_universal_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompiledCompanyApiSerializerWithExtendedCompanyAttributes:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data for the company lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_universal_company_lookup(
                domain=domain,
                id_=id_,
                linkedin_url=linkedin_url,
                name=name,
                ticker=ticker,
                request_options=request_options,
            ),
        )

    def create_universal_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: CompanyQuery | CompanyQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[UniversalCreditCompanySearchOutput]:
        """Search Companies by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Companies search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_universal_company_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CompanyDataApiWithRawResponse:
        return self._with_raw_response


class AsyncCompanyDataApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompanyDataApiWithRawResponse(client, server, auth)

    async def create_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompiledCompanyApiSerializerWithExtendedCompanyAttributes:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data for the company lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_company_lookup(
                domain=domain,
                id_=id_,
                linkedin_url=linkedin_url,
                name=name,
                ticker=ticker,
                request_options=request_options,
            ),
        )

    async def create_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: CompanyQuery1 | CompanyQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CompiledCompanyPublicDetails]:
        """Search Companies by Criteria

        Args:
            start: Start index of the request results (counting from 1)
            page_size: Maximum number of results to return per page [1-100]
            query: Search query object for the request
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Companies search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_company_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    async def create_person_and_company_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        lookup_type: LookupTypeOrStr | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProfileApiSerializerWithCompiledCompany:
        """Person and Company Lookup

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
            lookup_type: Lookup type for the request * ``standard`` - standard * ``premium`` - premium * ``premium
                (feeds disabled)`` - premium (feeds disabled) * ``bulk`` - bulk * ``phone`` - phone * ``enrich`` -
                enrich
            metadata: User metadata about the profile, such as external ids, tags, notes, etc.
            name: Name of the desired profile. Must specify along with ``current_employer``. - Example: ``Jamie
                Gullbrand``
            npi_number: An NPI number for the desired profile (US healthcare professional). - Example: ``1234567890``
            phone: A phone number for the desired profile in either E.164 format or international format. - Example:
                ``+15555555555``
            return_cached_emails: Controls whether cached emails are included in the initial response when ``lookup
                status = progress``. When set to ``false``, all email fields will be null until the lookup is complete
                and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with
                fully verified emails (``status = complete``). Defaults to ``true``. <b>NOTE: Default will change to
                false on September 1st, 2026. No cached emails will be returned in the initial response. Use
                /checkStatus or webhooks to retrieve fully verified emails.</b>
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data and company data for the person / company lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_person_and_company_lookup(
                current_employer=current_employer,
                email=email,
                id_=id_,
                linkedin_ext_url=linkedin_ext_url,
                linkedin_url=linkedin_url,
                lookup_type=lookup_type,
                metadata=metadata,
                name=name,
                npi_number=npi_number,
                phone=phone,
                return_cached_emails=return_cached_emails,
                title=title,
                webhook_id=webhook_id,
                request_options=request_options,
            ),
        )

    async def create_universal_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompiledCompanyApiSerializerWithExtendedCompanyAttributes:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data for the company lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_universal_company_lookup(
                domain=domain,
                id_=id_,
                linkedin_url=linkedin_url,
                name=name,
                ticker=ticker,
                request_options=request_options,
            ),
        )

    async def create_universal_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: CompanyQuery | CompanyQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[UniversalCreditCompanySearchOutput]:
        """Search Companies by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Companies search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_universal_company_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCompanyDataApiWithRawResponse:
        return self._with_raw_response


class CompanyDataApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateCompanyLookupErrorBody]:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/company/lookup/"),
            query_params=[
                param[str | None]("domain", domain),
                param[int | None]("id", id_),
                param[str | None]("linkedin_url", linkedin_url),
                param[str | None]("name", name),
                param[str | None]("ticker", ticker),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[CompiledCompanyApiSerializerWithExtendedCompanyAttributes],
            error_mapper=create_company_lookup_error_mapper,
            request_options=request_options,
        )

    def create_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: CompanyQuery1 | CompanyQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CompiledCompanyPublicDetails], CreateCompanySearchErrorBody]:
        """Search Companies by Criteria

        Args:
            start: Start index of the request results (counting from 1)
            page_size: Maximum number of results to return per page [1-100]
            query: Search query object for the request
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/searchCompany"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[CompanyQuery1 | CompanyQuery1Dict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[list[CompiledCompanyPublicDetails]],
            error_mapper=create_company_search_error_mapper,
            request_options=request_options,
        )

    def create_person_and_company_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        lookup_type: LookupTypeOrStr | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookupErrorBody]:
        """Person and Company Lookup

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
            lookup_type: Lookup type for the request * ``standard`` - standard * ``premium`` - premium * ``premium
                (feeds disabled)`` - premium (feeds disabled) * ``bulk`` - bulk * ``phone`` - phone * ``enrich`` -
                enrich
            metadata: User metadata about the profile, such as external ids, tags, notes, etc.
            name: Name of the desired profile. Must specify along with ``current_employer``. - Example: ``Jamie
                Gullbrand``
            npi_number: An NPI number for the desired profile (US healthcare professional). - Example: ``1234567890``
            phone: A phone number for the desired profile in either E.164 format or international format. - Example:
                ``+15555555555``
            return_cached_emails: Controls whether cached emails are included in the initial response when ``lookup
                status = progress``. When set to ``false``, all email fields will be null until the lookup is complete
                and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with
                fully verified emails (``status = complete``). Defaults to ``true``. <b>NOTE: Default will change to
                false on September 1st, 2026. No cached emails will be returned in the initial response. Use
                /checkStatus or webhooks to retrieve fully verified emails.</b>
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profile-company/lookup"),
            query_params=[
                param[str | None]("current_employer", current_employer),
                param[EmailStr | None]("email", email),
                param[int | None]("id", id_),
                param[str | None]("linkedin_ext_url", linkedin_ext_url),
                param[str | None]("linkedin_url", linkedin_url),
                param[LookupTypeOrStr | None]("lookup_type", lookup_type),
                param[dict[str, Any] | None]("metadata", metadata),
                param[str | None]("name", name),
                param[int | None]("npi_number", npi_number),
                param[str | None]("phone", phone),
                param[bool | None]("return_cached_emails", return_cached_emails),
                param[str | None]("title", title),
                param[int | None]("webhook_id", webhook_id),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[ProfileApiSerializerWithCompiledCompany],
            error_mapper=create_person_and_company_lookup_error_mapper,
            request_options=request_options,
        )

    def create_universal_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateUniversalCompanyLookupErrorBody]:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/company/lookup"),
            query_params=[
                param[str | None]("domain", domain),
                param[int | None]("id", id_),
                param[str | None]("linkedin_url", linkedin_url),
                param[str | None]("name", name),
                param[str | None]("ticker", ticker),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[CompiledCompanyApiSerializerWithExtendedCompanyAttributes],
            error_mapper=create_universal_company_lookup_error_mapper,
            request_options=request_options,
        )

    def create_universal_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: CompanyQuery | CompanyQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[UniversalCreditCompanySearchOutput], CreateUniversalCompanySearchErrorBody]:
        """Search Companies by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/universal/company/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[CompanyQuery | CompanyQueryDict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[list[UniversalCreditCompanySearchOutput]],
            error_mapper=create_universal_company_search_error_mapper,
            request_options=request_options,
        )


class AsyncCompanyDataApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateCompanyLookupErrorBody]:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/company/lookup/"),
            query_params=[
                param[str | None]("domain", domain),
                param[int | None]("id", id_),
                param[str | None]("linkedin_url", linkedin_url),
                param[str | None]("name", name),
                param[str | None]("ticker", ticker),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[CompiledCompanyApiSerializerWithExtendedCompanyAttributes],
            error_mapper=create_company_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: CompanyQuery1 | CompanyQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CompiledCompanyPublicDetails], CreateCompanySearchErrorBody]:
        """Search Companies by Criteria

        Args:
            start: Start index of the request results (counting from 1)
            page_size: Maximum number of results to return per page [1-100]
            query: Search query object for the request
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/searchCompany"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[CompanyQuery1 | CompanyQuery1Dict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[list[CompiledCompanyPublicDetails]],
            error_mapper=create_company_search_error_mapper,
            request_options=request_options,
        )

    async def create_person_and_company_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        lookup_type: LookupTypeOrStr | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookupErrorBody]:
        """Person and Company Lookup

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
            lookup_type: Lookup type for the request * ``standard`` - standard * ``premium`` - premium * ``premium
                (feeds disabled)`` - premium (feeds disabled) * ``bulk`` - bulk * ``phone`` - phone * ``enrich`` -
                enrich
            metadata: User metadata about the profile, such as external ids, tags, notes, etc.
            name: Name of the desired profile. Must specify along with ``current_employer``. - Example: ``Jamie
                Gullbrand``
            npi_number: An NPI number for the desired profile (US healthcare professional). - Example: ``1234567890``
            phone: A phone number for the desired profile in either E.164 format or international format. - Example:
                ``+15555555555``
            return_cached_emails: Controls whether cached emails are included in the initial response when ``lookup
                status = progress``. When set to ``false``, all email fields will be null until the lookup is complete
                and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with
                fully verified emails (``status = complete``). Defaults to ``true``. <b>NOTE: Default will change to
                false on September 1st, 2026. No cached emails will be returned in the initial response. Use
                /checkStatus or webhooks to retrieve fully verified emails.</b>
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profile-company/lookup"),
            query_params=[
                param[str | None]("current_employer", current_employer),
                param[EmailStr | None]("email", email),
                param[int | None]("id", id_),
                param[str | None]("linkedin_ext_url", linkedin_ext_url),
                param[str | None]("linkedin_url", linkedin_url),
                param[LookupTypeOrStr | None]("lookup_type", lookup_type),
                param[dict[str, Any] | None]("metadata", metadata),
                param[str | None]("name", name),
                param[int | None]("npi_number", npi_number),
                param[str | None]("phone", phone),
                param[bool | None]("return_cached_emails", return_cached_emails),
                param[str | None]("title", title),
                param[int | None]("webhook_id", webhook_id),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[ProfileApiSerializerWithCompiledCompany],
            error_mapper=create_person_and_company_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_universal_company_lookup(
        self,
        *,
        domain: str | None = None,
        id_: int | None = None,
        linkedin_url: str | None = None,
        name: str | None = None,
        ticker: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateUniversalCompanyLookupErrorBody]:
        """Search Companies by Criteria

        Args:
            domain: Domain of the desired company to lookup (preferred).
            id_: RocketReach internal unique company ID
            linkedin_url: LinkedIn URL of the desired company to lookup.
            name: Name of the desired company to lookup.
            ticker: Stock ticker of the desired company to lookup.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/company/lookup"),
            query_params=[
                param[str | None]("domain", domain),
                param[int | None]("id", id_),
                param[str | None]("linkedin_url", linkedin_url),
                param[str | None]("name", name),
                param[str | None]("ticker", ticker),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[CompiledCompanyApiSerializerWithExtendedCompanyAttributes],
            error_mapper=create_universal_company_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_universal_company_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: CompanyQuery | CompanyQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[UniversalCreditCompanySearchOutput], CreateUniversalCompanySearchErrorBody]:
        """Search Companies by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/universal/company/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[CompanyQuery | CompanyQueryDict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[list[UniversalCreditCompanySearchOutput]],
            error_mapper=create_universal_company_search_error_mapper,
            request_options=request_options,
        )
