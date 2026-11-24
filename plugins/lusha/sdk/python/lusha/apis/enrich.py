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
from ..errors.enrich_companies_error import EnrichCompaniesErrorBody, enrich_companies_error_mapper
from ..errors.enrich_contacts_error import EnrichContactsErrorBody, enrich_contacts_error_mapper
from ..models.v3_companies_enrich_request import V3CompaniesEnrichRequest, V3CompaniesEnrichRequestDict
from ..models.v3_companies_enrich_response import V3CompaniesEnrichResponse
from ..models.v3_contacts_enrich_request import V3ContactsEnrichRequest, V3ContactsEnrichRequestDict
from ..models.v3_contacts_enrich_response import V3ContactsEnrichResponse
from ..server.server import Server


class Enrich:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnrichWithRawResponse(client, server, auth)

    def enrich_companies(
        self,
        body: V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3CompaniesEnrichResponse:
        """Reveal full company data for companies you've already found via Search Companies.

        Pass up to 100 company ``ids`` (from the search response). Each enriched result includes:
        - Firmographics: size, revenue range, year founded, company type
        - Industry: primary industry, sub-industry, SIC/NAICS codes
        - Locations: HQ and additional office sites
        - Technologies, funding rounds, buyer intent topics
        - LinkedIn followers, logo URL, social links

        > **Billing:** Charged per successful result via the ``reveal_company`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            relevant enrichment columns. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.enrich_companies(body, request_options=request_options))

    def enrich_contacts(
        self,
        body: V3ContactsEnrichRequest | V3ContactsEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ContactsEnrichResponse:
        """Reveal full contact data for contacts you've already found via Search Contacts.

        Pass up to 100 contact ``ids`` (from the search response). Use the ``reveal`` field to control what gets
        unlocked:
        - ``emails`` — work and personal email addresses
        - ``phones`` — mobile and direct phone numbers
        - Omit ``reveal`` to get both by default

        ---

        ### Waterfall Reveal Fall through to your enabled third-party providers when Lusha's own data has no match, for
        extra reach on hard-to-match contacts.

        If **Data Waterfall** is enabled on your account, with specific providers turned on under **Account >
        Waterfall**, the waterfall runs automatically on every Enrich Contacts call - you don't need to pass anything to
        trigger it.

        Pass ``waterfallEnabled: false`` to opt a specific call out:

        ```json "reveal": ["emails", "phones"], "waterfallEnabled": false
        ```

        - ``reveal`` controls **which fields** come back.
        - ``waterfallEnabled`` controls whether the waterfall runs for this call at all. Defaults to ``true`` whenever
            Data Waterfall is enabled on your account; pass ``false`` to disable it just for this call.
        - Provider order isn't configurable - Lusha manages that internally.
        - If Data Waterfall is off or no providers are enabled on your account, ``waterfallEnabled`` has no effect
            either way.
        ---
        > **Tip:** If ``canReveal.credits`` is ``0`` in the search response, that data has already been revealed for
            your account — re-enriching it is free.

        > **Billing:** Charged per revealed field (email or phone) via per-datapoint pricing.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Work email / Phone columns. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.enrich_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> EnrichWithRawResponse:
        return self._with_raw_response


class AsyncEnrich:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnrichWithRawResponse(client, server, auth)

    async def enrich_companies(
        self,
        body: V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3CompaniesEnrichResponse:
        """Reveal full company data for companies you've already found via Search Companies.

        Pass up to 100 company ``ids`` (from the search response). Each enriched result includes:
        - Firmographics: size, revenue range, year founded, company type
        - Industry: primary industry, sub-industry, SIC/NAICS codes
        - Locations: HQ and additional office sites
        - Technologies, funding rounds, buyer intent topics
        - LinkedIn followers, logo URL, social links

        > **Billing:** Charged per successful result via the ``reveal_company`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            relevant enrichment columns. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.enrich_companies(body, request_options=request_options))

    async def enrich_contacts(
        self,
        body: V3ContactsEnrichRequest | V3ContactsEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ContactsEnrichResponse:
        """Reveal full contact data for contacts you've already found via Search Contacts.

        Pass up to 100 contact ``ids`` (from the search response). Use the ``reveal`` field to control what gets
        unlocked:
        - ``emails`` — work and personal email addresses
        - ``phones`` — mobile and direct phone numbers
        - Omit ``reveal`` to get both by default

        ---

        ### Waterfall Reveal Fall through to your enabled third-party providers when Lusha's own data has no match, for
        extra reach on hard-to-match contacts.

        If **Data Waterfall** is enabled on your account, with specific providers turned on under **Account >
        Waterfall**, the waterfall runs automatically on every Enrich Contacts call - you don't need to pass anything to
        trigger it.

        Pass ``waterfallEnabled: false`` to opt a specific call out:

        ```json "reveal": ["emails", "phones"], "waterfallEnabled": false
        ```

        - ``reveal`` controls **which fields** come back.
        - ``waterfallEnabled`` controls whether the waterfall runs for this call at all. Defaults to ``true`` whenever
            Data Waterfall is enabled on your account; pass ``false`` to disable it just for this call.
        - Provider order isn't configurable - Lusha manages that internally.
        - If Data Waterfall is off or no providers are enabled on your account, ``waterfallEnabled`` has no effect
            either way.
        ---
        > **Tip:** If ``canReveal.credits`` is ``0`` in the search response, that data has already been revealed for
            your account — re-enriching it is free.

        > **Billing:** Charged per revealed field (email or phone) via per-datapoint pricing.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Work email / Phone columns. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.enrich_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEnrichWithRawResponse:
        return self._with_raw_response


class EnrichWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def enrich_companies(
        self,
        body: V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesEnrichResponse, EnrichCompaniesErrorBody]:
        """Reveal full company data for companies you've already found via Search Companies.

        Pass up to 100 company ``ids`` (from the search response). Each enriched result includes:
        - Firmographics: size, revenue range, year founded, company type
        - Industry: primary industry, sub-industry, SIC/NAICS codes
        - Locations: HQ and additional office sites
        - Technologies, funding rounds, buyer intent topics
        - LinkedIn followers, logo URL, social links

        > **Billing:** Charged per successful result via the ``reveal_company`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            relevant enrichment columns. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3CompaniesEnrichResponse],
            error_mapper=enrich_companies_error_mapper,
            request_options=request_options,
        )

    def enrich_contacts(
        self,
        body: V3ContactsEnrichRequest | V3ContactsEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsEnrichResponse, EnrichContactsErrorBody]:
        """Reveal full contact data for contacts you've already found via Search Contacts.

        Pass up to 100 contact ``ids`` (from the search response). Use the ``reveal`` field to control what gets
        unlocked:
        - ``emails`` — work and personal email addresses
        - ``phones`` — mobile and direct phone numbers
        - Omit ``reveal`` to get both by default

        ---

        ### Waterfall Reveal Fall through to your enabled third-party providers when Lusha's own data has no match, for
        extra reach on hard-to-match contacts.

        If **Data Waterfall** is enabled on your account, with specific providers turned on under **Account >
        Waterfall**, the waterfall runs automatically on every Enrich Contacts call - you don't need to pass anything to
        trigger it.

        Pass ``waterfallEnabled: false`` to opt a specific call out:

        ```json "reveal": ["emails", "phones"], "waterfallEnabled": false
        ```

        - ``reveal`` controls **which fields** come back.
        - ``waterfallEnabled`` controls whether the waterfall runs for this call at all. Defaults to ``true`` whenever
            Data Waterfall is enabled on your account; pass ``false`` to disable it just for this call.
        - Provider order isn't configurable - Lusha manages that internally.
        - If Data Waterfall is off or no providers are enabled on your account, ``waterfallEnabled`` has no effect
            either way.
        ---
        > **Tip:** If ``canReveal.credits`` is ``0`` in the search response, that data has already been revealed for
            your account — re-enriching it is free.

        > **Billing:** Charged per revealed field (email or phone) via per-datapoint pricing.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Work email / Phone columns. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactsEnrichRequest | V3ContactsEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ContactsEnrichResponse],
            error_mapper=enrich_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncEnrichWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def enrich_companies(
        self,
        body: V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesEnrichResponse, EnrichCompaniesErrorBody]:
        """Reveal full company data for companies you've already found via Search Companies.

        Pass up to 100 company ``ids`` (from the search response). Each enriched result includes:
        - Firmographics: size, revenue range, year founded, company type
        - Industry: primary industry, sub-industry, SIC/NAICS codes
        - Locations: HQ and additional office sites
        - Technologies, funding rounds, buyer intent topics
        - LinkedIn followers, logo URL, social links

        > **Billing:** Charged per successful result via the ``reveal_company`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            relevant enrichment columns. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3CompaniesEnrichResponse],
            error_mapper=enrich_companies_error_mapper,
            request_options=request_options,
        )

    async def enrich_contacts(
        self,
        body: V3ContactsEnrichRequest | V3ContactsEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsEnrichResponse, EnrichContactsErrorBody]:
        """Reveal full contact data for contacts you've already found via Search Contacts.

        Pass up to 100 contact ``ids`` (from the search response). Use the ``reveal`` field to control what gets
        unlocked:
        - ``emails`` — work and personal email addresses
        - ``phones`` — mobile and direct phone numbers
        - Omit ``reveal`` to get both by default

        ---

        ### Waterfall Reveal Fall through to your enabled third-party providers when Lusha's own data has no match, for
        extra reach on hard-to-match contacts.

        If **Data Waterfall** is enabled on your account, with specific providers turned on under **Account >
        Waterfall**, the waterfall runs automatically on every Enrich Contacts call - you don't need to pass anything to
        trigger it.

        Pass ``waterfallEnabled: false`` to opt a specific call out:

        ```json "reveal": ["emails", "phones"], "waterfallEnabled": false
        ```

        - ``reveal`` controls **which fields** come back.
        - ``waterfallEnabled`` controls whether the waterfall runs for this call at all. Defaults to ``true`` whenever
            Data Waterfall is enabled on your account; pass ``false`` to disable it just for this call.
        - Provider order isn't configurable - Lusha manages that internally.
        - If Data Waterfall is off or no providers are enabled on your account, ``waterfallEnabled`` has no effect
            either way.
        ---
        > **Tip:** If ``canReveal.credits`` is ``0`` in the search response, that data has already been revealed for
            your account — re-enriching it is free.

        > **Billing:** Charged per revealed field (email or phone) via per-datapoint pricing.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Work email / Phone columns. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactsEnrichRequest | V3ContactsEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ContactsEnrichResponse],
            error_mapper=enrich_contacts_error_mapper,
            request_options=request_options,
        )
