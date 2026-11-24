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
from ..errors.create_linked_account_error import CreateLinkedAccountErrorBody, create_linked_account_error_mapper
from ..errors.create_stakeholder_error import CreateStakeholderErrorBody, create_stakeholder_error_mapper
from ..errors.fetch_linked_account_error import FetchLinkedAccountErrorBody, fetch_linked_account_error_mapper
from ..errors.fetch_product_config_error import FetchProductConfigErrorBody, fetch_product_config_error_mapper
from ..errors.request_product_config_error import RequestProductConfigErrorBody, request_product_config_error_mapper
from ..errors.update_linked_account_error import UpdateLinkedAccountErrorBody, update_linked_account_error_mapper
from ..errors.update_product_config_error import UpdateProductConfigErrorBody, update_product_config_error_mapper
from ..errors.update_stakeholder_error import UpdateStakeholderErrorBody, update_stakeholder_error_mapper
from ..models.linked_account import LinkedAccount
from ..models.product_configuration import ProductConfiguration
from ..models.stakeholder import Stakeholder
from ..models.v2_accounts_products_request import V2AccountsProductsRequest, V2AccountsProductsRequestDict
from ..models.v2_accounts_products_request1 import V2AccountsProductsRequest1, V2AccountsProductsRequest1Dict
from ..models.v2_accounts_request import V2AccountsRequest, V2AccountsRequestDict
from ..models.v2_accounts_request1 import V2AccountsRequest1, V2AccountsRequest1Dict
from ..models.v2_accounts_stakeholders_request import V2AccountsStakeholdersRequest, V2AccountsStakeholdersRequestDict
from ..models.v2_accounts_stakeholders_request1 import (
    V2AccountsStakeholdersRequest1,
    V2AccountsStakeholdersRequest1Dict,
)
from ..server.server import Server


class LinkedAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LinkedAccountsWithRawResponse(client, server, auth)

    def create_linked_account(
        self, body: V2AccountsRequest | V2AccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> LinkedAccount:
        """Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and
        business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_linked_account(body, request_options=request_options))

    def create_stakeholder(
        self,
        account_id: str,
        body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stakeholder:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_stakeholder(account_id, body, request_options=request_options))

    def fetch_linked_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LinkedAccount:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_linked_account(account_id, request_options=request_options))

    def fetch_product_config(
        self, account_id: str, product_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProductConfiguration:
        """Retrieve the current product configuration and activation status for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Product configuration details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.fetch_product_config(account_id, product_id, request_options=request_options)
        )

    def request_product_config(
        self,
        account_id: str,
        body: V2AccountsProductsRequest | V2AccountsProductsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProductConfiguration:
        """Request activation of the Route product for a Linked Account. Submits the account for review and KYC.
        Activation progresses: requested → under_review → activated.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Product configuration created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.request_product_config(account_id, body, request_options=request_options))

    def update_linked_account(
        self,
        account_id: str,
        body: V2AccountsRequest1 | V2AccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LinkedAccount:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_linked_account(account_id, body, request_options=request_options))

    def update_product_config(
        self,
        account_id: str,
        product_id: str,
        body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProductConfiguration:
        """Update settlement details or other configuration for a Route product on a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Product configuration updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_product_config(account_id, product_id, body, request_options=request_options)
        )

    def update_stakeholder(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stakeholder:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_stakeholder(
                account_id, stakeholder_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> LinkedAccountsWithRawResponse:
        return self._with_raw_response


class AsyncLinkedAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLinkedAccountsWithRawResponse(client, server, auth)

    async def create_linked_account(
        self,
        body: V2AccountsRequest | V2AccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkedAccount:
        """Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and
        business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_linked_account(body, request_options=request_options))

    async def create_stakeholder(
        self,
        account_id: str,
        body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Stakeholder:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_stakeholder(account_id, body, request_options=request_options)
        )

    async def fetch_linked_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinkedAccount:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_linked_account(account_id, request_options=request_options))

    async def fetch_product_config(
        self, account_id: str, product_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProductConfiguration:
        """Retrieve the current product configuration and activation status for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Product configuration details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_product_config(account_id, product_id, request_options=request_options)
        )

    async def request_product_config(
        self,
        account_id: str,
        body: V2AccountsProductsRequest | V2AccountsProductsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProductConfiguration:
        """Request activation of the Route product for a Linked Account. Submits the account for review and KYC.
        Activation progresses: requested → under_review → activated.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Product configuration created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.request_product_config(account_id, body, request_options=request_options)
        )

    async def update_linked_account(
        self,
        account_id: str,
        body: V2AccountsRequest1 | V2AccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkedAccount:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_linked_account(account_id, body, request_options=request_options)
        )

    async def update_product_config(
        self,
        account_id: str,
        product_id: str,
        body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProductConfiguration:
        """Update settlement details or other configuration for a Route product on a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Product configuration updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_product_config(
                account_id, product_id, body, request_options=request_options
            ),
        )

    async def update_stakeholder(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Stakeholder:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_stakeholder(
                account_id, stakeholder_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLinkedAccountsWithRawResponse:
        return self._with_raw_response


class LinkedAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_linked_account(
        self, body: V2AccountsRequest | V2AccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedAccount, CreateLinkedAccountErrorBody]:
        """Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and
        business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsRequest | V2AccountsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[LinkedAccount],
            error_mapper=create_linked_account_error_mapper,
            request_options=request_options,
        )

    def create_stakeholder(
        self,
        account_id: str,
        body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stakeholder, CreateStakeholderErrorBody]:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Stakeholder],
            error_mapper=create_stakeholder_error_mapper,
            request_options=request_options,
        )

    def fetch_linked_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedAccount, FetchLinkedAccountErrorBody]:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[LinkedAccount],
            error_mapper=fetch_linked_account_error_mapper,
            request_options=request_options,
        )

    def fetch_product_config(
        self, account_id: str, product_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProductConfiguration, FetchProductConfigErrorBody]:
        """Retrieve the current product configuration and activation status for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/products/{product_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("product_id", product_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[ProductConfiguration],
            error_mapper=fetch_product_config_error_mapper,
            request_options=request_options,
        )

    def request_product_config(
        self,
        account_id: str,
        body: V2AccountsProductsRequest | V2AccountsProductsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductConfiguration, RequestProductConfigErrorBody]:
        """Request activation of the Route product for a Linked Account. Submits the account for review and KYC.
        Activation progresses: requested → under_review → activated.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/products"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsProductsRequest | V2AccountsProductsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[ProductConfiguration],
            error_mapper=request_product_config_error_mapper,
            request_options=request_options,
        )

    def update_linked_account(
        self,
        account_id: str,
        body: V2AccountsRequest1 | V2AccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedAccount, UpdateLinkedAccountErrorBody]:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsRequest1 | V2AccountsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[LinkedAccount],
            error_mapper=update_linked_account_error_mapper,
            request_options=request_options,
        )

    def update_product_config(
        self,
        account_id: str,
        product_id: str,
        body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductConfiguration, UpdateProductConfigErrorBody]:
        """Update settlement details or other configuration for a Route product on a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/products/{product_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("product_id", product_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[ProductConfiguration],
            error_mapper=update_product_config_error_mapper,
            request_options=request_options,
        )

    def update_stakeholder(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stakeholder, UpdateStakeholderErrorBody]:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Stakeholder],
            error_mapper=update_stakeholder_error_mapper,
            request_options=request_options,
        )


class AsyncLinkedAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_linked_account(
        self,
        body: V2AccountsRequest | V2AccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedAccount, CreateLinkedAccountErrorBody]:
        """Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and
        business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsRequest | V2AccountsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[LinkedAccount],
            error_mapper=create_linked_account_error_mapper,
            request_options=request_options,
        )

    async def create_stakeholder(
        self,
        account_id: str,
        body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Stakeholder, CreateStakeholderErrorBody]:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Stakeholder],
            error_mapper=create_stakeholder_error_mapper,
            request_options=request_options,
        )

    async def fetch_linked_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedAccount, FetchLinkedAccountErrorBody]:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[LinkedAccount],
            error_mapper=fetch_linked_account_error_mapper,
            request_options=request_options,
        )

    async def fetch_product_config(
        self, account_id: str, product_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProductConfiguration, FetchProductConfigErrorBody]:
        """Retrieve the current product configuration and activation status for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/products/{product_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("product_id", product_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[ProductConfiguration],
            error_mapper=fetch_product_config_error_mapper,
            request_options=request_options,
        )

    async def request_product_config(
        self,
        account_id: str,
        body: V2AccountsProductsRequest | V2AccountsProductsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductConfiguration, RequestProductConfigErrorBody]:
        """Request activation of the Route product for a Linked Account. Submits the account for review and KYC.
        Activation progresses: requested → under_review → activated.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/products"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsProductsRequest | V2AccountsProductsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[ProductConfiguration],
            error_mapper=request_product_config_error_mapper,
            request_options=request_options,
        )

    async def update_linked_account(
        self,
        account_id: str,
        body: V2AccountsRequest1 | V2AccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedAccount, UpdateLinkedAccountErrorBody]:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsRequest1 | V2AccountsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[LinkedAccount],
            error_mapper=update_linked_account_error_mapper,
            request_options=request_options,
        )

    async def update_product_config(
        self,
        account_id: str,
        product_id: str,
        body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductConfiguration, UpdateProductConfigErrorBody]:
        """Update settlement details or other configuration for a Route product on a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            product_id: Product configuration ID (acc_prd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/products/{product_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("product_id", product_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[ProductConfiguration],
            error_mapper=update_product_config_error_mapper,
            request_options=request_options,
        )

    async def update_stakeholder(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Stakeholder, UpdateStakeholderErrorBody]:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Stakeholder],
            error_mapper=update_stakeholder_error_mapper,
            request_options=request_options,
        )
