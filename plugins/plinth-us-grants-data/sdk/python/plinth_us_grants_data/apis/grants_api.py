from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_api_v1_grants_funders_error import (
    GetApiV1GrantsFundersErrorBody,
    get_api_v1_grants_funders_error_mapper,
)
from ..errors.get_api_v1_grants_recipients_error import (
    GetApiV1GrantsRecipientsErrorBody,
    get_api_v1_grants_recipients_error_mapper,
)
from ..errors.get_api_v1_grants_summary_error import (
    GetApiV1GrantsSummaryErrorBody,
    get_api_v1_grants_summary_error_mapper,
)
from ..errors.get_api_v1_grants_transactions_error import (
    GetApiV1GrantsTransactionsErrorBody,
    get_api_v1_grants_transactions_error_mapper,
)
from ..errors.get_grants_summary_error import GetGrantsSummaryErrorBody, get_grants_summary_error_mapper
from ..errors.list_funders_error import ListFundersErrorBody, list_funders_error_mapper
from ..errors.list_grants_error import ListGrantsErrorBody, list_grants_error_mapper
from ..errors.list_recipients_error import ListRecipientsErrorBody, list_recipients_error_mapper
from ..models.enums.example import ExampleOrStr
from ..models.enums.example1 import Example1OrStr
from ..models.enums.example3 import Example3OrStr
from ..models.enums.format import FormatOrStr
from ..models.enums.funder_type import FunderTypeOrStr
from ..models.enums.geo_id_type import GeoIdTypeOrStr
from ..models.enums.id_type import IdTypeOrStr
from ..models.enums.location_type import LocationTypeOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.funders_response import FundersResponse
from ..models.recipients_response import RecipientsResponse
from ..models.summary_response import SummaryResponse
from ..models.transactions_response import TransactionsResponse
from ..server.server import Server


class GrantsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GrantsApiWithRawResponse(client, server, auth)

    def get_api_v1_grants_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundersResponse:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Funders matching the filter, aggregated.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_grants_funders(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                example=example,
                request_options=request_options,
            ),
        )

    def get_api_v1_grants_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecipientsResponse:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recipients matching the filter, aggregated.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_grants_recipients(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                example=example,
                request_options=request_options,
            ),
        )

    def get_api_v1_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        example: Example3OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Totals and a per-year breakdown over the whole filter.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_grants_summary(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                example=example,
                request_options=request_options,
            ),
        )

    def get_api_v1_grants_transactions(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: ExampleOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionsResponse:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Grant lines matching the filter.

        Raises:
            ApiError: A parameter we understood the name of but not the value of. No API key, or a key we do not
                recognize. The call allowance is spent, the account is inactive, or the endpoint needs a paid plan — the
                message says which, and names the period it resets on (daily on free and non-profit plans, monthly on
                Pro). Validation Error ``error`` is ``ApiErrorModel | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_grants_transactions(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                example=example,
                request_options=request_options,
            ),
        )

    def get_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_grants_summary(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                request_options=request_options,
            ),
        )

    def list_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_funders(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                page=page,
                limit=limit,
                request_options=request_options,
            ),
        )

    def list_grants(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_grants(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    def list_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_recipients(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                page=page,
                limit=limit,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> GrantsApiWithRawResponse:
        return self._with_raw_response


class AsyncGrantsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGrantsApiWithRawResponse(client, server, auth)

    async def get_api_v1_grants_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundersResponse:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Funders matching the filter, aggregated.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_grants_funders(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                example=example,
                request_options=request_options,
            ),
        )

    async def get_api_v1_grants_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecipientsResponse:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recipients matching the filter, aggregated.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_grants_recipients(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                example=example,
                request_options=request_options,
            ),
        )

    async def get_api_v1_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        example: Example3OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Totals and a per-year breakdown over the whole filter.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_grants_summary(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                example=example,
                request_options=request_options,
            ),
        )

    async def get_api_v1_grants_transactions(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: ExampleOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionsResponse:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Grant lines matching the filter.

        Raises:
            ApiError: A parameter we understood the name of but not the value of. No API key, or a key we do not
                recognize. The call allowance is spent, the account is inactive, or the endpoint needs a paid plan — the
                message says which, and names the period it resets on (daily on free and non-profit plans, monthly on
                Pro). Validation Error ``error`` is ``ApiErrorModel | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_grants_transactions(
                funder_id=funder_id,
                recip_id=recip_id,
                id_type=id_type,
                year=year,
                min_year=min_year,
                max_year=max_year,
                subject=subject,
                location=location,
                geo_id_type=geo_id_type,
                location_type=location_type,
                country=country,
                query=query,
                support=support,
                funder_type=funder_type,
                exclude=exclude,
                exclude_daf=exclude_daf,
                min_amt=min_amt,
                max_amt=max_amt,
                min_match_prob=min_match_prob,
                ein_source=ein_source,
                jurisdiction=jurisdiction,
                strict=strict,
                format_=format_,
                population=population,
                transaction=transaction,
                include_gov=include_gov,
                last_updated=last_updated,
                profile_levels=profile_levels,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                example=example,
                request_options=request_options,
            ),
        )

    async def get_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_grants_summary(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                request_options=request_options,
            ),
        )

    async def list_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_funders(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                page=page,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def list_grants(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_grants(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                page=page,
                limit=limit,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    async def list_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. Validation Error ``error`` is ``ApiErrorModel
                | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_recipients(
                funder_id=funder_id,
                recip_id=recip_id,
                year=year,
                subject=subject,
                location=location,
                min_amt=min_amt,
                max_amt=max_amt,
                page=page,
                limit=limit,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGrantsApiWithRawResponse:
        return self._with_raw_response


class GrantsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_grants_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundersResponse, GetApiV1GrantsFundersErrorBody]:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/funders"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[SortOrderOrStr | None]("sort_order", sort_order),
                param[Example1OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FundersResponse],
            error_mapper=get_api_v1_grants_funders_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_grants_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecipientsResponse, GetApiV1GrantsRecipientsErrorBody]:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/recipients"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[SortOrderOrStr | None]("sort_order", sort_order),
                param[Example1OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[RecipientsResponse],
            error_mapper=get_api_v1_grants_recipients_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        example: Example3OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetApiV1GrantsSummaryErrorBody]:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/summary"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[Example3OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SummaryResponse],
            error_mapper=get_api_v1_grants_summary_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_grants_transactions(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: ExampleOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionsResponse, GetApiV1GrantsTransactionsErrorBody]:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/transactions"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[SortOrderOrStr | None]("sort_order", sort_order),
                param[ExampleOrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TransactionsResponse],
            error_mapper=get_api_v1_grants_transactions_error_mapper,
            request_options=request_options,
        )

    def get_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetGrantsSummaryErrorBody]:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/summary"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_grants_summary_error_mapper,
            request_options=request_options,
        )

    def list_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ListFundersErrorBody]:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/funders"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=list_funders_error_mapper,
            request_options=request_options,
        )

    def list_grants(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ListGrantsErrorBody]:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/transactions"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[str | None]("sort_order", sort_order),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=list_grants_error_mapper,
            request_options=request_options,
        )

    def list_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ListRecipientsErrorBody]:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/recipients"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=list_recipients_error_mapper,
            request_options=request_options,
        )


class AsyncGrantsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_grants_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundersResponse, GetApiV1GrantsFundersErrorBody]:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/funders"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[SortOrderOrStr | None]("sort_order", sort_order),
                param[Example1OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FundersResponse],
            error_mapper=get_api_v1_grants_funders_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_grants_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: Example1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecipientsResponse, GetApiV1GrantsRecipientsErrorBody]:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/recipients"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[SortOrderOrStr | None]("sort_order", sort_order),
                param[Example1OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[RecipientsResponse],
            error_mapper=get_api_v1_grants_recipients_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        example: Example3OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetApiV1GrantsSummaryErrorBody]:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/summary"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[Example3OrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SummaryResponse],
            error_mapper=get_api_v1_grants_summary_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_grants_transactions(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        id_type: IdTypeOrStr | None = None,
        year: str | None = None,
        min_year: str | None = None,
        max_year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        geo_id_type: GeoIdTypeOrStr | None = None,
        location_type: LocationTypeOrStr | None = None,
        country: str | None = None,
        query: str | None = None,
        support: str | None = None,
        funder_type: FunderTypeOrStr | None = None,
        exclude: str | None = None,
        exclude_daf: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        min_match_prob: str | None = None,
        ein_source: str | None = None,
        jurisdiction: str | None = None,
        strict: str | None = None,
        format_: FormatOrStr | None = None,
        population: str | None = None,
        transaction: str | None = None,
        include_gov: str | None = None,
        last_updated: str | None = None,
        profile_levels: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: SortOrderOrStr | None = None,
        example: ExampleOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionsResponse, GetApiV1GrantsTransactionsErrorBody]:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
                Comma-separate for several.
            recip_id: EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
            id_type: Accepted for Candid compatibility. Only ``ein`` is valid — Candid's proprietary organization keys
                mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong
                filter.
            year: Filing fiscal year. A single year, a comma-separated list, or a ``2019-2023`` range.
            min_year: Lowest fiscal year to include (open-ended alternative to ``year``).
            max_year: Highest fiscal year to include.
            subject: Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a
                cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is
                rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification,
                so this filter excludes unmatched grant lines (~33% of dollars).
            location: Place filter. **Whose place it is comes from ``location_type``, which defaults to the RECIPIENT**
                — so on /grants/funders, ``location=MA`` returns funders that gave TO Massachusetts, not funders based
                there (which is why a Seattle foundation can appear). Set ``location_type=funder`` for the other
                reading. How the value itself is read comes from ``geo_id_type`` (default: two-letter US state).
                Comma-separate for several.
            geo_id_type: How ``location`` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
                ids are not resolved.
            location_type: Whose geography ``location`` refers to: recipient (default) | funder | area_served.
                ``area_served`` means the funder demonstrably gives there — see the response note for exactly what it
                covers.
            country: Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block
                carries (IN=India, UK=United Kingdom — NOT ISO).
            query: Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose
                coverage varies sharply between filers — many report none at all, and for those funders this is a
                recipient-name search only, which a caller searching for a THEME will read as a real absence. Every
                response says so in ``x_plinth.warnings``; check ``description`` on the rows to see which you got.
                **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject,
                funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every
                purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it
                alone is a 400, immediately, rather than a timeout later.
            support: Support strategy, derived from the filing's own purpose wording (general_operating, program,
                capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief,
                equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
            funder_type: private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
                donor-advised pass-through.
            exclude: Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is
                excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total
                that keeps them are different claims and the caller has to be the one making it. On /grants/summary,
                ``x_plinth.excluded`` prices each class against your own filter.
            exclude_daf: Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for
                this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National
                Philanthropic Trust and similar) report enormous grant totals because money passes through them from
                individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers
                a different question from 'which foundations give the most'. Exactly equivalent to ``exclude=daf``, and
                kept because the amount-ranked caveat names it; ``exclude=`` additionally drops the two distortions that
                survive it (grants to individuals, and transfers inside one economic entity).
            min_amt: Minimum grant amount, whole dollars.
            max_amt: Maximum grant amount, whole dollars.
            min_match_prob: Keep only rows whose recipient EIN carries ``x_plinth.match_prob`` at or above this value (0
                to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out
                near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every
                ``model`` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a
                provenance filter, and the response says so in ``x_plinth.warnings``. For provenance, say so with
                ``ein_source``.
            ein_source: Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest
                first, with each rule's measured held-out precision: filed (0.995), override_human (0.99),
                override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95),
                address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob).
                ``filed`` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient
                EIN are excluded.
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            strict: Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it
                in a migration test suite so a dropped filter fails loudly.
            format_: json (default) or xml.
            population: NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
                filings do not carry it and we do not infer it. Approximate with ``subject`` plus ``query``, and expect
                lower precision.
            transaction: NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on
                Schedule I / Part XIV.
            include_gov: NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built
                from Form 990 filings, and government agencies do not file them. ``include_gov=false`` is therefore
                already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql,
                for money flowing FROM government.
            last_updated: NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
                ``x_plinth.dataset`` on any response, or GET /api/meta, and re-sync when the build stamp moves.
            profile_levels: NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
                outside Candid's own platform.
            page: 1-based page number. Default 1.
            limit: Maximum rows to return.
            sort_by: Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint.
                An unavailable field is reported in x_plinth.warnings, never silently swapped.
            sort_order: asc or desc. Default desc.
            example: Return a canned example instead of querying the corpus. **Needs no API key and is not metered.**
                ``1`` is the plain success case; ``list`` enumerates what each named case demonstrates. The
                organizations in an example are invented — only the shape is real.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/grants/transactions"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[IdTypeOrStr | None]("id_type", id_type),
                param[str | None]("year", year),
                param[str | None]("min_year", min_year),
                param[str | None]("max_year", max_year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[GeoIdTypeOrStr | None]("geo_id_type", geo_id_type),
                param[LocationTypeOrStr | None]("location_type", location_type),
                param[str | None]("country", country),
                param[str | None]("query", query),
                param[str | None]("support", support),
                param[FunderTypeOrStr | None]("funder_type", funder_type),
                param[str | None]("exclude", exclude),
                param[str | None]("exclude_daf", exclude_daf),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("min_match_prob", min_match_prob),
                param[str | None]("ein_source", ein_source),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("strict", strict),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("population", population),
                param[str | None]("transaction", transaction),
                param[str | None]("include_gov", include_gov),
                param[str | None]("last_updated", last_updated),
                param[str | None]("profile_levels", profile_levels),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[SortOrderOrStr | None]("sort_order", sort_order),
                param[ExampleOrStr | None]("example", example),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TransactionsResponse],
            error_mapper=get_api_v1_grants_transactions_error_mapper,
            request_options=request_options,
        )

    async def get_grants_summary(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetGrantsSummaryErrorBody]:
        """One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a
        year-by-year breakdown. Cheaper than paging the rows to count them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/summary"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_grants_summary_error_mapper,
            request_options=request_options,
        )

    async def list_funders(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ListFundersErrorBody]:
        """Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and
        the first and last fiscal years they were active.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/funders"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=list_funders_error_mapper,
            request_options=request_options,
        )

    async def list_grants(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        sort_by: str | None = None,
        sort_order: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ListGrantsErrorBody]:
        """Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The
        graph traverses both ways: ``funder_id`` for everything a foundation funded, ``recip_id`` for every funder
        behind a nonprofit.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/transactions"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
                param[str | None]("sort_by", sort_by),
                param[str | None]("sort_order", sort_order),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=list_grants_error_mapper,
            request_options=request_options,
        )

    async def list_recipients(
        self,
        *,
        funder_id: str | None = None,
        recip_id: str | None = None,
        year: str | None = None,
        subject: str | None = None,
        location: str | None = None,
        min_amt: str | None = None,
        max_amt: str | None = None,
        page: str | None = None,
        limit: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ListRecipientsErrorBody]:
        """Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct
        funders backed them.

        Args:
            funder_id: Value sent with the request.
            recip_id: Value sent with the request.
            year: Value sent with the request.
            subject: Value sent with the request.
            location: Value sent with the request.
            min_amt: Value sent with the request.
            max_amt: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/grants/recipients"),
            query_params=[
                param[str | None]("funder_id", funder_id),
                param[str | None]("recip_id", recip_id),
                param[str | None]("year", year),
                param[str | None]("subject", subject),
                param[str | None]("location", location),
                param[str | None]("min_amt", min_amt),
                param[str | None]("max_amt", max_amt),
                param[str | None]("page", page),
                param[str | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=list_recipients_error_mapper,
            request_options=request_options,
        )
