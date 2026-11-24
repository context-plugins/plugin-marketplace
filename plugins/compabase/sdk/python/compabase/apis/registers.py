from __future__ import annotations

from typing import Any

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
from ..errors.get_ceidg_nip_by_nip_nfz_queues_error import (
    GetCeidgNipByNipNfzQueuesErrorBody,
    get_ceidg_nip_by_nip_nfz_queues_error_mapper,
)
from ..errors.get_ceidg_nip_by_nip_procurement_counterparties_error import (
    GetCeidgNipByNipProcurementCounterpartiesErrorBody,
    get_ceidg_nip_by_nip_procurement_counterparties_error_mapper,
)
from ..errors.get_ceidg_nip_by_nip_website_facts_error import (
    GetCeidgNipByNipWebsiteFactsErrorBody,
    get_ceidg_nip_by_nip_website_facts_error_mapper,
)
from ..errors.get_companies_krs_by_krs_beneficiaries_error import (
    GetCompaniesKrsByKrsBeneficiariesErrorBody,
    get_companies_krs_by_krs_beneficiaries_error_mapper,
)
from ..errors.get_companies_krs_by_krs_court_gazette_error import (
    GetCompaniesKrsByKrsCourtGazetteErrorBody,
    get_companies_krs_by_krs_court_gazette_error_mapper,
)
from ..errors.get_companies_krs_by_krs_energy_licenses_error import (
    GetCompaniesKrsByKrsEnergyLicensesErrorBody,
    get_companies_krs_by_krs_energy_licenses_error_mapper,
)
from ..errors.get_companies_krs_by_krs_eu_funds_error import (
    GetCompaniesKrsByKrsEuFundsErrorBody,
    get_companies_krs_by_krs_eu_funds_error_mapper,
)
from ..errors.get_companies_krs_by_krs_eu_grants_error import (
    GetCompaniesKrsByKrsEuGrantsErrorBody,
    get_companies_krs_by_krs_eu_grants_error_mapper,
)
from ..errors.get_companies_krs_by_krs_filing_timeliness_error import (
    GetCompaniesKrsByKrsFilingTimelinessErrorBody,
    get_companies_krs_by_krs_filing_timeliness_error_mapper,
)
from ..errors.get_companies_krs_by_krs_financial_licenses_error import (
    GetCompaniesKrsByKrsFinancialLicensesErrorBody,
    get_companies_krs_by_krs_financial_licenses_error_mapper,
)
from ..errors.get_companies_krs_by_krs_gpw_error import (
    GetCompaniesKrsByKrsGpwErrorBody,
    get_companies_krs_by_krs_gpw_error_mapper,
)
from ..errors.get_companies_krs_by_krs_insolvency_error import (
    GetCompaniesKrsByKrsInsolvencyErrorBody,
    get_companies_krs_by_krs_insolvency_error_mapper,
)
from ..errors.get_companies_krs_by_krs_nfz_contracts_error import (
    GetCompaniesKrsByKrsNfzContractsErrorBody,
    get_companies_krs_by_krs_nfz_contracts_error_mapper,
)
from ..errors.get_companies_krs_by_krs_nfz_queues_error import (
    GetCompaniesKrsByKrsNfzQueuesErrorBody,
    get_companies_krs_by_krs_nfz_queues_error_mapper,
)
from ..errors.get_companies_krs_by_krs_procurement_counterparties_error import (
    GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody,
    get_companies_krs_by_krs_procurement_counterparties_error_mapper,
)
from ..errors.get_companies_krs_by_krs_public_aid_error import (
    GetCompaniesKrsByKrsPublicAidErrorBody,
    get_companies_krs_by_krs_public_aid_error_mapper,
)
from ..errors.get_companies_krs_by_krs_real_estate_error import (
    GetCompaniesKrsByKrsRealEstateErrorBody,
    get_companies_krs_by_krs_real_estate_error_mapper,
)
from ..errors.get_companies_krs_by_krs_sanctions_error import (
    GetCompaniesKrsByKrsSanctionsErrorBody,
    get_companies_krs_by_krs_sanctions_error_mapper,
)
from ..errors.get_companies_krs_by_krs_secured_liabilities_error import (
    GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody,
    get_companies_krs_by_krs_secured_liabilities_error_mapper,
)
from ..errors.get_companies_krs_by_krs_tenders_error import (
    GetCompaniesKrsByKrsTendersErrorBody,
    get_companies_krs_by_krs_tenders_error_mapper,
)
from ..errors.get_companies_krs_by_krs_waste_registry_error import (
    GetCompaniesKrsByKrsWasteRegistryErrorBody,
    get_companies_krs_by_krs_waste_registry_error_mapper,
)
from ..errors.get_companies_krs_by_krs_website_facts_error import (
    GetCompaniesKrsByKrsWebsiteFactsErrorBody,
    get_companies_krs_by_krs_website_facts_error_mapper,
)
from ..models.companies_krs_beneficiaries_response import CompaniesKrsBeneficiariesResponse
from ..models.companies_krs_court_gazette_response import CompaniesKrsCourtGazetteResponse
from ..models.companies_krs_energy_licenses_response import CompaniesKrsEnergyLicensesResponse
from ..models.companies_krs_eu_funds_response import CompaniesKrsEuFundsResponse
from ..models.companies_krs_eu_grants_response import CompaniesKrsEuGrantsResponse
from ..models.companies_krs_filing_timeliness_response import CompaniesKrsFilingTimelinessResponse
from ..models.companies_krs_financial_licenses_response import CompaniesKrsFinancialLicensesResponse
from ..models.companies_krs_insolvency_response import CompaniesKrsInsolvencyResponse
from ..models.companies_krs_procurement_counterparties_response import CompaniesKrsProcurementCounterpartiesResponse
from ..models.companies_krs_public_aid_response import CompaniesKrsPublicAidResponse
from ..models.companies_krs_real_estate_response import CompaniesKrsRealEstateResponse
from ..models.companies_krs_sanctions_response import CompaniesKrsSanctionsResponse
from ..models.companies_krs_secured_liabilities_response import CompaniesKrsSecuredLiabilitiesResponse
from ..models.companies_krs_tenders_response import CompaniesKrsTendersResponse
from ..models.companies_krs_waste_registry_response import CompaniesKrsWasteRegistryResponse
from ..server.server import Server


