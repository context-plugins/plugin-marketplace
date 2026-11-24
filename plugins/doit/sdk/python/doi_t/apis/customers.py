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
from ..errors.get_customer_error import GetCustomerErrorBody, get_customer_error_mapper
from ..errors.update_customer_error import UpdateCustomerErrorBody, update_customer_error_mapper
from ..models.customer import Customer
from ..models.customer_update import CustomerUpdate, CustomerUpdateDict
from ..server.server import Server


class Customers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomersWithRawResponse(client, server, auth)

    def get_customer(self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Customer:
        """Returns the customer, including its general settings and contact info, scoped to ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``).

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Customer returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_customer(customer_id, request_options=request_options))

    def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Partially updates the general settings and contact info of the customer identified by ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``); updating ``allowedInviteDomains``
        additionally requires the ``UsersManager`` permission.

        The request body must use ``application/merge-patch+json`` (RFC 7396): an omitted field leaves the current value
        unchanged, and an explicit ``null`` also leaves it unchanged, except for ``urlSlug``, where an explicit empty
        string removes the customer's active URL slug rather than leaving it unchanged.

        Fields are nested exactly as ``getCustomer`` returns them - ``currency`` and ``allowedInviteDomains`` under
        ``settings``, ``emails`` under ``contact`` - so every value is read and written at the same path.
        ``settings.currency`` accepts only the codes listed in the schema and cannot be cleared;
        ``allowedInviteDomains`` and ``contact.emails`` are cleared with an empty array.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Customer updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The requested ``urlSlug`` is already assigned
                to another customer, or conflicts with an existing customer ID. Unsupported Media Type - The request
                ``Content-Type`` must be ``application/merge-patch+json``. Unprocessable Entity - The customer has
                reached the limit of 5 previously-used URL slugs. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_customer(customer_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CustomersWithRawResponse:
        return self._with_raw_response


class AsyncCustomers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomersWithRawResponse(client, server, auth)

    async def get_customer(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Customer:
        """Returns the customer, including its general settings and contact info, scoped to ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``).

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Customer returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_customer(customer_id, request_options=request_options))

    async def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Partially updates the general settings and contact info of the customer identified by ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``); updating ``allowedInviteDomains``
        additionally requires the ``UsersManager`` permission.

        The request body must use ``application/merge-patch+json`` (RFC 7396): an omitted field leaves the current value
        unchanged, and an explicit ``null`` also leaves it unchanged, except for ``urlSlug``, where an explicit empty
        string removes the customer's active URL slug rather than leaving it unchanged.

        Fields are nested exactly as ``getCustomer`` returns them - ``currency`` and ``allowedInviteDomains`` under
        ``settings``, ``emails`` under ``contact`` - so every value is read and written at the same path.
        ``settings.currency`` accepts only the codes listed in the schema and cannot be cleared;
        ``allowedInviteDomains`` and ``contact.emails`` are cleared with an empty array.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Customer updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The requested ``urlSlug`` is already assigned
                to another customer, or conflicts with an existing customer ID. Unsupported Media Type - The request
                ``Content-Type`` must be ``application/merge-patch+json``. Unprocessable Entity - The customer has
                reached the limit of 5 previously-used URL slugs. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_customer(customer_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCustomersWithRawResponse:
        return self._with_raw_response


class CustomersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_customer(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Customer, GetCustomerErrorBody]:
        """Returns the customer, including its general settings and contact info, scoped to ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``).

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Customer],
            error_mapper=get_customer_error_mapper,
            request_options=request_options,
        )

    def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateCustomerErrorBody]:
        """Partially updates the general settings and contact info of the customer identified by ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``); updating ``allowedInviteDomains``
        additionally requires the ``UsersManager`` permission.

        The request body must use ``application/merge-patch+json`` (RFC 7396): an omitted field leaves the current value
        unchanged, and an explicit ``null`` also leaves it unchanged, except for ``urlSlug``, where an explicit empty
        string removes the customer's active URL slug rather than leaving it unchanged.

        Fields are nested exactly as ``getCustomer`` returns them - ``currency`` and ``allowedInviteDomains`` under
        ``settings``, ``emails`` under ``contact`` - so every value is read and written at the same path.
        ``settings.currency`` accepts only the codes listed in the schema and cannot be cleared;
        ``allowedInviteDomains`` and ``contact.emails`` are cleared with an empty array.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/customers/v1/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )


class AsyncCustomersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_customer(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Customer, GetCustomerErrorBody]:
        """Returns the customer, including its general settings and contact info, scoped to ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``).

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Customer],
            error_mapper=get_customer_error_mapper,
            request_options=request_options,
        )

    async def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateCustomerErrorBody]:
        """Partially updates the general settings and contact info of the customer identified by ``{customerId}``.
        ``{customerId}`` must match the customer resolved from the bearer token; a token scoped to a different customer
        gets ``403``, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires
        the ``Settings`` permission and DoiT API access (``platform:externalApi``); updating ``allowedInviteDomains``
        additionally requires the ``UsersManager`` permission.

        The request body must use ``application/merge-patch+json`` (RFC 7396): an omitted field leaves the current value
        unchanged, and an explicit ``null`` also leaves it unchanged, except for ``urlSlug``, where an explicit empty
        string removes the customer's active URL slug rather than leaving it unchanged.

        Fields are nested exactly as ``getCustomer`` returns them - ``currency`` and ``allowedInviteDomains`` under
        ``settings``, ``emails`` under ``contact`` - so every value is read and written at the same path.
        ``settings.currency`` accepts only the codes listed in the schema and cannot be cleared;
        ``allowedInviteDomains`` and ``contact.emails`` are cleared with an empty array.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/customers/v1/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )
