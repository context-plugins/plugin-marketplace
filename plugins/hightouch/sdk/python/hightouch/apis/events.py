from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.create_contract_error import CreateContractErrorBody, create_contract_error_mapper
from ..errors.create_domain_error import CreateDomainErrorBody, create_domain_error_mapper
from ..errors.get_contract_error import GetContractErrorBody, get_contract_error_mapper
from ..errors.get_domain_error import GetDomainErrorBody, get_domain_error_mapper
from ..errors.list_contracts_error import ListContractsErrorBody, list_contracts_error_mapper
from ..errors.list_domains_error import ListDomainsErrorBody, list_domains_error_mapper
from ..errors.update_contract_error import UpdateContractErrorBody, update_contract_error_mapper
from ..errors.update_domain_error import UpdateDomainErrorBody, update_domain_error_mapper
from ..models.enums.order_by_hightouch_events_api import OrderByHightouchEventsApi, OrderByHightouchEventsApiOrStr
from ..models.event_contract_create import EventContractCreate, EventContractCreateDict
from ..models.event_contract_update import EventContractUpdate, EventContractUpdateDict
from ..models.event_domain_create import EventDomainCreate, EventDomainCreateDict
from ..models.event_domain_update import EventDomainUpdate, EventDomainUpdateDict
from ..models.events_contracts_response import EventsContractsResponse
from ..models.events_domains_response import EventsDomainsResponse
from ..models.unions.events_contracts_response1 import EventsContractsResponse1
from ..models.unions.events_contracts_response11 import EventsContractsResponse11
from ..models.unions.events_domains_response1 import EventsDomainsResponse1
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def create_contract(
        self,
        body: EventContractCreate | EventContractCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventsContractsResponse1:
        """Create a new event contract

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_contract(body, request_options=request_options))

    def create_domain(
        self, body: EventDomainCreate | EventDomainCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventsDomainsResponse1:
        """Create a new event domain, with its events and components.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_domain(body, request_options=request_options))

    def get_contract(
        self, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventsContractsResponse1:
        """Retrieve a contract based on its contract ID

        Args:
            contract_id: The id of the contract
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.get_contract(contract_id, request_options=request_options))

    def get_domain(
        self, domain_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventsDomainsResponse1:
        """Retrieve a domain by its id, including its events and components.

        Args:
            domain_id: The id of the domain
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.get_domain(domain_id, request_options=request_options))

    def list_contracts(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventsContractsResponse:
        """List all event contracts in the current workspace

        Args:
            name: Value sent with the request.
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_contracts(
                name=name, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    def list_domains(
        self,
        *,
        name: str | None = None,
        source: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventsDomainsResponse:
        """List all event domains in the current workspace.

        Optional query ``source``: filter to domains linked to that event source (slug). When set, returned components
        are also filtered to those applicable to the source.

        Args:
            name: Value sent with the request.
            source: filter to domains (and components) for this event source slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_domains(
                name=name, source=source, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    def update_contract(
        self,
        contract_id: str,
        body: EventContractUpdate | EventContractUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventsContractsResponse11:
        """Update an existing event contract

        Patch an event contract based on its Hightouch ID

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.update_contract(contract_id, body, request_options=request_options))

    def update_domain(
        self,
        domain_id: str,
        body: EventDomainUpdate | EventDomainUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventsDomainsResponse1:
        """Update an existing event domain, replacing its events and components.

        Args:
            domain_id: The domain's id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.update_domain(domain_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def create_contract(
        self,
        body: EventContractCreate | EventContractCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventsContractsResponse1:
        """Create a new event contract

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_contract(body, request_options=request_options))

    async def create_domain(
        self,
        body: EventDomainCreate | EventDomainCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventsDomainsResponse1:
        """Create a new event domain, with its events and components.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_domain(body, request_options=request_options))

    async def get_contract(
        self, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventsContractsResponse1:
        """Retrieve a contract based on its contract ID

        Args:
            contract_id: The id of the contract
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(await self._with_raw_response.get_contract(contract_id, request_options=request_options))

    async def get_domain(
        self, domain_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventsDomainsResponse1:
        """Retrieve a domain by its id, including its events and components.

        Args:
            domain_id: The id of the domain
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(await self._with_raw_response.get_domain(domain_id, request_options=request_options))

    async def list_contracts(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventsContractsResponse:
        """List all event contracts in the current workspace

        Args:
            name: Value sent with the request.
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_contracts(
                name=name, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    async def list_domains(
        self,
        *,
        name: str | None = None,
        source: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventsDomainsResponse:
        """List all event domains in the current workspace.

        Optional query ``source``: filter to domains linked to that event source (slug). When set, returned components
        are also filtered to those applicable to the source.

        Args:
            name: Value sent with the request.
            source: filter to domains (and components) for this event source slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_domains(
                name=name, source=source, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    async def update_contract(
        self,
        contract_id: str,
        body: EventContractUpdate | EventContractUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventsContractsResponse11:
        """Update an existing event contract

        Patch an event contract based on its Hightouch ID

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.update_contract(contract_id, body, request_options=request_options))

    async def update_domain(
        self,
        domain_id: str,
        body: EventDomainUpdate | EventDomainUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EventsDomainsResponse1:
        """Update an existing event domain, replacing its events and components.

        Args:
            domain_id: The domain's id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.update_domain(domain_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_contract(
        self,
        body: EventContractCreate | EventContractCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsContractsResponse1, CreateContractErrorBody]:
        """Create a new event contract

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/events/contracts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventContractCreate | EventContractCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsContractsResponse1],
            error_mapper=create_contract_error_mapper,
            request_options=request_options,
        )

    def create_domain(
        self, body: EventDomainCreate | EventDomainCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsDomainsResponse1, CreateDomainErrorBody]:
        """Create a new event domain, with its events and components.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/events/domains"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventDomainCreate | EventDomainCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsDomainsResponse1],
            error_mapper=create_domain_error_mapper,
            request_options=request_options,
        )

    def get_contract(
        self, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsContractsResponse1, GetContractErrorBody]:
        """Retrieve a contract based on its contract ID

        Args:
            contract_id: The id of the contract
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsContractsResponse1],
            error_mapper=get_contract_error_mapper,
            request_options=request_options,
        )

    def get_domain(
        self, domain_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventsDomainsResponse1, GetDomainErrorBody]:
        """Retrieve a domain by its id, including its events and components.

        Args:
            domain_id: The id of the domain
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/domains/{domainId}"),
            path_params=[param[str]("domainId", domain_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsDomainsResponse1],
            error_mapper=get_domain_error_mapper,
            request_options=request_options,
        )

    def list_contracts(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsContractsResponse, ListContractsErrorBody]:
        """List all event contracts in the current workspace

        Args:
            name: Value sent with the request.
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/contracts"),
            query_params=[
                param[str | None]("name", name),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchEventsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsContractsResponse],
            error_mapper=list_contracts_error_mapper,
            request_options=request_options,
        )

    def list_domains(
        self,
        *,
        name: str | None = None,
        source: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsDomainsResponse, ListDomainsErrorBody]:
        """List all event domains in the current workspace.

        Optional query ``source``: filter to domains linked to that event source (slug). When set, returned components
        are also filtered to those applicable to the source.

        Args:
            name: Value sent with the request.
            source: filter to domains (and components) for this event source slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/domains"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("source", source),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchEventsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsDomainsResponse],
            error_mapper=list_domains_error_mapper,
            request_options=request_options,
        )

    def update_contract(
        self,
        contract_id: str,
        body: EventContractUpdate | EventContractUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsContractsResponse11, UpdateContractErrorBody]:
        """Update an existing event contract

        Patch an event contract based on its Hightouch ID

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/events/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventContractUpdate | EventContractUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsContractsResponse11],
            error_mapper=update_contract_error_mapper,
            request_options=request_options,
        )

    def update_domain(
        self,
        domain_id: str,
        body: EventDomainUpdate | EventDomainUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsDomainsResponse1, UpdateDomainErrorBody]:
        """Update an existing event domain, replacing its events and components.

        Args:
            domain_id: The domain's id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/events/domains/{domainId}"),
            path_params=[param[str]("domainId", domain_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventDomainUpdate | EventDomainUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EventsDomainsResponse1],
            error_mapper=update_domain_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_contract(
        self,
        body: EventContractCreate | EventContractCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsContractsResponse1, CreateContractErrorBody]:
        """Create a new event contract

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/events/contracts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventContractCreate | EventContractCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsContractsResponse1],
            error_mapper=create_contract_error_mapper,
            request_options=request_options,
        )

    async def create_domain(
        self,
        body: EventDomainCreate | EventDomainCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsDomainsResponse1, CreateDomainErrorBody]:
        """Create a new event domain, with its events and components.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/events/domains"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventDomainCreate | EventDomainCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsDomainsResponse1],
            error_mapper=create_domain_error_mapper,
            request_options=request_options,
        )

    async def get_contract(
        self, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventsContractsResponse1, GetContractErrorBody]:
        """Retrieve a contract based on its contract ID

        Args:
            contract_id: The id of the contract
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsContractsResponse1],
            error_mapper=get_contract_error_mapper,
            request_options=request_options,
        )

    async def get_domain(
        self, domain_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventsDomainsResponse1, GetDomainErrorBody]:
        """Retrieve a domain by its id, including its events and components.

        Args:
            domain_id: The id of the domain
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/domains/{domainId}"),
            path_params=[param[str]("domainId", domain_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsDomainsResponse1],
            error_mapper=get_domain_error_mapper,
            request_options=request_options,
        )

    async def list_contracts(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsContractsResponse, ListContractsErrorBody]:
        """List all event contracts in the current workspace

        Args:
            name: Value sent with the request.
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/contracts"),
            query_params=[
                param[str | None]("name", name),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchEventsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsContractsResponse],
            error_mapper=list_contracts_error_mapper,
            request_options=request_options,
        )

    async def list_domains(
        self,
        *,
        name: str | None = None,
        source: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsDomainsResponse, ListDomainsErrorBody]:
        """List all event domains in the current workspace.

        Optional query ``source``: filter to domains linked to that event source (slug). When set, returned components
        are also filtered to those applicable to the source.

        Args:
            name: Value sent with the request.
            source: filter to domains (and components) for this event source slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/events/domains"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("source", source),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchEventsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsDomainsResponse],
            error_mapper=list_domains_error_mapper,
            request_options=request_options,
        )

    async def update_contract(
        self,
        contract_id: str,
        body: EventContractUpdate | EventContractUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsContractsResponse11, UpdateContractErrorBody]:
        """Update an existing event contract

        Patch an event contract based on its Hightouch ID

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/events/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventContractUpdate | EventContractUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsContractsResponse11],
            error_mapper=update_contract_error_mapper,
            request_options=request_options,
        )

    async def update_domain(
        self,
        domain_id: str,
        body: EventDomainUpdate | EventDomainUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EventsDomainsResponse1, UpdateDomainErrorBody]:
        """Update an existing event domain, replacing its events and components.

        Args:
            domain_id: The domain's id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/events/domains/{domainId}"),
            path_params=[param[str]("domainId", domain_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EventDomainUpdate | EventDomainUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EventsDomainsResponse1],
            error_mapper=update_domain_error_mapper,
            request_options=request_options,
        )
