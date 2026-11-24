from __future__ import annotations

from typing import Any
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
from ..errors.get_api_v1_essentials_by_ein_error import (
    GetApiV1EssentialsByEinErrorBody,
    get_api_v1_essentials_by_ein_error_mapper,
)
from ..errors.get_api_v1_premier_by_ein_error import (
    GetApiV1PremierByEinErrorBody,
    get_api_v1_premier_by_ein_error_mapper,
)
from ..errors.get_api_v1_screening_by_ein_error import (
    GetApiV1ScreeningByEinErrorBody,
    get_api_v1_screening_by_ein_error_mapper,
)
from ..errors.get_compliance_bulk_error import GetComplianceBulkErrorBody, get_compliance_bulk_error_mapper
from ..errors.get_compliance_error import GetComplianceErrorBody, get_compliance_error_mapper
from ..errors.get_essentials_error import GetEssentialsErrorBody, get_essentials_error_mapper
from ..errors.get_gov_funding_error import GetGovFundingErrorBody, get_gov_funding_error_mapper
from ..errors.get_premier_error import GetPremierErrorBody, get_premier_error_mapper
from ..errors.search_essentials_error import SearchEssentialsErrorBody, search_essentials_error_mapper
from ..errors.verify_compliance_report_error import (
    VerifyComplianceReportErrorBody,
    verify_compliance_report_error_mapper,
)
from ..models.bulk_compliance import BulkCompliance, BulkComplianceDict
from ..models.bulk_compliance_response import BulkComplianceResponse
from ..models.compliance_response import ComplianceResponse
from ..models.enums.example1 import Example1OrStr
from ..models.enums.example_plinth_us_grants_data_organizations_api import (
    ExamplePlinthUsGrantsDataOrganizationsApiOrStr,
)
from ..models.enums.format import FormatOrStr
from ..models.essentials_response import EssentialsResponse
from ..models.essentials_search import EssentialsSearch, EssentialsSearchDict
from ..models.essentials_search_response import EssentialsSearchResponse
from ..models.gov_funding_response import GovFundingResponse
from ..models.premier_response import PremierResponse
from ..models.verify_report import VerifyReport, VerifyReportDict
from ..server.server import Server


