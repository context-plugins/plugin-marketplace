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
from ..errors.activate_contract_error import ActivateContractErrorBody, activate_contract_error_mapper
from ..errors.cancel_contract_error import CancelContractErrorBody, cancel_contract_error_mapper
from ..errors.create_contract_error import CreateContractErrorBody, create_contract_error_mapper
from ..errors.get_contract_error import GetContractErrorBody, get_contract_error_mapper
from ..errors.list_contracts_error import ListContractsErrorBody, list_contracts_error_mapper
from ..errors.update_contract_error import UpdateContractErrorBody, update_contract_error_mapper
from ..models.contract_lifecycle_response import ContractLifecycleResponse
from ..models.create_contract_response import CreateContractResponse
from ..models.customers_contracts_cancel_request import (
    CustomersContractsCancelRequest,
    CustomersContractsCancelRequestDict,
)
from ..models.mts_contract_create_input import MtsContractCreateInput, MtsContractCreateInputDict
from ..models.mts_contract_detail_response import MtsContractDetailResponse
from ..models.mts_contract_input import MtsContractInput, MtsContractInputDict
from ..models.mts_contract_response import MtsContractResponse
from ..server.server import Server


class Contracts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContractsWithRawResponse(client, server, auth)

    def activate_contract(
        self, customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContractLifecycleResponse:
        """Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same
        system state as activating via the Console.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract activated or scheduled.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - An active contract of the same type already
                exists for this tier. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.activate_contract(customer_id, contract_id, request_options=request_options)
        )

    def cancel_contract(
        self,
        customer_id: str,
        contract_id: str,
        *,
        body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContractLifecycleResponse:
        """Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract cancelled.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_contract(
                customer_id, contract_id, body=body, request_options=request_options
            ),
        )

    def create_contract(
        self,
        customer_id: str,
        body: MtsContractCreateInput | MtsContractCreateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateContractResponse:
        """Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a
        T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API
        tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) the contract is created for.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The contract draft was created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_contract(customer_id, body, request_options=request_options))

    def get_contract(
        self, customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MtsContractDetailResponse:
        """Returns the specified contract.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_contract(customer_id, contract_id, request_options=request_options))

    def list_contracts(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[MtsContractResponse]:
        """Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own
        tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable
        role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) whose contracts are requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_contracts(customer_id, request_options=request_options))

    def update_contract(
        self,
        customer_id: str,
        contract_id: str,
        body: MtsContractInput | MtsContractInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateContractResponse:
        """Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - New contract version created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_contract(customer_id, contract_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ContractsWithRawResponse:
        return self._with_raw_response


class AsyncContracts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContractsWithRawResponse(client, server, auth)

    async def activate_contract(
        self, customer_id: str, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContractLifecycleResponse:
        """Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same
        system state as activating via the Console.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract activated or scheduled.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - An active contract of the same type already
                exists for this tier. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.activate_contract(customer_id, contract_id, request_options=request_options)
        )

    async def cancel_contract(
        self,
        customer_id: str,
        contract_id: str,
        *,
        body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContractLifecycleResponse:
        """Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract cancelled.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_contract(
                customer_id, contract_id, body=body, request_options=request_options
            ),
        )

    async def create_contract(
        self,
        customer_id: str,
        body: MtsContractCreateInput | MtsContractCreateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateContractResponse:
        """Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a
        T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API
        tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) the contract is created for.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The contract draft was created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_contract(customer_id, body, request_options=request_options))

    async def get_contract(
        self, customer_id: str, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MtsContractDetailResponse:
        """Returns the specified contract.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_contract(customer_id, contract_id, request_options=request_options)
        )

    async def list_contracts(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[MtsContractResponse]:
        """Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own
        tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable
        role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) whose contracts are requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_contracts(customer_id, request_options=request_options))

    async def update_contract(
        self,
        customer_id: str,
        contract_id: str,
        body: MtsContractInput | MtsContractInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateContractResponse:
        """Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - New contract version created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_contract(
                customer_id, contract_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncContractsWithRawResponse:
        return self._with_raw_response


class ContractsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_contract(
        self, customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContractLifecycleResponse, ActivateContractErrorBody]:
        """Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same
        system state as activating via the Console.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}/activate"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ContractLifecycleResponse],
            error_mapper=activate_contract_error_mapper,
            request_options=request_options,
        )

    def cancel_contract(
        self,
        customer_id: str,
        contract_id: str,
        *,
        body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContractLifecycleResponse, CancelContractErrorBody]:
        """Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}/cancel"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ContractLifecycleResponse],
            error_mapper=cancel_contract_error_mapper,
            request_options=request_options,
        )

    def create_contract(
        self,
        customer_id: str,
        body: MtsContractCreateInput | MtsContractCreateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateContractResponse, CreateContractErrorBody]:
        """Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a
        T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API
        tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) the contract is created for.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts"),
            path_params=[param[str]("customerID", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MtsContractCreateInput | MtsContractCreateInputDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CreateContractResponse],
            error_mapper=create_contract_error_mapper,
            request_options=request_options,
        )

    def get_contract(
        self, customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MtsContractDetailResponse, GetContractErrorBody]:
        """Returns the specified contract.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[MtsContractDetailResponse],
            error_mapper=get_contract_error_mapper,
            request_options=request_options,
        )

    def list_contracts(
        self, customer_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[MtsContractResponse], ListContractsErrorBody]:
        """Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own
        tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable
        role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) whose contracts are requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerID}/contracts"),
            path_params=[param[str]("customerID", customer_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[MtsContractResponse]],
            error_mapper=list_contracts_error_mapper,
            request_options=request_options,
        )

    def update_contract(
        self,
        customer_id: str,
        contract_id: str,
        body: MtsContractInput | MtsContractInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateContractResponse, UpdateContractErrorBody]:
        """Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MtsContractInput | MtsContractInputDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CreateContractResponse],
            error_mapper=update_contract_error_mapper,
            request_options=request_options,
        )


class AsyncContractsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_contract(
        self, customer_id: str, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContractLifecycleResponse, ActivateContractErrorBody]:
        """Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same
        system state as activating via the Console.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}/activate"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ContractLifecycleResponse],
            error_mapper=activate_contract_error_mapper,
            request_options=request_options,
        )

    async def cancel_contract(
        self,
        customer_id: str,
        contract_id: str,
        *,
        body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContractLifecycleResponse, CancelContractErrorBody]:
        """Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}/cancel"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ContractLifecycleResponse],
            error_mapper=cancel_contract_error_mapper,
            request_options=request_options,
        )

    async def create_contract(
        self,
        customer_id: str,
        body: MtsContractCreateInput | MtsContractCreateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateContractResponse, CreateContractErrorBody]:
        """Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a
        T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API
        tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) the contract is created for.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts"),
            path_params=[param[str]("customerID", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MtsContractCreateInput | MtsContractCreateInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CreateContractResponse],
            error_mapper=create_contract_error_mapper,
            request_options=request_options,
        )

    async def get_contract(
        self, customer_id: str, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MtsContractDetailResponse, GetContractErrorBody]:
        """Returns the specified contract.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[MtsContractDetailResponse],
            error_mapper=get_contract_error_mapper,
            request_options=request_options,
        )

    async def list_contracts(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[MtsContractResponse], ListContractsErrorBody]:
        """Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own
        tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable
        role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

        Args:
            customer_id: The customer (tenant) whose contracts are requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/{customerID}/contracts"),
            path_params=[param[str]("customerID", customer_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[MtsContractResponse]],
            error_mapper=list_contracts_error_mapper,
            request_options=request_options,
        )

    async def update_contract(
        self,
        customer_id: str,
        contract_id: str,
        body: MtsContractInput | MtsContractInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateContractResponse, UpdateContractErrorBody]:
        """Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

        Args:
            customer_id: Value sent with the request.
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/customers/{customerID}/contracts/{contractID}"),
            path_params=[param[str]("customerID", customer_id), param[str]("contractID", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MtsContractInput | MtsContractInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CreateContractResponse],
            error_mapper=update_contract_error_mapper,
            request_options=request_options,
        )
