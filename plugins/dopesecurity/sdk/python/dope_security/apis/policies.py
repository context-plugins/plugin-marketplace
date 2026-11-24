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
from ..errors.create_policy_error import CreatePolicyErrorBody, create_policy_error_mapper
from ..errors.delete_custom_application_bypass_error import (
    DeleteCustomApplicationBypassErrorBody,
    delete_custom_application_bypass_error_mapper,
)
from ..errors.delete_custom_url_bypass_error import (
    DeleteCustomUrlBypassErrorBody,
    delete_custom_url_bypass_error_mapper,
)
from ..errors.delete_policy_error import DeletePolicyErrorBody, delete_policy_error_mapper
from ..errors.get_application_bypass_error import GetApplicationBypassErrorBody, get_application_bypass_error_mapper
from ..errors.get_policy_assignments_error import GetPolicyAssignmentsErrorBody, get_policy_assignments_error_mapper
from ..errors.get_policy_content_error import GetPolicyContentErrorBody, get_policy_content_error_mapper
from ..errors.get_ssl_inspection_error import GetSslInspectionErrorBody, get_ssl_inspection_error_mapper
from ..errors.get_url_bypass_error import GetUrlBypassErrorBody, get_url_bypass_error_mapper
from ..errors.list_policies_error import ListPoliciesErrorBody, list_policies_error_mapper
from ..errors.update_policy_assignments_error import (
    UpdatePolicyAssignmentsErrorBody,
    update_policy_assignments_error_mapper,
)
from ..errors.update_policy_exceptions_error import (
    UpdatePolicyExceptionsErrorBody,
    update_policy_exceptions_error_mapper,
)
from ..errors.update_policy_restrictions_error import (
    UpdatePolicyRestrictionsErrorBody,
    update_policy_restrictions_error_mapper,
)
from ..errors.update_ssl_inspection_error import UpdateSslInspectionErrorBody, update_ssl_inspection_error_mapper
from ..errors.upsert_application_bypass_error import (
    UpsertApplicationBypassErrorBody,
    upsert_application_bypass_error_mapper,
)
from ..errors.upsert_url_bypass_error import UpsertUrlBypassErrorBody, upsert_url_bypass_error_mapper
from ..models.enums.order import Order, OrderOrStr
from ..models.policies_assignments_request import PoliciesAssignmentsRequest, PoliciesAssignmentsRequestDict
from ..models.policies_assignments_response import PoliciesAssignmentsResponse
from ..models.policies_bypass_applications_request import (
    PoliciesBypassApplicationsRequest,
    PoliciesBypassApplicationsRequestDict,
)
from ..models.policies_bypass_applications_request1 import (
    PoliciesBypassApplicationsRequest1,
    PoliciesBypassApplicationsRequest1Dict,
)
from ..models.policies_bypass_applications_response import PoliciesBypassApplicationsResponse
from ..models.policies_bypass_urls_request import PoliciesBypassUrlsRequest, PoliciesBypassUrlsRequestDict
from ..models.policies_bypass_urls_request1 import PoliciesBypassUrlsRequest1, PoliciesBypassUrlsRequest1Dict
from ..models.policies_bypass_urls_response import PoliciesBypassUrlsResponse
from ..models.policies_response import PoliciesResponse
from ..models.policies_ssl_inspection_request import PoliciesSslInspectionRequest, PoliciesSslInspectionRequestDict
from ..models.policies_ssl_inspection_response import PoliciesSslInspectionResponse
from ..models.policy_content_exceptions_request import (
    PolicyContentExceptionsRequest,
    PolicyContentExceptionsRequestDict,
)
from ..models.policy_content_response import PolicyContentResponse
from ..models.policy_content_restrictions_request import (
    PolicyContentRestrictionsRequest,
    PolicyContentRestrictionsRequestDict,
)
from ..models.success_message import SuccessMessage
from ..server.server import Server