class Organizations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationsWithRawResponse(client, server, auth)

    def get_api_v1_essentials_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EssentialsResponse:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identity and headline financials for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_essentials_by_ein(
                ein, format_=format_, example=example, request_options=request_options
            ),
        )

    def get_api_v1_premier_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PremierResponse:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The full record for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_premier_by_ein(
                ein, format_=format_, example=example, request_options=request_options
            ),
        )

    def get_api_v1_screening_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        compat: str | None = None,
        example: ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ComplianceResponse:
        """Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus name screens
        against the OFAC sanctions lists (SDN and Consolidated, primary and alias names), the Internal Revenue
        Bulletin's §170 deletion announcements, and California registration (AG Registry + FTB). Every screen reports
        whether it RAN: a source that is unavailable comes back ``not screened``, never ``clear``.

        ``compliance.reliance`` carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS publishes for
        relying on EO BMF data from a third party — element by element, with the EO BMF Extract revision date and
        whether it is the current one. ``?format=pdf`` returns the same screen as a one-page retainable report for the
        grant file (paid keys; §8.01(2) puts the retention obligation on the grantor).

        The name screens are triage signals, not determinations.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A compliance screen for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_screening_by_ein(
                ein, format_=format_, compat=compat, example=example, request_options=request_options
            ),
        )

    def get_compliance(self, ein: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury
        SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an
        entity NAME screen, not a sanctions determination.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_compliance(ein, request_options=request_options))

    def get_compliance_bulk(
        self,
        body: BulkCompliance | BulkComplianceDict,
        *,
        compat: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkComplianceResponse:
        """The bulk form of ``/screening/{ein}``, running byte-identical logic per EIN — a bulk screen that disagreed
        with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this
        takes 100. Costs ONE call from your monthly allowance, not one per EIN. ``report_date`` and ``sources`` are
        returned once for the batch, since every row is screened against the same reference files.

        Args:
            body: The request body.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screens for every valid EIN in the request.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_compliance_bulk(body, compat=compat, request_options=request_options))

    def get_essentials(self, ein: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_essentials(ein, request_options=request_options))

    def get_gov_funding(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        fiscal_year: int | None = None,
        kind: str | None = None,
        state: str | None = None,
        limit: int | None = 200,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GovFundingResponse:
        """Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state
        rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is
        nine checkbooks, not national.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            fiscal_year: Restrict to one federal fiscal year of awards (October–September), e.g. 2023.
            kind: ``federal`` for USAspending awards or ``state`` for the state checkbooks; omit for both.
            state: Two-letter state code, for the state-checkbook side only — whose books the money came from, not where
                the recipient sits.
            limit: Maximum rows to return.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Federal and state government funding for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_gov_funding(
                ein,
                format_=format_,
                fiscal_year=fiscal_year,
                kind=kind,
                state=state,
                limit=limit,
                example=example,
                request_options=request_options,
            ),
        )

    def get_premier(self, ein: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_premier(ein, request_options=request_options))

    def search_essentials(
        self,
        body: EssentialsSearch | EssentialsSearchDict,
        *,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EssentialsSearchResponse:
        """Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds:
        ``search_terms``, ``from``, ``size``, ``filters``, ``sort``. This is the endpoint that corresponds to Candid's
        ``/essentials/v4`` — ``GET /api/essentials/{ein}`` is the single-record lookup, and mapping a search API onto it
        is the migration mistake worth avoiding.

        Use ``jurisdiction=ca`` for Canadian organizations; the default is ``us``. Financial filters use the filing
        currency, identified in ``x_plinth.dataset``; currencies are never combined. Filters cover geography, IRS
        classification and financial ranges, all read from the organization's own filing. Candid's PCS subject,
        profile-participation and demographic filters have no counterpart; send one and it comes back named in
        ``x_plinth.warnings`` rather than being dropped.

        Args:
            body: The request body.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Organizations matching the search.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.search_essentials(body, jurisdiction=jurisdiction, request_options=request_options)
        )

    def verify_compliance_report(
        self, body: VerifyReport | VerifyReportDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Recomputes the identifier and checks the signature over a compliance report you kept. **Keyless and
        unmetered** — a grantor confirming a filed document should not spend a screen doing it, and their auditor should
        not need a credential at all.

        Reports also state ``report_format``, which versions what the document ASSERTS: which limitations apply, which
        section governs a conflict, what the summary concludes. An older format is not wrong, but today's may describe
        the same organization differently, and the response says which you are holding.

        Offline verification is equivalent and needs nothing from us: the Ed25519 public key is published on ``/meta``.
        Note this is a detached signature over the report data, not an X.509/PAdES PDF signature — a PDF reader shows no
        signature panel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.verify_compliance_report(body, request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationsWithRawResponse:
        return self._with_raw_response


class AsyncOrganizations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationsWithRawResponse(client, server, auth)

    async def get_api_v1_essentials_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EssentialsResponse:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identity and headline financials for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_essentials_by_ein(
                ein, format_=format_, example=example, request_options=request_options
            ),
        )

    async def get_api_v1_premier_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PremierResponse:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The full record for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_premier_by_ein(
                ein, format_=format_, example=example, request_options=request_options
            ),
        )

    async def get_api_v1_screening_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        compat: str | None = None,
        example: ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ComplianceResponse:
        """Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus name screens
        against the OFAC sanctions lists (SDN and Consolidated, primary and alias names), the Internal Revenue
        Bulletin's §170 deletion announcements, and California registration (AG Registry + FTB). Every screen reports
        whether it RAN: a source that is unavailable comes back ``not screened``, never ``clear``.

        ``compliance.reliance`` carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS publishes for
        relying on EO BMF data from a third party — element by element, with the EO BMF Extract revision date and
        whether it is the current one. ``?format=pdf`` returns the same screen as a one-page retainable report for the
        grant file (paid keys; §8.01(2) puts the retention obligation on the grantor).

        The name screens are triage signals, not determinations.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A compliance screen for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_screening_by_ein(
                ein, format_=format_, compat=compat, example=example, request_options=request_options
            ),
        )

    async def get_compliance(self, ein: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury
        SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an
        entity NAME screen, not a sanctions determination.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.get_compliance(ein, request_options=request_options))

    async def get_compliance_bulk(
        self,
        body: BulkCompliance | BulkComplianceDict,
        *,
        compat: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkComplianceResponse:
        """The bulk form of ``/screening/{ein}``, running byte-identical logic per EIN — a bulk screen that disagreed
        with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this
        takes 100. Costs ONE call from your monthly allowance, not one per EIN. ``report_date`` and ``sources`` are
        returned once for the batch, since every row is screened against the same reference files.

        Args:
            body: The request body.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screens for every valid EIN in the request.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_compliance_bulk(body, compat=compat, request_options=request_options)
        )

    async def get_essentials(self, ein: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.get_essentials(ein, request_options=request_options))

    async def get_gov_funding(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        fiscal_year: int | None = None,
        kind: str | None = None,
        state: str | None = None,
        limit: int | None = 200,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GovFundingResponse:
        """Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state
        rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is
        nine checkbooks, not national.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            fiscal_year: Restrict to one federal fiscal year of awards (October–September), e.g. 2023.
            kind: ``federal`` for USAspending awards or ``state`` for the state checkbooks; omit for both.
            state: Two-letter state code, for the state-checkbook side only — whose books the money came from, not where
                the recipient sits.
            limit: Maximum rows to return.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Federal and state government funding for one organization.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_gov_funding(
                ein,
                format_=format_,
                fiscal_year=fiscal_year,
                kind=kind,
                state=state,
                limit=limit,
                example=example,
                request_options=request_options,
            ),
        )

    async def get_premier(self, ein: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.get_premier(ein, request_options=request_options))

    async def search_essentials(
        self,
        body: EssentialsSearch | EssentialsSearchDict,
        *,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EssentialsSearchResponse:
        """Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds:
        ``search_terms``, ``from``, ``size``, ``filters``, ``sort``. This is the endpoint that corresponds to Candid's
        ``/essentials/v4`` — ``GET /api/essentials/{ein}`` is the single-record lookup, and mapping a search API onto it
        is the migration mistake worth avoiding.

        Use ``jurisdiction=ca`` for Canadian organizations; the default is ``us``. Financial filters use the filing
        currency, identified in ``x_plinth.dataset``; currencies are never combined. Filters cover geography, IRS
        classification and financial ranges, all read from the organization's own filing. Candid's PCS subject,
        profile-participation and demographic filters have no counterpart; send one and it comes back named in
        ``x_plinth.warnings`` rather than being dropped.

        Args:
            body: The request body.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Organizations matching the search.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.search_essentials(
                body, jurisdiction=jurisdiction, request_options=request_options
            ),
        )

    async def verify_compliance_report(
        self, body: VerifyReport | VerifyReportDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Recomputes the identifier and checks the signature over a compliance report you kept. **Keyless and
        unmetered** — a grantor confirming a filed document should not spend a screen doing it, and their auditor should
        not need a credential at all.

        Reports also state ``report_format``, which versions what the document ASSERTS: which limitations apply, which
        section governs a conflict, what the summary concludes. An older format is not wrong, but today's may describe
        the same organization differently, and the response says which you are holding.

        Offline verification is equivalent and needs nothing from us: the Ed25519 public key is published on ``/meta``.
        Note this is a detached signature over the report data, not an X.509/PAdES PDF signature — a PDF reader shows no
        signature panel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.verify_compliance_report(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrganizationsWithRawResponse:
        return self._with_raw_response


class OrganizationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_essentials_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EssentialsResponse, GetApiV1EssentialsByEinErrorBody]:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/essentials/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_), param[Example1OrStr | None]("example", example)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EssentialsResponse],
            error_mapper=get_api_v1_essentials_by_ein_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_premier_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PremierResponse, GetApiV1PremierByEinErrorBody]:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/premier/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_), param[Example1OrStr | None]("example", example)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PremierResponse],
            error_mapper=get_api_v1_premier_by_ein_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_screening_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        compat: str | None = None,
        example: ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ComplianceResponse, GetApiV1ScreeningByEinErrorBody]:
        """Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus name screens
        against the OFAC sanctions lists (SDN and Consolidated, primary and alias names), the Internal Revenue
        Bulletin's §170 deletion announcements, and California registration (AG Registry + FTB). Every screen reports
        whether it RAN: a source that is unavailable comes back ``not screened``, never ``clear``.

        ``compliance.reliance`` carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS publishes for
        relying on EO BMF data from a third party — element by element, with the EO BMF Extract revision date and
        whether it is the current one. ``?format=pdf`` returns the same screen as a one-page retainable report for the
        grant file (paid keys; §8.01(2) puts the retention obligation on the grantor).

        The name screens are triage signals, not determinations.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/screening/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[str | None]("compat", compat),
                param[ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ComplianceResponse],
            error_mapper=get_api_v1_screening_by_ein_error_mapper,
            request_options=request_options,
        )

    def get_compliance(
        self, ein: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetComplianceErrorBody]:
        """Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury
        SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an
        entity NAME screen, not a sanctions determination.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/compliance/{ein}"),
            path_params=[param[str]("ein", ein)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_compliance_error_mapper,
            request_options=request_options,
        )

    def get_compliance_bulk(
        self,
        body: BulkCompliance | BulkComplianceDict,
        *,
        compat: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkComplianceResponse, GetComplianceBulkErrorBody]:
        """The bulk form of ``/screening/{ein}``, running byte-identical logic per EIN — a bulk screen that disagreed
        with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this
        takes 100. Costs ONE call from your monthly allowance, not one per EIN. ``report_date`` and ``sources`` are
        returned once for the batch, since every row is screened against the same reference files.

        Args:
            body: The request body.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/screening/bulk"),
            query_params=[param[str | None]("compat", compat)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkCompliance | BulkComplianceDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[BulkComplianceResponse],
            error_mapper=get_compliance_bulk_error_mapper,
            request_options=request_options,
        )

    def get_essentials(
        self, ein: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetEssentialsErrorBody]:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/essentials/{ein}"),
            path_params=[param[str]("ein", ein)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_essentials_error_mapper,
            request_options=request_options,
        )

    def get_gov_funding(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        fiscal_year: int | None = None,
        kind: str | None = None,
        state: str | None = None,
        limit: int | None = 200,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GovFundingResponse, GetGovFundingErrorBody]:
        """Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state
        rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is
        nine checkbooks, not national.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            fiscal_year: Restrict to one federal fiscal year of awards (October–September), e.g. 2023.
            kind: ``federal`` for USAspending awards or ``state`` for the state checkbooks; omit for both.
            state: Two-letter state code, for the state-checkbook side only — whose books the money came from, not where
                the recipient sits.
            limit: Maximum rows to return.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/gov-funding/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[int | None]("fiscal_year", fiscal_year),
                param[str | None]("kind", kind),
                param[str | None]("state", state),
                param[int | None]("limit", limit),
                param[Example1OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[GovFundingResponse],
            error_mapper=get_gov_funding_error_mapper,
            request_options=request_options,
        )

    def get_premier(
        self, ein: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetPremierErrorBody]:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/premier/{ein}"),
            path_params=[param[str]("ein", ein)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_premier_error_mapper,
            request_options=request_options,
        )

    def search_essentials(
        self,
        body: EssentialsSearch | EssentialsSearchDict,
        *,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EssentialsSearchResponse, SearchEssentialsErrorBody]:
        """Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds:
        ``search_terms``, ``from``, ``size``, ``filters``, ``sort``. This is the endpoint that corresponds to Candid's
        ``/essentials/v4`` — ``GET /api/essentials/{ein}`` is the single-record lookup, and mapping a search API onto it
        is the migration mistake worth avoiding.

        Use ``jurisdiction=ca`` for Canadian organizations; the default is ``us``. Financial filters use the filing
        currency, identified in ``x_plinth.dataset``; currencies are never combined. Filters cover geography, IRS
        classification and financial ranges, all read from the organization's own filing. Candid's PCS subject,
        profile-participation and demographic filters have no counterpart; send one and it comes back named in
        ``x_plinth.warnings`` rather than being dropped.

        Args:
            body: The request body.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/essentials"),
            query_params=[param[str | None]("jurisdiction", jurisdiction)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EssentialsSearch | EssentialsSearchDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EssentialsSearchResponse],
            error_mapper=search_essentials_error_mapper,
            request_options=request_options,
        )

    def verify_compliance_report(
        self, body: VerifyReport | VerifyReportDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, VerifyComplianceReportErrorBody]:
        """Recomputes the identifier and checks the signature over a compliance report you kept. **Keyless and
        unmetered** — a grantor confirming a filed document should not spend a screen doing it, and their auditor should
        not need a credential at all.

        Reports also state ``report_format``, which versions what the document ASSERTS: which limitations apply, which
        section governs a conflict, what the summary concludes. An older format is not wrong, but today's may describe
        the same organization differently, and the response says which you are holding.

        Offline verification is equivalent and needs nothing from us: the Ed25519 public key is published on ``/meta``.
        Note this is a detached signature over the report data, not an X.509/PAdES PDF signature — a PDF reader shows no
        signature panel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/screening/verify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VerifyReport | VerifyReportDict](body),
            decoder=json_decoder[Any],
            error_mapper=verify_compliance_report_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_essentials_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EssentialsResponse, GetApiV1EssentialsByEinErrorBody]:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/essentials/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_), param[Example1OrStr | None]("example", example)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EssentialsResponse],
            error_mapper=get_api_v1_essentials_by_ein_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_premier_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PremierResponse, GetApiV1PremierByEinErrorBody]:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/premier/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_), param[Example1OrStr | None]("example", example)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PremierResponse],
            error_mapper=get_api_v1_premier_by_ein_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_screening_by_ein(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        compat: str | None = None,
        example: ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ComplianceResponse, GetApiV1ScreeningByEinErrorBody]:
        """Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus name screens
        against the OFAC sanctions lists (SDN and Consolidated, primary and alias names), the Internal Revenue
        Bulletin's §170 deletion announcements, and California registration (AG Registry + FTB). Every screen reports
        whether it RAN: a source that is unavailable comes back ``not screened``, never ``clear``.

        ``compliance.reliance`` carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS publishes for
        relying on EO BMF data from a third party — element by element, with the EO BMF Extract revision date and
        whether it is the current one. ``?format=pdf`` returns the same screen as a one-page retainable report for the
        grant file (paid keys; §8.01(2) puts the retention obligation on the grantor).

        The name screens are triage signals, not determinations.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/screening/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[str | None]("compat", compat),
                param[ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ComplianceResponse],
            error_mapper=get_api_v1_screening_by_ein_error_mapper,
            request_options=request_options,
        )

    async def get_compliance(
        self, ein: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetComplianceErrorBody]:
        """Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury
        SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an
        entity NAME screen, not a sanctions determination.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/compliance/{ein}"),
            path_params=[param[str]("ein", ein)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_compliance_error_mapper,
            request_options=request_options,
        )

    async def get_compliance_bulk(
        self,
        body: BulkCompliance | BulkComplianceDict,
        *,
        compat: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkComplianceResponse, GetComplianceBulkErrorBody]:
        """The bulk form of ``/screening/{ein}``, running byte-identical logic per EIN — a bulk screen that disagreed
        with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this
        takes 100. Costs ONE call from your monthly allowance, not one per EIN. ``report_date`` and ``sources`` are
        returned once for the batch, since every row is screened against the same reference files.

        Args:
            body: The request body.
            compat: Set to ``candid`` to render this record the way Candid's documentation describes it — notably
                booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or
                what they say.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/screening/bulk"),
            query_params=[param[str | None]("compat", compat)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkCompliance | BulkComplianceDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[BulkComplianceResponse],
            error_mapper=get_compliance_bulk_error_mapper,
            request_options=request_options,
        )

    async def get_essentials(
        self, ein: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetEssentialsErrorBody]:
        """Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/essentials/{ein}"),
            path_params=[param[str]("ein", ein)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_essentials_error_mapper,
            request_options=request_options,
        )

    async def get_gov_funding(
        self,
        ein: str,
        *,
        format_: FormatOrStr | None = None,
        fiscal_year: int | None = None,
        kind: str | None = None,
        state: str | None = None,
        limit: int | None = 200,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GovFundingResponse, GetGovFundingErrorBody]:
        """Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state
        rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is
        nine checkbooks, not national.

        Args:
            ein: Value sent with the request.
            format_: json (default) or xml.
            fiscal_year: Restrict to one federal fiscal year of awards (October–September), e.g. 2023.
            kind: ``federal`` for USAspending awards or ``state`` for the state checkbooks; omit for both.
            state: Two-letter state code, for the state-checkbook side only — whose books the money came from, not where
                the recipient sits.
            limit: Maximum rows to return.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/gov-funding/{ein}"),
            path_params=[param[str]("ein", ein)],
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[int | None]("fiscal_year", fiscal_year),
                param[str | None]("kind", kind),
                param[str | None]("state", state),
                param[int | None]("limit", limit),
                param[Example1OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[GovFundingResponse],
            error_mapper=get_gov_funding_error_mapper,
            request_options=request_options,
        )

    async def get_premier(
        self, ein: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetPremierErrorBody]:
        """Everything in essentials plus full financials and the resolved geographic service footprint.

        Args:
            ein: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/premier/{ein}"),
            path_params=[param[str]("ein", ein)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_premier_error_mapper,
            request_options=request_options,
        )

    async def search_essentials(
        self,
        body: EssentialsSearch | EssentialsSearchDict,
        *,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EssentialsSearchResponse, SearchEssentialsErrorBody]:
        """Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds:
        ``search_terms``, ``from``, ``size``, ``filters``, ``sort``. This is the endpoint that corresponds to Candid's
        ``/essentials/v4`` — ``GET /api/essentials/{ein}`` is the single-record lookup, and mapping a search API onto it
        is the migration mistake worth avoiding.

        Use ``jurisdiction=ca`` for Canadian organizations; the default is ``us``. Financial filters use the filing
        currency, identified in ``x_plinth.dataset``; currencies are never combined. Filters cover geography, IRS
        classification and financial ranges, all read from the organization's own filing. Candid's PCS subject,
        profile-participation and demographic filters have no counterpart; send one and it comes back named in
        ``x_plinth.warnings`` rather than being dropped.

        Args:
            body: The request body.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/essentials"),
            query_params=[param[str | None]("jurisdiction", jurisdiction)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EssentialsSearch | EssentialsSearchDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EssentialsSearchResponse],
            error_mapper=search_essentials_error_mapper,
            request_options=request_options,
        )

    async def verify_compliance_report(
        self, body: VerifyReport | VerifyReportDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, VerifyComplianceReportErrorBody]:
        """Recomputes the identifier and checks the signature over a compliance report you kept. **Keyless and
        unmetered** — a grantor confirming a filed document should not spend a screen doing it, and their auditor should
        not need a credential at all.

        Reports also state ``report_format``, which versions what the document ASSERTS: which limitations apply, which
        section governs a conflict, what the summary concludes. An older format is not wrong, but today's may describe
        the same organization differently, and the response says which you are holding.

        Offline verification is equivalent and needs nothing from us: the Ed25519 public key is published on ``/meta``.
        Note this is a detached signature over the report data, not an X.509/PAdES PDF signature — a PDF reader shows no
        signature panel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/screening/verify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VerifyReport | VerifyReportDict](body),
            decoder=async_json_decoder[Any],
            error_mapper=verify_compliance_report_error_mapper,
            request_options=request_options,
        )
