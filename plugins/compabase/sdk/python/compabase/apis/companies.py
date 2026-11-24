from __future__ import annotations

from typing import Any
from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_ceidg_nip_by_nip_error import GetCeidgNipByNipErrorBody, get_ceidg_nip_by_nip_error_mapper
from ..errors.get_companies_count_error import GetCompaniesCountErrorBody, get_companies_count_error_mapper
from ..errors.get_companies_error import GetCompaniesErrorBody, get_companies_error_mapper
from ..errors.get_companies_export_error import GetCompaniesExportErrorBody, get_companies_export_error_mapper
from ..errors.get_companies_krs_by_krs_connections_error import (
    GetCompaniesKrsByKrsConnectionsErrorBody,
    get_companies_krs_by_krs_connections_error_mapper,
)
from ..errors.get_companies_krs_by_krs_error import GetCompaniesKrsByKrsErrorBody, get_companies_krs_by_krs_error_mapper
from ..errors.get_companies_krs_by_krs_group_error import (
    GetCompaniesKrsByKrsGroupErrorBody,
    get_companies_krs_by_krs_group_error_mapper,
)
from ..errors.get_companies_krs_by_krs_status_error import (
    GetCompaniesKrsByKrsStatusErrorBody,
    get_companies_krs_by_krs_status_error_mapper,
)
from ..errors.get_companies_krs_by_krs_structure_people_error import (
    GetCompaniesKrsByKrsStructurePeopleErrorBody,
    get_companies_krs_by_krs_structure_people_error_mapper,
)
from ..models.company_count_response import CompanyCountResponse
from ..models.company_list_response import CompanyListResponse
from ..models.enums.currency import Currency, CurrencyOrStr
from ..models.enums.dir import Dir, DirOrStr
from ..models.enums.locale import Locale, LocaleOrStr
from ..models.enums.sort import SortOrStr
from ..server.server import Server


