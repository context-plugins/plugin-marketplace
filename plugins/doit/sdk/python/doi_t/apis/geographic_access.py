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
from ..errors.create_geographic_access_custom_region_error import (
    CreateGeographicAccessCustomRegionErrorBody,
    create_geographic_access_custom_region_error_mapper,
)
from ..errors.delete_customer_geographic_access_scope_error import (
    DeleteCustomerGeographicAccessScopeErrorBody,
    delete_customer_geographic_access_scope_error_mapper,
)
from ..errors.delete_geographic_access_custom_region_error import (
    DeleteGeographicAccessCustomRegionErrorBody,
    delete_geographic_access_custom_region_error_mapper,
)
from ..errors.delete_user_geographic_access_scope_error import (
    DeleteUserGeographicAccessScopeErrorBody,
    delete_user_geographic_access_scope_error_mapper,
)
from ..errors.get_customer_geographic_access_scope_error import (
    GetCustomerGeographicAccessScopeErrorBody,
    get_customer_geographic_access_scope_error_mapper,
)
from ..errors.get_geographic_access_custom_region_error import (
    GetGeographicAccessCustomRegionErrorBody,
    get_geographic_access_custom_region_error_mapper,
)
from ..errors.get_user_geographic_access_scope_error import (
    GetUserGeographicAccessScopeErrorBody,
    get_user_geographic_access_scope_error_mapper,
)
from ..errors.list_geographic_access_countries_error import (
    ListGeographicAccessCountriesErrorBody,
    list_geographic_access_countries_error_mapper,
)
from ..errors.list_geographic_access_custom_regions_error import (
    ListGeographicAccessCustomRegionsErrorBody,
    list_geographic_access_custom_regions_error_mapper,
)
from ..errors.update_customer_geographic_access_scope_error import (
    UpdateCustomerGeographicAccessScopeErrorBody,
    update_customer_geographic_access_scope_error_mapper,
)
from ..errors.update_geographic_access_custom_region_error import (
    UpdateGeographicAccessCustomRegionErrorBody,
    update_geographic_access_custom_region_error_mapper,
)
from ..errors.update_user_geographic_access_scope_error import (
    UpdateUserGeographicAccessScopeErrorBody,
    update_user_geographic_access_scope_error_mapper,
)
from ..models.create_geographic_access_custom_region_request import (
    CreateGeographicAccessCustomRegionRequest,
    CreateGeographicAccessCustomRegionRequestDict,
)
from ..models.geographic_access_countries_response import GeographicAccessCountriesResponse
from ..models.geographic_access_custom_region import GeographicAccessCustomRegion
from ..models.geographic_access_custom_regions_response import GeographicAccessCustomRegionsResponse
from ..models.unions.geographic_access_scope import GeographicAccessScope
from ..models.unions.update_geographic_access_scope_request import (
    UpdateGeographicAccessScopeRequest,
    UpdateGeographicAccessScopeRequestDict,
)
from ..models.update_geographic_access_custom_region_request import (
    UpdateGeographicAccessCustomRegionRequest,
    UpdateGeographicAccessCustomRegionRequestDict,
)
from ..server.server import Server