class Policies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PoliciesWithRawResponse(client, server, auth)

    def create_policy(self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> SuccessMessage:
        r"""Use this API to create a new policy.

        Specify the name of the policy in the path parameter (``policy_name``).

        If the policy already exists, a ``400`` error is returned.

        Validation rules for ``policy_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            policy_name: The name of the policy to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request - invalid policy name or policy already exists Unauthorized access Internal server
                error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.create_policy(policy_name, request_options=request_options))

    def delete_custom_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to delete custom application bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        At least one of ``mac`` or ``windows`` must be provided.

        Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

        Args:
            policy_name: The name of the policy to delete application bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Policy not found, validation error, or policy inherits application bypass from Base
                Policy. Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_application_bypass(policy_name, body, request_options=request_options)
        )

    def delete_custom_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to delete custom URL bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

        Args:
            policy_name: The name of the policy to delete URL bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Policy not found or policy inherits URL bypass from Base Policy. Access denied
                Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_url_bypass(policy_name, body, request_options=request_options)
        )

    def delete_policy(self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> SuccessMessage:
        """Use this API to delete a custom policy by name. This removes the policy and unassigns all users and groups
        from the policy.

        The Base Policy cannot be deleted.

        Args:
            policy_name: The name of the policy to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Policy not found or attempted to delete Base Policy. Unauthorized access Internal
                server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.delete_policy(policy_name, request_options=request_options))

    def get_application_bypass(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PoliciesBypassApplicationsResponse:
        """Use this API to get the application bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state, split per platform (``mac`` and ``windows``).

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the application bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.get_application_bypass(policy_name, request_options=request_options))

    def get_policy_assignments(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PoliciesAssignmentsResponse:
        """Use this API to get the users and groups assigned to a policy.

        Args:
            policy_name: The name of the policy to get assignments for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.get_policy_assignments(policy_name, request_options=request_options))

    def get_policy_content(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PolicyContentResponse:
        """Use this API to retrieve the entire content of a policy, including categories and custom categories.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the content will reflect
        the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve content for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.get_policy_content(policy_name, request_options=request_options))

    def get_ssl_inspection(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PoliciesSslInspectionResponse:
        """Use this API to get the SSL inspection configuration for a policy.

        The response returns ``sslInspection`` as an object containing the resolved ``state`` (always ``enabled`` or
        ``disabled``) and ``inheritsFromBase`` indicating whether the policy inherits SSL inspection from the Base
        Policy.

        Args:
            policy_name: The name of the policy to retrieve SSL inspection for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.get_ssl_inspection(policy_name, request_options=request_options))

    def get_url_bypass(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PoliciesBypassUrlsResponse:
        """Use this API to get the URL bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the URL bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.get_url_bypass(policy_name, request_options=request_options))

    def list_policies(
        self,
        *,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = Order.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PoliciesResponse:
        """Use this API to get a paginated list of all your policies, ordered by policy name.

        Each item includes the policy name, last-modified timestamp, SSL inspection status, and the number of
        conflicting assignments.

        The ``sslInspection`` field returns the effective value (``enabled`` or ``disabled``). If SSL inspection is not
        explicitly configured on a policy, the value is inherited from the Base Policy.

        Results are returned in pages using cursor-based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: Sort order for policy names. Defaults to ``asc``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.list_policies(
                first=first, after=after, order=order, request_options=request_options
            ),
        )

    def update_policy_assignments(
        self,
        policy_name: str,
        body: PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update the users and groups assigned to a policy.

        Each provided field fully replaces that assignment list. Omitted fields are preserved. Send an empty array to
        unassign all users or groups.

        Args:
            policy_name: The name of the policy to update assignments for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.update_policy_assignments(policy_name, body, request_options=request_options)
        )

    def update_policy_exceptions(
        self,
        policy_name: str,
        body: PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update user/group-level exceptions on dope and custom categories for a policy.

        Exceptions are per-user/group overrides of a category's restriction. Each exception is keyed by the user or
        group identifier (e.g. email address) within a category.

        A single request can update exceptions across multiple dope and custom categories. Categories not included in
        the request remain unchanged. For each category provided, the submitted exception set is treated as the complete
        source of truth and fully replaces any existing exceptions. Any existing entries not included in the request for
        that category will be removed. To remove all exceptions from a category, pass an empty object ``{}`` as its
        value.

        All user and group identifiers are validated against the tenant directory. If any identifier cannot be resolved,
        the request fails with a ``400 Bad Request``, and the response includes details of the invalid entries.

        Args:
            policy_name: The name of the policy to update exceptions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.update_policy_exceptions(policy_name, body, request_options=request_options)
        )

    def update_policy_restrictions(
        self,
        policy_name: str,
        body: PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update restrictions on dope and custom categories for a policy.

        A single call may update restrictions on any combination of dope and custom categories. Only submitted
        categories will be updated - any category not included in the request will be left unchanged.

        This API also resets categories back to inheriting from base. Both dope categories and custom categories inherit
        from base (and are reset) as a whole by sending ``{inheritsFromBase:true}`` in the payload.

        Args:
            policy_name: The name of the policy to update restrictions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.update_policy_restrictions(policy_name, body, request_options=request_options)
        )

    def update_ssl_inspection(
        self,
        policy_name: str,
        body: PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update the SSL inspection configuration for a policy.

        The request body must be either:
        - ``{"state": "enabled" | "disabled"}`` to set a custom state on this policy, OR
        - ``{"inheritsFromBase": true}`` to make this policy inherit SSL inspection from the Base Policy.

        Exactly one of these two shapes is allowed. Anything else (extra fields, both fields, ``inheritsFromBase:
        false``) returns ``400``. The Base Policy cannot inherit from itself; setting ``inheritsFromBase: true`` on the
        Base Policy returns ``400``.

        Args:
            policy_name: The name of the policy to update SSL inspection for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SSL inspection updated successfully

        Raises:
            ApiError: Bad request or policy not found Access denied Internal server error. ``error`` is ``ErrorsModel |
                RawError``."""
        return unwrap(self._with_raw_response.update_ssl_inspection(policy_name, body, request_options=request_options))

    def upsert_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Upsert custom application bypass entries and/or update default application bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all application
        bypass configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update application bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Application bypass updated successfully

        Raises:
            ApiError: Bad request or policy not found Unauthorized — missing or invalid bearer token Internal server
                error ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.upsert_application_bypass(policy_name, body, request_options=request_options)
        )

    def upsert_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all URL bypass
        configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update URL bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            URL bypass updated successfully

        Raises:
            ApiError: Bad request or policy not found Unauthorized — missing or invalid bearer token Internal server
                error ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(self._with_raw_response.upsert_url_bypass(policy_name, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PoliciesWithRawResponse:
        return self._with_raw_response


class AsyncPolicies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPoliciesWithRawResponse(client, server, auth)

    async def create_policy(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        r"""Use this API to create a new policy.

        Specify the name of the policy in the path parameter (``policy_name``).

        If the policy already exists, a ``400`` error is returned.

        Validation rules for ``policy_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            policy_name: The name of the policy to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request - invalid policy name or policy already exists Unauthorized access Internal server
                error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(await self._with_raw_response.create_policy(policy_name, request_options=request_options))

    async def delete_custom_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to delete custom application bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        At least one of ``mac`` or ``windows`` must be provided.

        Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

        Args:
            policy_name: The name of the policy to delete application bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Policy not found, validation error, or policy inherits application bypass from Base
                Policy. Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_application_bypass(
                policy_name, body, request_options=request_options
            ),
        )

    async def delete_custom_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to delete custom URL bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

        Args:
            policy_name: The name of the policy to delete URL bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Policy not found or policy inherits URL bypass from Base Policy. Access denied
                Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_url_bypass(policy_name, body, request_options=request_options)
        )

    async def delete_policy(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete a custom policy by name. This removes the policy and unassigns all users and groups
        from the policy.

        The Base Policy cannot be deleted.

        Args:
            policy_name: The name of the policy to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Policy not found or attempted to delete Base Policy. Unauthorized access Internal
                server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(await self._with_raw_response.delete_policy(policy_name, request_options=request_options))

    async def get_application_bypass(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PoliciesBypassApplicationsResponse:
        """Use this API to get the application bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state, split per platform (``mac`` and ``windows``).

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the application bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_application_bypass(policy_name, request_options=request_options)
        )

    async def get_policy_assignments(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PoliciesAssignmentsResponse:
        """Use this API to get the users and groups assigned to a policy.

        Args:
            policy_name: The name of the policy to get assignments for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_policy_assignments(policy_name, request_options=request_options)
        )

    async def get_policy_content(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PolicyContentResponse:
        """Use this API to retrieve the entire content of a policy, including categories and custom categories.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the content will reflect
        the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve content for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(await self._with_raw_response.get_policy_content(policy_name, request_options=request_options))

    async def get_ssl_inspection(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PoliciesSslInspectionResponse:
        """Use this API to get the SSL inspection configuration for a policy.

        The response returns ``sslInspection`` as an object containing the resolved ``state`` (always ``enabled`` or
        ``disabled``) and ``inheritsFromBase`` indicating whether the policy inherits SSL inspection from the Base
        Policy.

        Args:
            policy_name: The name of the policy to retrieve SSL inspection for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(await self._with_raw_response.get_ssl_inspection(policy_name, request_options=request_options))

    async def get_url_bypass(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PoliciesBypassUrlsResponse:
        """Use this API to get the URL bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the URL bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(await self._with_raw_response.get_url_bypass(policy_name, request_options=request_options))

    async def list_policies(
        self,
        *,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = Order.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PoliciesResponse:
        """Use this API to get a paginated list of all your policies, ordered by policy name.

        Each item includes the policy name, last-modified timestamp, SSL inspection status, and the number of
        conflicting assignments.

        The ``sslInspection`` field returns the effective value (``enabled`` or ``disabled``). If SSL inspection is not
        explicitly configured on a policy, the value is inherited from the Base Policy.

        Results are returned in pages using cursor-based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: Sort order for policy names. Defaults to ``asc``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.list_policies(
                first=first, after=after, order=order, request_options=request_options
            ),
        )

    async def update_policy_assignments(
        self,
        policy_name: str,
        body: PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update the users and groups assigned to a policy.

        Each provided field fully replaces that assignment list. Omitted fields are preserved. Send an empty array to
        unassign all users or groups.

        Args:
            policy_name: The name of the policy to update assignments for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.update_policy_assignments(policy_name, body, request_options=request_options)
        )

    async def update_policy_exceptions(
        self,
        policy_name: str,
        body: PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update user/group-level exceptions on dope and custom categories for a policy.

        Exceptions are per-user/group overrides of a category's restriction. Each exception is keyed by the user or
        group identifier (e.g. email address) within a category.

        A single request can update exceptions across multiple dope and custom categories. Categories not included in
        the request remain unchanged. For each category provided, the submitted exception set is treated as the complete
        source of truth and fully replaces any existing exceptions. Any existing entries not included in the request for
        that category will be removed. To remove all exceptions from a category, pass an empty object ``{}`` as its
        value.

        All user and group identifiers are validated against the tenant directory. If any identifier cannot be resolved,
        the request fails with a ``400 Bad Request``, and the response includes details of the invalid entries.

        Args:
            policy_name: The name of the policy to update exceptions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.update_policy_exceptions(policy_name, body, request_options=request_options)
        )

    async def update_policy_restrictions(
        self,
        policy_name: str,
        body: PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update restrictions on dope and custom categories for a policy.

        A single call may update restrictions on any combination of dope and custom categories. Only submitted
        categories will be updated - any category not included in the request will be left unchanged.

        This API also resets categories back to inheriting from base. Both dope categories and custom categories inherit
        from base (and are reset) as a whole by sending ``{inheritsFromBase:true}`` in the payload.

        Args:
            policy_name: The name of the policy to update restrictions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.update_policy_restrictions(policy_name, body, request_options=request_options)
        )

    async def update_ssl_inspection(
        self,
        policy_name: str,
        body: PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to update the SSL inspection configuration for a policy.

        The request body must be either:
        - ``{"state": "enabled" | "disabled"}`` to set a custom state on this policy, OR
        - ``{"inheritsFromBase": true}`` to make this policy inherit SSL inspection from the Base Policy.

        Exactly one of these two shapes is allowed. Anything else (extra fields, both fields, ``inheritsFromBase:
        false``) returns ``400``. The Base Policy cannot inherit from itself; setting ``inheritsFromBase: true`` on the
        Base Policy returns ``400``.

        Args:
            policy_name: The name of the policy to update SSL inspection for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SSL inspection updated successfully

        Raises:
            ApiError: Bad request or policy not found Access denied Internal server error. ``error`` is ``ErrorsModel |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_ssl_inspection(policy_name, body, request_options=request_options)
        )

    async def upsert_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Upsert custom application bypass entries and/or update default application bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all application
        bypass configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update application bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Application bypass updated successfully

        Raises:
            ApiError: Bad request or policy not found Unauthorized — missing or invalid bearer token Internal server
                error ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.upsert_application_bypass(policy_name, body, request_options=request_options)
        )

    async def upsert_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all URL bypass
        configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update URL bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            URL bypass updated successfully

        Raises:
            ApiError: Bad request or policy not found Unauthorized — missing or invalid bearer token Internal server
                error ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.upsert_url_bypass(policy_name, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPoliciesWithRawResponse:
        return self._with_raw_response


class PoliciesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_policy(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, CreatePolicyErrorBody]:
        r"""Use this API to create a new policy.

        Specify the name of the policy in the path parameter (``policy_name``).

        If the policy already exists, a ``400`` error is returned.

        Validation rules for ``policy_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            policy_name: The name of the policy to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/policies/{policy_name}"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=create_policy_error_mapper,
            request_options=request_options,
        )

    def delete_custom_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, DeleteCustomApplicationBypassErrorBody]:
        """Use this API to delete custom application bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        At least one of ``mac`` or ``windows`` must be provided.

        Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

        Args:
            policy_name: The name of the policy to delete application bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/policies/{policy_name}/bypass/applications"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=delete_custom_application_bypass_error_mapper,
            request_options=request_options,
        )

    def delete_custom_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, DeleteCustomUrlBypassErrorBody]:
        """Use this API to delete custom URL bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

        Args:
            policy_name: The name of the policy to delete URL bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/policies/{policy_name}/bypass/urls"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=delete_custom_url_bypass_error_mapper,
            request_options=request_options,
        )

    def delete_policy(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeletePolicyErrorBody]:
        """Use this API to delete a custom policy by name. This removes the policy and unassigns all users and groups
        from the policy.

        The Base Policy cannot be deleted.

        Args:
            policy_name: The name of the policy to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/policies/{policy_name}"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=delete_policy_error_mapper,
            request_options=request_options,
        )

    def get_application_bypass(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesBypassApplicationsResponse, GetApplicationBypassErrorBody]:
        """Use this API to get the application bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state, split per platform (``mac`` and ``windows``).

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the application bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/bypass/applications"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PoliciesBypassApplicationsResponse],
            error_mapper=get_application_bypass_error_mapper,
            request_options=request_options,
        )

    def get_policy_assignments(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesAssignmentsResponse, GetPolicyAssignmentsErrorBody]:
        """Use this API to get the users and groups assigned to a policy.

        Args:
            policy_name: The name of the policy to get assignments for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/assignments"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PoliciesAssignmentsResponse],
            error_mapper=get_policy_assignments_error_mapper,
            request_options=request_options,
        )

    def get_policy_content(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PolicyContentResponse, GetPolicyContentErrorBody]:
        """Use this API to retrieve the entire content of a policy, including categories and custom categories.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the content will reflect
        the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve content for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/content"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PolicyContentResponse],
            error_mapper=get_policy_content_error_mapper,
            request_options=request_options,
        )

    def get_ssl_inspection(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesSslInspectionResponse, GetSslInspectionErrorBody]:
        """Use this API to get the SSL inspection configuration for a policy.

        The response returns ``sslInspection`` as an object containing the resolved ``state`` (always ``enabled`` or
        ``disabled``) and ``inheritsFromBase`` indicating whether the policy inherits SSL inspection from the Base
        Policy.

        Args:
            policy_name: The name of the policy to retrieve SSL inspection for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/ssl-inspection"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PoliciesSslInspectionResponse],
            error_mapper=get_ssl_inspection_error_mapper,
            request_options=request_options,
        )

    def get_url_bypass(
        self, policy_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesBypassUrlsResponse, GetUrlBypassErrorBody]:
        """Use this API to get the URL bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the URL bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/bypass/urls"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PoliciesBypassUrlsResponse],
            error_mapper=get_url_bypass_error_mapper,
            request_options=request_options,
        )

    def list_policies(
        self,
        *,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = Order.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PoliciesResponse, ListPoliciesErrorBody]:
        """Use this API to get a paginated list of all your policies, ordered by policy name.

        Each item includes the policy name, last-modified timestamp, SSL inspection status, and the number of
        conflicting assignments.

        The ``sslInspection`` field returns the effective value (``enabled`` or ``disabled``). If SSL inspection is not
        explicitly configured on a policy, the value is inherited from the Base Policy.

        Results are returned in pages using cursor-based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: Sort order for policy names. Defaults to ``asc``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies"),
            query_params=[
                param[int | None]("first", first),
                param[str | None]("after", after),
                param[OrderOrStr | None]("order", order),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PoliciesResponse],
            error_mapper=list_policies_error_mapper,
            request_options=request_options,
        )

    def update_policy_assignments(
        self,
        policy_name: str,
        body: PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdatePolicyAssignmentsErrorBody]:
        """Use this API to update the users and groups assigned to a policy.

        Each provided field fully replaces that assignment list. Omitted fields are preserved. Send an empty array to
        unassign all users or groups.

        Args:
            policy_name: The name of the policy to update assignments for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/assignments"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=update_policy_assignments_error_mapper,
            request_options=request_options,
        )

    def update_policy_exceptions(
        self,
        policy_name: str,
        body: PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdatePolicyExceptionsErrorBody]:
        """Use this API to update user/group-level exceptions on dope and custom categories for a policy.

        Exceptions are per-user/group overrides of a category's restriction. Each exception is keyed by the user or
        group identifier (e.g. email address) within a category.

        A single request can update exceptions across multiple dope and custom categories. Categories not included in
        the request remain unchanged. For each category provided, the submitted exception set is treated as the complete
        source of truth and fully replaces any existing exceptions. Any existing entries not included in the request for
        that category will be removed. To remove all exceptions from a category, pass an empty object ``{}`` as its
        value.

        All user and group identifiers are validated against the tenant directory. If any identifier cannot be resolved,
        the request fails with a ``400 Bad Request``, and the response includes details of the invalid entries.

        Args:
            policy_name: The name of the policy to update exceptions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/content/exceptions"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=update_policy_exceptions_error_mapper,
            request_options=request_options,
        )

    def update_policy_restrictions(
        self,
        policy_name: str,
        body: PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdatePolicyRestrictionsErrorBody]:
        """Use this API to update restrictions on dope and custom categories for a policy.

        A single call may update restrictions on any combination of dope and custom categories. Only submitted
        categories will be updated - any category not included in the request will be left unchanged.

        This API also resets categories back to inheriting from base. Both dope categories and custom categories inherit
        from base (and are reset) as a whole by sending ``{inheritsFromBase:true}`` in the payload.

        Args:
            policy_name: The name of the policy to update restrictions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/content/restrictions"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=update_policy_restrictions_error_mapper,
            request_options=request_options,
        )

    def update_ssl_inspection(
        self,
        policy_name: str,
        body: PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdateSslInspectionErrorBody]:
        """Use this API to update the SSL inspection configuration for a policy.

        The request body must be either:
        - ``{"state": "enabled" | "disabled"}`` to set a custom state on this policy, OR
        - ``{"inheritsFromBase": true}`` to make this policy inherit SSL inspection from the Base Policy.

        Exactly one of these two shapes is allowed. Anything else (extra fields, both fields, ``inheritsFromBase:
        false``) returns ``400``. The Base Policy cannot inherit from itself; setting ``inheritsFromBase: true`` on the
        Base Policy returns ``400``.

        Args:
            policy_name: The name of the policy to update SSL inspection for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/ssl-inspection"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=update_ssl_inspection_error_mapper,
            request_options=request_options,
        )

    def upsert_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpsertApplicationBypassErrorBody]:
        """Upsert custom application bypass entries and/or update default application bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all application
        bypass configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update application bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/bypass/applications"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=upsert_application_bypass_error_mapper,
            request_options=request_options,
        )

    def upsert_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpsertUrlBypassErrorBody]:
        """Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all URL bypass
        configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update URL bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/bypass/urls"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=upsert_url_bypass_error_mapper,
            request_options=request_options,
        )


class AsyncPoliciesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_policy(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, CreatePolicyErrorBody]:
        r"""Use this API to create a new policy.

        Specify the name of the policy in the path parameter (``policy_name``).

        If the policy already exists, a ``400`` error is returned.

        Validation rules for ``policy_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            policy_name: The name of the policy to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/policies/{policy_name}"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=create_policy_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, DeleteCustomApplicationBypassErrorBody]:
        """Use this API to delete custom application bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        At least one of ``mac`` or ``windows`` must be provided.

        Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

        Args:
            policy_name: The name of the policy to delete application bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/policies/{policy_name}/bypass/applications"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=delete_custom_application_bypass_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, DeleteCustomUrlBypassErrorBody]:
        """Use this API to delete custom URL bypass entries from a policy by name.

        The operation is idempotent — names that do not exist are silently ignored.

        Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

        Args:
            policy_name: The name of the policy to delete URL bypass entries from
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/policies/{policy_name}/bypass/urls"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=delete_custom_url_bypass_error_mapper,
            request_options=request_options,
        )

    async def delete_policy(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeletePolicyErrorBody]:
        """Use this API to delete a custom policy by name. This removes the policy and unassigns all users and groups
        from the policy.

        The Base Policy cannot be deleted.

        Args:
            policy_name: The name of the policy to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/policies/{policy_name}"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=delete_policy_error_mapper,
            request_options=request_options,
        )

    async def get_application_bypass(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesBypassApplicationsResponse, GetApplicationBypassErrorBody]:
        """Use this API to get the application bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state, split per platform (``mac`` and ``windows``).

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the application bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/bypass/applications"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PoliciesBypassApplicationsResponse],
            error_mapper=get_application_bypass_error_mapper,
            request_options=request_options,
        )

    async def get_policy_assignments(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesAssignmentsResponse, GetPolicyAssignmentsErrorBody]:
        """Use this API to get the users and groups assigned to a policy.

        Args:
            policy_name: The name of the policy to get assignments for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/assignments"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PoliciesAssignmentsResponse],
            error_mapper=get_policy_assignments_error_mapper,
            request_options=request_options,
        )

    async def get_policy_content(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PolicyContentResponse, GetPolicyContentErrorBody]:
        """Use this API to retrieve the entire content of a policy, including categories and custom categories.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the content will reflect
        the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve content for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/content"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PolicyContentResponse],
            error_mapper=get_policy_content_error_mapper,
            request_options=request_options,
        )

    async def get_ssl_inspection(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesSslInspectionResponse, GetSslInspectionErrorBody]:
        """Use this API to get the SSL inspection configuration for a policy.

        The response returns ``sslInspection`` as an object containing the resolved ``state`` (always ``enabled`` or
        ``disabled``) and ``inheritsFromBase`` indicating whether the policy inherits SSL inspection from the Base
        Policy.

        Args:
            policy_name: The name of the policy to retrieve SSL inspection for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/ssl-inspection"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PoliciesSslInspectionResponse],
            error_mapper=get_ssl_inspection_error_mapper,
            request_options=request_options,
        )

    async def get_url_bypass(
        self, policy_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PoliciesBypassUrlsResponse, GetUrlBypassErrorBody]:
        """Use this API to get the URL bypass entries for a policy.

        The response contains both admin-defined ``custom`` entries and dope-provided ``default`` entries with their
        per-entry toggle state.

        When a policy inherits from the base policy, ``inheritsFromBase`` will be ``true`` and the ``custom`` and
        ``default`` entries will reflect the base policy's settings.

        Args:
            policy_name: The name of the policy to retrieve the URL bypass for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies/{policy_name}/bypass/urls"),
            path_params=[param[str]("policy_name", policy_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PoliciesBypassUrlsResponse],
            error_mapper=get_url_bypass_error_mapper,
            request_options=request_options,
        )

    async def list_policies(
        self,
        *,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = Order.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PoliciesResponse, ListPoliciesErrorBody]:
        """Use this API to get a paginated list of all your policies, ordered by policy name.

        Each item includes the policy name, last-modified timestamp, SSL inspection status, and the number of
        conflicting assignments.

        The ``sslInspection`` field returns the effective value (``enabled`` or ``disabled``). If SSL inspection is not
        explicitly configured on a policy, the value is inherited from the Base Policy.

        Results are returned in pages using cursor-based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: Sort order for policy names. Defaults to ``asc``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/policies"),
            query_params=[
                param[int | None]("first", first),
                param[str | None]("after", after),
                param[OrderOrStr | None]("order", order),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PoliciesResponse],
            error_mapper=list_policies_error_mapper,
            request_options=request_options,
        )

    async def update_policy_assignments(
        self,
        policy_name: str,
        body: PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdatePolicyAssignmentsErrorBody]:
        """Use this API to update the users and groups assigned to a policy.

        Each provided field fully replaces that assignment list. Omitted fields are preserved. Send an empty array to
        unassign all users or groups.

        Args:
            policy_name: The name of the policy to update assignments for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/assignments"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=update_policy_assignments_error_mapper,
            request_options=request_options,
        )

    async def update_policy_exceptions(
        self,
        policy_name: str,
        body: PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdatePolicyExceptionsErrorBody]:
        """Use this API to update user/group-level exceptions on dope and custom categories for a policy.

        Exceptions are per-user/group overrides of a category's restriction. Each exception is keyed by the user or
        group identifier (e.g. email address) within a category.

        A single request can update exceptions across multiple dope and custom categories. Categories not included in
        the request remain unchanged. For each category provided, the submitted exception set is treated as the complete
        source of truth and fully replaces any existing exceptions. Any existing entries not included in the request for
        that category will be removed. To remove all exceptions from a category, pass an empty object ``{}`` as its
        value.

        All user and group identifiers are validated against the tenant directory. If any identifier cannot be resolved,
        the request fails with a ``400 Bad Request``, and the response includes details of the invalid entries.

        Args:
            policy_name: The name of the policy to update exceptions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/content/exceptions"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=update_policy_exceptions_error_mapper,
            request_options=request_options,
        )

    async def update_policy_restrictions(
        self,
        policy_name: str,
        body: PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdatePolicyRestrictionsErrorBody]:
        """Use this API to update restrictions on dope and custom categories for a policy.

        A single call may update restrictions on any combination of dope and custom categories. Only submitted
        categories will be updated - any category not included in the request will be left unchanged.

        This API also resets categories back to inheriting from base. Both dope categories and custom categories inherit
        from base (and are reset) as a whole by sending ``{inheritsFromBase:true}`` in the payload.

        Args:
            policy_name: The name of the policy to update restrictions for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/content/restrictions"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=update_policy_restrictions_error_mapper,
            request_options=request_options,
        )

    async def update_ssl_inspection(
        self,
        policy_name: str,
        body: PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpdateSslInspectionErrorBody]:
        """Use this API to update the SSL inspection configuration for a policy.

        The request body must be either:
        - ``{"state": "enabled" | "disabled"}`` to set a custom state on this policy, OR
        - ``{"inheritsFromBase": true}`` to make this policy inherit SSL inspection from the Base Policy.

        Exactly one of these two shapes is allowed. Anything else (extra fields, both fields, ``inheritsFromBase:
        false``) returns ``400``. The Base Policy cannot inherit from itself; setting ``inheritsFromBase: true`` on the
        Base Policy returns ``400``.

        Args:
            policy_name: The name of the policy to update SSL inspection for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/ssl-inspection"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=update_ssl_inspection_error_mapper,
            request_options=request_options,
        )

    async def upsert_application_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpsertApplicationBypassErrorBody]:
        """Upsert custom application bypass entries and/or update default application bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all application
        bypass configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update application bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/bypass/applications"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=upsert_application_bypass_error_mapper,
            request_options=request_options,
        )

    async def upsert_url_bypass(
        self,
        policy_name: str,
        body: PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, UpsertUrlBypassErrorBody]:
        """Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

        **Custom entries** are matched by name: matching names are overwritten, unknown names are added. Unmentioned
        custom entries are preserved.

        **Default entries** are matched by name: set ``state`` to ``ignored`` to suppress a default entry, or
        ``applied`` to re-enable it. Unknown default entry names are silently ignored.

        Pass ``inheritsFromBase: true`` as the entire ``data`` payload to reset the policy to inherit all URL bypass
        configuration from the base policy (this drops all custom entries and default overrides for this policy).

        **Detaching from Base**: If a policy inherits from the Base Policy (``inheritsFromBase: true``), sending
        ``custom`` or ``default`` entries will detach it. Base entries are not copied — include any you want to keep in
        the request. Once detached, further Base Policy changes will no longer propagate to this policy.

        Args:
            policy_name: The name of the policy to update URL bypass entries for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/policies/{policy_name}/bypass/urls"),
            path_params=[param[str]("policy_name", policy_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=upsert_url_bypass_error_mapper,
            request_options=request_options,
        )
