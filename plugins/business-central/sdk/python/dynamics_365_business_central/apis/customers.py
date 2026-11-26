from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
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
from ..errors.create_customer_error import CreateCustomerErrorBody, create_customer_error_mapper
from ..errors.delete_customer_error import DeleteCustomerErrorBody, delete_customer_error_mapper
from ..errors.get_customer_error import GetCustomerErrorBody, get_customer_error_mapper
from ..errors.list_customers_error import ListCustomersErrorBody, list_customers_error_mapper
from ..errors.update_customer_error import UpdateCustomerErrorBody, update_customer_error_mapper
from ..models.companies_api_customers_response import CompaniesApiCustomersResponse
from ..models.customer import Customer
from ..models.customer_create import CustomerCreate, CustomerCreateDict
from ..models.customer_update import CustomerUpdate, CustomerUpdateDict
from ..server.server import Server


class Customers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomersWithRawResponse(client, server, auth)

    def create_customer(
        self,
        company_id: UUID,
        body: CustomerCreate | CustomerCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer:
        """Creates a new customer object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_customer(company_id, body, request_options=request_options))

    def delete_customer(
        self, company_id: UUID, customer_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.delete_customer(company_id, customer_id, request_options=request_options))

    def get_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer:
        """Retrieves a specific customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved customer

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_customer(
                company_id, customer_id, select=select, expand=expand, request_options=request_options
            ),
        )

    def list_customers(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiCustomersResponse:
        """Returns a list of customer objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved customers

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_customers(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                expand=expand,
                request_options=request_options,
            ),
        )

    def update_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        if_match: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Customer:
        """Updates an existing customer object.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer(
                company_id, customer_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomersWithRawResponse:
        return self._with_raw_response


class AsyncCustomers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomersWithRawResponse(client, server, auth)

    async def create_customer(
        self,
        company_id: UUID,
        body: CustomerCreate | CustomerCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer:
        """Creates a new customer object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.create_customer(company_id, body, request_options=request_options))

    async def delete_customer(
        self, company_id: UUID, customer_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer(company_id, customer_id, request_options=request_options)
        )

    async def get_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer:
        """Retrieves a specific customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved customer

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer(
                company_id, customer_id, select=select, expand=expand, request_options=request_options
            ),
        )

    async def list_customers(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiCustomersResponse:
        """Returns a list of customer objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved customers

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customers(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def update_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        if_match: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Customer:
        """Updates an existing customer object.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer(
                company_id, customer_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomersWithRawResponse:
        return self._with_raw_response


class CustomersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_customer(
        self,
        company_id: UUID,
        body: CustomerCreate | CustomerCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, CreateCustomerErrorBody]:
        """Creates a new customer object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/customers"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerCreate | CustomerCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Customer],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    def delete_customer(
        self, company_id: UUID, customer_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCustomerErrorBody]:
        """Deletes a customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/customers({customer_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("customer_id", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=delete_customer_error_mapper,
            request_options=request_options,
        )

    def get_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, GetCustomerErrorBody]:
        """Retrieves a specific customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/customers({customer_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("customer_id", customer_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Customer],
            error_mapper=get_customer_error_mapper,
            request_options=request_options,
        )

    def list_customers(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiCustomersResponse, ListCustomersErrorBody]:
        """Returns a list of customer objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/customers"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
                param[str | None]("$expand", expand),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiCustomersResponse],
            error_mapper=list_customers_error_mapper,
            request_options=request_options,
        )

    def update_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        if_match: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, UpdateCustomerErrorBody]:
        """Updates an existing customer object.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/customers({customer_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("customer_id", customer_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Customer],
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )


class AsyncCustomersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_customer(
        self,
        company_id: UUID,
        body: CustomerCreate | CustomerCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, CreateCustomerErrorBody]:
        """Creates a new customer object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/customers"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerCreate | CustomerCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Customer],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    async def delete_customer(
        self, company_id: UUID, customer_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCustomerErrorBody]:
        """Deletes a customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/customers({customer_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("customer_id", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=delete_customer_error_mapper,
            request_options=request_options,
        )

    async def get_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, GetCustomerErrorBody]:
        """Retrieves a specific customer by ID.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/customers({customer_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("customer_id", customer_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Customer],
            error_mapper=get_customer_error_mapper,
            request_options=request_options,
        )

    async def list_customers(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiCustomersResponse, ListCustomersErrorBody]:
        """Returns a list of customer objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/customers"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
                param[str | None]("$expand", expand),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiCustomersResponse],
            error_mapper=list_customers_error_mapper,
            request_options=request_options,
        )

    async def update_customer(
        self,
        company_id: UUID,
        customer_id: UUID,
        if_match: str,
        body: CustomerUpdate | CustomerUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Customer, UpdateCustomerErrorBody]:
        """Updates an existing customer object.

        Args:
            company_id: The unique identifier of the company
            customer_id: The unique identifier of the customer
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/customers({customer_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("customer_id", customer_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomerUpdate | CustomerUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Customer],
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )
