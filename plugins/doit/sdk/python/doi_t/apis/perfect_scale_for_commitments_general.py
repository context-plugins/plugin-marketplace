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
from ..errors.get_commitment_policy_error import GetCommitmentPolicyErrorBody, get_commitment_policy_error_mapper
from ..errors.list_commitment_policies_error import (
    ListCommitmentPoliciesErrorBody,
    list_commitment_policies_error_mapper,
)
from ..models.commitment_policy_detail import CommitmentPolicyDetail
from ..models.ps4_commitments_v1_general_policies_response import Ps4CommitmentsV1GeneralPoliciesResponse
from ..server.server import Server


class PerfectScaleForCommitmentsGeneral:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PerfectScaleForCommitmentsGeneralWithRawResponse(client, server, auth)

    def get_commitment_policy(
        self, policy_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CommitmentPolicyDetail:
        """Returns one commitment policy by id, with its creation and last-update times and the list of account ×
        product-line scopes it is explicitly assigned to across AWS and GCP.

        ``assignments`` lists explicit assignments only. An account whose settings have not yet been materialized falls
        back to ``balanced`` implicitly and does not appear here, even though the settings endpoints report it as
        ``balanced``. On AWS the assignment is currently recorded per tenant and applied to every onboarded
        organization, so each organization appears once per product line. The list is not paginated.

        Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be queried the
        request fails rather than returning a partial list.

        Args:
            policy_id: Commitment policy id. Built-in policies use ``conservative``, ``balanced`` or ``max_savings``;
                custom policies have an opaque id returned by the list endpoint.
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
            The commitment policy with its assignments.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_commitment_policy(
                policy_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_commitment_policies(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GeneralPoliciesResponse:
        """Returns every commitment policy available to the tenant: the three built-in policies (``conservative``,
        ``balanced``, ``max_savings``) followed by the tenant's own custom policies.

        Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the same policy may be
        assigned to AWS and GCP product lines alike.

        Built-in policies are listed first, ordered from least to most aggressive target coverage; custom policies
        follow in creation order. Percentage parameters are expressed as ``1``–``100``, as entered in the DoiT Console.
        This differs from the coverage and utilization fields on recommendations and inventory, which are fractions from
        0 to 1.

        This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT Console on the
        Commitment Policies page.

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
            One page of the tenant's commitment policies.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_commitment_policies(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PerfectScaleForCommitmentsGeneralWithRawResponse:
        return self._with_raw_response


class AsyncPerfectScaleForCommitmentsGeneral:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPerfectScaleForCommitmentsGeneralWithRawResponse(client, server, auth)

    async def get_commitment_policy(
        self,
        policy_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommitmentPolicyDetail:
        """Returns one commitment policy by id, with its creation and last-update times and the list of account ×
        product-line scopes it is explicitly assigned to across AWS and GCP.

        ``assignments`` lists explicit assignments only. An account whose settings have not yet been materialized falls
        back to ``balanced`` implicitly and does not appear here, even though the settings endpoints report it as
        ``balanced``. On AWS the assignment is currently recorded per tenant and applied to every onboarded
        organization, so each organization appears once per product line. The list is not paginated.

        Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be queried the
        request fails rather than returning a partial list.

        Args:
            policy_id: Commitment policy id. Built-in policies use ``conservative``, ``balanced`` or ``max_savings``;
                custom policies have an opaque id returned by the list endpoint.
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
            The commitment policy with its assignments.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. Service temporarily unavailable; retry after the
                indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_commitment_policy(
                policy_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_commitment_policies(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Ps4CommitmentsV1GeneralPoliciesResponse:
        """Returns every commitment policy available to the tenant: the three built-in policies (``conservative``,
        ``balanced``, ``max_savings``) followed by the tenant's own custom policies.

        Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the same policy may be
        assigned to AWS and GCP product lines alike.

        Built-in policies are listed first, ordered from least to most aggressive target coverage; custom policies
        follow in creation order. Percentage parameters are expressed as ``1``–``100``, as entered in the DoiT Console.
        This differs from the coverage and utilization fields on recommendations and inventory, which are fractions from
        0 to 1.

        This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT Console on the
        Commitment Policies page.

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
            One page of the tenant's commitment policies.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unexpected
                server error. Service temporarily unavailable; retry after the indicated delay. ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_commitment_policies(
                page_token=page_token, max_results=max_results, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPerfectScaleForCommitmentsGeneralWithRawResponse:
        return self._with_raw_response


class PerfectScaleForCommitmentsGeneralWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_commitment_policy(
        self, policy_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CommitmentPolicyDetail, GetCommitmentPolicyErrorBody]:
        """Returns one commitment policy by id, with its creation and last-update times and the list of account ×
        product-line scopes it is explicitly assigned to across AWS and GCP.

        ``assignments`` lists explicit assignments only. An account whose settings have not yet been materialized falls
        back to ``balanced`` implicitly and does not appear here, even though the settings endpoints report it as
        ``balanced``. On AWS the assignment is currently recorded per tenant and applied to every onboarded
        organization, so each organization appears once per product line. The list is not paginated.

        Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be queried the
        request fails rather than returning a partial list.

        Args:
            policy_id: Commitment policy id. Built-in policies use ``conservative``, ``balanced`` or ``max_savings``;
                custom policies have an opaque id returned by the list endpoint.
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
            url_template=self._server.default("/ps4commitments/v1/general/policies/{policyId}"),
            path_params=[param[str]("policyId", policy_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CommitmentPolicyDetail],
            error_mapper=get_commitment_policy_error_mapper,
            request_options=request_options,
        )

    def list_commitment_policies(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GeneralPoliciesResponse, ListCommitmentPoliciesErrorBody]:
        """Returns every commitment policy available to the tenant: the three built-in policies (``conservative``,
        ``balanced``, ``max_savings``) followed by the tenant's own custom policies.

        Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the same policy may be
        assigned to AWS and GCP product lines alike.

        Built-in policies are listed first, ordered from least to most aggressive target coverage; custom policies
        follow in creation order. Percentage parameters are expressed as ``1``–``100``, as entered in the DoiT Console.
        This differs from the coverage and utilization fields on recommendations and inventory, which are fractions from
        0 to 1.

        This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT Console on the
        Commitment Policies page.

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
            url_template=self._server.default("/ps4commitments/v1/general/policies"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Ps4CommitmentsV1GeneralPoliciesResponse],
            error_mapper=list_commitment_policies_error_mapper,
            request_options=request_options,
        )


class AsyncPerfectScaleForCommitmentsGeneralWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def get_commitment_policy(
        self,
        policy_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommitmentPolicyDetail, GetCommitmentPolicyErrorBody]:
        """Returns one commitment policy by id, with its creation and last-update times and the list of account ×
        product-line scopes it is explicitly assigned to across AWS and GCP.

        ``assignments`` lists explicit assignments only. An account whose settings have not yet been materialized falls
        back to ``balanced`` implicitly and does not appear here, even though the settings endpoints report it as
        ``balanced``. On AWS the assignment is currently recorded per tenant and applied to every onboarded
        organization, so each organization appears once per product line. The list is not paginated.

        Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be queried the
        request fails rather than returning a partial list.

        Args:
            policy_id: Commitment policy id. Built-in policies use ``conservative``, ``balanced`` or ``max_savings``;
                custom policies have an opaque id returned by the list endpoint.
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
            url_template=self._server.default("/ps4commitments/v1/general/policies/{policyId}"),
            path_params=[param[str]("policyId", policy_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CommitmentPolicyDetail],
            error_mapper=get_commitment_policy_error_mapper,
            request_options=request_options,
        )

    async def list_commitment_policies(
        self,
        *,
        page_token: str | None = None,
        max_results: int | None = 50,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Ps4CommitmentsV1GeneralPoliciesResponse, ListCommitmentPoliciesErrorBody]:
        """Returns every commitment policy available to the tenant: the three built-in policies (``conservative``,
        ``balanced``, ``max_savings``) followed by the tenant's own custom policies.

        Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the same policy may be
        assigned to AWS and GCP product lines alike.

        Built-in policies are listed first, ordered from least to most aggressive target coverage; custom policies
        follow in creation order. Percentage parameters are expressed as ``1``–``100``, as entered in the DoiT Console.
        This differs from the coverage and utilization fields on recommendations and inventory, which are fractions from
        0 to 1.

        This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT Console on the
        Commitment Policies page.

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
            url_template=self._server.default("/ps4commitments/v1/general/policies"),
            query_params=[param[str | None]("pageToken", page_token), param[int | None]("maxResults", max_results)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Ps4CommitmentsV1GeneralPoliciesResponse],
            error_mapper=list_commitment_policies_error_mapper,
            request_options=request_options,
        )