class GeographicAccess:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GeographicAccessWithRawResponse(client, server, auth)

    def create_geographic_access_custom_region(
        self,
        body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessCustomRegion:
        """Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root.
        Requires the UsersManager permission.

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
            self._with_raw_response.create_geographic_access_custom_region(
                body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def delete_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be
        the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            Cleared

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_geographic_access_scope(
                target_customer_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def delete_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the
        UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            self._with_raw_response.delete_geographic_access_custom_region(
                custom_region_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def delete_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating the request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            Cleared

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.delete_user_geographic_access_scope(
                target_customer_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and
        the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned
        as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            self._with_raw_response.get_customer_geographic_access_scope(
                target_customer_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessCustomRegion:
        """Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            self._with_raw_response.get_geographic_access_custom_region(
                custom_region_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant
        must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets
        outside that hierarchy are returned as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            self._with_raw_response.get_user_geographic_access_scope(
                target_customer_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_geographic_access_countries(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GeographicAccessCountriesResponse:
        """Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

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
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Too
                Many Requests. Service Unavailable - The upstream support system is temporarily unavailable (rate
                limited, upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_geographic_access_countries(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_geographic_access_custom_regions(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GeographicAccessCustomRegionsResponse:
        """Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

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
            self._with_raw_response.list_geographic_access_custom_regions(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def update_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the
        hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            Updated

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_geographic_access_scope(
                target_customer_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def update_geographic_access_custom_region(
        self,
        custom_region_id: str,
        body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessCustomRegion:
        """Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires
        the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            self._with_raw_response.update_geographic_access_custom_region(
                custom_region_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def update_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            Updated

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.update_user_geographic_access_scope(
                target_customer_id, user_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> GeographicAccessWithRawResponse:
        return self._with_raw_response


class AsyncGeographicAccess:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGeographicAccessWithRawResponse(client, server, auth)

    async def create_geographic_access_custom_region(
        self,
        body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessCustomRegion:
        """Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root.
        Requires the UsersManager permission.

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
            await self._with_raw_response.create_geographic_access_custom_region(
                body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def delete_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be
        the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            Cleared

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_geographic_access_scope(
                target_customer_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def delete_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the
        UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            await self._with_raw_response.delete_geographic_access_custom_region(
                custom_region_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def delete_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating the request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            Cleared

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_user_geographic_access_scope(
                target_customer_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and
        the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned
        as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            await self._with_raw_response.get_customer_geographic_access_scope(
                target_customer_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessCustomRegion:
        """Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            await self._with_raw_response.get_geographic_access_custom_region(
                custom_region_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant
        must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets
        outside that hierarchy are returned as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            await self._with_raw_response.get_user_geographic_access_scope(
                target_customer_id, user_id, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_geographic_access_countries(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GeographicAccessCountriesResponse:
        """Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

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
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Too
                Many Requests. Service Unavailable - The upstream support system is temporarily unavailable (rate
                limited, upstream 5xx, or a network error). Retry after the interval indicated by the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_geographic_access_countries(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_geographic_access_custom_regions(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GeographicAccessCustomRegionsResponse:
        """Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

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
            await self._with_raw_response.list_geographic_access_custom_regions(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def update_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the
        hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            Updated

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_geographic_access_scope(
                target_customer_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def update_geographic_access_custom_region(
        self,
        custom_region_id: str,
        body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessCustomRegion:
        """Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires
        the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            await self._with_raw_response.update_geographic_access_custom_region(
                custom_region_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def update_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeographicAccessScope:
        """Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            Updated

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Request rate
                limit exceeded; retry after the indicated delay. Unexpected server error. Service temporarily
                unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.update_user_geographic_access_scope(
                target_customer_id, user_id, body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGeographicAccessWithRawResponse:
        return self._with_raw_response


class GeographicAccessWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_geographic_access_custom_region(
        self,
        body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessCustomRegion, CreateGeographicAccessCustomRegionErrorBody]:
        """Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root.
        Requires the UsersManager permission.

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
            url_template=self._server.default("/rbac/v1/custom-regions"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessCustomRegion],
            error_mapper=create_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    def delete_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomerGeographicAccessScopeErrorBody]:
        """Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be
        the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_customer_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    def delete_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteGeographicAccessCustomRegionErrorBody]:
        """Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the
        UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            url_template=self._server.default("/rbac/v1/custom-regions/{customRegionId}"),
            path_params=[param[str]("customRegionId", custom_region_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    def delete_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteUserGeographicAccessScopeErrorBody]:
        """Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating the request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_user_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    def get_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, GetCustomerGeographicAccessScopeErrorBody]:
        """Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and
        the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned
        as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessScope],
            error_mapper=get_customer_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    def get_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessCustomRegion, GetGeographicAccessCustomRegionErrorBody]:
        """Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            url_template=self._server.default("/rbac/v1/custom-regions/{customRegionId}"),
            path_params=[param[str]("customRegionId", custom_region_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessCustomRegion],
            error_mapper=get_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    def get_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, GetUserGeographicAccessScopeErrorBody]:
        """Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant
        must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets
        outside that hierarchy are returned as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessScope],
            error_mapper=get_user_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    def list_geographic_access_countries(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GeographicAccessCountriesResponse, ListGeographicAccessCountriesErrorBody]:
        """Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

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
            url_template=self._server.default("/rbac/v1/countries"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessCountriesResponse],
            error_mapper=list_geographic_access_countries_error_mapper,
            request_options=request_options,
        )

    def list_geographic_access_custom_regions(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GeographicAccessCustomRegionsResponse, ListGeographicAccessCustomRegionsErrorBody]:
        """Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

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
            url_template=self._server.default("/rbac/v1/custom-regions"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessCustomRegionsResponse],
            error_mapper=list_geographic_access_custom_regions_error_mapper,
            request_options=request_options,
        )

    def update_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, UpdateCustomerGeographicAccessScopeErrorBody]:
        """Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the
        hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessScope],
            error_mapper=update_customer_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    def update_geographic_access_custom_region(
        self,
        custom_region_id: str,
        body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessCustomRegion, UpdateGeographicAccessCustomRegionErrorBody]:
        """Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires
        the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            url_template=self._server.default("/rbac/v1/custom-regions/{customRegionId}"),
            path_params=[param[str]("customRegionId", custom_region_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessCustomRegion],
            error_mapper=update_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    def update_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, UpdateUserGeographicAccessScopeErrorBody]:
        """Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GeographicAccessScope],
            error_mapper=update_user_geographic_access_scope_error_mapper,
            request_options=request_options,
        )


class AsyncGeographicAccessWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_geographic_access_custom_region(
        self,
        body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessCustomRegion, CreateGeographicAccessCustomRegionErrorBody]:
        """Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root.
        Requires the UsersManager permission.

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
            url_template=self._server.default("/rbac/v1/custom-regions"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessCustomRegion],
            error_mapper=create_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomerGeographicAccessScopeErrorBody]:
        """Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be
        the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_customer_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    async def delete_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteGeographicAccessCustomRegionErrorBody]:
        """Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the
        UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            url_template=self._server.default("/rbac/v1/custom-regions/{customRegionId}"),
            path_params=[param[str]("customRegionId", custom_region_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    async def delete_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteUserGeographicAccessScopeErrorBody]:
        """Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating the request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_user_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    async def get_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, GetCustomerGeographicAccessScopeErrorBody]:
        """Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and
        the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned
        as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessScope],
            error_mapper=get_customer_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    async def get_geographic_access_custom_region(
        self,
        custom_region_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessCustomRegion, GetGeographicAccessCustomRegionErrorBody]:
        """Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            url_template=self._server.default("/rbac/v1/custom-regions/{customRegionId}"),
            path_params=[param[str]("customRegionId", custom_region_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessCustomRegion],
            error_mapper=get_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    async def get_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, GetUserGeographicAccessScopeErrorBody]:
        """Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant
        must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets
        outside that hierarchy are returned as not found. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessScope],
            error_mapper=get_user_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    async def list_geographic_access_countries(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GeographicAccessCountriesResponse, ListGeographicAccessCountriesErrorBody]:
        """Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

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
            url_template=self._server.default("/rbac/v1/countries"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessCountriesResponse],
            error_mapper=list_geographic_access_countries_error_mapper,
            request_options=request_options,
        )

    async def list_geographic_access_custom_regions(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GeographicAccessCustomRegionsResponse, ListGeographicAccessCustomRegionsErrorBody]:
        """Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

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
            url_template=self._server.default("/rbac/v1/custom-regions"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessCustomRegionsResponse],
            error_mapper=list_geographic_access_custom_regions_error_mapper,
            request_options=request_options,
        )

    async def update_customer_geographic_access_scope(
        self,
        target_customer_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, UpdateCustomerGeographicAccessScopeErrorBody]:
        """Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the
        hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical
        request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessScope],
            error_mapper=update_customer_geographic_access_scope_error_mapper,
            request_options=request_options,
        )

    async def update_geographic_access_custom_region(
        self,
        custom_region_id: str,
        body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessCustomRegion, UpdateGeographicAccessCustomRegionErrorBody]:
        """Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires
        the UsersManager permission.

        Args:
            custom_region_id: Stable service-generated custom-region ID.
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
            url_template=self._server.default("/rbac/v1/custom-regions/{customRegionId}"),
            path_params=[param[str]("customRegionId", custom_region_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessCustomRegion],
            error_mapper=update_geographic_access_custom_region_error_mapper,
            request_options=request_options,
        )

    async def update_user_geographic_access_scope(
        self,
        target_customer_id: str,
        user_id: str,
        body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeographicAccessScope, UpdateUserGeographicAccessScopeErrorBody]:
        """Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The
        authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child
        customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

        Args:
            target_customer_id: Customer ID within the authenticated tenant's hierarchy whose geographic scope is
                managed.
            user_id: Unique user ID returned by GET /iam/v1/users that belongs to the target customer.
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
            http_method="PUT",
            url_template=self._server.default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            path_params=[param[str]("targetCustomerId", target_customer_id), param[str]("userId", user_id)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GeographicAccessScope],
            error_mapper=update_user_geographic_access_scope_error_mapper,
            request_options=request_options,
        )
