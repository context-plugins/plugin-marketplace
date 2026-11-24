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
from ..errors.get_aws_member_account_error import GetAwsMemberAccountErrorBody, get_aws_member_account_error_mapper
from ..errors.get_aws_organization_error import GetAwsOrganizationErrorBody, get_aws_organization_error_mapper
from ..errors.get_aws_recommendation_error import GetAwsRecommendationErrorBody, get_aws_recommendation_error_mapper
from ..errors.list_aws_member_accounts_error import (
    ListAwsMemberAccountsErrorBody,
    list_aws_member_accounts_error_mapper,
)
from ..errors.list_aws_organizations_error import ListAwsOrganizationsErrorBody, list_aws_organizations_error_mapper
from ..errors.list_aws_organizations_settings_error import (
    ListAwsOrganizationsSettingsErrorBody,
    list_aws_organizations_settings_error_mapper,
)
from ..errors.list_aws_planned_purchases_error import (
    ListAwsPlannedPurchasesErrorBody,
    list_aws_planned_purchases_error_mapper,
)
from ..errors.list_aws_recommendations_error import (
    ListAwsRecommendationsErrorBody,
    list_aws_recommendations_error_mapper,
)
from ..errors.list_aws_reserved_instances_error import (
    ListAwsReservedInstancesErrorBody,
    list_aws_reserved_instances_error_mapper,
)
from ..errors.list_aws_savings_plans_error import ListAwsSavingsPlansErrorBody, list_aws_savings_plans_error_mapper
from ..models.aws_member_account_detail import AwsMemberAccountDetail
from ..models.aws_organization_detail import AwsOrganizationDetail
from ..models.aws_recommendation_with_eligible_spend import AwsRecommendationWithEligibleSpend
from ..models.aws_recommendations import AwsRecommendations
from ..models.enums.granularity import Granularity, GranularityOrStr
from ..models.enums.offering_class1 import OfferingClass1OrStr
from ..models.enums.service2 import Service2OrStr
from ..models.enums.service_id import ServiceIdOrStr
from ..models.enums.status2 import Status2OrStr
from ..models.enums.status3 import Status3OrStr
from ..models.enums.type_doi_t_perfect_scale_for_commitments_aws_api import (
    TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr,
)
from ..models.ps4_commitments_v1_aws_organizations_member_accounts_response import (
    Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse,
)
from ..models.ps4_commitments_v1_aws_organizations_planned_purchases_response import (
    Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse,
)
from ..models.ps4_commitments_v1_aws_organizations_reserved_instances_response import (
    Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse,
)
from ..models.ps4_commitments_v1_aws_organizations_response import Ps4CommitmentsV1AwsOrganizationsResponse
from ..models.ps4_commitments_v1_aws_organizations_savings_plans_response import (
    Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse,
)
from ..models.ps4_commitments_v1_aws_settings_response import Ps4CommitmentsV1AwsSettingsResponse
from ..server.server import Server


class PerfectScaleForCommitmentsAws:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PerfectScaleForCommitmentsAwsWithRawResponse(client, server, auth)

    def get_aws_member_account(
        self,
        management_account_id: str,
        member_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AwsMemberAccountDetail:
        """Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview
        time series. Use this when you need a single members Console Overview in one call (identity and onboarding
        status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary
        and Commitment Coverage charts) without fetching every member account.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            member_account_id: AWS member account ID (12-digit AWS account number).
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
            Single AWS member account details (same list-item fields as provided for the organization through list
            member accounts operation) and overview time series: 6 months stats and 30 days of commitment coverage.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_aws_member_account(
                management_account_id, member_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_aws_organization(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AwsOrganizationDetail:
        """Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview
        time series. Use this when you need a single organization's Console Overview in one call (identity and
        onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind
        Cost Summary and Commitment Coverage charts) without fetching every organization.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            Single AWS organization details (same list-item fields as provided for the organization through list AWS
            organization operation) and overview time series: 6 months stats and 30 days of commitment coverage.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_aws_organization(
                management_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_aws_recommendation(
        self,
        management_account_id: str,
        service_id: ServiceIdOrStr,
        *,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AwsRecommendationWithEligibleSpend:
        """Returns the recommendation for one commitment type (``serviceId``) on the AWS organization, including
        analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the eligible-spend bucket size
        (defaults to ``day``).

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service_id: Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the
                AWS organization (``compute`` or ``database``).
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
            Commitment type recommendation together with the eligible-spend time series used for analysis and charting.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_aws_recommendation(
                management_account_id,
                service_id,
                granularity=granularity,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_aws_member_accounts(
        self,
        management_account_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse:
        """Returns all member AWS accounts under the specified AWS organization that have active or historical
        commitment coverage. Includes 30-day statistics and estimated monthly potential savings
        (``monthlyPotentialSavings``) per Savings Plan (SP) type.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            List of member accounts.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_member_accounts(
                management_account_id,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_aws_organizations(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsResponse:
        """Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to
        discover AWS organization account IDs, and organization-level onboarding status of the available commitment
        types and savings metrics.

        Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per
        Savings Plan (SP) type, and estimated monthly potential savings (``monthlyPotentialSavings``) per SP type from
        the latest projection. Sum across items for customer-level totals.

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
            List of AWS Organizations. One item per AWS organization.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_organizations(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_aws_organizations_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsSettingsResponse:
        """Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments
        purchasing account (``purchaseAccountId``) and commitment settings for each commitment type activated on that
        AWS organization (``compute``, ``database``).

        Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation
        mode, commitment limits, and related fields). They are stored independently for each AWS organization and
        commitment type. Each item includes that organization's ``purchaseAccountId`` and activated commitment types.

        In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS
        organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

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
            Settings payload for one onboarded AWS organization, with that AWS organization's purchasing account
            (``purchaseAccountId``) and organization-specific commitment settings for each activated commitment type
            (``services[].settings``).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_organizations_settings(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_aws_planned_purchases(
        self,
        management_account_id: str,
        *,
        service: Service2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse:
        """Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that
        has a projection available (typically ``compute`` and/or ``database``; up to four commitment types as
        PerfectScale for Commitments expands).

        With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type
        order (``compute``, then ``database``, then any future commitment types in enum order). When a filtered
        commitment type has no planned purchases, the response is an empty ``items`` array (not ``404``). Partial items
        return only the fields available at response time.

        ``404`` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS
        organization that is not onboarded for PerfectScale for Commitments still returns ``200`` with an empty
        ``items`` array when no planned purchases exist — use ``GET /ps4commitments/v1/aws/organizations`` (or
        get-by-id) for ``onboardingStatus``.

        **Pagination**: results are returned in stable commitment-type order (``compute``, then ``database``, then any
        future commitment types in enum order). Use ``maxResults`` to limit page size (default 50, max 500). When more
        items remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``service``, ``maxResults``). ``rowCount`` is the number of items in this page. An
        invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired token returns ``400``
        with code ``pagination_token_expired``.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service: Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all
                commitment types that have planned purchases for the AWS organization.
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
            Paginated list of planned purchase projections.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_planned_purchases(
                management_account_id,
                service=service,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_aws_recommendations(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AwsRecommendations:
        """Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (``compute``,
        ``database``). A commitment type is present only when it is onboarded and a recommendation is available.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            List with recommendations for each onboarded commitment type. A commitment type property is present only
            when that commitment type is onboarded and a recommendation is available.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_recommendations(
                management_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_aws_reserved_instances(
        self,
        management_account_id: str,
        *,
        status: Status3OrStr | None = None,
        instance_type: str | None = None,
        instance_family: str | None = None,
        region: str | None = None,
        offering_class: OfferingClass1OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse:
        """Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by
        state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS
        organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            status: Filter by Reserved Instance lifecycle state. Omit to include all states.
            instance_type: Filter by exact EC2 instance type (for example, ``m5.large``). Case-sensitive. Must match the
                ``instanceType`` value on the RI exactly.
            instance_family: Filter by EC2 instance family, the leading segment of ``instanceType`` before the dot (for
                example, ``m5`` matches ``m5.large`` and ``m5.xlarge``). Case-sensitive.
            region: Filter by AWS region (for example, ``us-east-1``). Case-sensitive. Must match the region stored on
                the RI.
            offering_class: Filter by RI offering class. Omit to include both standard and convertible.
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
            Paginated list of Reserved Instances.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_reserved_instances(
                management_account_id,
                status=status,
                instance_type=instance_type,
                instance_family=instance_family,
                region=region,
                offering_class=offering_class,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_aws_savings_plans(
        self,
        management_account_id: str,
        *,
        type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None,
        status: Status2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse:
        """Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type
        (``type``) and state (``status``). Omit both filters to return all plans for the AWS organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            type_: Filter by Savings Plan type. Omit to include all types.
            status: Filter by Savings Plan lifecycle state. Omit to include all states.
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
            Paginated list of Savings Plans.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_aws_savings_plans(
                management_account_id,
                type_=type_,
                status=status,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PerfectScaleForCommitmentsAwsWithRawResponse:
        return self._with_raw_response


class AsyncPerfectScaleForCommitmentsAws:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPerfectScaleForCommitmentsAwsWithRawResponse(client, server, auth)

    async def get_aws_member_account(
        self,
        management_account_id: str,
        member_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AwsMemberAccountDetail:
        """Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview
        time series. Use this when you need a single members Console Overview in one call (identity and onboarding
        status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary
        and Commitment Coverage charts) without fetching every member account.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            member_account_id: AWS member account ID (12-digit AWS account number).
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
            Single AWS member account details (same list-item fields as provided for the organization through list
            member accounts operation) and overview time series: 6 months stats and 30 days of commitment coverage.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_aws_member_account(
                management_account_id, member_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_aws_organization(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AwsOrganizationDetail:
        """Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview
        time series. Use this when you need a single organization's Console Overview in one call (identity and
        onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind
        Cost Summary and Commitment Coverage charts) without fetching every organization.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            Single AWS organization details (same list-item fields as provided for the organization through list AWS
            organization operation) and overview time series: 6 months stats and 30 days of commitment coverage.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_aws_organization(
                management_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_aws_recommendation(
        self,
        management_account_id: str,
        service_id: ServiceIdOrStr,
        *,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AwsRecommendationWithEligibleSpend:
        """Returns the recommendation for one commitment type (``serviceId``) on the AWS organization, including
        analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the eligible-spend bucket size
        (defaults to ``day``).

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service_id: Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the
                AWS organization (``compute`` or ``database``).
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
            Commitment type recommendation together with the eligible-spend time series used for analysis and charting.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_aws_recommendation(
                management_account_id,
                service_id,
                granularity=granularity,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_aws_member_accounts(
        self,
        management_account_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse:
        """Returns all member AWS accounts under the specified AWS organization that have active or historical
        commitment coverage. Includes 30-day statistics and estimated monthly potential savings
        (``monthlyPotentialSavings``) per Savings Plan (SP) type.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            List of member accounts.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_member_accounts(
                management_account_id,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_aws_organizations(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsResponse:
        """Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to
        discover AWS organization account IDs, and organization-level onboarding status of the available commitment
        types and savings metrics.

        Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per
        Savings Plan (SP) type, and estimated monthly potential savings (``monthlyPotentialSavings``) per SP type from
        the latest projection. Sum across items for customer-level totals.

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
            List of AWS Organizations. One item per AWS organization.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_organizations(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_aws_organizations_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsSettingsResponse:
        """Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments
        purchasing account (``purchaseAccountId``) and commitment settings for each commitment type activated on that
        AWS organization (``compute``, ``database``).

        Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation
        mode, commitment limits, and related fields). They are stored independently for each AWS organization and
        commitment type. Each item includes that organization's ``purchaseAccountId`` and activated commitment types.

        In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS
        organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

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
            Settings payload for one onboarded AWS organization, with that AWS organization's purchasing account
            (``purchaseAccountId``) and organization-specific commitment settings for each activated commitment type
            (``services[].settings``).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_organizations_settings(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_aws_planned_purchases(
        self,
        management_account_id: str,
        *,
        service: Service2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse:
        """Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that
        has a projection available (typically ``compute`` and/or ``database``; up to four commitment types as
        PerfectScale for Commitments expands).

        With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type
        order (``compute``, then ``database``, then any future commitment types in enum order). When a filtered
        commitment type has no planned purchases, the response is an empty ``items`` array (not ``404``). Partial items
        return only the fields available at response time.

        ``404`` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS
        organization that is not onboarded for PerfectScale for Commitments still returns ``200`` with an empty
        ``items`` array when no planned purchases exist — use ``GET /ps4commitments/v1/aws/organizations`` (or
        get-by-id) for ``onboardingStatus``.

        **Pagination**: results are returned in stable commitment-type order (``compute``, then ``database``, then any
        future commitment types in enum order). Use ``maxResults`` to limit page size (default 50, max 500). When more
        items remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``service``, ``maxResults``). ``rowCount`` is the number of items in this page. An
        invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired token returns ``400``
        with code ``pagination_token_expired``.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service: Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all
                commitment types that have planned purchases for the AWS organization.
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
            Paginated list of planned purchase projections.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_planned_purchases(
                management_account_id,
                service=service,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_aws_recommendations(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AwsRecommendations:
        """Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (``compute``,
        ``database``). A commitment type is present only when it is onboarded and a recommendation is available.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            List with recommendations for each onboarded commitment type. A commitment type property is present only
            when that commitment type is onboarded and a recommendation is available.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_recommendations(
                management_account_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_aws_reserved_instances(
        self,
        management_account_id: str,
        *,
        status: Status3OrStr | None = None,
        instance_type: str | None = None,
        instance_family: str | None = None,
        region: str | None = None,
        offering_class: OfferingClass1OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse:
        """Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by
        state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS
        organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            status: Filter by Reserved Instance lifecycle state. Omit to include all states.
            instance_type: Filter by exact EC2 instance type (for example, ``m5.large``). Case-sensitive. Must match the
                ``instanceType`` value on the RI exactly.
            instance_family: Filter by EC2 instance family, the leading segment of ``instanceType`` before the dot (for
                example, ``m5`` matches ``m5.large`` and ``m5.xlarge``). Case-sensitive.
            region: Filter by AWS region (for example, ``us-east-1``). Case-sensitive. Must match the region stored on
                the RI.
            offering_class: Filter by RI offering class. Omit to include both standard and convertible.
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
            Paginated list of Reserved Instances.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_reserved_instances(
                management_account_id,
                status=status,
                instance_type=instance_type,
                instance_family=instance_family,
                region=region,
                offering_class=offering_class,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_aws_savings_plans(
        self,
        management_account_id: str,
        *,
        type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None,
        status: Status2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse:
        """Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type
        (``type``) and state (``status``). Omit both filters to return all plans for the AWS organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            type_: Filter by Savings Plan type. Omit to include all types.
            status: Filter by Savings Plan lifecycle state. Omit to include all states.
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
            Paginated list of Savings Plans.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aws_savings_plans(
                management_account_id,
                type_=type_,
                status=status,
                page_token=page_token,
                max_results=max_results,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPerfectScaleForCommitmentsAwsWithRawResponse:
        return self._with_raw_response


class PerfectScaleForCommitmentsAwsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_aws_member_account(
        self,
        management_account_id: str,
        member_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsMemberAccountDetail, GetAwsMemberAccountErrorBody]:
        """Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview
        time series. Use this when you need a single members Console Overview in one call (identity and onboarding
        status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary
        and Commitment Coverage charts) without fetching every member account.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            member_account_id: AWS member account ID (12-digit AWS account number).
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts/{memberAccountId}"
            ),
            path_params=[
                param[str]("managementAccountId", management_account_id),
                param[str]("memberAccountId", member_account_id),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsMemberAccountDetail],
            error_mapper=get_aws_member_account_error_mapper,
            request_options=request_options,
        )

    def get_aws_organization(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsOrganizationDetail, GetAwsOrganizationErrorBody]:
        """Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview
        time series. Use this when you need a single organization's Console Overview in one call (identity and
        onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind
        Cost Summary and Commitment Coverage charts) without fetching every organization.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            url_template=self._server.default("/ps4commitments/v1/aws/organizations/{managementAccountId}"),
            path_params=[param[str]("managementAccountId", management_account_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsOrganizationDetail],
            error_mapper=get_aws_organization_error_mapper,
            request_options=request_options,
        )

    def get_aws_recommendation(
        self,
        management_account_id: str,
        service_id: ServiceIdOrStr,
        *,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsRecommendationWithEligibleSpend, GetAwsRecommendationErrorBody]:
        """Returns the recommendation for one commitment type (``serviceId``) on the AWS organization, including
        analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the eligible-spend bucket size
        (defaults to ``day``).

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service_id: Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the
                AWS organization (``compute`` or ``database``).
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations/{serviceId}"
            ),
            path_params=[
                param[str]("managementAccountId", management_account_id), param[ServiceIdOrStr]("serviceId", service_id)
            ],
            query_params=[param[GranularityOrStr | None]("granularity", granularity)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsRecommendationWithEligibleSpend],
            error_mapper=get_aws_recommendation_error_mapper,
            request_options=request_options,
        )

    def list_aws_member_accounts(
        self,
        management_account_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, ListAwsMemberAccountsErrorBody]:
        """Returns all member AWS accounts under the specified AWS organization that have active or historical
        commitment coverage. Includes 30-day statistics and estimated monthly potential savings
        (``monthlyPotentialSavings``) per Savings Plan (SP) type.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse],
            error_mapper=list_aws_member_accounts_error_mapper,
            request_options=request_options,
        )

    def list_aws_organizations(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsResponse, ListAwsOrganizationsErrorBody]:
        """Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to
        discover AWS organization account IDs, and organization-level onboarding status of the available commitment
        types and savings metrics.

        Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per
        Savings Plan (SP) type, and estimated monthly potential savings (``monthlyPotentialSavings``) per SP type from
        the latest projection. Sum across items for customer-level totals.

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
            url_template=self._server.default("/ps4commitments/v1/aws/organizations"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1AwsOrganizationsResponse],
            error_mapper=list_aws_organizations_error_mapper,
            request_options=request_options,
        )

    def list_aws_organizations_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsSettingsResponse, ListAwsOrganizationsSettingsErrorBody]:
        """Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments
        purchasing account (``purchaseAccountId``) and commitment settings for each commitment type activated on that
        AWS organization (``compute``, ``database``).

        Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation
        mode, commitment limits, and related fields). They are stored independently for each AWS organization and
        commitment type. Each item includes that organization's ``purchaseAccountId`` and activated commitment types.

        In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS
        organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

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
            url_template=self._server.default("/ps4commitments/v1/aws/settings"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1AwsSettingsResponse],
            error_mapper=list_aws_organizations_settings_error_mapper,
            request_options=request_options,
        )

    def list_aws_planned_purchases(
        self,
        management_account_id: str,
        *,
        service: Service2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, ListAwsPlannedPurchasesErrorBody]:
        """Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that
        has a projection available (typically ``compute`` and/or ``database``; up to four commitment types as
        PerfectScale for Commitments expands).

        With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type
        order (``compute``, then ``database``, then any future commitment types in enum order). When a filtered
        commitment type has no planned purchases, the response is an empty ``items`` array (not ``404``). Partial items
        return only the fields available at response time.

        ``404`` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS
        organization that is not onboarded for PerfectScale for Commitments still returns ``200`` with an empty
        ``items`` array when no planned purchases exist — use ``GET /ps4commitments/v1/aws/organizations`` (or
        get-by-id) for ``onboardingStatus``.

        **Pagination**: results are returned in stable commitment-type order (``compute``, then ``database``, then any
        future commitment types in enum order). Use ``maxResults`` to limit page size (default 50, max 500). When more
        items remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``service``, ``maxResults``). ``rowCount`` is the number of items in this page. An
        invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired token returns ``400``
        with code ``pagination_token_expired``.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service: Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all
                commitment types that have planned purchases for the AWS organization.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/planned-purchases"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[
                param[Service2OrStr | None]("service", service),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse],
            error_mapper=list_aws_planned_purchases_error_mapper,
            request_options=request_options,
        )

    def list_aws_recommendations(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsRecommendations, ListAwsRecommendationsErrorBody]:
        """Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (``compute``,
        ``database``). A commitment type is present only when it is onboarded and a recommendation is available.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsRecommendations],
            error_mapper=list_aws_recommendations_error_mapper,
            request_options=request_options,
        )

    def list_aws_reserved_instances(
        self,
        management_account_id: str,
        *,
        status: Status3OrStr | None = None,
        instance_type: str | None = None,
        instance_family: str | None = None,
        region: str | None = None,
        offering_class: OfferingClass1OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, ListAwsReservedInstancesErrorBody]:
        """Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by
        state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS
        organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            status: Filter by Reserved Instance lifecycle state. Omit to include all states.
            instance_type: Filter by exact EC2 instance type (for example, ``m5.large``). Case-sensitive. Must match the
                ``instanceType`` value on the RI exactly.
            instance_family: Filter by EC2 instance family, the leading segment of ``instanceType`` before the dot (for
                example, ``m5`` matches ``m5.large`` and ``m5.xlarge``). Case-sensitive.
            region: Filter by AWS region (for example, ``us-east-1``). Case-sensitive. Must match the region stored on
                the RI.
            offering_class: Filter by RI offering class. Omit to include both standard and convertible.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/reserved-instances"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[
                param[Status3OrStr | None]("status", status),
                param[str | None]("instanceType", instance_type),
                param[str | None]("instanceFamily", instance_family),
                param[str | None]("region", region),
                param[OfferingClass1OrStr | None]("offeringClass", offering_class),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse],
            error_mapper=list_aws_reserved_instances_error_mapper,
            request_options=request_options,
        )

    def list_aws_savings_plans(
        self,
        management_account_id: str,
        *,
        type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None,
        status: Status2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, ListAwsSavingsPlansErrorBody]:
        """Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type
        (``type``) and state (``status``). Omit both filters to return all plans for the AWS organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            type_: Filter by Savings Plan type. Omit to include all types.
            status: Filter by Savings Plan lifecycle state. Omit to include all states.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/savings-plans"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[
                param[TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None]("type", type_),
                param[Status2OrStr | None]("status", status),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse],
            error_mapper=list_aws_savings_plans_error_mapper,
            request_options=request_options,
        )


class AsyncPerfectScaleForCommitmentsAwsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_aws_member_account(
        self,
        management_account_id: str,
        member_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsMemberAccountDetail, GetAwsMemberAccountErrorBody]:
        """Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview
        time series. Use this when you need a single members Console Overview in one call (identity and onboarding
        status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary
        and Commitment Coverage charts) without fetching every member account.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            member_account_id: AWS member account ID (12-digit AWS account number).
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts/{memberAccountId}"
            ),
            path_params=[
                param[str]("managementAccountId", management_account_id),
                param[str]("memberAccountId", member_account_id),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsMemberAccountDetail],
            error_mapper=get_aws_member_account_error_mapper,
            request_options=request_options,
        )

    async def get_aws_organization(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsOrganizationDetail, GetAwsOrganizationErrorBody]:
        """Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview
        time series. Use this when you need a single organization's Console Overview in one call (identity and
        onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind
        Cost Summary and Commitment Coverage charts) without fetching every organization.

        Fields that drive the Overview tab in the DoiT console:
        - ``stats30d``: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
        - ``monthlyStats``: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost
            Summary chart, and month-over-month card trends).
        - ``dailyCoverage``: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
        - ``savingsTotals``: year-to-date and lifetime realized savings per SP type (shown under the Savings card).
            Lifetime is bounded by PerfectScale for Commitments onboarding start.
        - ``monthlyPotentialSavings``: estimated monthly additional savings per SP type from the latest purchase
            projection.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
            url_template=self._server.default("/ps4commitments/v1/aws/organizations/{managementAccountId}"),
            path_params=[param[str]("managementAccountId", management_account_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsOrganizationDetail],
            error_mapper=get_aws_organization_error_mapper,
            request_options=request_options,
        )

    async def get_aws_recommendation(
        self,
        management_account_id: str,
        service_id: ServiceIdOrStr,
        *,
        granularity: GranularityOrStr | None = Granularity.DAY,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsRecommendationWithEligibleSpend, GetAwsRecommendationErrorBody]:
        """Returns the recommendation for one commitment type (``serviceId``) on the AWS organization, including
        analysis metrics and time-bucketed eligible spend. Use ``granularity`` to choose the eligible-spend bucket size
        (defaults to ``day``).

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service_id: Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the
                AWS organization (``compute`` or ``database``).
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations/{serviceId}"
            ),
            path_params=[
                param[str]("managementAccountId", management_account_id), param[ServiceIdOrStr]("serviceId", service_id)
            ],
            query_params=[param[GranularityOrStr | None]("granularity", granularity)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsRecommendationWithEligibleSpend],
            error_mapper=get_aws_recommendation_error_mapper,
            request_options=request_options,
        )

    async def list_aws_member_accounts(
        self,
        management_account_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, ListAwsMemberAccountsErrorBody]:
        """Returns all member AWS accounts under the specified AWS organization that have active or historical
        commitment coverage. Includes 30-day statistics and estimated monthly potential savings
        (``monthlyPotentialSavings``) per Savings Plan (SP) type.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse],
            error_mapper=list_aws_member_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_aws_organizations(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsResponse, ListAwsOrganizationsErrorBody]:
        """Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to
        discover AWS organization account IDs, and organization-level onboarding status of the available commitment
        types and savings metrics.

        Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per
        Savings Plan (SP) type, and estimated monthly potential savings (``monthlyPotentialSavings``) per SP type from
        the latest projection. Sum across items for customer-level totals.

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
            url_template=self._server.default("/ps4commitments/v1/aws/organizations"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1AwsOrganizationsResponse],
            error_mapper=list_aws_organizations_error_mapper,
            request_options=request_options,
        )

    async def list_aws_organizations_settings(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsSettingsResponse, ListAwsOrganizationsSettingsErrorBody]:
        """Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments
        purchasing account (``purchaseAccountId``) and commitment settings for each commitment type activated on that
        AWS organization (``compute``, ``database``).

        Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation
        mode, commitment limits, and related fields). They are stored independently for each AWS organization and
        commitment type. Each item includes that organization's ``purchaseAccountId`` and activated commitment types.

        In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS
        organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

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
            url_template=self._server.default("/ps4commitments/v1/aws/settings"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1AwsSettingsResponse],
            error_mapper=list_aws_organizations_settings_error_mapper,
            request_options=request_options,
        )

    async def list_aws_planned_purchases(
        self,
        management_account_id: str,
        *,
        service: Service2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, ListAwsPlannedPurchasesErrorBody]:
        """Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that
        has a projection available (typically ``compute`` and/or ``database``; up to four commitment types as
        PerfectScale for Commitments expands).

        With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type
        order (``compute``, then ``database``, then any future commitment types in enum order). When a filtered
        commitment type has no planned purchases, the response is an empty ``items`` array (not ``404``). Partial items
        return only the fields available at response time.

        ``404`` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS
        organization that is not onboarded for PerfectScale for Commitments still returns ``200`` with an empty
        ``items`` array when no planned purchases exist — use ``GET /ps4commitments/v1/aws/organizations`` (or
        get-by-id) for ``onboardingStatus``.

        **Pagination**: results are returned in stable commitment-type order (``compute``, then ``database``, then any
        future commitment types in enum order). Use ``maxResults`` to limit page size (default 50, max 500). When more
        items remain, the response includes a non-null ``pageToken``; pass it unchanged on the next request with the
        same query parameters (``service``, ``maxResults``). ``rowCount`` is the number of items in this page. An
        invalid ``pageToken`` returns ``400`` with code ``pagination_token_invalid``; an expired token returns ``400``
        with code ``pagination_token_expired``.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            service: Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all
                commitment types that have planned purchases for the AWS organization.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/planned-purchases"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[
                param[Service2OrStr | None]("service", service),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse],
            error_mapper=list_aws_planned_purchases_error_mapper,
            request_options=request_options,
        )

    async def list_aws_recommendations(
        self,
        management_account_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsRecommendations, ListAwsRecommendationsErrorBody]:
        """Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (``compute``,
        ``database``). A commitment type is present only when it is onboarded and a recommendation is available.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsRecommendations],
            error_mapper=list_aws_recommendations_error_mapper,
            request_options=request_options,
        )

    async def list_aws_reserved_instances(
        self,
        management_account_id: str,
        *,
        status: Status3OrStr | None = None,
        instance_type: str | None = None,
        instance_family: str | None = None,
        region: str | None = None,
        offering_class: OfferingClass1OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, ListAwsReservedInstancesErrorBody]:
        """Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by
        state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS
        organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            status: Filter by Reserved Instance lifecycle state. Omit to include all states.
            instance_type: Filter by exact EC2 instance type (for example, ``m5.large``). Case-sensitive. Must match the
                ``instanceType`` value on the RI exactly.
            instance_family: Filter by EC2 instance family, the leading segment of ``instanceType`` before the dot (for
                example, ``m5`` matches ``m5.large`` and ``m5.xlarge``). Case-sensitive.
            region: Filter by AWS region (for example, ``us-east-1``). Case-sensitive. Must match the region stored on
                the RI.
            offering_class: Filter by RI offering class. Omit to include both standard and convertible.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/reserved-instances"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[
                param[Status3OrStr | None]("status", status),
                param[str | None]("instanceType", instance_type),
                param[str | None]("instanceFamily", instance_family),
                param[str | None]("region", region),
                param[OfferingClass1OrStr | None]("offeringClass", offering_class),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse],
            error_mapper=list_aws_reserved_instances_error_mapper,
            request_options=request_options,
        )

    async def list_aws_savings_plans(
        self,
        management_account_id: str,
        *,
        type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None,
        status: Status2OrStr | None = None,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, ListAwsSavingsPlansErrorBody]:
        """Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type
        (``type``) and state (``status``). Omit both filters to return all plans for the AWS organization.

        Args:
            management_account_id: 12-digit AWS management (payer) account ID (the account that owns the AWS
                Organization) that scopes the request.
            type_: Filter by Savings Plan type. Omit to include all types.
            status: Filter by Savings Plan lifecycle state. Omit to include all states.
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
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/savings-plans"
            ),
            path_params=[param[str]("managementAccountId", management_account_id)],
            query_params=[
                param[TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None]("type", type_),
                param[Status2OrStr | None]("status", status),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse],
            error_mapper=list_aws_savings_plans_error_mapper,
            request_options=request_options,
        )