class Companies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompaniesWithRawResponse(client, server, auth)

    def get_ceidg_nip_by_nip(
        self, nip: str, *, locale: LocaleOrStr | None = Locale.EN, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Sole-proprietor (CEIDG) profile by **NIP**. Subject to public CEIDG catalog visibility. Contact email/phone
        revealed for API-key auth when present and allowed. Personal owner fields follow the same RODO gating as the
        website.

        Typical payload:
        - ``company`` – identifiers, address, PKD activities, contacts, logo, ``roles`` (owner)
        - ``primaryPkdDescription`` – localized primary PKD label
        - ``companySummary`` – AI description for the requested ``locale`` only (e.g. ``{ "en": "…" }``)
        - ``details.vat`` – VAT whitelist status + bank accounts when known
        - ``similarCompanies`` – peer JDGs from the same enrichment cache
        - ``changeHistory`` – CEIDG change events when available
        - ``sudop`` – public-aid (SUDOP) snapshot when checked (``null`` if unavailable)
        - ``bzp`` – public-procurement (BZP) summary when present (``null`` if none)
        - ``ure`` – URE energy concessions when checked (``null`` if unavailable)
        - ``bdo`` – BDO waste/packaging register when present (``null`` if none)
        - ``gpw`` – Warsaw Stock Exchange listing snapshot when the NIP is matched (``null`` if not listed)

        Args:
            nip: NIP normalized to exactly 10 digits.
            locale: Language for PKD labels and ``companySummary`` (one locale key in the response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CEIDG company profile.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_ceidg_nip_by_nip(nip, locale=locale, request_options=request_options))

    def get_companies(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 20,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        sort: SortOrStr | None = None,
        dir_: DirOrStr | None = Dir.DESC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanyListResponse:
        """Uses the same search dataset as the public site. Filters combine with **AND** where applicable.

        **Response:** ``data`` is one page of rows; ``pagination`` has ``limit``, ``offset``, ``total``, ``hasMore``,
        and optionally ``cursor`` when cursor-based paging is used.

        For a single company’s full profile, use ``GET /companies/krs/{krs}`` (KRS court number).

        Parameter details are documented on each query field below.

        **Pagination mode**

        ``offset`` and ``cursor`` are mutually exclusive in client usage. If both are sent, the server returns ``400
        CONFLICTING_PARAMETERS``.

        Use ``offset`` for shallow interactive browsing and ``cursor`` for deep paging/export flows.

        Cursor pagination is ordered by ``entity_id`` ascending; ``cursor`` is the last ``entity_id`` from the prior
        page.

        Because datasets can change between requests, deep paging may still observe occasional duplicates or skips.

        With cursor mode, ``pagination.total`` may be unavailable and returned as ``-1``; rely on ``hasMore``.

        **Default ordering (offset mode)**

        - without ``q``: ``has_email`` desc, then ``has_website`` desc, then ``revenue_total`` desc, then
            ``extracted_at`` desc, then ``entity_id`` asc.
        - with ``q``: same ordering as above (not TF-IDF/full-text relevance ranking).
        - offset pagination is intended for interactive browsing; for deterministic deep traversal use cursor mode.

        **Financial filter semantics** (for ``/companies`` and ``/companies/count``)

        - financial range filters are evaluated on the latest indexed financial snapshot per company (search index row).
        - companies with ``null`` value for a filtered metric do not match that metric filter.
        - when ``last_report_year_*`` is combined with financial metric filters, both are evaluated against the same
            indexed reporting snapshot.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size. **Default:** ``20``. ``GET /companies`` caps at **100** per request. For bulk pulls use
                ``GET /companies/export`` (or ``limit`` &gt; 100 on ``/companies`` via API key), capped at **500** per
                page. For deep traversal, page with ``cursor``. **Quota accounting:** monthly quota counts each HTTP
                request. Row count in the page does not change the cost. Example: ``limit=500`` still consumes **1**
                request from monthly quota.
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            sort: Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in
                that column are excluded while sorting. Text columns (``name``, ``nip``, ``regon``, ``city``,
                ``region``, ``postal_code``) sort alphabetically; ``registration_date`` with ``dir=desc`` lists the
                newest registrations first (future-dated register errors are skipped); ``revenue_growth`` with
                ``dir=desc`` lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial
                year from KRS statements; combine with ``revenue_min`` to skip small companies). Not applied to
                free-text (``q``) or ``keywords`` searches, which keep relevance order.
            dir_: Sort direction for ``sort`` (``asc`` or ``desc``, default ``desc``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated search results: **``data``** is an array of companies (one object per row on this page). Fields
            per row depend on filters and internal path; optional keys may be omitted or null.

        Raises:
            ApiError: Missing, invalid, or revoked API key. Invalid request parameters. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies(
                q=q,
                keywords=keywords,
                limit=limit,
                offset=offset,
                cursor=cursor,
                pkd=pkd,
                primary_only=primary_only,
                currency=currency,
                voivodeship=voivodeship,
                postal_code=postal_code,
                city=city,
                revenue_min=revenue_min,
                revenue_max=revenue_max,
                revenue_operating_min=revenue_operating_min,
                revenue_operating_max=revenue_operating_max,
                profit_operating_min=profit_operating_min,
                profit_operating_max=profit_operating_max,
                profit_net_min=profit_net_min,
                profit_net_max=profit_net_max,
                income_tax_min=income_tax_min,
                income_tax_max=income_tax_max,
                cost_wages_min=cost_wages_min,
                cost_wages_max=cost_wages_max,
                cost_amortization_min=cost_amortization_min,
                cost_amortization_max=cost_amortization_max,
                total_assets_min=total_assets_min,
                total_assets_max=total_assets_max,
                ebitda_min=ebitda_min,
                ebitda_max=ebitda_max,
                capital_min=capital_min,
                capital_max=capital_max,
                estimated_value_min=estimated_value_min,
                estimated_value_max=estimated_value_max,
                registration_year_min=registration_year_min,
                registration_year_max=registration_year_max,
                registration_date_min=registration_date_min,
                registration_date_max=registration_date_max,
                last_report_year_min=last_report_year_min,
                last_report_year_max=last_report_year_max,
                status_active=status_active,
                legal_form=legal_form,
                has_email=has_email,
                has_website=has_website,
                sort=sort,
                dir_=dir_,
                request_options=request_options,
            ),
        )

    def get_companies_count(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanyCountResponse:
        """Returns how many companies match the same **filter set** as ``GET /companies``, without returning rows. Use
        the **same query parameters** as list/search (except pagination: no ``limit``, ``offset``, or ``cursor``).
        Filters combine with **AND** where applicable.

        **Response:** a single integer ``count``; total matching companies for the current filters.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Total number of companies matching the request filters.

        Raises:
            ApiError: Missing, invalid, or revoked API key. Invalid request parameters. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_count(
                q=q,
                keywords=keywords,
                pkd=pkd,
                primary_only=primary_only,
                currency=currency,
                voivodeship=voivodeship,
                postal_code=postal_code,
                city=city,
                revenue_min=revenue_min,
                revenue_max=revenue_max,
                revenue_operating_min=revenue_operating_min,
                revenue_operating_max=revenue_operating_max,
                profit_operating_min=profit_operating_min,
                profit_operating_max=profit_operating_max,
                profit_net_min=profit_net_min,
                profit_net_max=profit_net_max,
                income_tax_min=income_tax_min,
                income_tax_max=income_tax_max,
                cost_wages_min=cost_wages_min,
                cost_wages_max=cost_wages_max,
                cost_amortization_min=cost_amortization_min,
                cost_amortization_max=cost_amortization_max,
                total_assets_min=total_assets_min,
                total_assets_max=total_assets_max,
                ebitda_min=ebitda_min,
                ebitda_max=ebitda_max,
                capital_min=capital_min,
                capital_max=capital_max,
                estimated_value_min=estimated_value_min,
                estimated_value_max=estimated_value_max,
                registration_year_min=registration_year_min,
                registration_year_max=registration_year_max,
                registration_date_min=registration_date_min,
                registration_date_max=registration_date_max,
                last_report_year_min=last_report_year_min,
                last_report_year_max=last_report_year_max,
                status_active=status_active,
                legal_form=legal_form,
                has_email=has_email,
                has_website=has_website,
                request_options=request_options,
            ),
        )

    def get_companies_export(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 100,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        has_email: bool | None = None,
        has_website: bool | None = None,
        status_active: bool | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanyListResponse:
        """Same filters as ``GET /companies``, with page size up to **500** (vs 100 on the standard list). Contact
        emails are included when available. For large pulls, page with ``cursor`` (``cursor`` = last row ``entity_id``).
        Large ``offset`` values get slow. Each page consumes **1** monthly quota request.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size for bulk export (max 500).
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One page of companies (same shape as ``GET /companies``).

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_export(
                q=q,
                keywords=keywords,
                limit=limit,
                offset=offset,
                cursor=cursor,
                pkd=pkd,
                primary_only=primary_only,
                has_email=has_email,
                has_website=has_website,
                status_active=status_active,
                revenue_min=revenue_min,
                revenue_max=revenue_max,
                request_options=request_options,
            ),
        )

    def get_companies_krs_by_krs(self, krs: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Returns full company profile addressed by **KRS** (Polish court registry number). Digits only; leading zeros
        are optional (normalized to 10 digits server-side).

        Integrations that only have a KRS number can call this directly. One request typically covers enrichment for a
        company. The payload includes:
        - ``company`` (identifiers, address, PKD, logo, capital),
        - ``details.contacts`` (email, phone, website, deliverability flags; email/phone revealed for API keys),
        - ``details.vat`` (VAT whitelist status + bank accounts when known),
        - ``details.filings`` / attributes / operational status,
        - ``roles`` and ``ownership``,
        - ``financials.byYear`` (metrics + ``esf_statement_lines`` when present; XML files are on the documents
            endpoint),
        - ``krz`` (restructuring/insolvency proceedings summary),
        - ``sanctions`` (MSWiA sanctions listing with measures and grounds; omitted when the company is not listed;
            dedicated read is ``/companies/krs/{krs}/sanctions``),
        - ``sudop`` (public aid / de minimis when checked),
        - ``bzp`` (public procurement summary when present),
        - ``ure`` (URE energy concessions when checked),
        - ``bdo`` (BDO waste/packaging register when present),
        - ``gpw`` (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use
            ``/companies/krs/{krs}/gpw``),
        - ``crbr`` (beneficial owners when present and RODO-eligible),
        - ``changeHistory`` when non-empty,
        - ``similarCompanies``, ``subsidiaryCompanies``, ``pkdRankings``, ``faq``, ``insightsByYear``,
        - ``hasStatistics`` (boolean; full peer benchmarks via ``/statistics``).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full company profile object resolved from KRS.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs(krs, request_options=request_options))

    def get_companies_krs_by_krs_connections(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Graph of related companies and people linked through shared roles/ownership (same payload as the profile
        Connections UI).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Connections payload.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_connections(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_group(
        self, krs: str, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented with foreign
        corporate shareholders from KRS matched to the LEI register: direct parent and ultimate parent (name, country,
        LEI), subsidiaries and other group companies (Polish ones with KRS number, foreign ones with country) and group
        size. ``direct_parent.source = "krs"`` means the parent comes from the KRS shareholder list (``pct`` = stake).
        Refreshed daily. Same data as MCP ``get_company_group``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            limit: Max group companies per list.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Corporate group.

        Raises:
            ApiError: No corporate group data for this company. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_group(krs, limit=limit, request_options=request_options)
        )

    def get_companies_krs_by_krs_status(self, krs: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Quick legal-status check (Active, Bankruptcy, Liquidation).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Legal status for a company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_companies_krs_by_krs_status(krs, request_options=request_options))

    def get_companies_krs_by_krs_structure_people(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Returns ownership and management structure only (without profile or financial data): ``roles`` and
        ``ownership``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Roles and ownership structure.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_structure_people(krs, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CompaniesWithRawResponse:
        return self._with_raw_response


class AsyncCompanies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompaniesWithRawResponse(client, server, auth)

    async def get_ceidg_nip_by_nip(
        self,
        nip: str,
        *,
        locale: LocaleOrStr | None = Locale.EN,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Sole-proprietor (CEIDG) profile by **NIP**. Subject to public CEIDG catalog visibility. Contact email/phone
        revealed for API-key auth when present and allowed. Personal owner fields follow the same RODO gating as the
        website.

        Typical payload:
        - ``company`` – identifiers, address, PKD activities, contacts, logo, ``roles`` (owner)
        - ``primaryPkdDescription`` – localized primary PKD label
        - ``companySummary`` – AI description for the requested ``locale`` only (e.g. ``{ "en": "…" }``)
        - ``details.vat`` – VAT whitelist status + bank accounts when known
        - ``similarCompanies`` – peer JDGs from the same enrichment cache
        - ``changeHistory`` – CEIDG change events when available
        - ``sudop`` – public-aid (SUDOP) snapshot when checked (``null`` if unavailable)
        - ``bzp`` – public-procurement (BZP) summary when present (``null`` if none)
        - ``ure`` – URE energy concessions when checked (``null`` if unavailable)
        - ``bdo`` – BDO waste/packaging register when present (``null`` if none)
        - ``gpw`` – Warsaw Stock Exchange listing snapshot when the NIP is matched (``null`` if not listed)

        Args:
            nip: NIP normalized to exactly 10 digits.
            locale: Language for PKD labels and ``companySummary`` (one locale key in the response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CEIDG company profile.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_ceidg_nip_by_nip(nip, locale=locale, request_options=request_options)
        )

    async def get_companies(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 20,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        sort: SortOrStr | None = None,
        dir_: DirOrStr | None = Dir.DESC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanyListResponse:
        """Uses the same search dataset as the public site. Filters combine with **AND** where applicable.

        **Response:** ``data`` is one page of rows; ``pagination`` has ``limit``, ``offset``, ``total``, ``hasMore``,
        and optionally ``cursor`` when cursor-based paging is used.

        For a single company’s full profile, use ``GET /companies/krs/{krs}`` (KRS court number).

        Parameter details are documented on each query field below.

        **Pagination mode**

        ``offset`` and ``cursor`` are mutually exclusive in client usage. If both are sent, the server returns ``400
        CONFLICTING_PARAMETERS``.

        Use ``offset`` for shallow interactive browsing and ``cursor`` for deep paging/export flows.

        Cursor pagination is ordered by ``entity_id`` ascending; ``cursor`` is the last ``entity_id`` from the prior
        page.

        Because datasets can change between requests, deep paging may still observe occasional duplicates or skips.

        With cursor mode, ``pagination.total`` may be unavailable and returned as ``-1``; rely on ``hasMore``.

        **Default ordering (offset mode)**

        - without ``q``: ``has_email`` desc, then ``has_website`` desc, then ``revenue_total`` desc, then
            ``extracted_at`` desc, then ``entity_id`` asc.
        - with ``q``: same ordering as above (not TF-IDF/full-text relevance ranking).
        - offset pagination is intended for interactive browsing; for deterministic deep traversal use cursor mode.

        **Financial filter semantics** (for ``/companies`` and ``/companies/count``)

        - financial range filters are evaluated on the latest indexed financial snapshot per company (search index row).
        - companies with ``null`` value for a filtered metric do not match that metric filter.
        - when ``last_report_year_*`` is combined with financial metric filters, both are evaluated against the same
            indexed reporting snapshot.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size. **Default:** ``20``. ``GET /companies`` caps at **100** per request. For bulk pulls use
                ``GET /companies/export`` (or ``limit`` &gt; 100 on ``/companies`` via API key), capped at **500** per
                page. For deep traversal, page with ``cursor``. **Quota accounting:** monthly quota counts each HTTP
                request. Row count in the page does not change the cost. Example: ``limit=500`` still consumes **1**
                request from monthly quota.
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            sort: Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in
                that column are excluded while sorting. Text columns (``name``, ``nip``, ``regon``, ``city``,
                ``region``, ``postal_code``) sort alphabetically; ``registration_date`` with ``dir=desc`` lists the
                newest registrations first (future-dated register errors are skipped); ``revenue_growth`` with
                ``dir=desc`` lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial
                year from KRS statements; combine with ``revenue_min`` to skip small companies). Not applied to
                free-text (``q``) or ``keywords`` searches, which keep relevance order.
            dir_: Sort direction for ``sort`` (``asc`` or ``desc``, default ``desc``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated search results: **``data``** is an array of companies (one object per row on this page). Fields
            per row depend on filters and internal path; optional keys may be omitted or null.

        Raises:
            ApiError: Missing, invalid, or revoked API key. Invalid request parameters. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies(
                q=q,
                keywords=keywords,
                limit=limit,
                offset=offset,
                cursor=cursor,
                pkd=pkd,
                primary_only=primary_only,
                currency=currency,
                voivodeship=voivodeship,
                postal_code=postal_code,
                city=city,
                revenue_min=revenue_min,
                revenue_max=revenue_max,
                revenue_operating_min=revenue_operating_min,
                revenue_operating_max=revenue_operating_max,
                profit_operating_min=profit_operating_min,
                profit_operating_max=profit_operating_max,
                profit_net_min=profit_net_min,
                profit_net_max=profit_net_max,
                income_tax_min=income_tax_min,
                income_tax_max=income_tax_max,
                cost_wages_min=cost_wages_min,
                cost_wages_max=cost_wages_max,
                cost_amortization_min=cost_amortization_min,
                cost_amortization_max=cost_amortization_max,
                total_assets_min=total_assets_min,
                total_assets_max=total_assets_max,
                ebitda_min=ebitda_min,
                ebitda_max=ebitda_max,
                capital_min=capital_min,
                capital_max=capital_max,
                estimated_value_min=estimated_value_min,
                estimated_value_max=estimated_value_max,
                registration_year_min=registration_year_min,
                registration_year_max=registration_year_max,
                registration_date_min=registration_date_min,
                registration_date_max=registration_date_max,
                last_report_year_min=last_report_year_min,
                last_report_year_max=last_report_year_max,
                status_active=status_active,
                legal_form=legal_form,
                has_email=has_email,
                has_website=has_website,
                sort=sort,
                dir_=dir_,
                request_options=request_options,
            ),
        )

    async def get_companies_count(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanyCountResponse:
        """Returns how many companies match the same **filter set** as ``GET /companies``, without returning rows. Use
        the **same query parameters** as list/search (except pagination: no ``limit``, ``offset``, or ``cursor``).
        Filters combine with **AND** where applicable.

        **Response:** a single integer ``count``; total matching companies for the current filters.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Total number of companies matching the request filters.

        Raises:
            ApiError: Missing, invalid, or revoked API key. Invalid request parameters. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_count(
                q=q,
                keywords=keywords,
                pkd=pkd,
                primary_only=primary_only,
                currency=currency,
                voivodeship=voivodeship,
                postal_code=postal_code,
                city=city,
                revenue_min=revenue_min,
                revenue_max=revenue_max,
                revenue_operating_min=revenue_operating_min,
                revenue_operating_max=revenue_operating_max,
                profit_operating_min=profit_operating_min,
                profit_operating_max=profit_operating_max,
                profit_net_min=profit_net_min,
                profit_net_max=profit_net_max,
                income_tax_min=income_tax_min,
                income_tax_max=income_tax_max,
                cost_wages_min=cost_wages_min,
                cost_wages_max=cost_wages_max,
                cost_amortization_min=cost_amortization_min,
                cost_amortization_max=cost_amortization_max,
                total_assets_min=total_assets_min,
                total_assets_max=total_assets_max,
                ebitda_min=ebitda_min,
                ebitda_max=ebitda_max,
                capital_min=capital_min,
                capital_max=capital_max,
                estimated_value_min=estimated_value_min,
                estimated_value_max=estimated_value_max,
                registration_year_min=registration_year_min,
                registration_year_max=registration_year_max,
                registration_date_min=registration_date_min,
                registration_date_max=registration_date_max,
                last_report_year_min=last_report_year_min,
                last_report_year_max=last_report_year_max,
                status_active=status_active,
                legal_form=legal_form,
                has_email=has_email,
                has_website=has_website,
                request_options=request_options,
            ),
        )

    async def get_companies_export(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 100,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        has_email: bool | None = None,
        has_website: bool | None = None,
        status_active: bool | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanyListResponse:
        """Same filters as ``GET /companies``, with page size up to **500** (vs 100 on the standard list). Contact
        emails are included when available. For large pulls, page with ``cursor`` (``cursor`` = last row ``entity_id``).
        Large ``offset`` values get slow. Each page consumes **1** monthly quota request.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size for bulk export (max 500).
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One page of companies (same shape as ``GET /companies``).

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_export(
                q=q,
                keywords=keywords,
                limit=limit,
                offset=offset,
                cursor=cursor,
                pkd=pkd,
                primary_only=primary_only,
                has_email=has_email,
                has_website=has_website,
                status_active=status_active,
                revenue_min=revenue_min,
                revenue_max=revenue_max,
                request_options=request_options,
            ),
        )

    async def get_companies_krs_by_krs(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Returns full company profile addressed by **KRS** (Polish court registry number). Digits only; leading zeros
        are optional (normalized to 10 digits server-side).

        Integrations that only have a KRS number can call this directly. One request typically covers enrichment for a
        company. The payload includes:
        - ``company`` (identifiers, address, PKD, logo, capital),
        - ``details.contacts`` (email, phone, website, deliverability flags; email/phone revealed for API keys),
        - ``details.vat`` (VAT whitelist status + bank accounts when known),
        - ``details.filings`` / attributes / operational status,
        - ``roles`` and ``ownership``,
        - ``financials.byYear`` (metrics + ``esf_statement_lines`` when present; XML files are on the documents
            endpoint),
        - ``krz`` (restructuring/insolvency proceedings summary),
        - ``sanctions`` (MSWiA sanctions listing with measures and grounds; omitted when the company is not listed;
            dedicated read is ``/companies/krs/{krs}/sanctions``),
        - ``sudop`` (public aid / de minimis when checked),
        - ``bzp`` (public procurement summary when present),
        - ``ure`` (URE energy concessions when checked),
        - ``bdo`` (BDO waste/packaging register when present),
        - ``gpw`` (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use
            ``/companies/krs/{krs}/gpw``),
        - ``crbr`` (beneficial owners when present and RODO-eligible),
        - ``changeHistory`` when non-empty,
        - ``similarCompanies``, ``subsidiaryCompanies``, ``pkdRankings``, ``faq``, ``insightsByYear``,
        - ``hasStatistics`` (boolean; full peer benchmarks via ``/statistics``).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full company profile object resolved from KRS.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_companies_krs_by_krs(krs, request_options=request_options))

    async def get_companies_krs_by_krs_connections(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Graph of related companies and people linked through shared roles/ownership (same payload as the profile
        Connections UI).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Connections payload.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_connections(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_group(
        self, krs: str, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented with foreign
        corporate shareholders from KRS matched to the LEI register: direct parent and ultimate parent (name, country,
        LEI), subsidiaries and other group companies (Polish ones with KRS number, foreign ones with country) and group
        size. ``direct_parent.source = "krs"`` means the parent comes from the KRS shareholder list (``pct`` = stake).
        Refreshed daily. Same data as MCP ``get_company_group``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            limit: Max group companies per list.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Corporate group.

        Raises:
            ApiError: No corporate group data for this company. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_group(
                krs, limit=limit, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_status(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Quick legal-status check (Active, Bankruptcy, Liquidation).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Legal status for a company.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_status(krs, request_options=request_options)
        )

    async def get_companies_krs_by_krs_structure_people(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Returns ownership and management structure only (without profile or financial data): ``roles`` and
        ``ownership``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Roles and ownership structure.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_structure_people(
                krs, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCompaniesWithRawResponse:
        return self._with_raw_response


class CompaniesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_ceidg_nip_by_nip(
        self, nip: str, *, locale: LocaleOrStr | None = Locale.EN, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCeidgNipByNipErrorBody]:
        """Sole-proprietor (CEIDG) profile by **NIP**. Subject to public CEIDG catalog visibility. Contact email/phone
        revealed for API-key auth when present and allowed. Personal owner fields follow the same RODO gating as the
        website.

        Typical payload:
        - ``company`` – identifiers, address, PKD activities, contacts, logo, ``roles`` (owner)
        - ``primaryPkdDescription`` – localized primary PKD label
        - ``companySummary`` – AI description for the requested ``locale`` only (e.g. ``{ "en": "…" }``)
        - ``details.vat`` – VAT whitelist status + bank accounts when known
        - ``similarCompanies`` – peer JDGs from the same enrichment cache
        - ``changeHistory`` – CEIDG change events when available
        - ``sudop`` – public-aid (SUDOP) snapshot when checked (``null`` if unavailable)
        - ``bzp`` – public-procurement (BZP) summary when present (``null`` if none)
        - ``ure`` – URE energy concessions when checked (``null`` if unavailable)
        - ``bdo`` – BDO waste/packaging register when present (``null`` if none)
        - ``gpw`` – Warsaw Stock Exchange listing snapshot when the NIP is matched (``null`` if not listed)

        Args:
            nip: NIP normalized to exactly 10 digits.
            locale: Language for PKD labels and ``companySummary`` (one locale key in the response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}"),
            path_params=[param[str]("nip", nip)],
            query_params=[param[LocaleOrStr | None]("locale", locale)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_error_mapper,
            request_options=request_options,
        )

    def get_companies(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 20,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        sort: SortOrStr | None = None,
        dir_: DirOrStr | None = Dir.DESC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyListResponse, GetCompaniesErrorBody]:
        """Uses the same search dataset as the public site. Filters combine with **AND** where applicable.

        **Response:** ``data`` is one page of rows; ``pagination`` has ``limit``, ``offset``, ``total``, ``hasMore``,
        and optionally ``cursor`` when cursor-based paging is used.

        For a single company’s full profile, use ``GET /companies/krs/{krs}`` (KRS court number).

        Parameter details are documented on each query field below.

        **Pagination mode**

        ``offset`` and ``cursor`` are mutually exclusive in client usage. If both are sent, the server returns ``400
        CONFLICTING_PARAMETERS``.

        Use ``offset`` for shallow interactive browsing and ``cursor`` for deep paging/export flows.

        Cursor pagination is ordered by ``entity_id`` ascending; ``cursor`` is the last ``entity_id`` from the prior
        page.

        Because datasets can change between requests, deep paging may still observe occasional duplicates or skips.

        With cursor mode, ``pagination.total`` may be unavailable and returned as ``-1``; rely on ``hasMore``.

        **Default ordering (offset mode)**

        - without ``q``: ``has_email`` desc, then ``has_website`` desc, then ``revenue_total`` desc, then
            ``extracted_at`` desc, then ``entity_id`` asc.
        - with ``q``: same ordering as above (not TF-IDF/full-text relevance ranking).
        - offset pagination is intended for interactive browsing; for deterministic deep traversal use cursor mode.

        **Financial filter semantics** (for ``/companies`` and ``/companies/count``)

        - financial range filters are evaluated on the latest indexed financial snapshot per company (search index row).
        - companies with ``null`` value for a filtered metric do not match that metric filter.
        - when ``last_report_year_*`` is combined with financial metric filters, both are evaluated against the same
            indexed reporting snapshot.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size. **Default:** ``20``. ``GET /companies`` caps at **100** per request. For bulk pulls use
                ``GET /companies/export`` (or ``limit`` &gt; 100 on ``/companies`` via API key), capped at **500** per
                page. For deep traversal, page with ``cursor``. **Quota accounting:** monthly quota counts each HTTP
                request. Row count in the page does not change the cost. Example: ``limit=500`` still consumes **1**
                request from monthly quota.
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            sort: Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in
                that column are excluded while sorting. Text columns (``name``, ``nip``, ``regon``, ``city``,
                ``region``, ``postal_code``) sort alphabetically; ``registration_date`` with ``dir=desc`` lists the
                newest registrations first (future-dated register errors are skipped); ``revenue_growth`` with
                ``dir=desc`` lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial
                year from KRS statements; combine with ``revenue_min`` to skip small companies). Not applied to
                free-text (``q``) or ``keywords`` searches, which keep relevance order.
            dir_: Sort direction for ``sort`` (``asc`` or ``desc``, default ``desc``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("keywords", keywords),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("cursor", cursor),
                param[str | None]("pkd", pkd),
                param[bool | None]("primary_only", primary_only),
                param[CurrencyOrStr | None]("currency", currency),
                param[str | None]("voivodeship", voivodeship),
                param[str | None]("postal_code", postal_code),
                param[str | None]("city", city),
                param[float | None]("revenue_min", revenue_min),
                param[float | None]("revenue_max", revenue_max),
                param[float | None]("revenue_operating_min", revenue_operating_min),
                param[float | None]("revenue_operating_max", revenue_operating_max),
                param[float | None]("profit_operating_min", profit_operating_min),
                param[float | None]("profit_operating_max", profit_operating_max),
                param[float | None]("profit_net_min", profit_net_min),
                param[float | None]("profit_net_max", profit_net_max),
                param[float | None]("income_tax_min", income_tax_min),
                param[float | None]("income_tax_max", income_tax_max),
                param[float | None]("cost_wages_min", cost_wages_min),
                param[float | None]("cost_wages_max", cost_wages_max),
                param[float | None]("cost_amortization_min", cost_amortization_min),
                param[float | None]("cost_amortization_max", cost_amortization_max),
                param[float | None]("total_assets_min", total_assets_min),
                param[float | None]("total_assets_max", total_assets_max),
                param[float | None]("ebitda_min", ebitda_min),
                param[float | None]("ebitda_max", ebitda_max),
                param[float | None]("capital_min", capital_min),
                param[float | None]("capital_max", capital_max),
                param[float | None]("estimated_value_min", estimated_value_min),
                param[float | None]("estimated_value_max", estimated_value_max),
                param[int | None]("registration_year_min", registration_year_min),
                param[int | None]("registration_year_max", registration_year_max),
                param[Date | None]("registration_date_min", registration_date_min),
                param[Date | None]("registration_date_max", registration_date_max),
                param[int | None]("last_report_year_min", last_report_year_min),
                param[int | None]("last_report_year_max", last_report_year_max),
                param[bool | None]("status_active", status_active),
                param[str | None]("legal_form", legal_form),
                param[bool | None]("has_email", has_email),
                param[bool | None]("has_website", has_website),
                param[SortOrStr | None]("sort", sort),
                param[DirOrStr | None]("dir", dir_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompanyListResponse],
            error_mapper=get_companies_error_mapper,
            request_options=request_options,
        )

    def get_companies_count(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyCountResponse, GetCompaniesCountErrorBody]:
        """Returns how many companies match the same **filter set** as ``GET /companies``, without returning rows. Use
        the **same query parameters** as list/search (except pagination: no ``limit``, ``offset``, or ``cursor``).
        Filters combine with **AND** where applicable.

        **Response:** a single integer ``count``; total matching companies for the current filters.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/count"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("keywords", keywords),
                param[str | None]("pkd", pkd),
                param[bool | None]("primary_only", primary_only),
                param[CurrencyOrStr | None]("currency", currency),
                param[str | None]("voivodeship", voivodeship),
                param[str | None]("postal_code", postal_code),
                param[str | None]("city", city),
                param[float | None]("revenue_min", revenue_min),
                param[float | None]("revenue_max", revenue_max),
                param[float | None]("revenue_operating_min", revenue_operating_min),
                param[float | None]("revenue_operating_max", revenue_operating_max),
                param[float | None]("profit_operating_min", profit_operating_min),
                param[float | None]("profit_operating_max", profit_operating_max),
                param[float | None]("profit_net_min", profit_net_min),
                param[float | None]("profit_net_max", profit_net_max),
                param[float | None]("income_tax_min", income_tax_min),
                param[float | None]("income_tax_max", income_tax_max),
                param[float | None]("cost_wages_min", cost_wages_min),
                param[float | None]("cost_wages_max", cost_wages_max),
                param[float | None]("cost_amortization_min", cost_amortization_min),
                param[float | None]("cost_amortization_max", cost_amortization_max),
                param[float | None]("total_assets_min", total_assets_min),
                param[float | None]("total_assets_max", total_assets_max),
                param[float | None]("ebitda_min", ebitda_min),
                param[float | None]("ebitda_max", ebitda_max),
                param[float | None]("capital_min", capital_min),
                param[float | None]("capital_max", capital_max),
                param[float | None]("estimated_value_min", estimated_value_min),
                param[float | None]("estimated_value_max", estimated_value_max),
                param[int | None]("registration_year_min", registration_year_min),
                param[int | None]("registration_year_max", registration_year_max),
                param[Date | None]("registration_date_min", registration_date_min),
                param[Date | None]("registration_date_max", registration_date_max),
                param[int | None]("last_report_year_min", last_report_year_min),
                param[int | None]("last_report_year_max", last_report_year_max),
                param[bool | None]("status_active", status_active),
                param[str | None]("legal_form", legal_form),
                param[bool | None]("has_email", has_email),
                param[bool | None]("has_website", has_website),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompanyCountResponse],
            error_mapper=get_companies_count_error_mapper,
            request_options=request_options,
        )

    def get_companies_export(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 100,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        has_email: bool | None = None,
        has_website: bool | None = None,
        status_active: bool | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyListResponse, GetCompaniesExportErrorBody]:
        """Same filters as ``GET /companies``, with page size up to **500** (vs 100 on the standard list). Contact
        emails are included when available. For large pulls, page with ``cursor`` (``cursor`` = last row ``entity_id``).
        Large ``offset`` values get slow. Each page consumes **1** monthly quota request.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size for bulk export (max 500).
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/export"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("keywords", keywords),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("cursor", cursor),
                param[str | None]("pkd", pkd),
                param[bool | None]("primary_only", primary_only),
                param[bool | None]("has_email", has_email),
                param[bool | None]("has_website", has_website),
                param[bool | None]("status_active", status_active),
                param[float | None]("revenue_min", revenue_min),
                param[float | None]("revenue_max", revenue_max),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[CompanyListResponse],
            error_mapper=get_companies_export_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsErrorBody]:
        """Returns full company profile addressed by **KRS** (Polish court registry number). Digits only; leading zeros
        are optional (normalized to 10 digits server-side).

        Integrations that only have a KRS number can call this directly. One request typically covers enrichment for a
        company. The payload includes:
        - ``company`` (identifiers, address, PKD, logo, capital),
        - ``details.contacts`` (email, phone, website, deliverability flags; email/phone revealed for API keys),
        - ``details.vat`` (VAT whitelist status + bank accounts when known),
        - ``details.filings`` / attributes / operational status,
        - ``roles`` and ``ownership``,
        - ``financials.byYear`` (metrics + ``esf_statement_lines`` when present; XML files are on the documents
            endpoint),
        - ``krz`` (restructuring/insolvency proceedings summary),
        - ``sanctions`` (MSWiA sanctions listing with measures and grounds; omitted when the company is not listed;
            dedicated read is ``/companies/krs/{krs}/sanctions``),
        - ``sudop`` (public aid / de minimis when checked),
        - ``bzp`` (public procurement summary when present),
        - ``ure`` (URE energy concessions when checked),
        - ``bdo`` (BDO waste/packaging register when present),
        - ``gpw`` (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use
            ``/companies/krs/{krs}/gpw``),
        - ``crbr`` (beneficial owners when present and RODO-eligible),
        - ``changeHistory`` when non-empty,
        - ``similarCompanies``, ``subsidiaryCompanies``, ``pkdRankings``, ``faq``, ``insightsByYear``,
        - ``hasStatistics`` (boolean; full peer benchmarks via ``/statistics``).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_connections(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsConnectionsErrorBody]:
        """Graph of related companies and people linked through shared roles/ownership (same payload as the profile
        Connections UI).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/connections"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_connections_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_group(
        self, krs: str, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsGroupErrorBody]:
        """Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented with foreign
        corporate shareholders from KRS matched to the LEI register: direct parent and ultimate parent (name, country,
        LEI), subsidiaries and other group companies (Polish ones with KRS number, foreign ones with country) and group
        size. ``direct_parent.source = "krs"`` means the parent comes from the KRS shareholder list (``pct`` = stake).
        Refreshed daily. Same data as MCP ``get_company_group``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            limit: Max group companies per list.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/group"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[int | None]("limit", limit)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_group_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_status(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsStatusErrorBody]:
        """Quick legal-status check (Active, Bankruptcy, Liquidation).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/status"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_status_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_structure_people(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsStructurePeopleErrorBody]:
        """Returns ownership and management structure only (without profile or financial data): ``roles`` and
        ``ownership``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/structure-people"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_structure_people_error_mapper,
            request_options=request_options,
        )


class AsyncCompaniesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_ceidg_nip_by_nip(
        self,
        nip: str,
        *,
        locale: LocaleOrStr | None = Locale.EN,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCeidgNipByNipErrorBody]:
        """Sole-proprietor (CEIDG) profile by **NIP**. Subject to public CEIDG catalog visibility. Contact email/phone
        revealed for API-key auth when present and allowed. Personal owner fields follow the same RODO gating as the
        website.

        Typical payload:
        - ``company`` – identifiers, address, PKD activities, contacts, logo, ``roles`` (owner)
        - ``primaryPkdDescription`` – localized primary PKD label
        - ``companySummary`` – AI description for the requested ``locale`` only (e.g. ``{ "en": "…" }``)
        - ``details.vat`` – VAT whitelist status + bank accounts when known
        - ``similarCompanies`` – peer JDGs from the same enrichment cache
        - ``changeHistory`` – CEIDG change events when available
        - ``sudop`` – public-aid (SUDOP) snapshot when checked (``null`` if unavailable)
        - ``bzp`` – public-procurement (BZP) summary when present (``null`` if none)
        - ``ure`` – URE energy concessions when checked (``null`` if unavailable)
        - ``bdo`` – BDO waste/packaging register when present (``null`` if none)
        - ``gpw`` – Warsaw Stock Exchange listing snapshot when the NIP is matched (``null`` if not listed)

        Args:
            nip: NIP normalized to exactly 10 digits.
            locale: Language for PKD labels and ``companySummary`` (one locale key in the response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ceidg/nip/{nip}"),
            path_params=[param[str]("nip", nip)],
            query_params=[param[LocaleOrStr | None]("locale", locale)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_ceidg_nip_by_nip_error_mapper,
            request_options=request_options,
        )

    async def get_companies(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 20,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        sort: SortOrStr | None = None,
        dir_: DirOrStr | None = Dir.DESC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyListResponse, GetCompaniesErrorBody]:
        """Uses the same search dataset as the public site. Filters combine with **AND** where applicable.

        **Response:** ``data`` is one page of rows; ``pagination`` has ``limit``, ``offset``, ``total``, ``hasMore``,
        and optionally ``cursor`` when cursor-based paging is used.

        For a single company’s full profile, use ``GET /companies/krs/{krs}`` (KRS court number).

        Parameter details are documented on each query field below.

        **Pagination mode**

        ``offset`` and ``cursor`` are mutually exclusive in client usage. If both are sent, the server returns ``400
        CONFLICTING_PARAMETERS``.

        Use ``offset`` for shallow interactive browsing and ``cursor`` for deep paging/export flows.

        Cursor pagination is ordered by ``entity_id`` ascending; ``cursor`` is the last ``entity_id`` from the prior
        page.

        Because datasets can change between requests, deep paging may still observe occasional duplicates or skips.

        With cursor mode, ``pagination.total`` may be unavailable and returned as ``-1``; rely on ``hasMore``.

        **Default ordering (offset mode)**

        - without ``q``: ``has_email`` desc, then ``has_website`` desc, then ``revenue_total`` desc, then
            ``extracted_at`` desc, then ``entity_id`` asc.
        - with ``q``: same ordering as above (not TF-IDF/full-text relevance ranking).
        - offset pagination is intended for interactive browsing; for deterministic deep traversal use cursor mode.

        **Financial filter semantics** (for ``/companies`` and ``/companies/count``)

        - financial range filters are evaluated on the latest indexed financial snapshot per company (search index row).
        - companies with ``null`` value for a filtered metric do not match that metric filter.
        - when ``last_report_year_*`` is combined with financial metric filters, both are evaluated against the same
            indexed reporting snapshot.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size. **Default:** ``20``. ``GET /companies`` caps at **100** per request. For bulk pulls use
                ``GET /companies/export`` (or ``limit`` &gt; 100 on ``/companies`` via API key), capped at **500** per
                page. For deep traversal, page with ``cursor``. **Quota accounting:** monthly quota counts each HTTP
                request. Row count in the page does not change the cost. Example: ``limit=500`` still consumes **1**
                request from monthly quota.
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            sort: Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in
                that column are excluded while sorting. Text columns (``name``, ``nip``, ``regon``, ``city``,
                ``region``, ``postal_code``) sort alphabetically; ``registration_date`` with ``dir=desc`` lists the
                newest registrations first (future-dated register errors are skipped); ``revenue_growth`` with
                ``dir=desc`` lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial
                year from KRS statements; combine with ``revenue_min`` to skip small companies). Not applied to
                free-text (``q``) or ``keywords`` searches, which keep relevance order.
            dir_: Sort direction for ``sort`` (``asc`` or ``desc``, default ``desc``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("keywords", keywords),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("cursor", cursor),
                param[str | None]("pkd", pkd),
                param[bool | None]("primary_only", primary_only),
                param[CurrencyOrStr | None]("currency", currency),
                param[str | None]("voivodeship", voivodeship),
                param[str | None]("postal_code", postal_code),
                param[str | None]("city", city),
                param[float | None]("revenue_min", revenue_min),
                param[float | None]("revenue_max", revenue_max),
                param[float | None]("revenue_operating_min", revenue_operating_min),
                param[float | None]("revenue_operating_max", revenue_operating_max),
                param[float | None]("profit_operating_min", profit_operating_min),
                param[float | None]("profit_operating_max", profit_operating_max),
                param[float | None]("profit_net_min", profit_net_min),
                param[float | None]("profit_net_max", profit_net_max),
                param[float | None]("income_tax_min", income_tax_min),
                param[float | None]("income_tax_max", income_tax_max),
                param[float | None]("cost_wages_min", cost_wages_min),
                param[float | None]("cost_wages_max", cost_wages_max),
                param[float | None]("cost_amortization_min", cost_amortization_min),
                param[float | None]("cost_amortization_max", cost_amortization_max),
                param[float | None]("total_assets_min", total_assets_min),
                param[float | None]("total_assets_max", total_assets_max),
                param[float | None]("ebitda_min", ebitda_min),
                param[float | None]("ebitda_max", ebitda_max),
                param[float | None]("capital_min", capital_min),
                param[float | None]("capital_max", capital_max),
                param[float | None]("estimated_value_min", estimated_value_min),
                param[float | None]("estimated_value_max", estimated_value_max),
                param[int | None]("registration_year_min", registration_year_min),
                param[int | None]("registration_year_max", registration_year_max),
                param[Date | None]("registration_date_min", registration_date_min),
                param[Date | None]("registration_date_max", registration_date_max),
                param[int | None]("last_report_year_min", last_report_year_min),
                param[int | None]("last_report_year_max", last_report_year_max),
                param[bool | None]("status_active", status_active),
                param[str | None]("legal_form", legal_form),
                param[bool | None]("has_email", has_email),
                param[bool | None]("has_website", has_website),
                param[SortOrStr | None]("sort", sort),
                param[DirOrStr | None]("dir", dir_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompanyListResponse],
            error_mapper=get_companies_error_mapper,
            request_options=request_options,
        )

    async def get_companies_count(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        currency: CurrencyOrStr | None = Currency.PLN,
        voivodeship: str | None = None,
        postal_code: str | None = None,
        city: str | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        revenue_operating_min: float | None = None,
        revenue_operating_max: float | None = None,
        profit_operating_min: float | None = None,
        profit_operating_max: float | None = None,
        profit_net_min: float | None = None,
        profit_net_max: float | None = None,
        income_tax_min: float | None = None,
        income_tax_max: float | None = None,
        cost_wages_min: float | None = None,
        cost_wages_max: float | None = None,
        cost_amortization_min: float | None = None,
        cost_amortization_max: float | None = None,
        total_assets_min: float | None = None,
        total_assets_max: float | None = None,
        ebitda_min: float | None = None,
        ebitda_max: float | None = None,
        capital_min: float | None = None,
        capital_max: float | None = None,
        estimated_value_min: float | None = None,
        estimated_value_max: float | None = None,
        registration_year_min: int | None = None,
        registration_year_max: int | None = None,
        registration_date_min: Date | None = None,
        registration_date_max: Date | None = None,
        last_report_year_min: int | None = None,
        last_report_year_max: int | None = None,
        status_active: bool | None = None,
        legal_form: str | None = None,
        has_email: bool | None = None,
        has_website: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyCountResponse, GetCompaniesCountErrorBody]:
        """Returns how many companies match the same **filter set** as ``GET /companies``, without returning rows. Use
        the **same query parameters** as list/search (except pagination: no ``limit``, ``offset``, or ``cursor``).
        Filters combine with **AND** where applicable.

        **Response:** a single integer ``count``; total matching companies for the current filters.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            currency: Display/filter currency context for financial threshold filters. Allowed values: ``PLN``, ``USD``,
                ``EUR`` (case-insensitive). Default is ``PLN``. For ``revenue_min`` / ``revenue_max``, the API applies
                thresholds against: - ``revenue_total`` when ``currency=PLN`` - ``revenue_total_usd`` when
                ``currency=USD`` - ``revenue_total_eur`` when ``currency=EUR``
            voivodeship: Voivodeship / region filter. Compared to ``company_search.region`` **case-insensitively**
                (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship names such
                as ``mazowieckie``, ``śląskie``). Common values include: ``dolnośląskie``, ``małopolskie``,
                ``mazowieckie``, ``pomorskie``, ``śląskie``, ``wielkopolskie``.
            postal_code: Exact postal code match (trimmed). Format depends on source data (e.g. ``00-001``).
            city: City substring filter (case-insensitive **ILIKE** ``%city%``).
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            revenue_operating_min: Minimum operating revenue (net sales / operating revenue field from financials).
            revenue_operating_max: Value sent with the request.
            profit_operating_min: Value sent with the request.
            profit_operating_max: Value sent with the request.
            profit_net_min: Value sent with the request.
            profit_net_max: Value sent with the request.
            income_tax_min: Value sent with the request.
            income_tax_max: Value sent with the request.
            cost_wages_min: Value sent with the request.
            cost_wages_max: Value sent with the request.
            cost_amortization_min: Value sent with the request.
            cost_amortization_max: Value sent with the request.
            total_assets_min: Value sent with the request.
            total_assets_max: Value sent with the request.
            ebitda_min: Value sent with the request.
            ebitda_max: Value sent with the request.
            capital_min: Minimum **share capital** (``capital_total``).
            capital_max: Value sent with the request.
            estimated_value_min: Minimum **estimated company value** (``estimated_value``), when present in search
                index.
            estimated_value_max: Value sent with the request.
            registration_year_min: Earliest **registration** year (``registration_date`` filter): companies registered
                on or after ``YYYY-01-01``.
            registration_year_max: Latest registration year (``registration_date`` on or before ``YYYY-12-31``).
            registration_date_min: Earliest exact **registration date** (``registration_date`` on or after this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_min``. For companies
                registered today, pass today's date as both ``registration_date_min`` and ``registration_date_max``.
                Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
            registration_date_max: Latest exact registration date (``registration_date`` on or before this day,
                inclusive), format ``YYYY-MM-DD``. Takes precedence over ``registration_year_max``.
            last_report_year_min: Earliest **financial report period** (``financial_period_to`` on or after
                ``YYYY-01-01``). When combined with financial metric filters, both are evaluated against the same
                indexed reporting snapshot.
            last_report_year_max: Latest financial report period (``financial_period_to`` on or before ``YYYY-12-31``).
                When combined with financial metric filters, both are evaluated against the same indexed reporting
                snapshot.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            legal_form: Legal form substring filter (case-insensitive **ILIKE** ``%legal_form%``). Common
                values/phrases: ``spółka z ograniczoną odpowiedzialnością``, ``spółka akcyjna``, ``prosta spółka
                akcyjna``, ``spółka komandytowa``, ``jednoosobowa działalność gospodarcza``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/count"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("keywords", keywords),
                param[str | None]("pkd", pkd),
                param[bool | None]("primary_only", primary_only),
                param[CurrencyOrStr | None]("currency", currency),
                param[str | None]("voivodeship", voivodeship),
                param[str | None]("postal_code", postal_code),
                param[str | None]("city", city),
                param[float | None]("revenue_min", revenue_min),
                param[float | None]("revenue_max", revenue_max),
                param[float | None]("revenue_operating_min", revenue_operating_min),
                param[float | None]("revenue_operating_max", revenue_operating_max),
                param[float | None]("profit_operating_min", profit_operating_min),
                param[float | None]("profit_operating_max", profit_operating_max),
                param[float | None]("profit_net_min", profit_net_min),
                param[float | None]("profit_net_max", profit_net_max),
                param[float | None]("income_tax_min", income_tax_min),
                param[float | None]("income_tax_max", income_tax_max),
                param[float | None]("cost_wages_min", cost_wages_min),
                param[float | None]("cost_wages_max", cost_wages_max),
                param[float | None]("cost_amortization_min", cost_amortization_min),
                param[float | None]("cost_amortization_max", cost_amortization_max),
                param[float | None]("total_assets_min", total_assets_min),
                param[float | None]("total_assets_max", total_assets_max),
                param[float | None]("ebitda_min", ebitda_min),
                param[float | None]("ebitda_max", ebitda_max),
                param[float | None]("capital_min", capital_min),
                param[float | None]("capital_max", capital_max),
                param[float | None]("estimated_value_min", estimated_value_min),
                param[float | None]("estimated_value_max", estimated_value_max),
                param[int | None]("registration_year_min", registration_year_min),
                param[int | None]("registration_year_max", registration_year_max),
                param[Date | None]("registration_date_min", registration_date_min),
                param[Date | None]("registration_date_max", registration_date_max),
                param[int | None]("last_report_year_min", last_report_year_min),
                param[int | None]("last_report_year_max", last_report_year_max),
                param[bool | None]("status_active", status_active),
                param[str | None]("legal_form", legal_form),
                param[bool | None]("has_email", has_email),
                param[bool | None]("has_website", has_website),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompanyCountResponse],
            error_mapper=get_companies_count_error_mapper,
            request_options=request_options,
        )

    async def get_companies_export(
        self,
        *,
        q: str | None = None,
        keywords: str | None = None,
        limit: int | None = 100,
        offset: int | None = 0,
        cursor: UUID | None = None,
        pkd: str | None = None,
        primary_only: bool | None = True,
        has_email: bool | None = None,
        has_website: bool | None = None,
        status_active: bool | None = None,
        revenue_min: float | None = None,
        revenue_max: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyListResponse, GetCompaniesExportErrorBody]:
        """Same filters as ``GET /companies``, with page size up to **500** (vs 100 on the standard list). Contact
        emails are included when available. For large pulls, page with ``cursor`` (``cursor`` = last row ``entity_id``).
        Large ``offset`` values get slow. Each page consumes **1** monthly quota request.

        Args:
            q: Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON
                lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric input: identifier lookup
                path is used first. For 10-digit numeric values, exact match is attempted against KRS
                (``registry_number``) and NIP; an exact match is also attempted against REGON as stored in the index.
                For other numeric lengths, prefix matching is used for those identifier fields. - textual input:
                case-insensitive substring match on company name (``ILIKE %q%``). Numeric lookup has priority over
                text-name matching when ``q`` contains only digits. Example: ``q=0000028860`` is treated as identifier
                lookup (not generic relevance search).
            keywords: Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter. Each
                keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may
                appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is
                supported (e.g. ``keywords=a,b&keywords=c``).
            limit: Page size for bulk export (max 500).
            offset: Zero-based row offset for classic **offset** pagination. Client contract: use either ``offset`` or
                ``cursor`` (not both). If both are provided, the server returns ``400 CONFLICTING_PARAMETERS``.
            cursor: Optional **cursor** for pagination: ``entity_id`` of the last row from the previous page. Cursor
                paging is ordered by ``entity_id`` ascending. Use it for deep paging/export-style traversal. Do not
                combine with ``offset``; if both are sent, request fails with ``400 CONFLICTING_PARAMETERS``. When
                present, the server may return ``pagination.total: -1`` and include ``pagination.cursor`` for the next
                page.
            pkd: PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased
                server-side. By default only the **primary** PKD (``primary_only=true``) is matched; set
                ``primary_only=false`` to match any code in ``all_pkd_codes``.
            primary_only: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` (default) means
                ``pkd`` matches ``primary_pkd`` only. ``false`` means ``pkd`` can match any entry in ``all_pkd_codes``.
            has_email: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with email). ``false`` is syntactically valid and treated as no filter.
            has_website: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only companies with website). ``false`` is syntactically valid and treated as no filter.
            status_active: Boolean filter syntax is accepted (``true``/``false``). Semantics: ``true`` applies positive
                filter (only active companies). ``false`` is syntactically valid and treated as no filter.
            revenue_min: Minimum **total revenue** (``revenue_total``). Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. Values are in **full currency
                units** (not thousands), e.g. ``1000000`` = one million PLN. Evaluated against the latest indexed
                financial snapshot per company. Companies with ``null`` in the selected revenue column do not match this
                filter.
            revenue_max: Maximum **total revenue** threshold in full units. Currency depends on ``currency`` query param
                (``PLN``/``USD``/``EUR``). If ``currency`` is omitted, PLN is used. If ``revenue_min > revenue_max``,
                the API returns ``400`` with code ``INVALID_RANGE``. Evaluated against the latest indexed financial
                snapshot per company. Companies with ``null`` in the selected revenue column do not match this filter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/export"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("keywords", keywords),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("cursor", cursor),
                param[str | None]("pkd", pkd),
                param[bool | None]("primary_only", primary_only),
                param[bool | None]("has_email", has_email),
                param[bool | None]("has_website", has_website),
                param[bool | None]("status_active", status_active),
                param[float | None]("revenue_min", revenue_min),
                param[float | None]("revenue_max", revenue_max),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[CompanyListResponse],
            error_mapper=get_companies_export_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsErrorBody]:
        """Returns full company profile addressed by **KRS** (Polish court registry number). Digits only; leading zeros
        are optional (normalized to 10 digits server-side).

        Integrations that only have a KRS number can call this directly. One request typically covers enrichment for a
        company. The payload includes:
        - ``company`` (identifiers, address, PKD, logo, capital),
        - ``details.contacts`` (email, phone, website, deliverability flags; email/phone revealed for API keys),
        - ``details.vat`` (VAT whitelist status + bank accounts when known),
        - ``details.filings`` / attributes / operational status,
        - ``roles`` and ``ownership``,
        - ``financials.byYear`` (metrics + ``esf_statement_lines`` when present; XML files are on the documents
            endpoint),
        - ``krz`` (restructuring/insolvency proceedings summary),
        - ``sanctions`` (MSWiA sanctions listing with measures and grounds; omitted when the company is not listed;
            dedicated read is ``/companies/krs/{krs}/sanctions``),
        - ``sudop`` (public aid / de minimis when checked),
        - ``bzp`` (public procurement summary when present),
        - ``ure`` (URE energy concessions when checked),
        - ``bdo`` (BDO waste/packaging register when present),
        - ``gpw`` (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use
            ``/companies/krs/{krs}/gpw``),
        - ``crbr`` (beneficial owners when present and RODO-eligible),
        - ``changeHistory`` when non-empty,
        - ``similarCompanies``, ``subsidiaryCompanies``, ``pkdRankings``, ``faq``, ``insightsByYear``,
        - ``hasStatistics`` (boolean; full peer benchmarks via ``/statistics``).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_connections(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsConnectionsErrorBody]:
        """Graph of related companies and people linked through shared roles/ownership (same payload as the profile
        Connections UI).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/connections"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_connections_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_group(
        self, krs: str, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsGroupErrorBody]:
        """Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented with foreign
        corporate shareholders from KRS matched to the LEI register: direct parent and ultimate parent (name, country,
        LEI), subsidiaries and other group companies (Polish ones with KRS number, foreign ones with country) and group
        size. ``direct_parent.source = "krs"`` means the parent comes from the KRS shareholder list (``pct`` = stake).
        Refreshed daily. Same data as MCP ``get_company_group``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits.
            limit: Max group companies per list.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/group"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[int | None]("limit", limit)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_group_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_status(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsStatusErrorBody]:
        """Quick legal-status check (Active, Bankruptcy, Liquidation).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/status"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_status_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_structure_people(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsStructurePeopleErrorBody]:
        """Returns ownership and management structure only (without profile or financial data): ``roles`` and
        ``ownership``.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/structure-people"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_structure_people_error_mapper,
            request_options=request_options,
        )
