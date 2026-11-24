from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.get_gcp_billing_account_error import GetGcpBillingAccountErrorBody, get_gcp_billing_account_error_mapper
from ..errors.get_gcp_recommendation_error import GetGcpRecommendationErrorBody, get_gcp_recommendation_error_mapper
from ..errors.list_gcp_billing_accounts_error import (
    ListGcpBillingAccountsErrorBody,
    list_gcp_billing_accounts_error_mapper,
)
from ..errors.list_gcp_billing_accounts_settings_error import (
    ListGcpBillingAccountsSettingsErrorBody,
    list_gcp_billing_accounts_settings_error_mapper,
)
from ..errors.list_gcp_planned_purchases_error import (
    ListGcpPlannedPurchasesErrorBody,
    list_gcp_planned_purchases_error_mapper,
)
from ..errors.list_gcp_recommendations_error import (
    ListGcpRecommendationsErrorBody,
    list_gcp_recommendations_error_mapper,
)
from ..errors.list_gcp_resource_cuds_error import ListGcpResourceCudsErrorBody, list_gcp_resource_cuds_error_mapper
from ..errors.list_gcp_spend_cuds_error import ListGcpSpendCudsErrorBody, list_gcp_spend_cuds_error_mapper
from ..models.enums.gcp_service import GcpServiceOrStr
from ..models.enums.granularity import Granularity, GranularityOrStr
from ..models.enums.status2_doi_t_perfect_scale_for_commitments_gcp_api import (
    Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr,
)
from ..models.gcp_billing_account_detail import GcpBillingAccountDetail
from ..models.gcp_recommendation_with_eligible_spend import GcpRecommendationWithEligibleSpend
from ..models.ps4_commitments_v1_gcp_billing_accounts_planned_purchases_response import (
    Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse,
)
from ..models.ps4_commitments_v1_gcp_billing_accounts_recommendations_response import (
    Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse,
)
from ..models.ps4_commitments_v1_gcp_billing_accounts_resource_based_response import (
    Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse,
)
from ..models.ps4_commitments_v1_gcp_billing_accounts_response import Ps4CommitmentsV1GcpBillingAccountsResponse
from ..models.ps4_commitments_v1_gcp_billing_accounts_spend_based_response import (
    Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse,
)
from ..models.ps4_commitments_v1_gcp_settings_response import Ps4CommitmentsV1GcpSettingsResponse
from ..server.server import Server


class PerfectScaleForCommitmentsGcp:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PerfectScaleForCommitmentsGcpWithRawResponse(client, server, auth)

    def get_gcp_billing_account(
        self,
        billing_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GcpBillingAccountDetail:
        """Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the
        Overview time series. Use this when you need a single billing account's Console Overview in one call (identity
        and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost
        Summary and CUD Coverage charts) without fetching every billing account.

        Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line
        (``service`` of ``compute`` or ``cloud_sql``):
        - ``stats30d``: last 30 days ESR and realized savings per product line (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per product line (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single GCP Billing Account details (same list-item fields as provided for the billing account through list
            GCP billing accounts operation) and overview time series: 6 months stats and 30 days of CUD coverage.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_gcp_billing_account(
                billing_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_gcp_recommendation(
        self,
        billing_account_id: str,
        gcp_service: GcpServiceOrStr,
        *,
        region: str | None = None,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GcpRecommendationWithEligibleSpend:
        """Returns the recommendation for one product line (``gcp_service``) and region scope on the GCP billing
        account, including analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the
        eligible-spend bucket size (defaults to ``day``).

        **``region``**: optional for ``compute``, defaulting to ``global`` (its only scope). Required for ``cloud_sql``
        — omitting it returns ``400`` with code ``validation_failed``, as does a malformed region or one incompatible
        with ``gcp_service`` (``cloud_sql`` never uses ``global``). A well-formed region the billing account has never
        had eligible spend in returns ``404`` with code ``not_found`` — the scope does not exist, same as an unknown
        billing account. When the scope exists but no stored recommendation matches, the response is ``200`` with
        ``recommendation`` omitted and ``estimatedEquivalentRecommendedCommitment`` of ``0``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is
                lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            granularity: Time bucket size for eligible-spend data points on the recommendation response. If omitted,
                defaults to ``day``. Coarser buckets return min/max/median usage; ``hour`` returns per-hour totals.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recommendation detail with eligible-spend usage series.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_gcp_recommendation(
                billing_account_id,
                gcp_service,
                region=region,
                granularity=granularity,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_gcp_billing_accounts(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsResponse:
        """Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover
        GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings
        metrics.

        Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed
        YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of GCP Billing Accounts. One item per billing account.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_gcp_billing_accounts(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_gcp_billing_accounts_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpSettingsResponse:
        """Returns one item per onboarded GCP Billing Account. Each item includes that billing account's recommendation
        and automation engine settings for each product line activated on it, per region scope: one ``global`` entry for
        ``compute``, and one entry per known region for ``cloud_sql``.

        Cloud SQL regions come from the billing account's persisted settings: a region is added when eligible spend is
        first seen there and is never removed, so its settings entry remains listed even if spend later drops to zero.
        Items are sorted by ``billingAccountId``; within an item, ``services`` lists ``compute`` before ``cloud_sql``,
        with ``cloud_sql`` regions sorted alphabetically.

        Settings are stored independently on each billing account. Existing customer-level settings are copied lazily
        when an account is first read or initialized; if no valid legacy value exists, the complete backend defaults are
        materialized once on the account. Only product lines that are activated/onboarded for a given billing account
        are returned.

        In the DoiT Console, these settings are edited on an account's Settings tab.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settings payload for one onboarded GCP Billing Account, broken down by activated product line
            (``services[].settings``).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_gcp_billing_accounts_settings(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_gcp_planned_purchases(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse:
        """Returns the laddering projections for the billing account, grouped by PS4C product line (``service``) and
        region. Each service group lists one entry per available ``gcp-purchases-projection`` document for that scope
        (``compute`` scopes are ``global``; ``cloud_sql`` scopes are per-region).

        With no filters, returns all existing projection documents in stable order: service groups ordered ``compute``
        first, then ``cloud_sql``; within each group, regions sorted with ``global`` first, then remaining regions
        alphabetically. Services with no projection documents are omitted (not returned as empty groups). When a filter
        matches no documents, the response is an empty ``items`` array (not ``404``). Partial projection documents
        return only the fields available in storage.

        **``gcp_service`` and ``region`` filters**: omit both to return all available services and their regions; supply
        ``gcp_service`` alone to return all regions for that service; supply both to return a single service/region
        scope. ``region`` requires ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400``
        with code ``gcp_service_required``. Invalid ``gcp_service`` or ``region`` values return ``400`` with code
        ``validation_failed``.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account that is not onboarded for PS4C still returns ``200`` with an empty ``items`` array when no projection
        documents exist — use ``GET /ps4commitments/v1/gcp/billing-accounts`` (or get-by-id) for onboarding status.

        **Pagination**: results are paginated by **service group** (a whole group is never split across pages). Groups
        keep the stable service order above. Use ``maxResults`` to limit page size (default 50, max 500). When more
        groups remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``gcp_service``, ``region``, ``maxResults``). ``rowCount`` is the number of service
        groups in this page. An invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired
        token returns ``400`` with code ``pagination_token_expired``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of planned purchase projections grouped by service and region.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_gcp_planned_purchases(
                billing_account_id,
                gcp_service=gcp_service,
                region=region,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_gcp_recommendations(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse:
        """Returns commitment purchase recommendations for the billing account, filtered to the term preferred in each
        product line's settings (``preferredCommitmentPeriod``).

        **``gcp_service`` and ``region`` filters**: omit both to return recommendations for all product lines
        (``compute``, ``cloud_sql``) across all their regions. Supply ``gcp_service`` alone to return all regions for
        that service; supply both to return a single service/region scope. ``region`` requires ``gcp_service`` — a
        request with ``region`` but no ``gcp_service`` returns ``400`` with code ``gcp_service_required``. A ``region``
        that is malformed or incompatible with ``gcp_service`` (``compute`` is ``global``-only, ``cloud_sql`` is
        regional-only) returns ``400`` with code ``validation_failed``; a well-formed, compatible region with no data
        returns ``200`` with an empty ``items`` array.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account with no matching recommendation documents returns ``200`` with an empty ``items`` array.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of GCP recommendations.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_gcp_recommendations(
                billing_account_id,
                gcp_service=gcp_service,
                region=region,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_gcp_resource_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse:
        """Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by
        CUD state (``status``). Omit to return CUDs in all states.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of resource-based CUDs.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_gcp_resource_cuds(
                billing_account_id,
                status=status,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_gcp_spend_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse:
        """Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by CUD state
        (``status``); omit to return CUDs in all states.

        **``gcp_service`` and ``region`` filters**: ``gcp_service`` narrows results to one product line's coverage
        sub-type (``compute`` or ``cloud_sql``); ``region`` additionally narrows to one region scope and requires
        ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400`` with code
        ``gcp_service_required``. A ``region`` that is malformed or incompatible with ``gcp_service`` (``compute`` is
        ``global``-only, ``cloud_sql`` is regional-only) returns ``400`` with code ``validation_failed``; a well-formed,
        compatible region with no matching CUDs returns ``200`` with an empty ``items`` array. Note the ``region`` query
        parameter uses the ``lower_snake_case`` wire form (``us_central1``), while each item's ``region`` field echoes
        the raw provider value (``us-central1``).

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of spend-based CUDs.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_gcp_spend_cuds(
                billing_account_id,
                status=status,
                gcp_service=gcp_service,
                region=region,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PerfectScaleForCommitmentsGcpWithRawResponse:
        return self._with_raw_response


class AsyncPerfectScaleForCommitmentsGcp:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPerfectScaleForCommitmentsGcpWithRawResponse(client, server, auth)

    async def get_gcp_billing_account(
        self,
        billing_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GcpBillingAccountDetail:
        """Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the
        Overview time series. Use this when you need a single billing account's Console Overview in one call (identity
        and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost
        Summary and CUD Coverage charts) without fetching every billing account.

        Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line
        (``service`` of ``compute`` or ``cloud_sql``):
        - ``stats30d``: last 30 days ESR and realized savings per product line (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per product line (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Single GCP Billing Account details (same list-item fields as provided for the billing account through list
            GCP billing accounts operation) and overview time series: 6 months stats and 30 days of CUD coverage.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_gcp_billing_account(
                billing_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_gcp_recommendation(
        self,
        billing_account_id: str,
        gcp_service: GcpServiceOrStr,
        *,
        region: str | None = None,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GcpRecommendationWithEligibleSpend:
        """Returns the recommendation for one product line (``gcp_service``) and region scope on the GCP billing
        account, including analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the
        eligible-spend bucket size (defaults to ``day``).

        **``region``**: optional for ``compute``, defaulting to ``global`` (its only scope). Required for ``cloud_sql``
        — omitting it returns ``400`` with code ``validation_failed``, as does a malformed region or one incompatible
        with ``gcp_service`` (``cloud_sql`` never uses ``global``). A well-formed region the billing account has never
        had eligible spend in returns ``404`` with code ``not_found`` — the scope does not exist, same as an unknown
        billing account. When the scope exists but no stored recommendation matches, the response is ``200`` with
        ``recommendation`` omitted and ``estimatedEquivalentRecommendedCommitment`` of ``0``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is
                lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            granularity: Time bucket size for eligible-spend data points on the recommendation response. If omitted,
                defaults to ``day``. Coarser buckets return min/max/median usage; ``hour`` returns per-hour totals.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recommendation detail with eligible-spend usage series.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_gcp_recommendation(
                billing_account_id,
                gcp_service,
                region=region,
                granularity=granularity,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_gcp_billing_accounts(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsResponse:
        """Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover
        GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings
        metrics.

        Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed
        YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of GCP Billing Accounts. One item per billing account.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_gcp_billing_accounts(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_gcp_billing_accounts_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpSettingsResponse:
        """Returns one item per onboarded GCP Billing Account. Each item includes that billing account's recommendation
        and automation engine settings for each product line activated on it, per region scope: one ``global`` entry for
        ``compute``, and one entry per known region for ``cloud_sql``.

        Cloud SQL regions come from the billing account's persisted settings: a region is added when eligible spend is
        first seen there and is never removed, so its settings entry remains listed even if spend later drops to zero.
        Items are sorted by ``billingAccountId``; within an item, ``services`` lists ``compute`` before ``cloud_sql``,
        with ``cloud_sql`` regions sorted alphabetically.

        Settings are stored independently on each billing account. Existing customer-level settings are copied lazily
        when an account is first read or initialized; if no valid legacy value exists, the complete backend defaults are
        materialized once on the account. Only product lines that are activated/onboarded for a given billing account
        are returned.

        In the DoiT Console, these settings are edited on an account's Settings tab.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settings payload for one onboarded GCP Billing Account, broken down by activated product line
            (``services[].settings``).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_gcp_billing_accounts_settings(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_gcp_planned_purchases(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse:
        """Returns the laddering projections for the billing account, grouped by PS4C product line (``service``) and
        region. Each service group lists one entry per available ``gcp-purchases-projection`` document for that scope
        (``compute`` scopes are ``global``; ``cloud_sql`` scopes are per-region).

        With no filters, returns all existing projection documents in stable order: service groups ordered ``compute``
        first, then ``cloud_sql``; within each group, regions sorted with ``global`` first, then remaining regions
        alphabetically. Services with no projection documents are omitted (not returned as empty groups). When a filter
        matches no documents, the response is an empty ``items`` array (not ``404``). Partial projection documents
        return only the fields available in storage.

        **``gcp_service`` and ``region`` filters**: omit both to return all available services and their regions; supply
        ``gcp_service`` alone to return all regions for that service; supply both to return a single service/region
        scope. ``region`` requires ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400``
        with code ``gcp_service_required``. Invalid ``gcp_service`` or ``region`` values return ``400`` with code
        ``validation_failed``.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account that is not onboarded for PS4C still returns ``200`` with an empty ``items`` array when no projection
        documents exist — use ``GET /ps4commitments/v1/gcp/billing-accounts`` (or get-by-id) for onboarding status.

        **Pagination**: results are paginated by **service group** (a whole group is never split across pages). Groups
        keep the stable service order above. Use ``maxResults`` to limit page size (default 50, max 500). When more
        groups remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``gcp_service``, ``region``, ``maxResults``). ``rowCount`` is the number of service
        groups in this page. An invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired
        token returns ``400`` with code ``pagination_token_expired``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of planned purchase projections grouped by service and region.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_gcp_planned_purchases(
                billing_account_id,
                gcp_service=gcp_service,
                region=region,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_gcp_recommendations(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse:
        """Returns commitment purchase recommendations for the billing account, filtered to the term preferred in each
        product line's settings (``preferredCommitmentPeriod``).

        **``gcp_service`` and ``region`` filters**: omit both to return recommendations for all product lines
        (``compute``, ``cloud_sql``) across all their regions. Supply ``gcp_service`` alone to return all regions for
        that service; supply both to return a single service/region scope. ``region`` requires ``gcp_service`` — a
        request with ``region`` but no ``gcp_service`` returns ``400`` with code ``gcp_service_required``. A ``region``
        that is malformed or incompatible with ``gcp_service`` (``compute`` is ``global``-only, ``cloud_sql`` is
        regional-only) returns ``400`` with code ``validation_failed``; a well-formed, compatible region with no data
        returns ``200`` with an empty ``items`` array.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account with no matching recommendation documents returns ``200`` with an empty ``items`` array.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of GCP recommendations.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_gcp_recommendations(
                billing_account_id,
                gcp_service=gcp_service,
                region=region,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_gcp_resource_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse:
        """Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by
        CUD state (``status``). Omit to return CUDs in all states.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of resource-based CUDs.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_gcp_resource_cuds(
                billing_account_id,
                status=status,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_gcp_spend_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse:
        """Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by CUD state
        (``status``); omit to return CUDs in all states.

        **``gcp_service`` and ``region`` filters**: ``gcp_service`` narrows results to one product line's coverage
        sub-type (``compute`` or ``cloud_sql``); ``region`` additionally narrows to one region scope and requires
        ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400`` with code
        ``gcp_service_required``. A ``region`` that is malformed or incompatible with ``gcp_service`` (``compute`` is
        ``global``-only, ``cloud_sql`` is regional-only) returns ``400`` with code ``validation_failed``; a well-formed,
        compatible region with no matching CUDs returns ``200`` with an empty ``items`` array. Note the ``region`` query
        parameter uses the ``lower_snake_case`` wire form (``us_central1``), while each item's ``region`` field echoes
        the raw provider value (``us-central1``).

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of spend-based CUDs.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_gcp_spend_cuds(
                billing_account_id,
                status=status,
                gcp_service=gcp_service,
                region=region,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPerfectScaleForCommitmentsGcpWithRawResponse:
        return self._with_raw_response


class PerfectScaleForCommitmentsGcpWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_gcp_billing_account(
        self,
        billing_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GcpBillingAccountDetail, GetGcpBillingAccountErrorBody]:
        """Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the
        Overview time series. Use this when you need a single billing account's Console Overview in one call (identity
        and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost
        Summary and CUD Coverage charts) without fetching every billing account.

        Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line
        (``service`` of ``compute`` or ``cloud_sql``):
        - ``stats30d``: last 30 days ESR and realized savings per product line (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per product line (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}"),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GcpBillingAccountDetail],
            error_mapper=get_gcp_billing_account_error_mapper,
            request_options=request_options,
        )

    def get_gcp_recommendation(
        self,
        billing_account_id: str,
        gcp_service: GcpServiceOrStr,
        *,
        region: str | None = None,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GcpRecommendationWithEligibleSpend, GetGcpRecommendationErrorBody]:
        """Returns the recommendation for one product line (``gcp_service``) and region scope on the GCP billing
        account, including analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the
        eligible-spend bucket size (defaults to ``day``).

        **``region``**: optional for ``compute``, defaulting to ``global`` (its only scope). Required for ``cloud_sql``
        — omitting it returns ``400`` with code ``validation_failed``, as does a malformed region or one incompatible
        with ``gcp_service`` (``cloud_sql`` never uses ``global``). A well-formed region the billing account has never
        had eligible spend in returns ``404`` with code ``not_found`` — the scope does not exist, same as an unknown
        billing account. When the scope exists but no stored recommendation matches, the response is ``200`` with
        ``recommendation`` omitted and ``estimatedEquivalentRecommendedCommitment`` of ``0``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is
                lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            granularity: Time bucket size for eligible-spend data points on the recommendation response. If omitted,
                defaults to ``day``. Coarser buckets return min/max/median usage; ``hour`` returns per-hour totals.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations/{gcp_service}"
            ),
            path_params=[
                param[str]("billingAccountId", billing_account_id), param[GcpServiceOrStr]("gcp_service", gcp_service)
            ],
            query_params=[
                param[str | None]("region", region), param[GranularityOrStr | None]("granularity", granularity)
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GcpRecommendationWithEligibleSpend],
            error_mapper=get_gcp_recommendation_error_mapper,
            request_options=request_options,
        )

    def list_gcp_billing_accounts(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsResponse, ListGcpBillingAccountsErrorBody]:
        """Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover
        GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings
        metrics.

        Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed
        YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/billing-accounts"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GcpBillingAccountsResponse],
            error_mapper=list_gcp_billing_accounts_error_mapper,
            request_options=request_options,
        )

    def list_gcp_billing_accounts_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpSettingsResponse, ListGcpBillingAccountsSettingsErrorBody]:
        """Returns one item per onboarded GCP Billing Account. Each item includes that billing account's recommendation
        and automation engine settings for each product line activated on it, per region scope: one ``global`` entry for
        ``compute``, and one entry per known region for ``cloud_sql``.

        Cloud SQL regions come from the billing account's persisted settings: a region is added when eligible spend is
        first seen there and is never removed, so its settings entry remains listed even if spend later drops to zero.
        Items are sorted by ``billingAccountId``; within an item, ``services`` lists ``compute`` before ``cloud_sql``,
        with ``cloud_sql`` regions sorted alphabetically.

        Settings are stored independently on each billing account. Existing customer-level settings are copied lazily
        when an account is first read or initialized; if no valid legacy value exists, the complete backend defaults are
        materialized once on the account. Only product lines that are activated/onboarded for a given billing account
        are returned.

        In the DoiT Console, these settings are edited on an account's Settings tab.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/settings"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GcpSettingsResponse],
            error_mapper=list_gcp_billing_accounts_settings_error_mapper,
            request_options=request_options,
        )

    def list_gcp_planned_purchases(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, ListGcpPlannedPurchasesErrorBody]:
        """Returns the laddering projections for the billing account, grouped by PS4C product line (``service``) and
        region. Each service group lists one entry per available ``gcp-purchases-projection`` document for that scope
        (``compute`` scopes are ``global``; ``cloud_sql`` scopes are per-region).

        With no filters, returns all existing projection documents in stable order: service groups ordered ``compute``
        first, then ``cloud_sql``; within each group, regions sorted with ``global`` first, then remaining regions
        alphabetically. Services with no projection documents are omitted (not returned as empty groups). When a filter
        matches no documents, the response is an empty ``items`` array (not ``404``). Partial projection documents
        return only the fields available in storage.

        **``gcp_service`` and ``region`` filters**: omit both to return all available services and their regions; supply
        ``gcp_service`` alone to return all regions for that service; supply both to return a single service/region
        scope. ``region`` requires ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400``
        with code ``gcp_service_required``. Invalid ``gcp_service`` or ``region`` values return ``400`` with code
        ``validation_failed``.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account that is not onboarded for PS4C still returns ``200`` with an empty ``items`` array when no projection
        documents exist — use ``GET /ps4commitments/v1/gcp/billing-accounts`` (or get-by-id) for onboarding status.

        **Pagination**: results are paginated by **service group** (a whole group is never split across pages). Groups
        keep the stable service order above. Use ``maxResults`` to limit page size (default 50, max 500). When more
        groups remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``gcp_service``, ``region``, ``maxResults``). ``rowCount`` is the number of service
        groups in this page. An invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired
        token returns ``400`` with code ``pagination_token_expired``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/planned-purchases"
            ),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[GcpServiceOrStr | None]("gcp_service", gcp_service),
                param[str | None]("region", region),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse],
            error_mapper=list_gcp_planned_purchases_error_mapper,
            request_options=request_options,
        )

    def list_gcp_recommendations(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, ListGcpRecommendationsErrorBody]:
        """Returns commitment purchase recommendations for the billing account, filtered to the term preferred in each
        product line's settings (``preferredCommitmentPeriod``).

        **``gcp_service`` and ``region`` filters**: omit both to return recommendations for all product lines
        (``compute``, ``cloud_sql``) across all their regions. Supply ``gcp_service`` alone to return all regions for
        that service; supply both to return a single service/region scope. ``region`` requires ``gcp_service`` — a
        request with ``region`` but no ``gcp_service`` returns ``400`` with code ``gcp_service_required``. A ``region``
        that is malformed or incompatible with ``gcp_service`` (``compute`` is ``global``-only, ``cloud_sql`` is
        regional-only) returns ``400`` with code ``validation_failed``; a well-formed, compatible region with no data
        returns ``200`` with an empty ``items`` array.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account with no matching recommendation documents returns ``200`` with an empty ``items`` array.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations"
            ),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[GcpServiceOrStr | None]("gcp_service", gcp_service), param[str | None]("region", region)
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse],
            error_mapper=list_gcp_recommendations_error_mapper,
            request_options=request_options,
        )

    def list_gcp_resource_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, ListGcpResourceCudsErrorBody]:
        """Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by
        CUD state (``status``). Omit to return CUDs in all states.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/resource-based"
            ),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None]("status", status),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse],
            error_mapper=list_gcp_resource_cuds_error_mapper,
            request_options=request_options,
        )

    def list_gcp_spend_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, ListGcpSpendCudsErrorBody]:
        """Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by CUD state
        (``status``); omit to return CUDs in all states.

        **``gcp_service`` and ``region`` filters**: ``gcp_service`` narrows results to one product line's coverage
        sub-type (``compute`` or ``cloud_sql``); ``region`` additionally narrows to one region scope and requires
        ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400`` with code
        ``gcp_service_required``. A ``region`` that is malformed or incompatible with ``gcp_service`` (``compute`` is
        ``global``-only, ``cloud_sql`` is regional-only) returns ``400`` with code ``validation_failed``; a well-formed,
        compatible region with no matching CUDs returns ``200`` with an empty ``items`` array. Note the ``region`` query
        parameter uses the ``lower_snake_case`` wire form (``us_central1``), while each item's ``region`` field echoes
        the raw provider value (``us-central1``).

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/spend-based"),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None]("status", status),
                param[GcpServiceOrStr | None]("gcp_service", gcp_service),
                param[str | None]("region", region),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse],
            error_mapper=list_gcp_spend_cuds_error_mapper,
            request_options=request_options,
        )


class AsyncPerfectScaleForCommitmentsGcpWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_gcp_billing_account(
        self,
        billing_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GcpBillingAccountDetail, GetGcpBillingAccountErrorBody]:
        """Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the
        Overview time series. Use this when you need a single billing account's Console Overview in one call (identity
        and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost
        Summary and CUD Coverage charts) without fetching every billing account.

        Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line
        (``service`` of ``compute`` or ``cloud_sql``):
        - ``stats30d``: last 30 days ESR and realized savings per product line (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per product line (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}"),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GcpBillingAccountDetail],
            error_mapper=get_gcp_billing_account_error_mapper,
            request_options=request_options,
        )

    async def get_gcp_recommendation(
        self,
        billing_account_id: str,
        gcp_service: GcpServiceOrStr,
        *,
        region: str | None = None,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GcpRecommendationWithEligibleSpend, GetGcpRecommendationErrorBody]:
        """Returns the recommendation for one product line (``gcp_service``) and region scope on the GCP billing
        account, including analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the
        eligible-spend bucket size (defaults to ``day``).

        **``region``**: optional for ``compute``, defaulting to ``global`` (its only scope). Required for ``cloud_sql``
        — omitting it returns ``400`` with code ``validation_failed``, as does a malformed region or one incompatible
        with ``gcp_service`` (``cloud_sql`` never uses ``global``). A well-formed region the billing account has never
        had eligible spend in returns ``404`` with code ``not_found`` — the scope does not exist, same as an unknown
        billing account. When the scope exists but no stored recommendation matches, the response is ``200`` with
        ``recommendation`` omitted and ``estimatedEquivalentRecommendedCommitment`` of ``0``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is
                lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            granularity: Time bucket size for eligible-spend data points on the recommendation response. If omitted,
                defaults to ``day``. Coarser buckets return min/max/median usage; ``hour`` returns per-hour totals.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations/{gcp_service}"
            ),
            path_params=[
                param[str]("billingAccountId", billing_account_id), param[GcpServiceOrStr]("gcp_service", gcp_service)
            ],
            query_params=[
                param[str | None]("region", region), param[GranularityOrStr | None]("granularity", granularity)
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GcpRecommendationWithEligibleSpend],
            error_mapper=get_gcp_recommendation_error_mapper,
            request_options=request_options,
        )

    async def list_gcp_billing_accounts(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsResponse, ListGcpBillingAccountsErrorBody]:
        """Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover
        GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings
        metrics.

        Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed
        YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/billing-accounts"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GcpBillingAccountsResponse],
            error_mapper=list_gcp_billing_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_gcp_billing_accounts_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpSettingsResponse, ListGcpBillingAccountsSettingsErrorBody]:
        """Returns one item per onboarded GCP Billing Account. Each item includes that billing account's recommendation
        and automation engine settings for each product line activated on it, per region scope: one ``global`` entry for
        ``compute``, and one entry per known region for ``cloud_sql``.

        Cloud SQL regions come from the billing account's persisted settings: a region is added when eligible spend is
        first seen there and is never removed, so its settings entry remains listed even if spend later drops to zero.
        Items are sorted by ``billingAccountId``; within an item, ``services`` lists ``compute`` before ``cloud_sql``,
        with ``cloud_sql`` regions sorted alphabetically.

        Settings are stored independently on each billing account. Existing customer-level settings are copied lazily
        when an account is first read or initialized; if no valid legacy value exists, the complete backend defaults are
        materialized once on the account. Only product lines that are activated/onboarded for a given billing account
        are returned.

        In the DoiT Console, these settings are edited on an account's Settings tab.

        Args:
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/settings"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GcpSettingsResponse],
            error_mapper=list_gcp_billing_accounts_settings_error_mapper,
            request_options=request_options,
        )

    async def list_gcp_planned_purchases(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, ListGcpPlannedPurchasesErrorBody]:
        """Returns the laddering projections for the billing account, grouped by PS4C product line (``service``) and
        region. Each service group lists one entry per available ``gcp-purchases-projection`` document for that scope
        (``compute`` scopes are ``global``; ``cloud_sql`` scopes are per-region).

        With no filters, returns all existing projection documents in stable order: service groups ordered ``compute``
        first, then ``cloud_sql``; within each group, regions sorted with ``global`` first, then remaining regions
        alphabetically. Services with no projection documents are omitted (not returned as empty groups). When a filter
        matches no documents, the response is an empty ``items`` array (not ``404``). Partial projection documents
        return only the fields available in storage.

        **``gcp_service`` and ``region`` filters**: omit both to return all available services and their regions; supply
        ``gcp_service`` alone to return all regions for that service; supply both to return a single service/region
        scope. ``region`` requires ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400``
        with code ``gcp_service_required``. Invalid ``gcp_service`` or ``region`` values return ``400`` with code
        ``validation_failed``.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account that is not onboarded for PS4C still returns ``200`` with an empty ``items`` array when no projection
        documents exist — use ``GET /ps4commitments/v1/gcp/billing-accounts`` (or get-by-id) for onboarding status.

        **Pagination**: results are paginated by **service group** (a whole group is never split across pages). Groups
        keep the stable service order above. Use ``maxResults`` to limit page size (default 50, max 500). When more
        groups remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``gcp_service``, ``region``, ``maxResults``). ``rowCount`` is the number of service
        groups in this page. An invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired
        token returns ``400`` with code ``pagination_token_expired``.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/planned-purchases"
            ),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[GcpServiceOrStr | None]("gcp_service", gcp_service),
                param[str | None]("region", region),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse],
            error_mapper=list_gcp_planned_purchases_error_mapper,
            request_options=request_options,
        )

    async def list_gcp_recommendations(
        self,
        billing_account_id: str,
        *,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, ListGcpRecommendationsErrorBody]:
        """Returns commitment purchase recommendations for the billing account, filtered to the term preferred in each
        product line's settings (``preferredCommitmentPeriod``).

        **``gcp_service`` and ``region`` filters**: omit both to return recommendations for all product lines
        (``compute``, ``cloud_sql``) across all their regions. Supply ``gcp_service`` alone to return all regions for
        that service; supply both to return a single service/region scope. ``region`` requires ``gcp_service`` — a
        request with ``region`` but no ``gcp_service`` returns ``400`` with code ``gcp_service_required``. A ``region``
        that is malformed or incompatible with ``gcp_service`` (``compute`` is ``global``-only, ``cloud_sql`` is
        regional-only) returns ``400`` with code ``validation_failed``; a well-formed, compatible region with no data
        returns ``200`` with an empty ``items`` array.

        ``404`` is returned only when the billing account does not exist or the caller cannot access it. A billing
        account with no matching recommendation documents returns ``200`` with an empty ``items`` array.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations"
            ),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[GcpServiceOrStr | None]("gcp_service", gcp_service), param[str | None]("region", region)
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse],
            error_mapper=list_gcp_recommendations_error_mapper,
            request_options=request_options,
        )

    async def list_gcp_resource_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, ListGcpResourceCudsErrorBody]:
        """Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by
        CUD state (``status``). Omit to return CUDs in all states.

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/resource-based"
            ),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None]("status", status),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse],
            error_mapper=list_gcp_resource_cuds_error_mapper,
            request_options=request_options,
        )

    async def list_gcp_spend_cuds(
        self,
        billing_account_id: str,
        *,
        status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None,
        gcp_service: GcpServiceOrStr | None = None,
        region: str | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, ListGcpSpendCudsErrorBody]:
        """Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by CUD state
        (``status``); omit to return CUDs in all states.

        **``gcp_service`` and ``region`` filters**: ``gcp_service`` narrows results to one product line's coverage
        sub-type (``compute`` or ``cloud_sql``); ``region`` additionally narrows to one region scope and requires
        ``gcp_service`` — a request with ``region`` but no ``gcp_service`` returns ``400`` with code
        ``gcp_service_required``. A ``region`` that is malformed or incompatible with ``gcp_service`` (``compute`` is
        ``global``-only, ``cloud_sql`` is regional-only) returns ``400`` with code ``validation_failed``; a well-formed,
        compatible region with no matching CUDs returns ``200`` with an empty ``items`` array. Note the ``region`` query
        parameter uses the ``lower_snake_case`` wire form (``us_central1``), while each item's ``region`` field echoes
        the raw provider value (``us-central1``).

        Args:
            billing_account_id: GCP Billing Account ID (format ``XXXXXX-XXXXXX-XXXXXX``; the account that owns the CUDs)
                that scopes the request.
            status: Filter by CUD state. Omit to include all states.
            gcp_service: Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
                Matching is case-insensitive; the value is lowercased before validation.
            region: Filter by region scope, in ``lower_snake_case`` wire form (for example ``us_east1``), or the literal
                ``global``. Requires ``gcp_service``; a request with ``region`` but no ``gcp_service`` returns ``400``
                with code ``gcp_service_required``. When both are omitted, all available regions for all available
                product lines are returned. The value is format-validated, not checked against a closed region list:
                ``compute`` accepts only ``global``, ``cloud_sql`` accepts only concrete regions (never ``global``), and
                a value that is malformed or incompatible with ``gcp_service`` returns ``400`` with code
                ``validation_failed``. A well-formed, service-compatible region with no data returns ``200`` with an
                empty result. Matching is case-insensitive; the value is lowercased before validation.
            page_token: Opaque cursor token returned by a previous list response. Omit to start from the beginning; an
                empty or absent token in a response means there are no more results. Do not parse it. A structurally
                invalid cursor returns ``400`` with code ``pagination_token_invalid``; an expired cursor returns ``400``
                with code ``pagination_token_expired`` — restart pagination from the beginning.
            max_results: Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
            x_tenant_id: Customer (tenant) ID for the request. This is separate from authentication: you still pass your
                personal or service account API token in the ``Authorization`` header (``Bearer <token>``). See `Get
                Started <https://developer.doit.com/docs/start>`__. **When to omit (most callers):** If your personal or
                service account token belongs to a single customer, omit this header. The API resolves that customer
                from the token. **When to send:** If your credential can access more than one customer, set
                ``X-Tenant-Id`` to the customer ID you want to act on. A service account can select an active direct or
                nested descendant of its home customer; the endpoint's normal permissions, entitlements, and
                resource-ownership checks still apply. A service-account target outside that customer subtree returns
                ``403 Forbidden``. Prefer this header over the legacy ``customerContext`` query parameter, which only
                applies to legacy API keys and is ignored by personal and service account tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/spend-based"),
            path_params=[param[str]("billingAccountId", billing_account_id)],
            query_params=[
                param[Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None]("status", status),
                param[GcpServiceOrStr | None]("gcp_service", gcp_service),
                param[str | None]("region", region),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse],
            error_mapper=list_gcp_spend_cuds_error_mapper,
            request_options=request_options,
        )
