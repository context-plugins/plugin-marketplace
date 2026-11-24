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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_customer_error import CreateCustomerErrorBody, create_customer_error_mapper
from ..errors.fetch_all_customers_error import FetchAllCustomersErrorBody, fetch_all_customers_error_mapper
from ..errors.fetch_customer_error import FetchCustomerErrorBody, fetch_customer_error_mapper
from ..errors.update_customer_error import UpdateCustomerErrorBody, update_customer_error_mapper
from ..models.customer_razorpay_customers_api import CustomerRazorpayCustomersApi
from ..models.customers_request import CustomersRequest, CustomersRequestDict
from ..models.customers_request1 import CustomersRequest1, CustomersRequest1Dict
from ..models.customers_response import CustomersResponse
from ..server.server import Server


class Customers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomersWithRawResponse(client, server, auth)

    def create_customer(
        self, body: CustomersRequest | CustomersRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomerRazorpayCustomersApi:
        """Create a customer profile. The combination of email and contact must be unique per customer. Customer
        profiles enable saved card tokens, faster checkout, and customer-scoped data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_customer(body, request_options=request_options))

    def fetch_all_customers(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> CustomersResponse:
        """Retrieve a paginated list of all customers. Maximum 100 per call.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of customers.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_customers(count=count, skip=skip, request_options=request_options)
        )

    def fetch_customer(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomerRazorpayCustomersApi:
        """Retrieve full details of a specific customer.

        Args:
            id_: Customer ID (cust_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer details.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_customer(id_, request_options=request_options))

    def update_customer(
        self,
        id_: str,
        body: CustomersRequest1 | CustomersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerRazorpayCustomersApi:
        """Update a customer's name, email, or contact. The combination of email and contact must remain unique. Contact
        number must contain at least 8 digits.

        Args:
            id_: Customer ID (cust_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated customer.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_customer(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CustomersWithRawResponse:
        return self._with_raw_response


class AsyncCustomers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomersWithRawResponse(client, server, auth)

    async def create_customer(
        self, body: CustomersRequest | CustomersRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomerRazorpayCustomersApi:
        """Create a customer profile. The combination of email and contact must be unique per customer. Customer
        profiles enable saved card tokens, faster checkout, and customer-scoped data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_customer(body, request_options=request_options))

    async def fetch_all_customers(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomersResponse:
        """Retrieve a paginated list of all customers. Maximum 100 per call.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of customers.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_customers(count=count, skip=skip, request_options=request_options)
        )

    async def fetch_customer(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomerRazorpayCustomersApi:
        """Retrieve full details of a specific customer.

        Args:
            id_: Customer ID (cust_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Customer details.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_customer(id_, request_options=request_options))

    async def update_customer(
        self,
        id_: str,
        body: CustomersRequest1 | CustomersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerRazorpayCustomersApi:
        """Update a customer's name, email, or contact. The combination of email and contact must remain unique. Contact
        number must contain at least 8 digits.

        Args:
            id_: Customer ID (cust_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated customer.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_customer(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCustomersWithRawResponse:
        return self._with_raw_response


class CustomersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_customer(
        self, body: CustomersRequest | CustomersRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerRazorpayCustomersApi, CreateCustomerErrorBody]:
        """Create a customer profile. The combination of email and contact must be unique per customer. Customer
        profiles enable saved card tokens, faster checkout, and customer-scoped data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersRequest | CustomersRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[CustomerRazorpayCustomersApi],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    def fetch_all_customers(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomersResponse, FetchAllCustomersErrorBody]:
        """Retrieve a paginated list of all customers. Maximum 100 per call.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers"),
            query_params=[param[int | None]("count", count), param[int | None]("skip", skip)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[CustomersResponse],
            error_mapper=fetch_all_customers_error_mapper,
            request_options=request_options,
        )

    def fetch_customer(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerRazorpayCustomersApi, FetchCustomerErrorBody]:
        """Retrieve full details of a specific customer.

        Args:
            id_: Customer ID (cust_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[CustomerRazorpayCustomersApi],
            error_mapper=fetch_customer_error_mapper,
            request_options=request_options,
        )

    def update_customer(
        self,
        id_: str,
        body: CustomersRequest1 | CustomersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerRazorpayCustomersApi, UpdateCustomerErrorBody]:
        """Update a customer's name, email, or contact. The combination of email and contact must remain unique. Contact
        number must contain at least 8 digits.

        Args:
            id_: Customer ID (cust_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersRequest1 | CustomersRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[CustomerRazorpayCustomersApi],
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )


class AsyncCustomersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_customer(
        self, body: CustomersRequest | CustomersRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerRazorpayCustomersApi, CreateCustomerErrorBody]:
        """Create a customer profile. The combination of email and contact must be unique per customer. Customer
        profiles enable saved card tokens, faster checkout, and customer-scoped data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersRequest | CustomersRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[CustomerRazorpayCustomersApi],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_customers(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomersResponse, FetchAllCustomersErrorBody]:
        """Retrieve a paginated list of all customers. Maximum 100 per call.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers"),
            query_params=[param[int | None]("count", count), param[int | None]("skip", skip)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[CustomersResponse],
            error_mapper=fetch_all_customers_error_mapper,
            request_options=request_options,
        )

    async def fetch_customer(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerRazorpayCustomersApi, FetchCustomerErrorBody]:
        """Retrieve full details of a specific customer.

        Args:
            id_: Customer ID (cust_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[CustomerRazorpayCustomersApi],
            error_mapper=fetch_customer_error_mapper,
            request_options=request_options,
        )

    async def update_customer(
        self,
        id_: str,
        body: CustomersRequest1 | CustomersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerRazorpayCustomersApi, UpdateCustomerErrorBody]:
        """Update a customer's name, email, or contact. The combination of email and contact must remain unique. Contact
        number must contain at least 8 digits.

        Args:
            id_: Customer ID (cust_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/customers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersRequest1 | CustomersRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[CustomerRazorpayCustomersApi],
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )
