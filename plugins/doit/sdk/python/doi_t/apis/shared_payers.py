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
from ..errors.list_shared_payer_account_mappings_error import (
    ListSharedPayerAccountMappingsErrorBody,
    list_shared_payer_account_mappings_error_mapper,
)
from ..errors.list_shared_payer_management_accounts_error import (
    ListSharedPayerManagementAccountsErrorBody,
    list_shared_payer_management_accounts_error_mapper,
)
from ..errors.list_shared_payers_error import ListSharedPayersErrorBody, list_shared_payers_error_mapper
from ..errors.reassign_shared_payer_account_error import (
    ReassignSharedPayerAccountErrorBody,
    reassign_shared_payer_account_error_mapper,
)
from ..models.shared_payer_account_mapping_list import SharedPayerAccountMappingList
from ..models.shared_payer_account_reassign_request import (
    SharedPayerAccountReassignRequest,
    SharedPayerAccountReassignRequestDict,
)
from ..models.shared_payer_account_reassign_result import SharedPayerAccountReassignResult
from ..models.shared_payer_list import SharedPayerList
from ..models.shared_payer_management_account_list import SharedPayerManagementAccountList
from ..server.server import Server


class SharedPayers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SharedPayersWithRawResponse(client, server, auth)

    def list_shared_payer_account_mappings(
        self,
        customer_id: str,
        *,
        management_account: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SharedPayerAccountMappingList:
        """Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is
        currently mapped to. ``{customerId}`` (the reseller itself) means the account has not yet been reassigned to an
        end customer. Each payer's own management account is included alongside its member accounts. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            management_account: Restricts the results to accounts under this AWS management (payer) account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Shared-payer account mappings returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_shared_payer_account_mappings(
                customer_id, management_account=management_account, request_options=request_options
            ),
        )

    def list_shared_payer_management_accounts(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SharedPayerManagementAccountList:
        """Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use
        in an account picker. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Shared-payer management accounts returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_shared_payer_management_accounts(customer_id, request_options=request_options)
        )

    def list_shared_payers(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SharedPayerList:
        """Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts
        of linked and mapped accounts. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Shared payers returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_shared_payers(customer_id, request_options=request_options))

    def reassign_shared_payer_account(
        self,
        customer_id: str,
        asset_id: str,
        body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SharedPayerAccountReassignResult:
        """Reassigns one AWS account under a linked shared payer - a member account or the payer's own management
        account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            asset_id: Asset ID of the AWS account to reassign, as returned by ``listSharedPayerAccountMappings``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Account reassigned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.reassign_shared_payer_account(
                customer_id, asset_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SharedPayersWithRawResponse:
        return self._with_raw_response


class AsyncSharedPayers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSharedPayersWithRawResponse(client, server, auth)

    async def list_shared_payer_account_mappings(
        self,
        customer_id: str,
        *,
        management_account: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SharedPayerAccountMappingList:
        """Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is
        currently mapped to. ``{customerId}`` (the reseller itself) means the account has not yet been reassigned to an
        end customer. Each payer's own management account is included alongside its member accounts. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            management_account: Restricts the results to accounts under this AWS management (payer) account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Shared-payer account mappings returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_shared_payer_account_mappings(
                customer_id, management_account=management_account, request_options=request_options
            ),
        )

    async def list_shared_payer_management_accounts(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SharedPayerManagementAccountList:
        """Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use
        in an account picker. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Shared-payer management accounts returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_shared_payer_management_accounts(
                customer_id, request_options=request_options
            ),
        )

    async def list_shared_payers(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SharedPayerList:
        """Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts
        of linked and mapped accounts. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Shared payers returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_shared_payers(customer_id, request_options=request_options))

    async def reassign_shared_payer_account(
        self,
        customer_id: str,
        asset_id: str,
        body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SharedPayerAccountReassignResult:
        """Reassigns one AWS account under a linked shared payer - a member account or the payer's own management
        account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            asset_id: Asset ID of the AWS account to reassign, as returned by ``listSharedPayerAccountMappings``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Account reassigned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.reassign_shared_payer_account(
                customer_id, asset_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSharedPayersWithRawResponse:
        return self._with_raw_response


class SharedPayersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_shared_payer_account_mappings(
        self,
        customer_id: str,
        *,
        management_account: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SharedPayerAccountMappingList, ListSharedPayerAccountMappingsErrorBody]:
        """Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is
        currently mapped to. ``{customerId}`` (the reseller itself) means the account has not yet been reassigned to an
        end customer. Each payer's own management account is included alongside its member accounts. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            management_account: Restricts the results to accounts under this AWS management (payer) account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/customers/{customerId}/shared-payer-accounts"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[param[str | None]("managementAccount", management_account)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SharedPayerAccountMappingList],
            error_mapper=list_shared_payer_account_mappings_error_mapper,
            request_options=request_options,
        )

    def list_shared_payer_management_accounts(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SharedPayerManagementAccountList, ListSharedPayerManagementAccountsErrorBody]:
        """Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use
        in an account picker. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/customers/v1/customers/{customerId}/shared-payer-accounts/management-accounts"
            ),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SharedPayerManagementAccountList],
            error_mapper=list_shared_payer_management_accounts_error_mapper,
            request_options=request_options,
        )

    def list_shared_payers(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SharedPayerList, ListSharedPayersErrorBody]:
        """Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts
        of linked and mapped accounts. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/customers/{customerId}/shared-payer-accounts/payers"),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SharedPayerList],
            error_mapper=list_shared_payers_error_mapper,
            request_options=request_options,
        )

    def reassign_shared_payer_account(
        self,
        customer_id: str,
        asset_id: str,
        body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SharedPayerAccountReassignResult, ReassignSharedPayerAccountErrorBody]:
        """Reassigns one AWS account under a linked shared payer - a member account or the payer's own management
        account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            asset_id: Asset ID of the AWS account to reassign, as returned by ``listSharedPayerAccountMappings``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/customers/v1/customers/{customerId}/shared-payer-accounts/{assetId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("assetId", asset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SharedPayerAccountReassignResult],
            error_mapper=reassign_shared_payer_account_error_mapper,
            request_options=request_options,
        )


class AsyncSharedPayersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_shared_payer_account_mappings(
        self,
        customer_id: str,
        *,
        management_account: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SharedPayerAccountMappingList, ListSharedPayerAccountMappingsErrorBody]:
        """Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is
        currently mapped to. ``{customerId}`` (the reseller itself) means the account has not yet been reassigned to an
        end customer. Each payer's own management account is included alongside its member accounts. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            management_account: Restricts the results to accounts under this AWS management (payer) account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/customers/{customerId}/shared-payer-accounts"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[param[str | None]("managementAccount", management_account)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SharedPayerAccountMappingList],
            error_mapper=list_shared_payer_account_mappings_error_mapper,
            request_options=request_options,
        )

    async def list_shared_payer_management_accounts(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SharedPayerManagementAccountList, ListSharedPayerManagementAccountsErrorBody]:
        """Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use
        in an account picker. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/customers/v1/customers/{customerId}/shared-payer-accounts/management-accounts"
            ),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SharedPayerManagementAccountList],
            error_mapper=list_shared_payer_management_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_shared_payers(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SharedPayerList, ListSharedPayersErrorBody]:
        """Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts
        of linked and mapped accounts. Requires the ``SharedPayersAdmin`` permission and DoiT API access
        (``platform:externalApi``). User API tokens must include the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/customers/{customerId}/shared-payer-accounts/payers"),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SharedPayerList],
            error_mapper=list_shared_payers_error_mapper,
            request_options=request_options,
        )

    async def reassign_shared_payer_account(
        self,
        customer_id: str,
        asset_id: str,
        body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SharedPayerAccountReassignResult, ReassignSharedPayerAccountErrorBody]:
        """Reassigns one AWS account under a linked shared payer - a member account or the payer's own management
        account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the
        ``SharedPayersAdmin`` permission and DoiT API access (``platform:externalApi``). User API tokens must include
        the permission in their scope.

        Args:
            customer_id: Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
                different customer gets ``403``.
            asset_id: Asset ID of the AWS account to reassign, as returned by ``listSharedPayerAccountMappings``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/customers/v1/customers/{customerId}/shared-payer-accounts/{assetId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("assetId", asset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SharedPayerAccountReassignResult],
            error_mapper=reassign_shared_payer_account_error_mapper,
            request_options=request_options,
        )
