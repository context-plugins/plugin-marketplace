from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.agent import Agent
from ..models.agent_create import AgentCreate, AgentCreateDict
from ..models.agent_update import AgentUpdate, AgentUpdateDict
from ..server.server import Server


class Agents:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AgentsWithRawResponse(client, server)

    def create(
        self,
        authorization: str,
        *,
        body: AgentCreate | AgentCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Agent:
        """DEPRECATED: Use POST /products instead.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create(authorization, body=body, request_options=request_options))

    def delete(self, agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """DEPRECATED: Use DELETE /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete(agent_id, authorization, request_options=request_options))

    def delete_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """DEPRECATED: Use DELETE /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_by_external_id(external_id, authorization, request_options=request_options)
        )

    def get(self, agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Agent:
        """DEPRECATED: Use GET /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get(agent_id, authorization, request_options=request_options))

    def get_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Agent:
        """DEPRECATED: Use GET /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_by_external_id(external_id, authorization, request_options=request_options)
        )

    def list_(self, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Agent]:
        """DEPRECATED: Use /products instead. Agents are now products with type='agent'.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_(authorization, request_options=request_options))

    def update(
        self,
        agent_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Agent:
        """DEPRECATED: Use PUT /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update(agent_id, authorization, body=body, request_options=request_options)
        )

    def update_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Agent:
        """DEPRECATED: Use PUT /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AgentsWithRawResponse:
        return self._with_raw_response


class AsyncAgents:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAgentsWithRawResponse(client, server)

    async def create(
        self,
        authorization: str,
        *,
        body: AgentCreate | AgentCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Agent:
        """DEPRECATED: Use POST /products instead.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create(authorization, body=body, request_options=request_options))

    async def delete(
        self, agent_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """DEPRECATED: Use DELETE /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete(agent_id, authorization, request_options=request_options))

    async def delete_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """DEPRECATED: Use DELETE /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get(
        self, agent_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Agent:
        """DEPRECATED: Use GET /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get(agent_id, authorization, request_options=request_options))

    async def get_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Agent:
        """DEPRECATED: Use GET /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_by_external_id(
                external_id, authorization, request_options=request_options
            ),
        )

    async def list_(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Agent]:
        """DEPRECATED: Use /products instead. Agents are now products with type='agent'.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_(authorization, request_options=request_options))

    async def update(
        self,
        agent_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Agent:
        """DEPRECATED: Use PUT /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update(agent_id, authorization, body=body, request_options=request_options)
        )

    async def update_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Agent:
        """DEPRECATED: Use PUT /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAgentsWithRawResponse:
        return self._with_raw_response


class AgentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create(
        self,
        authorization: str,
        *,
        body: AgentCreate | AgentCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use POST /products instead.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/agents"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentCreate | AgentCreateDict | None](body),
            decoder=json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete(
        self, agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """DEPRECATED: Use DELETE /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/agents/{agentId}"),
            path_params=[param[str]("agentId", agent_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """DEPRECATED: Use DELETE /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/agents/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get(
        self, agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use GET /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agents/{agentId}"),
            path_params=[param[str]("agentId", agent_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_by_external_id(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use GET /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agents/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Agent], RawError]:
        """DEPRECATED: Use /products instead. Agents are now products with type='agent'.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agents"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[Agent]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update(
        self,
        agent_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use PUT /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/agents/{agentId}"),
            path_params=[param[str]("agentId", agent_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentUpdate | AgentUpdateDict | None](body),
            decoder=json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use PUT /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/agents/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentUpdate | AgentUpdateDict | None](body),
            decoder=json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAgentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create(
        self,
        authorization: str,
        *,
        body: AgentCreate | AgentCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use POST /products instead.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/agents"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentCreate | AgentCreateDict | None](body),
            decoder=async_json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete(
        self, agent_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """DEPRECATED: Use DELETE /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/agents/{agentId}"),
            path_params=[param[str]("agentId", agent_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """DEPRECATED: Use DELETE /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/agents/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get(
        self, agent_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use GET /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agents/{agentId}"),
            path_params=[param[str]("agentId", agent_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_by_external_id(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use GET /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agents/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Agent], RawError]:
        """DEPRECATED: Use /products instead. Agents are now products with type='agent'.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agents"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[Agent]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update(
        self,
        agent_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use PUT /products/{productId} instead.

        Args:
            agent_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/agents/{agentId}"),
            path_params=[param[str]("agentId", agent_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentUpdate | AgentUpdateDict | None](body),
            decoder=async_json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: AgentUpdate | AgentUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Agent, RawError]:
        """DEPRECATED: Use PUT /products/external/{externalId} instead.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/agents/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentUpdate | AgentUpdateDict | None](body),
            decoder=async_json_decoder[Agent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