class Registers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RegistersWithRawResponse(client, server, auth)

    def get_ceidg_nip_by_nip_nfz_queues(
        self,
        nip: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and any other
        provider) from the NFZ "Terminy leczenia" API: every NFZ-funded service it runs a waiting list for, per location
        — NFZ forecast waiting time (stable and urgent case), people waiting, average wait, address, phone, children,
        accessibility. Sorted by shortest wait. Refreshed twice a week. The forecast is not a booking. Same data as MCP
        ``get_company_nfz_queues``.

        Args:
            nip: Value sent with the request.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NFZ waiting lists for the NIP.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_ceidg_nip_by_nip_nfz_queues(
                nip, service=service, town=town, limit=limit, request_options=request_options
            ),
        )

    def get_ceidg_nip_by_nip_procurement_counterparties(
        self, nip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP,
        from BZP, TED and CRU. Same data as MCP ``get_company_procurement_counterparties``. One request = one API call
        from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Counterparties.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_ceidg_nip_by_nip_procurement_counterparties(
                nip, request_options=request_options
            ),
        )

    def get_ceidg_nip_by_nip_website_facts(
        self, nip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Same as ``/companies/krs/{krs}/website-facts`` for sole proprietors with a public profile (and any company)
        by NIP. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Website facts.

        Raises:
            ApiError: Resource not found. Missing, invalid, or revoked API key. Rate limit (120 requests per minute per
                key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before retrying. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_ceidg_nip_by_nip_website_facts(nip, request_options=request_options))

    def get_companies_krs_by_krs_beneficiaries(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsBeneficiariesResponse:
        """Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) — name, nationality,
        country of residence and nature/extent of control. PESEL is never returned (birth year only). Sole proprietors
        are not in CRBR. Same data as MCP ``get_company_beneficiaries``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CRBR filing with the list of beneficial owners.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_beneficiaries(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_court_gazette(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsCourtGazetteResponse:
        """Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i Gospodarczy) —
        creditor calls, dissolution, mergers, liquidation, transformations — matched by KRS or NIP. Same data as MCP
        ``get_company_court_gazette``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            MSiG notices, newest first.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_court_gazette(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_energy_licenses(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsEnergyLicensesResponse:
        """Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with validity dates
        and pending applications. Keyed by the company's NIP. Same data as MCP ``get_company_energy_licenses``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            URE concessions (null when the company holds none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_energy_licenses(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_eu_funds(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsEuFundsResponse:
        """EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU co-financing,
        total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission grants, not SUDOP state aid. Same
        data as MCP ``get_company_eu_funds``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            European Funds projects of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_eu_funds(krs, request_options=request_options))

    def get_companies_krs_by_krs_eu_grants(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsEuGrantsResponse:
        """European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other direct/indirect
        management grants and contracts. Keyed by NIP (VAT). Same data as MCP ``get_company_procurement``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            FTS awards of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_eu_grants(krs, request_options=request_options))

    def get_companies_krs_by_krs_filing_timeliness(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsFilingTimelinessResponse:
        """For each recent financial year: period end, the date the annual financial statement was filed (KRS register
        entries and the Financial Document Repository), the statutory deadline (year end + 6 months + 15 days; +3 months
        for 2019–2020), days late or not filed, and whether a statutory auditor's report was filed. Also
        ``overdue_year`` when the latest statement is past its deadline and missing. Same data as MCP
        ``get_company_filing_timeliness``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Filing timeliness (null when the company has never filed a financial statement).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_filing_timeliness(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_financial_licenses(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsFinancialLicensesResponse:
        """Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment / e-money
        institutions, investment firms, insurers, lending institutions and agents, with KNF number, status,
        registration, decision and strike-off dates and services. Keyed by NIP. Same data as MCP
        ``get_company_financial_supervision``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            KNF entries (null when the company has none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_financial_licenses(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_gpw(
        self,
        krs: str,
        *,
        include: str | None = None,
        series_limit: int | None = 250,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect: ticker, ISIN,
        last close and change, market cap, shares, EPS, P/E, dividend and yield, plus a few recent daily bars. Quotes
        delayed ~15 minutes, in PLN.

        Not an official GPW licensed feed. ``gpw`` is ``null`` when the company is not listed / not matched.

        Optional history (still capped — never the full MAX chart):
        - ``include=series`` — daily OHLCV, default 250 bars, max 2000 (``series_limit``)
        - ``include=intraday`` — 1-minute bars for the last 10 calendar days
        - combine as ``include=series,intraday``

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            include: Comma-separated extras. Supported values ``series``, ``intraday``.
            series_limit: Daily bars when ``include`` contains ``series``. Ignored otherwise.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Listing snapshot (``gpw`` may be null).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_gpw(
                krs, include=include, series_limit=series_limit, request_options=request_options
            ),
        )

    def get_companies_krs_by_krs_insolvency(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsInsolvencyResponse:
        """Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr Zadłużonych,
        KRZ): case numbers, court, proceeding type and status, key dates. Same data as MCP
        ``get_company_debt_registry``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            KRZ proceedings of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_insolvency(krs, request_options=request_options))

    def get_companies_krs_by_krs_nfz_contracts(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of
        care with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP
        ``get_company_nfz_contracts``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NFZ contracts (``nfz`` is null when the company has no NFZ contracts).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_nfz_contracts(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_nfz_queues(
        self,
        krs: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy leczenia" API: every
        NFZ-funded service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent
        case), people waiting, average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed
        twice a week. The forecast is not a booking. Same data as MCP ``get_company_nfz_queues``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NFZ waiting lists (``queues`` is null when the provider has none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_nfz_queues(
                krs, service=service, town=town, limit=limit, request_options=request_options
            ),
        )

    def get_companies_krs_by_krs_procurement_counterparties(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsProcurementCounterpartiesResponse:
        """Buyers the company most often wins public contracts from, contractors it most often awards contracts to, and
        consortium partners — from BZP, TED and CRU. Each with KRS (when known), number of contracts, total value
        (PLN/EUR/USD) and years; top 20 per role plus totals. Same data as MCP
        ``get_company_procurement_counterparties``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Counterparties (null when the company has no public procurement).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_procurement_counterparties(
                krs, request_options=request_options
            ),
        )

    def get_companies_krs_by_krs_public_aid(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsPublicAidResponse:
        """Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid measure, purpose
        and date. Keyed by NIP. Same data as MCP ``get_company_public_aid``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public aid cases of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_public_aid(krs, request_options=request_options))

    def get_companies_krs_by_krs_real_estate(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsRealEstateResponse:
        """Company real estate from the latest financial statement (period ending 2025+): land incl. perpetual usufruct,
        buildings and premises, investment property (book values in PLN/EUR/USD), plus properties named as mortgage
        collateral (address, land-register KW numbers, creditor). Micro and small entities have no such breakdown. Same
        data as MCP ``get_company_real_estate``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Real estate (null when the balance sheet shows none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_real_estate(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_sanctions(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsSanctionsResponse:
        """Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing for a KRS company
        matched by KRS, NIP, or REGON.

        ``sanctions`` is ``null`` when the company is not on the list. When present, ``entries`` include the name on the
        list, listed and removed dates, restrictive measures, and the legal grounds. Polish text stays in ``measures`` /
        ``justification``; English and German are in ``measures_i18n`` / ``justification_i18n``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sanctions payload. ``sanctions`` is null when the company is not listed.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_sanctions(krs, request_options=request_options))

    def get_companies_krs_by_krs_secured_liabilities(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsSecuredLiabilitiesResponse:
        """Secured liabilities disclosed in the notes to the latest financial statement (period ending 2025+):
        mortgages, registered / financial pledges, transfers of ownership, assignments — with creditor, amount, secured
        debt, asset and land-register (KW) numbers. Same data as MCP ``get_company_secured_liabilities``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Secured liabilities (null when nothing is disclosed).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_secured_liabilities(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_tenders(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsTendersResponse:
        """Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP) and
        EU-threshold tenders from TED — as contractor (awards won) and as contracting authority. Returns ``national``
        and ``eu`` blocks. Same data as MCP ``get_company_public_tenders / get_company_eu_tenders``. One request = one
        API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``national`` (BZP) and ``eu`` (TED) procurement of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_tenders(krs, request_options=request_options))

    def get_companies_krs_by_krs_waste_registry(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesKrsWasteRegistryResponse:
        """BDO register (waste, products and packaging) — registration number, number of sites, activity flags and
        decisions with issue and validity dates. Keyed by NIP. Same data as MCP ``get_company_waste_registry``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            BDO entry (null when the company is not registered).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_waste_registry(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_website_facts(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE), certifications, website
        technology and clients/partners linked from the site (matched to KRS companies), read from the company's own
        website. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Website facts (null when nothing has been read from the website).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_website_facts(krs, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> RegistersWithRawResponse:
        return self._with_raw_response


class AsyncRegisters:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRegistersWithRawResponse(client, server, auth)

    async def get_ceidg_nip_by_nip_nfz_queues(
        self,
        nip: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and any other
        provider) from the NFZ "Terminy leczenia" API: every NFZ-funded service it runs a waiting list for, per location
        — NFZ forecast waiting time (stable and urgent case), people waiting, average wait, address, phone, children,
        accessibility. Sorted by shortest wait. Refreshed twice a week. The forecast is not a booking. Same data as MCP
        ``get_company_nfz_queues``.

        Args:
            nip: Value sent with the request.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NFZ waiting lists for the NIP.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_ceidg_nip_by_nip_nfz_queues(
                nip, service=service, town=town, limit=limit, request_options=request_options
            ),
        )

    async def get_ceidg_nip_by_nip_procurement_counterparties(
        self, nip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP,
        from BZP, TED and CRU. Same data as MCP ``get_company_procurement_counterparties``. One request = one API call
        from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Counterparties.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_ceidg_nip_by_nip_procurement_counterparties(
                nip, request_options=request_options
            ),
        )

    async def get_ceidg_nip_by_nip_website_facts(
        self, nip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Same as ``/companies/krs/{krs}/website-facts`` for sole proprietors with a public profile (and any company)
        by NIP. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Website facts.

        Raises:
            ApiError: Resource not found. Missing, invalid, or revoked API key. Rate limit (120 requests per minute per
                key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before retrying. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_ceidg_nip_by_nip_website_facts(nip, request_options=request_options)
        )

    async def get_companies_krs_by_krs_beneficiaries(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsBeneficiariesResponse:
        """Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) — name, nationality,
        country of residence and nature/extent of control. PESEL is never returned (birth year only). Sole proprietors
        are not in CRBR. Same data as MCP ``get_company_beneficiaries``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CRBR filing with the list of beneficial owners.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_beneficiaries(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_court_gazette(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsCourtGazetteResponse:
        """Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i Gospodarczy) —
        creditor calls, dissolution, mergers, liquidation, transformations — matched by KRS or NIP. Same data as MCP
        ``get_company_court_gazette``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            MSiG notices, newest first.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_court_gazette(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_energy_licenses(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsEnergyLicensesResponse:
        """Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with validity dates
        and pending applications. Keyed by the company's NIP. Same data as MCP ``get_company_energy_licenses``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            URE concessions (null when the company holds none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_energy_licenses(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_eu_funds(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsEuFundsResponse:
        """EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU co-financing,
        total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission grants, not SUDOP state aid. Same
        data as MCP ``get_company_eu_funds``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            European Funds projects of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_eu_funds(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_eu_grants(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsEuGrantsResponse:
        """European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other direct/indirect
        management grants and contracts. Keyed by NIP (VAT). Same data as MCP ``get_company_procurement``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            FTS awards of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_eu_grants(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_filing_timeliness(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsFilingTimelinessResponse:
        """For each recent financial year: period end, the date the annual financial statement was filed (KRS register
        entries and the Financial Document Repository), the statutory deadline (year end + 6 months + 15 days; +3 months
        for 2019–2020), days late or not filed, and whether a statutory auditor's report was filed. Also
        ``overdue_year`` when the latest statement is past its deadline and missing. Same data as MCP
        ``get_company_filing_timeliness``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Filing timeliness (null when the company has never filed a financial statement).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_filing_timeliness(
                krs, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_financial_licenses(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsFinancialLicensesResponse:
        """Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment / e-money
        institutions, investment firms, insurers, lending institutions and agents, with KNF number, status,
        registration, decision and strike-off dates and services. Keyed by NIP. Same data as MCP
        ``get_company_financial_supervision``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            KNF entries (null when the company has none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_financial_licenses(
                krs, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_gpw(
        self,
        krs: str,
        *,
        include: str | None = None,
        series_limit: int | None = 250,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect: ticker, ISIN,
        last close and change, market cap, shares, EPS, P/E, dividend and yield, plus a few recent daily bars. Quotes
        delayed ~15 minutes, in PLN.

        Not an official GPW licensed feed. ``gpw`` is ``null`` when the company is not listed / not matched.

        Optional history (still capped — never the full MAX chart):
        - ``include=series`` — daily OHLCV, default 250 bars, max 2000 (``series_limit``)
        - ``include=intraday`` — 1-minute bars for the last 10 calendar days
        - combine as ``include=series,intraday``

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            include: Comma-separated extras. Supported values ``series``, ``intraday``.
            series_limit: Daily bars when ``include`` contains ``series``. Ignored otherwise.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Listing snapshot (``gpw`` may be null).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_gpw(
                krs, include=include, series_limit=series_limit, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_insolvency(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsInsolvencyResponse:
        """Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr Zadłużonych,
        KRZ): case numbers, court, proceeding type and status, key dates. Same data as MCP
        ``get_company_debt_registry``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            KRZ proceedings of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_insolvency(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_nfz_contracts(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of
        care with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP
        ``get_company_nfz_contracts``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NFZ contracts (``nfz`` is null when the company has no NFZ contracts).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_nfz_contracts(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_nfz_queues(
        self,
        krs: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy leczenia" API: every
        NFZ-funded service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent
        case), people waiting, average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed
        twice a week. The forecast is not a booking. Same data as MCP ``get_company_nfz_queues``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            NFZ waiting lists (``queues`` is null when the provider has none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_nfz_queues(
                krs, service=service, town=town, limit=limit, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_procurement_counterparties(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsProcurementCounterpartiesResponse:
        """Buyers the company most often wins public contracts from, contractors it most often awards contracts to, and
        consortium partners — from BZP, TED and CRU. Each with KRS (when known), number of contracts, total value
        (PLN/EUR/USD) and years; top 20 per role plus totals. Same data as MCP
        ``get_company_procurement_counterparties``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Counterparties (null when the company has no public procurement).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_procurement_counterparties(
                krs, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_public_aid(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsPublicAidResponse:
        """Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid measure, purpose
        and date. Keyed by NIP. Same data as MCP ``get_company_public_aid``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public aid cases of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_public_aid(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_real_estate(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsRealEstateResponse:
        """Company real estate from the latest financial statement (period ending 2025+): land incl. perpetual usufruct,
        buildings and premises, investment property (book values in PLN/EUR/USD), plus properties named as mortgage
        collateral (address, land-register KW numbers, creditor). Micro and small entities have no such breakdown. Same
        data as MCP ``get_company_real_estate``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Real estate (null when the balance sheet shows none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_real_estate(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_sanctions(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsSanctionsResponse:
        """Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing for a KRS company
        matched by KRS, NIP, or REGON.

        ``sanctions`` is ``null`` when the company is not on the list. When present, ``entries`` include the name on the
        list, listed and removed dates, restrictive measures, and the legal grounds. Polish text stays in ``measures`` /
        ``justification``; English and German are in ``measures_i18n`` / ``justification_i18n``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sanctions payload. ``sanctions`` is null when the company is not listed.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_sanctions(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_secured_liabilities(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsSecuredLiabilitiesResponse:
        """Secured liabilities disclosed in the notes to the latest financial statement (period ending 2025+):
        mortgages, registered / financial pledges, transfers of ownership, assignments — with creditor, amount, secured
        debt, asset and land-register (KW) numbers. Same data as MCP ``get_company_secured_liabilities``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Secured liabilities (null when nothing is disclosed).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_secured_liabilities(
                krs, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_tenders(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsTendersResponse:
        """Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP) and
        EU-threshold tenders from TED — as contractor (awards won) and as contracting authority. Returns ``national``
        and ``eu`` blocks. Same data as MCP ``get_company_public_tenders / get_company_eu_tenders``. One request = one
        API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``national`` (BZP) and ``eu`` (TED) procurement of the company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_tenders(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_waste_registry(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesKrsWasteRegistryResponse:
        """BDO register (waste, products and packaging) — registration number, number of sites, activity flags and
        decisions with issue and validity dates. Keyed by NIP. Same data as MCP ``get_company_waste_registry``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            BDO entry (null when the company is not registered).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_waste_registry(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_website_facts(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE), certifications, website
        technology and clients/partners linked from the site (matched to KRS companies), read from the company's own
        website. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Website facts (null when nothing has been read from the website).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_website_facts(krs, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncRegistersWithRawResponse:
        return self._with_raw_response


class RegistersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_ceidg_nip_by_nip_nfz_queues(
        self,
        nip: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCeidgNipByNipNfzQueuesErrorBody]:
        """NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and any other
        provider) from the NFZ "Terminy leczenia" API: every NFZ-funded service it runs a waiting list for, per location
        — NFZ forecast waiting time (stable and urgent case), people waiting, average wait, address, phone, children,
        accessibility. Sorted by shortest wait. Refreshed twice a week. The forecast is not a booking. Same data as MCP
        ``get_company_nfz_queues``.

        Args:
            nip: Value sent with the request.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}/nfz-queues"),
            path_params=[param[str]("nip", nip)],
            query_params=[
                param[str | None]("service", service),
                param[str | None]("town", town),
                param[int | None]("limit", limit),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_nfz_queues_error_mapper,
            request_options=request_options,
        )

    def get_ceidg_nip_by_nip_procurement_counterparties(
        self, nip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCeidgNipByNipProcurementCounterpartiesErrorBody]:
        """Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP,
        from BZP, TED and CRU. Same data as MCP ``get_company_procurement_counterparties``. One request = one API call
        from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}/procurement-counterparties"),
            path_params=[param[str]("nip", nip)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_procurement_counterparties_error_mapper,
            request_options=request_options,
        )

    def get_ceidg_nip_by_nip_website_facts(
        self, nip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCeidgNipByNipWebsiteFactsErrorBody]:
        """Same as ``/companies/krs/{krs}/website-facts`` for sole proprietors with a public profile (and any company)
        by NIP. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}/website-facts"),
            path_params=[param[str]("nip", nip)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_website_facts_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_beneficiaries(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsBeneficiariesResponse, GetCompaniesKrsByKrsBeneficiariesErrorBody]:
        """Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) — name, nationality,
        country of residence and nature/extent of control. PESEL is never returned (birth year only). Sole proprietors
        are not in CRBR. Same data as MCP ``get_company_beneficiaries``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/beneficiaries"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsBeneficiariesResponse],
            error_mapper=get_companies_krs_by_krs_beneficiaries_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_court_gazette(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsCourtGazetteResponse, GetCompaniesKrsByKrsCourtGazetteErrorBody]:
        """Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i Gospodarczy) —
        creditor calls, dissolution, mergers, liquidation, transformations — matched by KRS or NIP. Same data as MCP
        ``get_company_court_gazette``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/court-gazette"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsCourtGazetteResponse],
            error_mapper=get_companies_krs_by_krs_court_gazette_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_energy_licenses(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsEnergyLicensesResponse, GetCompaniesKrsByKrsEnergyLicensesErrorBody]:
        """Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with validity dates
        and pending applications. Keyed by the company's NIP. Same data as MCP ``get_company_energy_licenses``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/energy-licenses"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsEnergyLicensesResponse],
            error_mapper=get_companies_krs_by_krs_energy_licenses_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_eu_funds(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsEuFundsResponse, GetCompaniesKrsByKrsEuFundsErrorBody]:
        """EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU co-financing,
        total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission grants, not SUDOP state aid. Same
        data as MCP ``get_company_eu_funds``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/eu-funds"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsEuFundsResponse],
            error_mapper=get_companies_krs_by_krs_eu_funds_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_eu_grants(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsEuGrantsResponse, GetCompaniesKrsByKrsEuGrantsErrorBody]:
        """European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other direct/indirect
        management grants and contracts. Keyed by NIP (VAT). Same data as MCP ``get_company_procurement``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/eu-grants"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsEuGrantsResponse],
            error_mapper=get_companies_krs_by_krs_eu_grants_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_filing_timeliness(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsFilingTimelinessResponse, GetCompaniesKrsByKrsFilingTimelinessErrorBody]:
        """For each recent financial year: period end, the date the annual financial statement was filed (KRS register
        entries and the Financial Document Repository), the statutory deadline (year end + 6 months + 15 days; +3 months
        for 2019–2020), days late or not filed, and whether a statutory auditor's report was filed. Also
        ``overdue_year`` when the latest statement is past its deadline and missing. Same data as MCP
        ``get_company_filing_timeliness``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/filing-timeliness"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsFilingTimelinessResponse],
            error_mapper=get_companies_krs_by_krs_filing_timeliness_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_financial_licenses(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsFinancialLicensesResponse, GetCompaniesKrsByKrsFinancialLicensesErrorBody]:
        """Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment / e-money
        institutions, investment firms, insurers, lending institutions and agents, with KNF number, status,
        registration, decision and strike-off dates and services. Keyed by NIP. Same data as MCP
        ``get_company_financial_supervision``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/financial-licenses"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsFinancialLicensesResponse],
            error_mapper=get_companies_krs_by_krs_financial_licenses_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_gpw(
        self,
        krs: str,
        *,
        include: str | None = None,
        series_limit: int | None = 250,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCompaniesKrsByKrsGpwErrorBody]:
        """Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect: ticker, ISIN,
        last close and change, market cap, shares, EPS, P/E, dividend and yield, plus a few recent daily bars. Quotes
        delayed ~15 minutes, in PLN.

        Not an official GPW licensed feed. ``gpw`` is ``null`` when the company is not listed / not matched.

        Optional history (still capped — never the full MAX chart):
        - ``include=series`` — daily OHLCV, default 250 bars, max 2000 (``series_limit``)
        - ``include=intraday`` — 1-minute bars for the last 10 calendar days
        - combine as ``include=series,intraday``

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            include: Comma-separated extras. Supported values ``series``, ``intraday``.
            series_limit: Daily bars when ``include`` contains ``series``. Ignored otherwise.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/gpw"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[str | None]("include", include), param[int | None]("series_limit", series_limit)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_gpw_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_insolvency(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsInsolvencyResponse, GetCompaniesKrsByKrsInsolvencyErrorBody]:
        """Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr Zadłużonych,
        KRZ): case numbers, court, proceeding type and status, key dates. Same data as MCP
        ``get_company_debt_registry``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/insolvency"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsInsolvencyResponse],
            error_mapper=get_companies_krs_by_krs_insolvency_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_nfz_contracts(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsNfzContractsErrorBody]:
        """NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of
        care with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP
        ``get_company_nfz_contracts``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/nfz-contracts"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_nfz_contracts_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_nfz_queues(
        self,
        krs: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCompaniesKrsByKrsNfzQueuesErrorBody]:
        """NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy leczenia" API: every
        NFZ-funded service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent
        case), people waiting, average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed
        twice a week. The forecast is not a booking. Same data as MCP ``get_company_nfz_queues``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/nfz-queues"),
            path_params=[param[str]("krs", krs)],
            query_params=[
                param[str | None]("service", service),
                param[str | None]("town", town),
                param[int | None]("limit", limit),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_nfz_queues_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_procurement_counterparties(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        CompaniesKrsProcurementCounterpartiesResponse, GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody
    ]:
        """Buyers the company most often wins public contracts from, contractors it most often awards contracts to, and
        consortium partners — from BZP, TED and CRU. Each with KRS (when known), number of contracts, total value
        (PLN/EUR/USD) and years; top 20 per role plus totals. Same data as MCP
        ``get_company_procurement_counterparties``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/procurement-counterparties"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsProcurementCounterpartiesResponse],
            error_mapper=get_companies_krs_by_krs_procurement_counterparties_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_public_aid(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsPublicAidResponse, GetCompaniesKrsByKrsPublicAidErrorBody]:
        """Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid measure, purpose
        and date. Keyed by NIP. Same data as MCP ``get_company_public_aid``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/public-aid"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsPublicAidResponse],
            error_mapper=get_companies_krs_by_krs_public_aid_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_real_estate(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsRealEstateResponse, GetCompaniesKrsByKrsRealEstateErrorBody]:
        """Company real estate from the latest financial statement (period ending 2025+): land incl. perpetual usufruct,
        buildings and premises, investment property (book values in PLN/EUR/USD), plus properties named as mortgage
        collateral (address, land-register KW numbers, creditor). Micro and small entities have no such breakdown. Same
        data as MCP ``get_company_real_estate``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/real-estate"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsRealEstateResponse],
            error_mapper=get_companies_krs_by_krs_real_estate_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_sanctions(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsSanctionsResponse, GetCompaniesKrsByKrsSanctionsErrorBody]:
        """Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing for a KRS company
        matched by KRS, NIP, or REGON.

        ``sanctions`` is ``null`` when the company is not on the list. When present, ``entries`` include the name on the
        list, listed and removed dates, restrictive measures, and the legal grounds. Polish text stays in ``measures`` /
        ``justification``; English and German are in ``measures_i18n`` / ``justification_i18n``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/sanctions"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsSanctionsResponse],
            error_mapper=get_companies_krs_by_krs_sanctions_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_secured_liabilities(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsSecuredLiabilitiesResponse, GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody]:
        """Secured liabilities disclosed in the notes to the latest financial statement (period ending 2025+):
        mortgages, registered / financial pledges, transfers of ownership, assignments — with creditor, amount, secured
        debt, asset and land-register (KW) numbers. Same data as MCP ``get_company_secured_liabilities``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/secured-liabilities"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsSecuredLiabilitiesResponse],
            error_mapper=get_companies_krs_by_krs_secured_liabilities_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_tenders(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsTendersResponse, GetCompaniesKrsByKrsTendersErrorBody]:
        """Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP) and
        EU-threshold tenders from TED — as contractor (awards won) and as contracting authority. Returns ``national``
        and ``eu`` blocks. Same data as MCP ``get_company_public_tenders / get_company_eu_tenders``. One request = one
        API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/tenders"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsTendersResponse],
            error_mapper=get_companies_krs_by_krs_tenders_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_waste_registry(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsWasteRegistryResponse, GetCompaniesKrsByKrsWasteRegistryErrorBody]:
        """BDO register (waste, products and packaging) — registration number, number of sites, activity flags and
        decisions with issue and validity dates. Keyed by NIP. Same data as MCP ``get_company_waste_registry``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/waste-registry"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompaniesKrsWasteRegistryResponse],
            error_mapper=get_companies_krs_by_krs_waste_registry_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_website_facts(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsWebsiteFactsErrorBody]:
        """Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE), certifications, website
        technology and clients/partners linked from the site (matched to KRS companies), read from the company's own
        website. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/website-facts"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_website_facts_error_mapper,
            request_options=request_options,
        )


class AsyncRegistersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_ceidg_nip_by_nip_nfz_queues(
        self,
        nip: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCeidgNipByNipNfzQueuesErrorBody]:
        """NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and any other
        provider) from the NFZ "Terminy leczenia" API: every NFZ-funded service it runs a waiting list for, per location
        — NFZ forecast waiting time (stable and urgent case), people waiting, average wait, address, phone, children,
        accessibility. Sorted by shortest wait. Refreshed twice a week. The forecast is not a booking. Same data as MCP
        ``get_company_nfz_queues``.

        Args:
            nip: Value sent with the request.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}/nfz-queues"),
            path_params=[param[str]("nip", nip)],
            query_params=[
                param[str | None]("service", service),
                param[str | None]("town", town),
                param[int | None]("limit", limit),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_nfz_queues_error_mapper,
            request_options=request_options,
        )

    async def get_ceidg_nip_by_nip_procurement_counterparties(
        self, nip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCeidgNipByNipProcurementCounterpartiesErrorBody]:
        """Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP,
        from BZP, TED and CRU. Same data as MCP ``get_company_procurement_counterparties``. One request = one API call
        from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}/procurement-counterparties"),
            path_params=[param[str]("nip", nip)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_procurement_counterparties_error_mapper,
            request_options=request_options,
        )

    async def get_ceidg_nip_by_nip_website_facts(
        self, nip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCeidgNipByNipWebsiteFactsErrorBody]:
        """Same as ``/companies/krs/{krs}/website-facts`` for sole proprietors with a public profile (and any company)
        by NIP. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            nip: 10-digit NIP (non-digits are stripped).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}/website-facts"),
            path_params=[param[str]("nip", nip)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_website_facts_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_beneficiaries(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsBeneficiariesResponse, GetCompaniesKrsByKrsBeneficiariesErrorBody]:
        """Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) — name, nationality,
        country of residence and nature/extent of control. PESEL is never returned (birth year only). Sole proprietors
        are not in CRBR. Same data as MCP ``get_company_beneficiaries``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/beneficiaries"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsBeneficiariesResponse],
            error_mapper=get_companies_krs_by_krs_beneficiaries_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_court_gazette(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsCourtGazetteResponse, GetCompaniesKrsByKrsCourtGazetteErrorBody]:
        """Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i Gospodarczy) —
        creditor calls, dissolution, mergers, liquidation, transformations — matched by KRS or NIP. Same data as MCP
        ``get_company_court_gazette``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/court-gazette"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsCourtGazetteResponse],
            error_mapper=get_companies_krs_by_krs_court_gazette_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_energy_licenses(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsEnergyLicensesResponse, GetCompaniesKrsByKrsEnergyLicensesErrorBody]:
        """Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with validity dates
        and pending applications. Keyed by the company's NIP. Same data as MCP ``get_company_energy_licenses``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/energy-licenses"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsEnergyLicensesResponse],
            error_mapper=get_companies_krs_by_krs_energy_licenses_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_eu_funds(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsEuFundsResponse, GetCompaniesKrsByKrsEuFundsErrorBody]:
        """EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU co-financing,
        total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission grants, not SUDOP state aid. Same
        data as MCP ``get_company_eu_funds``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/eu-funds"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsEuFundsResponse],
            error_mapper=get_companies_krs_by_krs_eu_funds_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_eu_grants(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsEuGrantsResponse, GetCompaniesKrsByKrsEuGrantsErrorBody]:
        """European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other direct/indirect
        management grants and contracts. Keyed by NIP (VAT). Same data as MCP ``get_company_procurement``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/eu-grants"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsEuGrantsResponse],
            error_mapper=get_companies_krs_by_krs_eu_grants_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_filing_timeliness(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsFilingTimelinessResponse, GetCompaniesKrsByKrsFilingTimelinessErrorBody]:
        """For each recent financial year: period end, the date the annual financial statement was filed (KRS register
        entries and the Financial Document Repository), the statutory deadline (year end + 6 months + 15 days; +3 months
        for 2019–2020), days late or not filed, and whether a statutory auditor's report was filed. Also
        ``overdue_year`` when the latest statement is past its deadline and missing. Same data as MCP
        ``get_company_filing_timeliness``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/filing-timeliness"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsFilingTimelinessResponse],
            error_mapper=get_companies_krs_by_krs_filing_timeliness_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_financial_licenses(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsFinancialLicensesResponse, GetCompaniesKrsByKrsFinancialLicensesErrorBody]:
        """Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment / e-money
        institutions, investment firms, insurers, lending institutions and agents, with KNF number, status,
        registration, decision and strike-off dates and services. Keyed by NIP. Same data as MCP
        ``get_company_financial_supervision``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/financial-licenses"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsFinancialLicensesResponse],
            error_mapper=get_companies_krs_by_krs_financial_licenses_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_gpw(
        self,
        krs: str,
        *,
        include: str | None = None,
        series_limit: int | None = 250,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCompaniesKrsByKrsGpwErrorBody]:
        """Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect: ticker, ISIN,
        last close and change, market cap, shares, EPS, P/E, dividend and yield, plus a few recent daily bars. Quotes
        delayed ~15 minutes, in PLN.

        Not an official GPW licensed feed. ``gpw`` is ``null`` when the company is not listed / not matched.

        Optional history (still capped — never the full MAX chart):
        - ``include=series`` — daily OHLCV, default 250 bars, max 2000 (``series_limit``)
        - ``include=intraday`` — 1-minute bars for the last 10 calendar days
        - combine as ``include=series,intraday``

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            include: Comma-separated extras. Supported values ``series``, ``intraday``.
            series_limit: Daily bars when ``include`` contains ``series``. Ignored otherwise.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/gpw"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[str | None]("include", include), param[int | None]("series_limit", series_limit)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_gpw_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_insolvency(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsInsolvencyResponse, GetCompaniesKrsByKrsInsolvencyErrorBody]:
        """Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr Zadłużonych,
        KRZ): case numbers, court, proceeding type and status, key dates. Same data as MCP
        ``get_company_debt_registry``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/insolvency"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsInsolvencyResponse],
            error_mapper=get_companies_krs_by_krs_insolvency_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_nfz_contracts(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsNfzContractsErrorBody]:
        """NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of
        care with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP
        ``get_company_nfz_contracts``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/nfz-contracts"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_nfz_contracts_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_nfz_queues(
        self,
        krs: str,
        *,
        service: str | None = None,
        town: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCompaniesKrsByKrsNfzQueuesErrorBody]:
        """NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy leczenia" API: every
        NFZ-funded service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent
        case), people waiting, average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed
        twice a week. The forecast is not a booking. Same data as MCP ``get_company_nfz_queues``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            service: Filter by a fragment of the service name (diacritics optional), e.g. ``okulist``, ``ortoped``,
                ``rezonans``.
            town: Filter by town or district, e.g. ``Poznań``.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/nfz-queues"),
            path_params=[param[str]("krs", krs)],
            query_params=[
                param[str | None]("service", service),
                param[str | None]("town", town),
                param[int | None]("limit", limit),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_nfz_queues_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_procurement_counterparties(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        CompaniesKrsProcurementCounterpartiesResponse, GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody
    ]:
        """Buyers the company most often wins public contracts from, contractors it most often awards contracts to, and
        consortium partners — from BZP, TED and CRU. Each with KRS (when known), number of contracts, total value
        (PLN/EUR/USD) and years; top 20 per role plus totals. Same data as MCP
        ``get_company_procurement_counterparties``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/procurement-counterparties"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsProcurementCounterpartiesResponse],
            error_mapper=get_companies_krs_by_krs_procurement_counterparties_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_public_aid(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsPublicAidResponse, GetCompaniesKrsByKrsPublicAidErrorBody]:
        """Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid measure, purpose
        and date. Keyed by NIP. Same data as MCP ``get_company_public_aid``. One request = one API call from the monthly
        quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/public-aid"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsPublicAidResponse],
            error_mapper=get_companies_krs_by_krs_public_aid_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_real_estate(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsRealEstateResponse, GetCompaniesKrsByKrsRealEstateErrorBody]:
        """Company real estate from the latest financial statement (period ending 2025+): land incl. perpetual usufruct,
        buildings and premises, investment property (book values in PLN/EUR/USD), plus properties named as mortgage
        collateral (address, land-register KW numbers, creditor). Micro and small entities have no such breakdown. Same
        data as MCP ``get_company_real_estate``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/real-estate"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsRealEstateResponse],
            error_mapper=get_companies_krs_by_krs_real_estate_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_sanctions(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsSanctionsResponse, GetCompaniesKrsByKrsSanctionsErrorBody]:
        """Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing for a KRS company
        matched by KRS, NIP, or REGON.

        ``sanctions`` is ``null`` when the company is not on the list. When present, ``entries`` include the name on the
        list, listed and removed dates, restrictive measures, and the legal grounds. Polish text stays in ``measures`` /
        ``justification``; English and German are in ``measures_i18n`` / ``justification_i18n``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/sanctions"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsSanctionsResponse],
            error_mapper=get_companies_krs_by_krs_sanctions_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_secured_liabilities(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsSecuredLiabilitiesResponse, GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody]:
        """Secured liabilities disclosed in the notes to the latest financial statement (period ending 2025+):
        mortgages, registered / financial pledges, transfers of ownership, assignments — with creditor, amount, secured
        debt, asset and land-register (KW) numbers. Same data as MCP ``get_company_secured_liabilities``. One request =
        one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/secured-liabilities"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsSecuredLiabilitiesResponse],
            error_mapper=get_companies_krs_by_krs_secured_liabilities_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_tenders(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsTendersResponse, GetCompaniesKrsByKrsTendersErrorBody]:
        """Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP) and
        EU-threshold tenders from TED — as contractor (awards won) and as contracting authority. Returns ``national``
        and ``eu`` blocks. Same data as MCP ``get_company_public_tenders / get_company_eu_tenders``. One request = one
        API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/tenders"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsTendersResponse],
            error_mapper=get_companies_krs_by_krs_tenders_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_waste_registry(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesKrsWasteRegistryResponse, GetCompaniesKrsByKrsWasteRegistryErrorBody]:
        """BDO register (waste, products and packaging) — registration number, number of sites, activity flags and
        decisions with issue and validity dates. Keyed by NIP. Same data as MCP ``get_company_waste_registry``. One
        request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/waste-registry"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompaniesKrsWasteRegistryResponse],
            error_mapper=get_companies_krs_by_krs_waste_registry_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_website_facts(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsWebsiteFactsErrorBody]:
        """Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE), certifications, website
        technology and clients/partners linked from the site (matched to KRS companies), read from the company's own
        website. Same data as MCP ``get_company_website_facts``. One request = one API call from the monthly quota.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/website-facts"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_website_facts_error_mapper,
            request_options=request_options,
        )
