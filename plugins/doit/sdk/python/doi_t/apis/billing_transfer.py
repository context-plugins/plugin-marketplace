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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_billing_transfer_end_customer_mappings_error import (
    CreateBillingTransferEndCustomerMappingsErrorBody,
    create_billing_transfer_end_customer_mappings_error_mapper,
)
from ..errors.create_billing_transfer_reseller_handshakes_error import (
    CreateBillingTransferResellerHandshakesErrorBody,
    create_billing_transfer_reseller_handshakes_error_mapper,
)
from ..errors.get_billing_transfer_program_management_accounts_status_error import (
    GetBillingTransferProgramManagementAccountsStatusErrorBody,
    get_billing_transfer_program_management_accounts_status_error_mapper,
)
from ..errors.list_billing_transfer_end_customers_by_reseller_error import (
    ListBillingTransferEndCustomersByResellerErrorBody,
    list_billing_transfer_end_customers_by_reseller_error_mapper,
)
from ..errors.list_billing_transfer_end_customers_error import (
    ListBillingTransferEndCustomersErrorBody,
    list_billing_transfer_end_customers_error_mapper,
)
from ..errors.list_billing_transfer_program_management_accounts_error import (
    ListBillingTransferProgramManagementAccountsErrorBody,
    list_billing_transfer_program_management_accounts_error_mapper,
)
from ..errors.list_billing_transfer_reseller_accounts_error import (
    ListBillingTransferResellerAccountsErrorBody,
    list_billing_transfer_reseller_accounts_error_mapper,
)
from ..errors.list_billing_transfer_reseller_accounts_with_tenants_error import (
    ListBillingTransferResellerAccountsWithTenantsErrorBody,
    list_billing_transfer_reseller_accounts_with_tenants_error_mapper,
)
from ..models.end_customer_mapping_batch_create import EndCustomerMappingBatchCreate, EndCustomerMappingBatchCreateDict
from ..models.end_customer_mapping_batch_result import EndCustomerMappingBatchResult
from ..models.list_end_customers_response import ListEndCustomersResponse
from ..models.list_reseller_accounts_response import ListResellerAccountsResponse
from ..models.list_reseller_accounts_with_tenants_response import ListResellerAccountsWithTenantsResponse
from ..models.program_management_account_list import ProgramManagementAccountList
from ..models.program_management_accounts_status_response import ProgramManagementAccountsStatusResponse
from ..models.reseller_handshake_batch_create import ResellerHandshakeBatchCreate, ResellerHandshakeBatchCreateDict
from ..models.reseller_handshake_batch_result import ResellerHandshakeBatchResult
from ..server.server import Server


