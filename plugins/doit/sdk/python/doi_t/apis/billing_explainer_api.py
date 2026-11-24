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
from ..errors.get_billing_explainer_per_payer_error import (
    GetBillingExplainerPerPayerErrorBody,
    get_billing_explainer_per_payer_error_mapper,
)
from ..errors.get_entity_invoice_explainer_error import (
    GetEntityInvoiceExplainerErrorBody,
    get_entity_invoice_explainer_error_mapper,
)
from ..models.billing_explainer_customer import BillingExplainerCustomer
from ..models.entity_invoice_explainer import EntityInvoiceExplainer
from ..server.server import Server


class BillingExplainerApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BillingExplainerApiWithRawResponse(client, server, auth)

    def get_billing_explainer_per_payer(
        self, invoice_month: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> BillingExplainerCustomer:
        """Returns the invoiced cost changes for each payer in the authenticated tenant.

        Args:
            invoice_month: Invoice month in ``YYYY-MM`` format.
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
            Billing explainer returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_billing_explainer_per_payer(
                invoice_month, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    def get_entity_invoice_explainer(
        self,
        billing_profile_id: str,
        invoice_number: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntityInvoiceExplainer:
        """Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated
        tenant.

        Args:
            billing_profile_id: Billing profile identifier shown on the invoice.
            invoice_number: Customer-facing invoice number.
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
            Billing explainer returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_entity_invoice_explainer(
                billing_profile_id, invoice_number, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BillingExplainerApiWithRawResponse:
        return self._with_raw_response


class AsyncBillingExplainerApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBillingExplainerApiWithRawResponse(client, server, auth)

    async def get_billing_explainer_per_payer(
        self,
        invoice_month: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillingExplainerCustomer:
        """Returns the invoiced cost changes for each payer in the authenticated tenant.

        Args:
            invoice_month: Invoice month in ``YYYY-MM`` format.
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
            Billing explainer returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_billing_explainer_per_payer(
                invoice_month, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    async def get_entity_invoice_explainer(
        self,
        billing_profile_id: str,
        invoice_number: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityInvoiceExplainer:
        """Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated
        tenant.

        Args:
            billing_profile_id: Billing profile identifier shown on the invoice.
            invoice_number: Customer-facing invoice number.
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
            Billing explainer returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_entity_invoice_explainer(
                billing_profile_id, invoice_number, x_tenant_id=x_tenant_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBillingExplainerApiWithRawResponse:
        return self._with_raw_response


class BillingExplainerApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_billing_explainer_per_payer(
        self, invoice_month: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BillingExplainerCustomer, GetBillingExplainerPerPayerErrorBody]:
        """Returns the invoiced cost changes for each payer in the authenticated tenant.

        Args:
            invoice_month: Invoice month in ``YYYY-MM`` format.
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
            url_template=self._server.default("/billing/v1/billing-explainers/{invoiceMonth}"),
            path_params=[param[str]("invoiceMonth", invoice_month)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BillingExplainerCustomer],
            error_mapper=get_billing_explainer_per_payer_error_mapper,
            request_options=request_options,
        )

    def get_entity_invoice_explainer(
        self,
        billing_profile_id: str,
        invoice_number: str,
        *,
        x_tenant_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityInvoiceExplainer, GetEntityInvoiceExplainerErrorBody]:
        """Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated
        tenant.

        Args:
            billing_profile_id: Billing profile identifier shown on the invoice.
            invoice_number: Customer-facing invoice number.
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
                "/billing/v1/billing-profiles/{billingProfileId}/billing-explainers/{invoiceNumber}"
            ),
            path_params=[
                param[str]("billingProfileId", billing_profile_id), param[str]("invoiceNumber", invoice_number)
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[EntityInvoiceExplainer],
            error_mapper=get_entity_invoice_explainer_error_mapper,
            request_options=request_options,
        )


class AsyncBillingExplainerApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_billing_explainer_per_payer(
        self,
        invoice_month: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingExplainerCustomer, GetBillingExplainerPerPayerErrorBody]:
        """Returns the invoiced cost changes for each payer in the authenticated tenant.

        Args:
            invoice_month: Invoice month in ``YYYY-MM`` format.
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
            url_template=self._server.default("/billing/v1/billing-explainers/{invoiceMonth}"),
            path_params=[param[str]("invoiceMonth", invoice_month)],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BillingExplainerCustomer],
            error_mapper=get_billing_explainer_per_payer_error_mapper,
            request_options=request_options,
        )

    async def get_entity_invoice_explainer(
        self,
        billing_profile_id: str,
        invoice_number: str,
        *,
        x_tenant_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityInvoiceExplainer, GetEntityInvoiceExplainerErrorBody]:
        """Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated
        tenant.

        Args:
            billing_profile_id: Billing profile identifier shown on the invoice.
            invoice_number: Customer-facing invoice number.
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
                "/billing/v1/billing-profiles/{billingProfileId}/billing-explainers/{invoiceNumber}"
            ),
            path_params=[
                param[str]("billingProfileId", billing_profile_id), param[str]("invoiceNumber", invoice_number)
            ],
            headers=[param[str | None]("X-Tenant-Id", x_tenant_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[EntityInvoiceExplainer],
            error_mapper=get_entity_invoice_explainer_error_mapper,
            request_options=request_options,
        )
