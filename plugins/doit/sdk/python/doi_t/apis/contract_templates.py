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
from ..errors.archive_contract_template_error import (
    ArchiveContractTemplateErrorBody,
    archive_contract_template_error_mapper,
)
from ..errors.assign_contract_template_error import (
    AssignContractTemplateErrorBody,
    assign_contract_template_error_mapper,
)
from ..errors.create_contract_template_error import (
    CreateContractTemplateErrorBody,
    create_contract_template_error_mapper,
)
from ..errors.get_contract_template_error import GetContractTemplateErrorBody, get_contract_template_error_mapper
from ..errors.list_contract_templates_error import ListContractTemplatesErrorBody, list_contract_templates_error_mapper
from ..errors.update_contract_template_error import (
    UpdateContractTemplateErrorBody,
    update_contract_template_error_mapper,
)
from ..models.assign_contract_template_input import AssignContractTemplateInput, AssignContractTemplateInputDict
from ..models.assign_contract_template_response import AssignContractTemplateResponse
from ..models.contract_template_input import ContractTemplateInput, ContractTemplateInputDict
from ..models.contract_template_response import ContractTemplateResponse
from ..server.server import Server


class ContractTemplates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContractTemplatesWithRawResponse(client, server, auth)

    def archive_contract_template(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContractTemplateResponse:
        """Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token).
        Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access
        (``platform:externalApi``), and the ``channelops:contracts:templates`` entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract template archived.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Conflict - The request conflicts with the current
                state of the resource. Internal Server Error - Something went wrong with the DoiT API server. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.archive_contract_template(template_id, request_options=request_options))

    def assign_contract_template(
        self,
        template_id: str,
        body: AssignContractTemplateInput | AssignContractTemplateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AssignContractTemplateResponse:
        """Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers,
        creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The
        template must not be archived, and the current date must fall within its eligibility window. Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Identifier of the contract template to apply.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Draft contracts created for the specified customers.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The request conflicts with the current state
                of the resource. Internal Server Error - Something went wrong with the DoiT API server. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.assign_contract_template(template_id, body, request_options=request_options)
        )

    def create_contract_template(
        self,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContractTemplateResponse:
        """Creates a contract template for the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Contract template created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Conflict - The request conflicts with the current state of the resource. Internal Server Error -
                Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_contract_template(body, request_options=request_options))

    def get_contract_template(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContractTemplateResponse:
        """Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract template returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_contract_template(template_id, request_options=request_options))

    def list_contract_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[ContractTemplateResponse]:
        """Lists contract templates owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract templates returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_contract_templates(request_options=request_options))

    def update_contract_template(
        self,
        template_id: str,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContractTemplateResponse:
        """Updates a contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract template updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The request conflicts with the current state
                of the resource. Internal Server Error - Something went wrong with the DoiT API server. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_contract_template(template_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ContractTemplatesWithRawResponse:
        return self._with_raw_response


class AsyncContractTemplates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContractTemplatesWithRawResponse(client, server, auth)

    async def archive_contract_template(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContractTemplateResponse:
        """Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token).
        Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access
        (``platform:externalApi``), and the ``channelops:contracts:templates`` entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract template archived.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Conflict - The request conflicts with the current
                state of the resource. Internal Server Error - Something went wrong with the DoiT API server. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_contract_template(template_id, request_options=request_options)
        )

    async def assign_contract_template(
        self,
        template_id: str,
        body: AssignContractTemplateInput | AssignContractTemplateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AssignContractTemplateResponse:
        """Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers,
        creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The
        template must not be archived, and the current date must fall within its eligibility window. Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Identifier of the contract template to apply.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Draft contracts created for the specified customers.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The request conflicts with the current state
                of the resource. Internal Server Error - Something went wrong with the DoiT API server. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.assign_contract_template(template_id, body, request_options=request_options)
        )

    async def create_contract_template(
        self,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContractTemplateResponse:
        """Creates a contract template for the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Contract template created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Conflict - The request conflicts with the current state of the resource. Internal Server Error -
                Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_contract_template(body, request_options=request_options))

    async def get_contract_template(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContractTemplateResponse:
        """Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract template returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_contract_template(template_id, request_options=request_options))

    async def list_contract_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[ContractTemplateResponse]:
        """Lists contract templates owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract templates returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_contract_templates(request_options=request_options))

    async def update_contract_template(
        self,
        template_id: str,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContractTemplateResponse:
        """Updates a contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Contract template updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The request conflicts with the current state
                of the resource. Internal Server Error - Something went wrong with the DoiT API server. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_contract_template(template_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncContractTemplatesWithRawResponse:
        return self._with_raw_response


class ContractTemplatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def archive_contract_template(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContractTemplateResponse, ArchiveContractTemplateErrorBody]:
        """Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token).
        Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access
        (``platform:externalApi``), and the ``channelops:contracts:templates`` entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}"),
            path_params=[param[str]("templateID", template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ContractTemplateResponse],
            error_mapper=archive_contract_template_error_mapper,
            request_options=request_options,
        )

    def assign_contract_template(
        self,
        template_id: str,
        body: AssignContractTemplateInput | AssignContractTemplateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AssignContractTemplateResponse, AssignContractTemplateErrorBody]:
        """Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers,
        creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The
        template must not be archived, and the current date must fall within its eligibility window. Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Identifier of the contract template to apply.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}/actions/assign"),
            path_params=[param[str]("templateID", template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AssignContractTemplateInput | AssignContractTemplateInputDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AssignContractTemplateResponse],
            error_mapper=assign_contract_template_error_mapper,
            request_options=request_options,
        )

    def create_contract_template(
        self,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContractTemplateResponse, CreateContractTemplateErrorBody]:
        """Creates a contract template for the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/v1/contract-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContractTemplateInput | ContractTemplateInputDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ContractTemplateResponse],
            error_mapper=create_contract_template_error_mapper,
            request_options=request_options,
        )

    def get_contract_template(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContractTemplateResponse, GetContractTemplateErrorBody]:
        """Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}"),
            path_params=[param[str]("templateID", template_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ContractTemplateResponse],
            error_mapper=get_contract_template_error_mapper,
            request_options=request_options,
        )

    def list_contract_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ContractTemplateResponse], ListContractTemplatesErrorBody]:
        """Lists contract templates owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/contract-templates"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[ContractTemplateResponse]],
            error_mapper=list_contract_templates_error_mapper,
            request_options=request_options,
        )

    def update_contract_template(
        self,
        template_id: str,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContractTemplateResponse, UpdateContractTemplateErrorBody]:
        """Updates a contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}"),
            path_params=[param[str]("templateID", template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContractTemplateInput | ContractTemplateInputDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ContractTemplateResponse],
            error_mapper=update_contract_template_error_mapper,
            request_options=request_options,
        )


class AsyncContractTemplatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def archive_contract_template(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContractTemplateResponse, ArchiveContractTemplateErrorBody]:
        """Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token).
        Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access
        (``platform:externalApi``), and the ``channelops:contracts:templates`` entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}"),
            path_params=[param[str]("templateID", template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ContractTemplateResponse],
            error_mapper=archive_contract_template_error_mapper,
            request_options=request_options,
        )

    async def assign_contract_template(
        self,
        template_id: str,
        body: AssignContractTemplateInput | AssignContractTemplateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AssignContractTemplateResponse, AssignContractTemplateErrorBody]:
        """Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers,
        creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The
        template must not be archived, and the current date must fall within its eligibility window. Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Identifier of the contract template to apply.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}/actions/assign"),
            path_params=[param[str]("templateID", template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AssignContractTemplateInput | AssignContractTemplateInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AssignContractTemplateResponse],
            error_mapper=assign_contract_template_error_mapper,
            request_options=request_options,
        )

    async def create_contract_template(
        self,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContractTemplateResponse, CreateContractTemplateErrorBody]:
        """Creates a contract template for the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/billing/v1/contract-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContractTemplateInput | ContractTemplateInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ContractTemplateResponse],
            error_mapper=create_contract_template_error_mapper,
            request_options=request_options,
        )

    async def get_contract_template(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContractTemplateResponse, GetContractTemplateErrorBody]:
        """Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}"),
            path_params=[param[str]("templateID", template_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ContractTemplateResponse],
            error_mapper=get_contract_template_error_mapper,
            request_options=request_options,
        )

    async def list_contract_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ContractTemplateResponse], ListContractTemplatesErrorBody]:
        """Lists contract templates owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/contract-templates"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[ContractTemplateResponse]],
            error_mapper=list_contract_templates_error_mapper,
            request_options=request_options,
        )

    async def update_contract_template(
        self,
        template_id: str,
        body: ContractTemplateInput | ContractTemplateInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContractTemplateResponse, UpdateContractTemplateErrorBody]:
        """Updates a contract template owned by the authenticated tenant (from the bearer token). Requires
        ContractTemplatesAdmin, DoiT API access (``platform:externalApi``), and the ``channelops:contracts:templates``
        entitlement.

        Args:
            template_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/billing/v1/contract-templates/{templateID}"),
            path_params=[param[str]("templateID", template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContractTemplateInput | ContractTemplateInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ContractTemplateResponse],
            error_mapper=update_contract_template_error_mapper,
            request_options=request_options,
        )