class BillingTransfer:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BillingTransferWithRawResponse(client, server, auth)

    def create_billing_transfer_end_customer_mappings(
        self,
        body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EndCustomerMappingBatchResult:
        """Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS billing transfer
        onboarding. Reseller-only; distributors are explicitly denied (``403``).

        Unlike ``POST /billingtransfer/v1/resellerhandshakes``, this endpoint has no ``Idempotency-Key`` requirement and
        no ``dryRun`` support.

        This path is a deliberate exception to the de-hyphenation convention used by the sibling ``resellerhandshakes``
        and ``programmanagementaccounts`` paths — it stays hyphenated to match the existing Go route and its
        console-facing equivalent.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200``. Malformed items are rejected up front and reported in ``invalidItems`` without processing any of the
        batch.

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
            OK - Batch processed; see ``results`` for per-item outcomes and ``invalidItems`` for any items rejected
            before processing.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The caller is a distributor (denied), does not own the
                referenced ``resellerPmaAccountId``, or the reseller is not mapped to the referenced ``dpmaId``.
                Unprocessable Entity - One or more items in the batch failed validation before any processing began
                (missing required fields, or duplicate account/customer IDs within the batch), or a batch-level field
                such as ``dpmaId`` is missing or invalid. None of the batch was processed; resubmit with corrected
                ``items``. Invalid items are listed in ``invalidItems``. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | BillingTransferProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.create_billing_transfer_end_customer_mappings(
                body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def create_billing_transfer_reseller_handshakes(
        self,
        idempotency_key: str,
        body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict,
        *,
        dry_run: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResellerHandshakeBatchResult:
        """Maps reseller to distributor; also sends the handshake if required, as part of AWS billing transfer
        onboarding. Distributor-only; callers without the ChannelOps distributor tier entitlement receive ``403``.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200`` even when some items fail. Malformed items (missing fields, duplicate ``resellerPmaAccountId`` within
        the batch) are rejected up front with ``422`` and reported in ``invalidItems``, and none of the batch is
        processed in that case.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects.
            body: The request body.
            dry_run: If ``true``, validates the batch and simulates the outcome without issuing any AWS Organizations
                handshakes. The response shape is identical to a real execution.
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
            OK - Batch processed; see ``results`` and ``summary`` for per-item outcomes.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The caller is not entitled to the ChannelOps distributor
                tier, or does not own the referenced ``dpmaId``. Unprocessable Entity - One or more items in the batch
                failed validation before any processing began (missing required fields, or duplicate account/customer
                IDs within the batch), or a batch-level field such as ``dpmaId`` is missing or invalid. None of the
                batch was processed; resubmit with corrected ``items``. Invalid items are listed in ``invalidItems``.
                Internal Server Error - Something went wrong with the DoiT API server. Bad Gateway - AWS Organizations
                was unreachable; retry later. ``error`` is ``Error | BillingTransferProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.create_billing_transfer_reseller_handshakes(
                idempotency_key, body, dry_run=dry_run, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_billing_transfer_program_management_accounts_status(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ProgramManagementAccountsStatusResponse:
        """Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs with only its IAM
        status/diff and timestamps — no tenant fan-out, no handshake aggregation, no pagination. Distributor-only.

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
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_billing_transfer_program_management_accounts_status(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_billing_transfer_end_customers(
        self,
        dpma_id: str,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListEndCustomersResponse:
        """Lists the end-customer AWS account mappings under a reseller's program management account, identified by
        ``dpmaId`` and ``resellerPmaAccountId``. Callable by the reseller who owns the PMA or the distributor who owns
        the DPMA.

        Args:
            dpma_id: DPMA ID that owns the reseller PMA referenced by ``resellerPmaAccountId``.
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission, or is
                not the reseller who owns this PMA nor the distributor who owns the DPMA. Not Found - No reseller PMA
                exists for the given ``resellerPmaAccountId`` under the given ``dpmaId``. Internal Server Error -
                Something went wrong with the DoiT API server. ``error`` is ``Error | BillingTransferProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_billing_transfer_end_customers(
                dpma_id,
                reseller_pma_account_id,
                include_revoked=include_revoked,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_billing_transfer_end_customers_by_reseller(
        self,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListEndCustomersResponse:
        """Same result as ``GET /billingtransfer/v1/end-customers``, identified by ``resellerPmaAccountId`` alone (no
        ``dpmaId`` needed). Callable by the reseller who owns the PMA or the distributor who owns its DPMA.

        Args:
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission. Not
                Found - No reseller PMA exists for the given ``resellerPmaAccountId``, or it exists but the caller is
                not the reseller who owns it or the distributor who owns its DPMA. Internal Server Error - Something
                went wrong with the DoiT API server. ``error`` is ``Error | BillingTransferProblemDetails |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_billing_transfer_end_customers_by_reseller(
                reseller_pma_account_id,
                include_revoked=include_revoked,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    def list_billing_transfer_program_management_accounts(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProgramManagementAccountList:
        """Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to each one, including
        AWS Organizations handshake status per account. Distributor-only.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
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
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_billing_transfer_program_management_accounts(
                max_results=max_results, page_token=page_token, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_billing_transfer_reseller_accounts(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ListResellerAccountsResponse:
        """Lists every reseller program management account (RPMA) node belonging to the calling reseller, with handshake
        state and status but without end-customer tenants — the reseller-tier analog of ``GET
        /billingtransfer/v1/programmanagementaccounts``.

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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                BillingTransferProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_billing_transfer_reseller_accounts(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def list_billing_transfer_reseller_accounts_with_tenants(
        self,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResellerAccountsWithTenantsResponse:
        """Lists every reseller PMA node belonging to the calling reseller, each with the end-customer tenants connected
        under it — the reseller-tier analog of ``GET /billingtransfer/v1/programmanagementaccounts``. ``region``,
        ``iamStatus`` and ``lastRefreshTime`` are inherited from the parent DPMA root; the reseller node itself carries
        no IAM/region metadata of its own.

        Args:
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                BillingTransferProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_billing_transfer_reseller_accounts_with_tenants(
                include_revoked=include_revoked, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BillingTransferWithRawResponse:
        return self._with_raw_response


class AsyncBillingTransfer:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBillingTransferWithRawResponse(client, server, auth)

    async def create_billing_transfer_end_customer_mappings(
        self,
        body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EndCustomerMappingBatchResult:
        """Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS billing transfer
        onboarding. Reseller-only; distributors are explicitly denied (``403``).

        Unlike ``POST /billingtransfer/v1/resellerhandshakes``, this endpoint has no ``Idempotency-Key`` requirement and
        no ``dryRun`` support.

        This path is a deliberate exception to the de-hyphenation convention used by the sibling ``resellerhandshakes``
        and ``programmanagementaccounts`` paths — it stays hyphenated to match the existing Go route and its
        console-facing equivalent.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200``. Malformed items are rejected up front and reported in ``invalidItems`` without processing any of the
        batch.

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
            OK - Batch processed; see ``results`` for per-item outcomes and ``invalidItems`` for any items rejected
            before processing.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The caller is a distributor (denied), does not own the
                referenced ``resellerPmaAccountId``, or the reseller is not mapped to the referenced ``dpmaId``.
                Unprocessable Entity - One or more items in the batch failed validation before any processing began
                (missing required fields, or duplicate account/customer IDs within the batch), or a batch-level field
                such as ``dpmaId`` is missing or invalid. None of the batch was processed; resubmit with corrected
                ``items``. Invalid items are listed in ``invalidItems``. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | BillingTransferProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.create_billing_transfer_end_customer_mappings(
                body, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def create_billing_transfer_reseller_handshakes(
        self,
        idempotency_key: str,
        body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict,
        *,
        dry_run: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResellerHandshakeBatchResult:
        """Maps reseller to distributor; also sends the handshake if required, as part of AWS billing transfer
        onboarding. Distributor-only; callers without the ChannelOps distributor tier entitlement receive ``403``.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200`` even when some items fail. Malformed items (missing fields, duplicate ``resellerPmaAccountId`` within
        the batch) are rejected up front with ``422`` and reported in ``invalidItems``, and none of the batch is
        processed in that case.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects.
            body: The request body.
            dry_run: If ``true``, validates the batch and simulates the outcome without issuing any AWS Organizations
                handshakes. The response shape is identical to a real execution.
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
            OK - Batch processed; see ``results`` and ``summary`` for per-item outcomes.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The caller is not entitled to the ChannelOps distributor
                tier, or does not own the referenced ``dpmaId``. Unprocessable Entity - One or more items in the batch
                failed validation before any processing began (missing required fields, or duplicate account/customer
                IDs within the batch), or a batch-level field such as ``dpmaId`` is missing or invalid. None of the
                batch was processed; resubmit with corrected ``items``. Invalid items are listed in ``invalidItems``.
                Internal Server Error - Something went wrong with the DoiT API server. Bad Gateway - AWS Organizations
                was unreachable; retry later. ``error`` is ``Error | BillingTransferProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.create_billing_transfer_reseller_handshakes(
                idempotency_key, body, dry_run=dry_run, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_billing_transfer_program_management_accounts_status(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProgramManagementAccountsStatusResponse:
        """Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs with only its IAM
        status/diff and timestamps — no tenant fan-out, no handshake aggregation, no pagination. Distributor-only.

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
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_billing_transfer_program_management_accounts_status(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_billing_transfer_end_customers(
        self,
        dpma_id: str,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListEndCustomersResponse:
        """Lists the end-customer AWS account mappings under a reseller's program management account, identified by
        ``dpmaId`` and ``resellerPmaAccountId``. Callable by the reseller who owns the PMA or the distributor who owns
        the DPMA.

        Args:
            dpma_id: DPMA ID that owns the reseller PMA referenced by ``resellerPmaAccountId``.
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission, or is
                not the reseller who owns this PMA nor the distributor who owns the DPMA. Not Found - No reseller PMA
                exists for the given ``resellerPmaAccountId`` under the given ``dpmaId``. Internal Server Error -
                Something went wrong with the DoiT API server. ``error`` is ``Error | BillingTransferProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_billing_transfer_end_customers(
                dpma_id,
                reseller_pma_account_id,
                include_revoked=include_revoked,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_billing_transfer_end_customers_by_reseller(
        self,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListEndCustomersResponse:
        """Same result as ``GET /billingtransfer/v1/end-customers``, identified by ``resellerPmaAccountId`` alone (no
        ``dpmaId`` needed). Callable by the reseller who owns the PMA or the distributor who owns its DPMA.

        Args:
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission. Not
                Found - No reseller PMA exists for the given ``resellerPmaAccountId``, or it exists but the caller is
                not the reseller who owns it or the distributor who owns its DPMA. Internal Server Error - Something
                went wrong with the DoiT API server. ``error`` is ``Error | BillingTransferProblemDetails |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_billing_transfer_end_customers_by_reseller(
                reseller_pma_account_id,
                include_revoked=include_revoked,
                x_tenant_id=x_tenant_id,
                request_options=request_options,
            ),
        )

    async def list_billing_transfer_program_management_accounts(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProgramManagementAccountList:
        """Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to each one, including
        AWS Organizations handshake status per account. Distributor-only.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
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
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_billing_transfer_program_management_accounts(
                max_results=max_results, page_token=page_token, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_billing_transfer_reseller_accounts(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ListResellerAccountsResponse:
        """Lists every reseller program management account (RPMA) node belonging to the calling reseller, with handshake
        state and status but without end-customer tenants — the reseller-tier analog of ``GET
        /billingtransfer/v1/programmanagementaccounts``.

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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                BillingTransferProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_billing_transfer_reseller_accounts(
                x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def list_billing_transfer_reseller_accounts_with_tenants(
        self,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResellerAccountsWithTenantsResponse:
        """Lists every reseller PMA node belonging to the calling reseller, each with the end-customer tenants connected
        under it — the reseller-tier analog of ``GET /billingtransfer/v1/programmanagementaccounts``. ``region``,
        ``iamStatus`` and ``lastRefreshTime`` are inherited from the parent DPMA root; the reseller node itself carries
        no IAM/region metadata of its own.

        Args:
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
                Unauthorized - Invalid API key. Forbidden - The caller lacks the BillingTransferAdmin permission.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                BillingTransferProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_billing_transfer_reseller_accounts_with_tenants(
                include_revoked=include_revoked, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBillingTransferWithRawResponse:
        return self._with_raw_response


class BillingTransferWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_billing_transfer_end_customer_mappings(
        self,
        body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EndCustomerMappingBatchResult, CreateBillingTransferEndCustomerMappingsErrorBody]:
        """Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS billing transfer
        onboarding. Reseller-only; distributors are explicitly denied (``403``).

        Unlike ``POST /billingtransfer/v1/resellerhandshakes``, this endpoint has no ``Idempotency-Key`` requirement and
        no ``dryRun`` support.

        This path is a deliberate exception to the de-hyphenation convention used by the sibling ``resellerhandshakes``
        and ``programmanagementaccounts`` paths — it stays hyphenated to match the existing Go route and its
        console-facing equivalent.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200``. Malformed items are rejected up front and reported in ``invalidItems`` without processing any of the
        batch.

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
            url_template=self._server.default("/billingtransfer/v1/end-customer-mappings"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[EndCustomerMappingBatchResult],
            error_mapper=create_billing_transfer_end_customer_mappings_error_mapper,
            request_options=request_options,
        )

    def create_billing_transfer_reseller_handshakes(
        self,
        idempotency_key: str,
        body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict,
        *,
        dry_run: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResellerHandshakeBatchResult, CreateBillingTransferResellerHandshakesErrorBody]:
        """Maps reseller to distributor; also sends the handshake if required, as part of AWS billing transfer
        onboarding. Distributor-only; callers without the ChannelOps distributor tier entitlement receive ``403``.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200`` even when some items fail. Malformed items (missing fields, duplicate ``resellerPmaAccountId`` within
        the batch) are rejected up front with ``422`` and reported in ``invalidItems``, and none of the batch is
        processed in that case.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects.
            body: The request body.
            dry_run: If ``true``, validates the batch and simulates the outcome without issuing any AWS Organizations
                handshakes. The response shape is identical to a real execution.
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
            url_template=self._server.default("/billingtransfer/v1/resellerhandshakes"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key), param[str | None]("X-Tenant-Id", x_tenant_id)],
            body=json_body[ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResellerHandshakeBatchResult],
            error_mapper=create_billing_transfer_reseller_handshakes_error_mapper,
            request_options=request_options,
        )

    def get_billing_transfer_program_management_accounts_status(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProgramManagementAccountsStatusResponse, GetBillingTransferProgramManagementAccountsStatusErrorBody]:
        """Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs with only its IAM
        status/diff and timestamps — no tenant fan-out, no handshake aggregation, no pagination. Distributor-only.

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
            url_template=self._server.default("/billingtransfer/v1/programmanagementaccounts/status"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ProgramManagementAccountsStatusResponse],
            error_mapper=get_billing_transfer_program_management_accounts_status_error_mapper,
            request_options=request_options,
        )

    def list_billing_transfer_end_customers(
        self,
        dpma_id: str,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersErrorBody]:
        """Lists the end-customer AWS account mappings under a reseller's program management account, identified by
        ``dpmaId`` and ``resellerPmaAccountId``. Callable by the reseller who owns the PMA or the distributor who owns
        the DPMA.

        Args:
            dpma_id: DPMA ID that owns the reseller PMA referenced by ``resellerPmaAccountId``.
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
            url_template=self._server.default("/billingtransfer/v1/end-customers"),
            query_params=[
                param[str]("dpmaId", dpma_id),
                param[str]("resellerPmaAccountId", reseller_pma_account_id),
                param[bool | None]("includeRevoked", include_revoked),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ListEndCustomersResponse],
            error_mapper=list_billing_transfer_end_customers_error_mapper,
            request_options=request_options,
        )

    def list_billing_transfer_end_customers_by_reseller(
        self,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersByResellerErrorBody]:
        """Same result as ``GET /billingtransfer/v1/end-customers``, identified by ``resellerPmaAccountId`` alone (no
        ``dpmaId`` needed). Callable by the reseller who owns the PMA or the distributor who owns its DPMA.

        Args:
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
            url_template=self._server.default("/billingtransfer/v1/resellers/{resellerPmaAccountId}/end-customers"),
            path_params=[param[str]("resellerPmaAccountId", reseller_pma_account_id)],
            query_params=[param[bool | None]("includeRevoked", include_revoked)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ListEndCustomersResponse],
            error_mapper=list_billing_transfer_end_customers_by_reseller_error_mapper,
            request_options=request_options,
        )

    def list_billing_transfer_program_management_accounts(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProgramManagementAccountList, ListBillingTransferProgramManagementAccountsErrorBody]:
        """Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to each one, including
        AWS Organizations handshake status per account. Distributor-only.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
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
            url_template=self._server.default("/billingtransfer/v1/programmanagementaccounts"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ProgramManagementAccountList],
            error_mapper=list_billing_transfer_program_management_accounts_error_mapper,
            request_options=request_options,
        )

    def list_billing_transfer_reseller_accounts(
        self, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ListResellerAccountsResponse, ListBillingTransferResellerAccountsErrorBody]:
        """Lists every reseller program management account (RPMA) node belonging to the calling reseller, with handshake
        state and status but without end-customer tenants — the reseller-tier analog of ``GET
        /billingtransfer/v1/programmanagementaccounts``.

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
            url_template=self._server.default("/billingtransfer/v1/reseller-accounts"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ListResellerAccountsResponse],
            error_mapper=list_billing_transfer_reseller_accounts_error_mapper,
            request_options=request_options,
        )

    def list_billing_transfer_reseller_accounts_with_tenants(
        self,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResellerAccountsWithTenantsResponse, ListBillingTransferResellerAccountsWithTenantsErrorBody]:
        """Lists every reseller PMA node belonging to the calling reseller, each with the end-customer tenants connected
        under it — the reseller-tier analog of ``GET /billingtransfer/v1/programmanagementaccounts``. ``region``,
        ``iamStatus`` and ``lastRefreshTime`` are inherited from the parent DPMA root; the reseller node itself carries
        no IAM/region metadata of its own.

        Args:
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
            url_template=self._server.default("/billingtransfer/v1/reseller-accounts/end-customers"),
            query_params=[param[bool | None]("includeRevoked", include_revoked)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ListResellerAccountsWithTenantsResponse],
            error_mapper=list_billing_transfer_reseller_accounts_with_tenants_error_mapper,
            request_options=request_options,
        )


class AsyncBillingTransferWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_billing_transfer_end_customer_mappings(
        self,
        body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EndCustomerMappingBatchResult, CreateBillingTransferEndCustomerMappingsErrorBody]:
        """Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS billing transfer
        onboarding. Reseller-only; distributors are explicitly denied (``403``).

        Unlike ``POST /billingtransfer/v1/resellerhandshakes``, this endpoint has no ``Idempotency-Key`` requirement and
        no ``dryRun`` support.

        This path is a deliberate exception to the de-hyphenation convention used by the sibling ``resellerhandshakes``
        and ``programmanagementaccounts`` paths — it stays hyphenated to match the existing Go route and its
        console-facing equivalent.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200``. Malformed items are rejected up front and reported in ``invalidItems`` without processing any of the
        batch.

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
            url_template=self._server.default("/billingtransfer/v1/end-customer-mappings"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[EndCustomerMappingBatchResult],
            error_mapper=create_billing_transfer_end_customer_mappings_error_mapper,
            request_options=request_options,
        )

    async def create_billing_transfer_reseller_handshakes(
        self,
        idempotency_key: str,
        body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict,
        *,
        dry_run: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResellerHandshakeBatchResult, CreateBillingTransferResellerHandshakesErrorBody]:
        """Maps reseller to distributor; also sends the handshake if required, as part of AWS billing transfer
        onboarding. Distributor-only; callers without the ChannelOps distributor tier entitlement receive ``403``.

        Each item in the batch is processed independently; per-item outcomes are returned in ``results[]`` with HTTP
        ``200`` even when some items fail. Malformed items (missing fields, duplicate ``resellerPmaAccountId`` within
        the batch) are rejected up front with ``422`` and reported in ``invalidItems``, and none of the batch is
        processed in that case.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects.
            body: The request body.
            dry_run: If ``true``, validates the batch and simulates the outcome without issuing any AWS Organizations
                handshakes. The response shape is identical to a real execution.
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
            url_template=self._server.default("/billingtransfer/v1/resellerhandshakes"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key), param[str | None]("X-Tenant-Id", x_tenant_id)],
            body=json_body[ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResellerHandshakeBatchResult],
            error_mapper=create_billing_transfer_reseller_handshakes_error_mapper,
            request_options=request_options,
        )

    async def get_billing_transfer_program_management_accounts_status(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProgramManagementAccountsStatusResponse, GetBillingTransferProgramManagementAccountsStatusErrorBody]:
        """Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs with only its IAM
        status/diff and timestamps — no tenant fan-out, no handshake aggregation, no pagination. Distributor-only.

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
            url_template=self._server.default("/billingtransfer/v1/programmanagementaccounts/status"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ProgramManagementAccountsStatusResponse],
            error_mapper=get_billing_transfer_program_management_accounts_status_error_mapper,
            request_options=request_options,
        )

    async def list_billing_transfer_end_customers(
        self,
        dpma_id: str,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersErrorBody]:
        """Lists the end-customer AWS account mappings under a reseller's program management account, identified by
        ``dpmaId`` and ``resellerPmaAccountId``. Callable by the reseller who owns the PMA or the distributor who owns
        the DPMA.

        Args:
            dpma_id: DPMA ID that owns the reseller PMA referenced by ``resellerPmaAccountId``.
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
            url_template=self._server.default("/billingtransfer/v1/end-customers"),
            query_params=[
                param[str]("dpmaId", dpma_id),
                param[str]("resellerPmaAccountId", reseller_pma_account_id),
                param[bool | None]("includeRevoked", include_revoked),
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ListEndCustomersResponse],
            error_mapper=list_billing_transfer_end_customers_error_mapper,
            request_options=request_options,
        )

    async def list_billing_transfer_end_customers_by_reseller(
        self,
        reseller_pma_account_id: str,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersByResellerErrorBody]:
        """Same result as ``GET /billingtransfer/v1/end-customers``, identified by ``resellerPmaAccountId`` alone (no
        ``dpmaId`` needed). Callable by the reseller who owns the PMA or the distributor who owns its DPMA.

        Args:
            reseller_pma_account_id: 12-digit AWS account ID of the reseller's program management account.
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
            url_template=self._server.default("/billingtransfer/v1/resellers/{resellerPmaAccountId}/end-customers"),
            path_params=[param[str]("resellerPmaAccountId", reseller_pma_account_id)],
            query_params=[param[bool | None]("includeRevoked", include_revoked)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ListEndCustomersResponse],
            error_mapper=list_billing_transfer_end_customers_by_reseller_error_mapper,
            request_options=request_options,
        )

    async def list_billing_transfer_program_management_accounts(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProgramManagementAccountList, ListBillingTransferProgramManagementAccountsErrorBody]:
        """Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to each one, including
        AWS Organizations handshake status per account. Distributor-only.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
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
            url_template=self._server.default("/billingtransfer/v1/programmanagementaccounts"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ProgramManagementAccountList],
            error_mapper=list_billing_transfer_program_management_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_billing_transfer_reseller_accounts(
        self, *, x_tenant_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ListResellerAccountsResponse, ListBillingTransferResellerAccountsErrorBody]:
        """Lists every reseller program management account (RPMA) node belonging to the calling reseller, with handshake
        state and status but without end-customer tenants — the reseller-tier analog of ``GET
        /billingtransfer/v1/programmanagementaccounts``.

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
            url_template=self._server.default("/billingtransfer/v1/reseller-accounts"),
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ListResellerAccountsResponse],
            error_mapper=list_billing_transfer_reseller_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_billing_transfer_reseller_accounts_with_tenants(
        self,
        *,
        include_revoked: bool | None = False,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResellerAccountsWithTenantsResponse, ListBillingTransferResellerAccountsWithTenantsErrorBody]:
        """Lists every reseller PMA node belonging to the calling reseller, each with the end-customer tenants connected
        under it — the reseller-tier analog of ``GET /billingtransfer/v1/programmanagementaccounts``. ``region``,
        ``iamStatus`` and ``lastRefreshTime`` are inherited from the parent DPMA root; the reseller node itself carries
        no IAM/region metadata of its own.

        Args:
            include_revoked: If ``true``, includes end-customer mappings that have been revoked. Defaults to ``false``
                (revoked mappings are excluded).
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
            url_template=self._server.default("/billingtransfer/v1/reseller-accounts/end-customers"),
            query_params=[param[bool | None]("includeRevoked", include_revoked)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ListResellerAccountsWithTenantsResponse],
            error_mapper=list_billing_transfer_reseller_accounts_with_tenants_error_mapper,
            request_options=request_options,
        )
