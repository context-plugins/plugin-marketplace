from __future__ import annotations

from uuid import UUID, uuid4

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.assign_customer_group_user_error import (
    AssignCustomerGroupUserErrorBody,
    assign_customer_group_user_error_mapper,
)
from ..errors.assign_customer_group_user_group_error import (
    AssignCustomerGroupUserGroupErrorBody,
    assign_customer_group_user_group_error_mapper,
)
from ..errors.create_customer_group_error import CreateCustomerGroupErrorBody, create_customer_group_error_mapper
from ..errors.delete_customer_group_error import DeleteCustomerGroupErrorBody, delete_customer_group_error_mapper
from ..errors.get_customer_group_error import GetCustomerGroupErrorBody, get_customer_group_error_mapper
from ..errors.list_customer_group_user_groups_error import (
    ListCustomerGroupUserGroupsErrorBody,
    list_customer_group_user_groups_error_mapper,
)
from ..errors.list_customer_group_users_error import (
    ListCustomerGroupUsersErrorBody,
    list_customer_group_users_error_mapper,
)
from ..errors.list_customer_groups_error import ListCustomerGroupsErrorBody, list_customer_groups_error_mapper
from ..errors.unassign_customer_group_user_error import (
    UnassignCustomerGroupUserErrorBody,
    unassign_customer_group_user_error_mapper,
)
from ..errors.unassign_customer_group_user_group_error import (
    UnassignCustomerGroupUserGroupErrorBody,
    unassign_customer_group_user_group_error_mapper,
)
from ..errors.update_customer_group_error import UpdateCustomerGroupErrorBody, update_customer_group_error_mapper
from ..models.create_customer_group_request import CreateCustomerGroupRequest, CreateCustomerGroupRequestDict
from ..models.customer_group import CustomerGroup
from ..models.customer_group_user_groups_response import CustomerGroupUserGroupsResponse
from ..models.customer_group_users_response import CustomerGroupUsersResponse
from ..models.customer_groups_response import CustomerGroupsResponse
from ..models.update_customer_group_request import UpdateCustomerGroupRequest, UpdateCustomerGroupRequestDict
from ..server.server import Server


class CustomerGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomerGroupsWithRawResponse(client, server, auth)

    def assign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            Assigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.assign_customer_group_user(
                customer_group_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def assign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership
        changes in the user group apply without reassigning it. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            Assigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.assign_customer_group_user_group(
                customer_group_id, user_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def create_customer_group(
        self,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroup:
        """Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            body: The request body.
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
            Created

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_group(
                body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def delete_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot
        be deleted. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            Deleted

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_group(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroup:
        """Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_group(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_customer_group_user_groups(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroupUserGroupsResponse:
        """Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group
        ID. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_group_user_groups(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_customer_group_users(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroupUsersResponse:
        """Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires
        the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_group_users(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_customer_groups(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CustomerGroupsResponse:
        """Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_groups(x_tenant_id=x_tenant_id, request_options=request_options)
        )

    def unassign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            Unassigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.unassign_customer_group_user(
                customer_group_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def unassign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            Unassigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.unassign_customer_group_user_group(
                customer_group_id, user_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def update_customer_group(
        self,
        customer_group_id: str,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroup:
        """Updates the name, customer membership, or both for a customer group owned by the authenticated tenant.
        Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            body: The request body.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_group(
                customer_group_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomerGroupsWithRawResponse:
        return self._with_raw_response


class AsyncCustomerGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomerGroupsWithRawResponse(client, server, auth)

    async def assign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            Assigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.assign_customer_group_user(
                customer_group_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def assign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership
        changes in the user group apply without reassigning it. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            Assigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.assign_customer_group_user_group(
                customer_group_id, user_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def create_customer_group(
        self,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroup:
        """Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            body: The request body.
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
            Created

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_group(
                body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def delete_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot
        be deleted. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            Deleted

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_group(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroup:
        """Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_group(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_customer_group_user_groups(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroupUserGroupsResponse:
        """Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group
        ID. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_group_user_groups(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_customer_group_users(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroupUsersResponse:
        """Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires
        the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_group_users(
                customer_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_customer_groups(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomerGroupsResponse:
        """Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_groups(x_tenant_id=x_tenant_id, request_options=request_options)
        )

    async def unassign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            Unassigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.unassign_customer_group_user(
                customer_group_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def unassign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            Unassigned

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Request rate limit exceeded; retry after the indicated delay. Unexpected server
                error. Service temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.unassign_customer_group_user_group(
                customer_group_id, user_group_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def update_customer_group(
        self,
        customer_group_id: str,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroup:
        """Updates the name, customer membership, or both for a customer group owned by the authenticated tenant.
        Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            body: The request body.
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
            OK

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_group(
                customer_group_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomerGroupsWithRawResponse:
        return self._with_raw_response


class CustomerGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def assign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignCustomerGroupUserErrorBody]:
        """Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=assign_customer_group_user_error_mapper,
            request_options=request_options,
        )

    def assign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignCustomerGroupUserGroupErrorBody]:
        """Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership
        changes in the user group apply without reassigning it. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userGroupId", user_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=assign_customer_group_user_group_error_mapper,
            request_options=request_options,
        )

    def create_customer_group(
        self,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroup, CreateCustomerGroupErrorBody]:
        """Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            body: The request body.
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
            http_method="POST",
            url_template=self._server.default("/rbac/v1/customer-groups"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerGroupRequest | CreateCustomerGroupRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomerGroup],
            error_mapper=create_customer_group_error_mapper,
            request_options=request_options,
        )

    def delete_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomerGroupErrorBody]:
        """Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot
        be deleted. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            http_method="DELETE",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_customer_group_error_mapper,
            request_options=request_options,
        )

    def get_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroup, GetCustomerGroupErrorBody]:
        """Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomerGroup],
            error_mapper=get_customer_group_error_mapper,
            request_options=request_options,
        )

    def list_customer_group_user_groups(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupUserGroupsResponse, ListCustomerGroupUserGroupsErrorBody]:
        """Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group
        ID. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomerGroupUserGroupsResponse],
            error_mapper=list_customer_group_user_groups_error_mapper,
            request_options=request_options,
        )

    def list_customer_group_users(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupUsersResponse, ListCustomerGroupUsersErrorBody]:
        """Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires
        the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/users"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomerGroupUsersResponse],
            error_mapper=list_customer_group_users_error_mapper,
            request_options=request_options,
        )

    def list_customer_groups(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerGroupsResponse, ListCustomerGroupsErrorBody]:
        """Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
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
            url_template=self._server.default("/rbac/v1/customer-groups"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomerGroupsResponse],
            error_mapper=list_customer_groups_error_mapper,
            request_options=request_options,
        )

    def unassign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UnassignCustomerGroupUserErrorBody]:
        """Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            http_method="DELETE",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=unassign_customer_group_user_error_mapper,
            request_options=request_options,
        )

    def unassign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UnassignCustomerGroupUserGroupErrorBody]:
        """Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            http_method="DELETE",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userGroupId", user_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=unassign_customer_group_user_group_error_mapper,
            request_options=request_options,
        )

    def update_customer_group(
        self,
        customer_group_id: str,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroup, UpdateCustomerGroupErrorBody]:
        """Updates the name, customer membership, or both for a customer group owned by the authenticated tenant.
        Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            body: The request body.
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
            http_method="PATCH",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomerGroup],
            error_mapper=update_customer_group_error_mapper,
            request_options=request_options,
        )


class AsyncCustomerGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def assign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignCustomerGroupUserErrorBody]:
        """Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=assign_customer_group_user_error_mapper,
            request_options=request_options,
        )

    async def assign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignCustomerGroupUserGroupErrorBody]:
        """Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership
        changes in the user group apply without reassigning it. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userGroupId", user_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=assign_customer_group_user_group_error_mapper,
            request_options=request_options,
        )

    async def create_customer_group(
        self,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroup, CreateCustomerGroupErrorBody]:
        """Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            body: The request body.
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
            http_method="POST",
            url_template=self._server.default("/rbac/v1/customer-groups"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerGroupRequest | CreateCustomerGroupRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomerGroup],
            error_mapper=create_customer_group_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomerGroupErrorBody]:
        """Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot
        be deleted. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            http_method="DELETE",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_customer_group_error_mapper,
            request_options=request_options,
        )

    async def get_customer_group(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroup, GetCustomerGroupErrorBody]:
        """Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomerGroup],
            error_mapper=get_customer_group_error_mapper,
            request_options=request_options,
        )

    async def list_customer_group_user_groups(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupUserGroupsResponse, ListCustomerGroupUserGroupsErrorBody]:
        """Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group
        ID. Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomerGroupUserGroupsResponse],
            error_mapper=list_customer_group_user_groups_error_mapper,
            request_options=request_options,
        )

    async def list_customer_group_users(
        self,
        customer_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupUsersResponse, ListCustomerGroupUsersErrorBody]:
        """Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires
        the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
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
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/users"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomerGroupUsersResponse],
            error_mapper=list_customer_group_users_error_mapper,
            request_options=request_options,
        )

    async def list_customer_groups(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerGroupsResponse, ListCustomerGroupsErrorBody]:
        """Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
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
            url_template=self._server.default("/rbac/v1/customer-groups"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomerGroupsResponse],
            error_mapper=list_customer_groups_error_mapper,
            request_options=request_options,
        )

    async def unassign_customer_group_user(
        self,
        customer_group_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UnassignCustomerGroupUserErrorBody]:
        """Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_id: User ID to assign to or unassign from the customer group.
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
            http_method="DELETE",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=unassign_customer_group_user_error_mapper,
            request_options=request_options,
        )

    async def unassign_customer_group_user_group(
        self,
        customer_group_id: str,
        user_group_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UnassignCustomerGroupUserGroupErrorBody]:
        """Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager
        permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            user_group_id: Stable ID of a user group owned by the authenticated tenant.
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
            http_method="DELETE",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id), param[str]("userGroupId", user_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=unassign_customer_group_user_group_error_mapper,
            request_options=request_options,
        )

    async def update_customer_group(
        self,
        customer_group_id: str,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroup, UpdateCustomerGroupErrorBody]:
        """Updates the name, customer membership, or both for a customer group owned by the authenticated tenant.
        Requires the UsersManager permission.

        Args:
            customer_group_id: Stable service-generated customer-group ID.
            body: The request body.
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
            http_method="PATCH",
            url_template=self._server.default("/rbac/v1/customer-groups/{customerGroupId}"),
            path_params=[param[str]("customerGroupId", customer_group_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomerGroup],
            error_mapper=update_customer_group_error_mapper,
            request_options=request_options,
        )
