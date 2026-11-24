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
    async_empty_response,
    async_json_decoder,
    empty_response,
    form_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.check_person_lookup_status_error import (
    CheckPersonLookupStatusErrorBody,
    check_person_lookup_status_error_mapper,
)
from ..errors.check_universal_person_lookup_status_error import (
    CheckUniversalPersonLookupStatusErrorBody,
    check_universal_person_lookup_status_error_mapper,
)
from ..errors.create_person_and_company_lookup2_error import (
    CreatePersonAndCompanyLookup2ErrorBody,
    create_person_and_company_lookup2_error_mapper,
)
from ..errors.create_person_bulk_lookup_error import (
    CreatePersonBulkLookupErrorBody,
    create_person_bulk_lookup_error_mapper,
)
from ..errors.create_person_lookup_error import CreatePersonLookupErrorBody, create_person_lookup_error_mapper
from ..errors.create_person_search_error import CreatePersonSearchErrorBody, create_person_search_error_mapper
from ..errors.create_universal_person_bulk_lookup_error import (
    CreateUniversalPersonBulkLookupErrorBody,
    create_universal_person_bulk_lookup_error_mapper,
)
from ..errors.create_universal_person_lookup_error import (
    CreateUniversalPersonLookupErrorBody,
    create_universal_person_lookup_error_mapper,
)
from ..errors.create_universal_person_search_error import (
    CreateUniversalPersonSearchErrorBody,
    create_universal_person_search_error_mapper,
)
from ..models.enums.lookup_type import LookupTypeOrStr
from ..models.enums.order_by_enum import OrderByEnum, OrderByEnumOrStr
from ..models.person_query import PersonQuery, PersonQueryDict
from ..models.person_query1 import PersonQuery1, PersonQuery1Dict
from ..models.profile_api_compiled_company import ProfileApiCompiledCompany
from ..models.profile_api_serializer_with_compiled_company import ProfileApiSerializerWithCompiledCompany
from ..models.profile_api_with_metadata_compiled_company import ProfileApiWithMetadataCompiledCompany
from ..models.profile_match import ProfileMatch, ProfileMatchDict
from ..models.profile_search_result_serializer_base import ProfileSearchResultSerializerBase
from ..models.universal_credit_person_lookup_input import (
    UniversalCreditPersonLookupInput,
    UniversalCreditPersonLookupInputDict,
)
from ..models.universal_credit_person_lookup_output import UniversalCreditPersonLookupOutput
from ..models.universal_credit_person_lookup_output_with_metadata import UniversalCreditPersonLookupOutputWithMetadata
from ..models.universal_credit_person_search_output import UniversalCreditPersonSearchOutput
from ..server.server import Server


class PeopleDataApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PeopleDataApiWithRawResponse(client, server, auth)

    def check_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[ProfileApiCompiledCompany]:
        """Check Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the status and profile data of the requested profiles.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.check_person_lookup_status(ids=ids, request_options=request_options))

    def check_universal_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[UniversalCreditPersonLookupOutput]:
        """Check Universal Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the status and profile data of the requested profiles.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.check_universal_person_lookup_status(ids=ids, request_options=request_options)
        )

    def create_person_and_company_lookup2(
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
            self._with_raw_response.create_person_and_company_lookup2(
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

    def create_person_bulk_lookup(
        self,
        *,
        queries: list[ProfileMatch | ProfileMatchDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk People Lookup by Criteria

        Args:
            queries: List of profile lookup queries for between 10 and 100 profiles
            profile_list: Name of a profile list to add looked up profiles to upon completion
            webhook_id: Webhook ID to post lookup results to upon completion. Find your webhook ID `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Bulk lookup request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_person_bulk_lookup(
                queries=queries, profile_list=profile_list, webhook_id=webhook_id, request_options=request_options
            ),
        )

    def create_person_lookup(
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
    ) -> ProfileApiWithMetadataCompiledCompany:
        """Person Enrichment API

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
            Success. Returns the profile data for the person lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_person_lookup(
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

    def create_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: PersonQuery1 | PersonQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ProfileSearchResultSerializerBase]:
        """Search People by Criteria

        Args:
            start: Start index of the request results (counting from 1)
            page_size: Maximum number of results to return per page [1-100]
            query: Search query object for the request
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. People search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_person_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    def create_universal_person_bulk_lookup(
        self,
        *,
        queries: list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk People Lookup by Criteria

        Args:
            queries: Specify the lookup criteria for up to 100 people.
            profile_list: Add specified contacts to this profile list.
            webhook_id: ID of the webhook to post lookup results upon completion.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Bulk lookup request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_universal_person_bulk_lookup(
                queries=queries, profile_list=profile_list, webhook_id=webhook_id, request_options=request_options
            ),
        )

    def create_universal_person_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        reveal_detailed_person_enrichment: bool | None = False,
        reveal_healthcare_enrichment: bool | None = False,
        reveal_personal_email: bool | None = False,
        reveal_phone: bool | None = False,
        reveal_professional_email: bool | None = False,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UniversalCreditPersonLookupOutputWithMetadata:
        """Person Enrichment API

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
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
            reveal_detailed_person_enrichment: Whether to reveal the detailed person enrichment data for the desired
                profile
            reveal_healthcare_enrichment: Whether to reveal the healthcare enrichment data for the desired profile
            reveal_personal_email: Whether to reveal the personal email enrichment data for the desired profile
            reveal_phone: Whether to reveal the phone enrichment data for the desired profile
            reveal_professional_email: Whether to reveal the professional email enrichment data for the desired profile
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data for the person lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_universal_person_lookup(
                current_employer=current_employer,
                email=email,
                id_=id_,
                linkedin_ext_url=linkedin_ext_url,
                linkedin_url=linkedin_url,
                metadata=metadata,
                name=name,
                npi_number=npi_number,
                phone=phone,
                return_cached_emails=return_cached_emails,
                reveal_detailed_person_enrichment=reveal_detailed_person_enrichment,
                reveal_healthcare_enrichment=reveal_healthcare_enrichment,
                reveal_personal_email=reveal_personal_email,
                reveal_phone=reveal_phone,
                reveal_professional_email=reveal_professional_email,
                title=title,
                webhook_id=webhook_id,
                request_options=request_options,
            ),
        )

    def create_universal_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: PersonQuery | PersonQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[UniversalCreditPersonSearchOutput]:
        """Search People by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app. * ``relevance`` - relevance * ``popularity`` - popularity * ``score`` - score
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. People search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_universal_person_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PeopleDataApiWithRawResponse:
        return self._with_raw_response


class AsyncPeopleDataApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPeopleDataApiWithRawResponse(client, server, auth)

    async def check_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[ProfileApiCompiledCompany]:
        """Check Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the status and profile data of the requested profiles.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.check_person_lookup_status(ids=ids, request_options=request_options)
        )

    async def check_universal_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[UniversalCreditPersonLookupOutput]:
        """Check Universal Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the status and profile data of the requested profiles.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.check_universal_person_lookup_status(ids=ids, request_options=request_options)
        )

    async def create_person_and_company_lookup2(
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
            await self._with_raw_response.create_person_and_company_lookup2(
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

    async def create_person_bulk_lookup(
        self,
        *,
        queries: list[ProfileMatch | ProfileMatchDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk People Lookup by Criteria

        Args:
            queries: List of profile lookup queries for between 10 and 100 profiles
            profile_list: Name of a profile list to add looked up profiles to upon completion
            webhook_id: Webhook ID to post lookup results to upon completion. Find your webhook ID `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Bulk lookup request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_person_bulk_lookup(
                queries=queries, profile_list=profile_list, webhook_id=webhook_id, request_options=request_options
            ),
        )

    async def create_person_lookup(
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
    ) -> ProfileApiWithMetadataCompiledCompany:
        """Person Enrichment API

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
            Success. Returns the profile data for the person lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_person_lookup(
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

    async def create_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: PersonQuery1 | PersonQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ProfileSearchResultSerializerBase]:
        """Search People by Criteria

        Args:
            start: Start index of the request results (counting from 1)
            page_size: Maximum number of results to return per page [1-100]
            query: Search query object for the request
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. People search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_person_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    async def create_universal_person_bulk_lookup(
        self,
        *,
        queries: list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk People Lookup by Criteria

        Args:
            queries: Specify the lookup criteria for up to 100 people.
            profile_list: Add specified contacts to this profile list.
            webhook_id: ID of the webhook to post lookup results upon completion.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Bulk lookup request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_universal_person_bulk_lookup(
                queries=queries, profile_list=profile_list, webhook_id=webhook_id, request_options=request_options
            ),
        )

    async def create_universal_person_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        reveal_detailed_person_enrichment: bool | None = False,
        reveal_healthcare_enrichment: bool | None = False,
        reveal_personal_email: bool | None = False,
        reveal_phone: bool | None = False,
        reveal_professional_email: bool | None = False,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UniversalCreditPersonLookupOutputWithMetadata:
        """Person Enrichment API

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
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
            reveal_detailed_person_enrichment: Whether to reveal the detailed person enrichment data for the desired
                profile
            reveal_healthcare_enrichment: Whether to reveal the healthcare enrichment data for the desired profile
            reveal_personal_email: Whether to reveal the personal email enrichment data for the desired profile
            reveal_phone: Whether to reveal the phone enrichment data for the desired profile
            reveal_professional_email: Whether to reveal the professional email enrichment data for the desired profile
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the profile data for the person lookup.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_universal_person_lookup(
                current_employer=current_employer,
                email=email,
                id_=id_,
                linkedin_ext_url=linkedin_ext_url,
                linkedin_url=linkedin_url,
                metadata=metadata,
                name=name,
                npi_number=npi_number,
                phone=phone,
                return_cached_emails=return_cached_emails,
                reveal_detailed_person_enrichment=reveal_detailed_person_enrichment,
                reveal_healthcare_enrichment=reveal_healthcare_enrichment,
                reveal_personal_email=reveal_personal_email,
                reveal_phone=reveal_phone,
                reveal_professional_email=reveal_professional_email,
                title=title,
                webhook_id=webhook_id,
                request_options=request_options,
            ),
        )

    async def create_universal_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: PersonQuery | PersonQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[UniversalCreditPersonSearchOutput]:
        """Search People by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app. * ``relevance`` - relevance * ``popularity`` - popularity * ``score`` - score
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. People search request accepted

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_universal_person_search(
                start=start, page_size=page_size, query=query, order_by=order_by, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPeopleDataApiWithRawResponse:
        return self._with_raw_response


class PeopleDataApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def check_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ProfileApiCompiledCompany], CheckPersonLookupStatusErrorBody]:
        """Check Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/person/checkStatus"),
            query_params=[param[list[int] | None]("ids", ids)],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[list[ProfileApiCompiledCompany]],
            error_mapper=check_person_lookup_status_error_mapper,
            request_options=request_options,
        )

    def check_universal_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[UniversalCreditPersonLookupOutput], CheckUniversalPersonLookupStatusErrorBody]:
        """Check Universal Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/person/check_status"),
            query_params=[param[list[int] | None]("ids", ids)],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[list[UniversalCreditPersonLookupOutput]],
            error_mapper=check_universal_person_lookup_status_error_mapper,
            request_options=request_options,
        )

    def create_person_and_company_lookup2(
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
    ) -> ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookup2ErrorBody]:
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
            error_mapper=create_person_and_company_lookup2_error_mapper,
            request_options=request_options,
        )

    def create_person_bulk_lookup(
        self,
        *,
        queries: list[ProfileMatch | ProfileMatchDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreatePersonBulkLookupErrorBody]:
        """Bulk People Lookup by Criteria

        Args:
            queries: List of profile lookup queries for between 10 and 100 profiles
            profile_list: Name of a profile list to add looked up profiles to upon completion
            webhook_id: Webhook ID to post lookup results to upon completion. Find your webhook ID `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulkLookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[list[ProfileMatch | ProfileMatchDict] | None]("queries", queries),
                param[str | None]("profile_list", profile_list),
                param[int | None]("webhook_id", webhook_id),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=empty_response,
            error_mapper=create_person_bulk_lookup_error_mapper,
            request_options=request_options,
        )

    def create_person_lookup(
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
    ) -> ApiResult[ProfileApiWithMetadataCompiledCompany, CreatePersonLookupErrorBody]:
        """Person Enrichment API

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
            url_template=self._server.default("/person/lookup"),
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
            decoder=json_decoder[ProfileApiWithMetadataCompiledCompany],
            error_mapper=create_person_lookup_error_mapper,
            request_options=request_options,
        )

    def create_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: PersonQuery1 | PersonQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ProfileSearchResultSerializerBase], CreatePersonSearchErrorBody]:
        """Search People by Criteria

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
            url_template=self._server.default("/person/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[PersonQuery1 | PersonQuery1Dict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[list[ProfileSearchResultSerializerBase]],
            error_mapper=create_person_search_error_mapper,
            request_options=request_options,
        )

    def create_universal_person_bulk_lookup(
        self,
        *,
        queries: list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateUniversalPersonBulkLookupErrorBody]:
        """Bulk People Lookup by Criteria

        Args:
            queries: Specify the lookup criteria for up to 100 people.
            profile_list: Add specified contacts to this profile list.
            webhook_id: ID of the webhook to post lookup results upon completion.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/universal/person/bulk_lookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None](
                    "queries", queries
                ),
                param[str | None]("profile_list", profile_list),
                param[int | None]("webhook_id", webhook_id),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=empty_response,
            error_mapper=create_universal_person_bulk_lookup_error_mapper,
            request_options=request_options,
        )

    def create_universal_person_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        reveal_detailed_person_enrichment: bool | None = False,
        reveal_healthcare_enrichment: bool | None = False,
        reveal_personal_email: bool | None = False,
        reveal_phone: bool | None = False,
        reveal_professional_email: bool | None = False,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UniversalCreditPersonLookupOutputWithMetadata, CreateUniversalPersonLookupErrorBody]:
        """Person Enrichment API

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
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
            reveal_detailed_person_enrichment: Whether to reveal the detailed person enrichment data for the desired
                profile
            reveal_healthcare_enrichment: Whether to reveal the healthcare enrichment data for the desired profile
            reveal_personal_email: Whether to reveal the personal email enrichment data for the desired profile
            reveal_phone: Whether to reveal the phone enrichment data for the desired profile
            reveal_professional_email: Whether to reveal the professional email enrichment data for the desired profile
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/person/lookup"),
            query_params=[
                param[str | None]("current_employer", current_employer),
                param[EmailStr | None]("email", email),
                param[int | None]("id", id_),
                param[str | None]("linkedin_ext_url", linkedin_ext_url),
                param[str | None]("linkedin_url", linkedin_url),
                param[dict[str, Any] | None]("metadata", metadata),
                param[str | None]("name", name),
                param[int | None]("npi_number", npi_number),
                param[str | None]("phone", phone),
                param[bool | None]("return_cached_emails", return_cached_emails),
                param[bool | None]("reveal_detailed_person_enrichment", reveal_detailed_person_enrichment),
                param[bool | None]("reveal_healthcare_enrichment", reveal_healthcare_enrichment),
                param[bool | None]("reveal_personal_email", reveal_personal_email),
                param[bool | None]("reveal_phone", reveal_phone),
                param[bool | None]("reveal_professional_email", reveal_professional_email),
                param[str | None]("title", title),
                param[int | None]("webhook_id", webhook_id),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[UniversalCreditPersonLookupOutputWithMetadata],
            error_mapper=create_universal_person_lookup_error_mapper,
            request_options=request_options,
        )

    def create_universal_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: PersonQuery | PersonQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[UniversalCreditPersonSearchOutput], CreateUniversalPersonSearchErrorBody]:
        """Search People by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app. * ``relevance`` - relevance * ``popularity`` - popularity * ``score`` - score
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/universal/person/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[PersonQuery | PersonQueryDict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[list[UniversalCreditPersonSearchOutput]],
            error_mapper=create_universal_person_search_error_mapper,
            request_options=request_options,
        )


class AsyncPeopleDataApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def check_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ProfileApiCompiledCompany], CheckPersonLookupStatusErrorBody]:
        """Check Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/person/checkStatus"),
            query_params=[param[list[int] | None]("ids", ids)],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[list[ProfileApiCompiledCompany]],
            error_mapper=check_person_lookup_status_error_mapper,
            request_options=request_options,
        )

    async def check_universal_person_lookup_status(
        self, *, ids: list[int] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[UniversalCreditPersonLookupOutput], CheckUniversalPersonLookupStatusErrorBody]:
        """Check Universal Person Lookup Status

        Args:
            ids: List of Profile IDs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/person/check_status"),
            query_params=[param[list[int] | None]("ids", ids)],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[list[UniversalCreditPersonLookupOutput]],
            error_mapper=check_universal_person_lookup_status_error_mapper,
            request_options=request_options,
        )

    async def create_person_and_company_lookup2(
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
    ) -> ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookup2ErrorBody]:
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
            error_mapper=create_person_and_company_lookup2_error_mapper,
            request_options=request_options,
        )

    async def create_person_bulk_lookup(
        self,
        *,
        queries: list[ProfileMatch | ProfileMatchDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreatePersonBulkLookupErrorBody]:
        """Bulk People Lookup by Criteria

        Args:
            queries: List of profile lookup queries for between 10 and 100 profiles
            profile_list: Name of a profile list to add looked up profiles to upon completion
            webhook_id: Webhook ID to post lookup results to upon completion. Find your webhook ID `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulkLookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[list[ProfileMatch | ProfileMatchDict] | None]("queries", queries),
                param[str | None]("profile_list", profile_list),
                param[int | None]("webhook_id", webhook_id),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_empty_response,
            error_mapper=create_person_bulk_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_person_lookup(
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
    ) -> ApiResult[ProfileApiWithMetadataCompiledCompany, CreatePersonLookupErrorBody]:
        """Person Enrichment API

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
            url_template=self._server.default("/person/lookup"),
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
            decoder=async_json_decoder[ProfileApiWithMetadataCompiledCompany],
            error_mapper=create_person_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 10,
        query: PersonQuery1 | PersonQuery1Dict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ProfileSearchResultSerializerBase], CreatePersonSearchErrorBody]:
        """Search People by Criteria

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
            url_template=self._server.default("/person/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[PersonQuery1 | PersonQuery1Dict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[list[ProfileSearchResultSerializerBase]],
            error_mapper=create_person_search_error_mapper,
            request_options=request_options,
        )

    async def create_universal_person_bulk_lookup(
        self,
        *,
        queries: list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None = None,
        profile_list: str | None = "API Bulk Lookup",
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateUniversalPersonBulkLookupErrorBody]:
        """Bulk People Lookup by Criteria

        Args:
            queries: Specify the lookup criteria for up to 100 people.
            profile_list: Add specified contacts to this profile list.
            webhook_id: ID of the webhook to post lookup results upon completion.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/universal/person/bulk_lookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None](
                    "queries", queries
                ),
                param[str | None]("profile_list", profile_list),
                param[int | None]("webhook_id", webhook_id),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_empty_response,
            error_mapper=create_universal_person_bulk_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_universal_person_lookup(
        self,
        *,
        current_employer: str | None = None,
        email: EmailStr | None = None,
        id_: int | None = None,
        linkedin_ext_url: str | None = None,
        linkedin_url: str | None = None,
        metadata: dict[str, Any] | None = None,
        name: str | None = None,
        npi_number: int | None = None,
        phone: str | None = None,
        return_cached_emails: bool | None = True,
        reveal_detailed_person_enrichment: bool | None = False,
        reveal_healthcare_enrichment: bool | None = False,
        reveal_personal_email: bool | None = False,
        reveal_phone: bool | None = False,
        reveal_professional_email: bool | None = False,
        title: str | None = None,
        webhook_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UniversalCreditPersonLookupOutputWithMetadata, CreateUniversalPersonLookupErrorBody]:
        """Person Enrichment API

        Args:
            current_employer: Current employer of the desired profile. Must specify along with ``name``. - Example:
                ``RocketReach``
            email: An email address for the desired profile. - Example: ``jamie@rocketreach.co``
            id_: RocketReach internal unique profile ID. - Example: ``123456``
            linkedin_ext_url: linkedin_ext_url deprecated, please use ``linkedin_url`` instead
            linkedin_url: LinkedIn URL of the desired profile. - Example: ``www.linkedin.com/in/jamesgullbrand``
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
            reveal_detailed_person_enrichment: Whether to reveal the detailed person enrichment data for the desired
                profile
            reveal_healthcare_enrichment: Whether to reveal the healthcare enrichment data for the desired profile
            reveal_personal_email: Whether to reveal the personal email enrichment data for the desired profile
            reveal_phone: Whether to reveal the phone enrichment data for the desired profile
            reveal_professional_email: Whether to reveal the professional email enrichment data for the desired profile
            title: Job title of the desired profile. - Example: ``Product Manager``
            webhook_id: Your webhook's unique ID number. Find it in your API Usage & Settings page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/person/lookup"),
            query_params=[
                param[str | None]("current_employer", current_employer),
                param[EmailStr | None]("email", email),
                param[int | None]("id", id_),
                param[str | None]("linkedin_ext_url", linkedin_ext_url),
                param[str | None]("linkedin_url", linkedin_url),
                param[dict[str, Any] | None]("metadata", metadata),
                param[str | None]("name", name),
                param[int | None]("npi_number", npi_number),
                param[str | None]("phone", phone),
                param[bool | None]("return_cached_emails", return_cached_emails),
                param[bool | None]("reveal_detailed_person_enrichment", reveal_detailed_person_enrichment),
                param[bool | None]("reveal_healthcare_enrichment", reveal_healthcare_enrichment),
                param[bool | None]("reveal_personal_email", reveal_personal_email),
                param[bool | None]("reveal_phone", reveal_phone),
                param[bool | None]("reveal_professional_email", reveal_professional_email),
                param[str | None]("title", title),
                param[int | None]("webhook_id", webhook_id),
            ],
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[UniversalCreditPersonLookupOutputWithMetadata],
            error_mapper=create_universal_person_lookup_error_mapper,
            request_options=request_options,
        )

    async def create_universal_person_search(
        self,
        *,
        start: int | None = 1,
        page_size: int | None = 100,
        query: PersonQuery | PersonQueryDict | None = None,
        order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[UniversalCreditPersonSearchOutput], CreateUniversalPersonSearchErrorBody]:
        """Search People by Criteria

        Args:
            start: Paginate through search results by returning results starting from this value (counting from 1).
            page_size: Maximum number of search results to return per page.
            query: Value sent with the request.
            order_by: Specifies the ordering of search results. "popularity" matches the default ordering of the Search
                web app. * ``relevance`` - relevance * ``popularity`` - popularity * ``score`` - score
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/universal/person/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[int | None]("start", start),
                param[int | None]("page_size", page_size),
                param[PersonQuery | PersonQueryDict | None]("query", query),
                param[OrderByEnumOrStr | None]("order_by", order_by),
            ),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[list[UniversalCreditPersonSearchOutput]],
            error_mapper=create_universal_person_search_error_mapper,
            request_options=request_options,
        )
