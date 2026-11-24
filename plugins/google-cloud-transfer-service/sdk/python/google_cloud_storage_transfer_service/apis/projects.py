from __future__ import annotations

from typing import Any
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
from ..errors.storagetransfer_projects_agent_pools_create_error import (
    StoragetransferProjectsAgentPoolsCreateErrorBody,
    storagetransfer_projects_agent_pools_create_error_mapper,
)
from ..errors.storagetransfer_projects_agent_pools_delete_error import (
    StoragetransferProjectsAgentPoolsDeleteErrorBody,
    storagetransfer_projects_agent_pools_delete_error_mapper,
)
from ..errors.storagetransfer_projects_agent_pools_get_error import (
    StoragetransferProjectsAgentPoolsGetErrorBody,
    storagetransfer_projects_agent_pools_get_error_mapper,
)
from ..errors.storagetransfer_projects_agent_pools_list_error import (
    StoragetransferProjectsAgentPoolsListErrorBody,
    storagetransfer_projects_agent_pools_list_error_mapper,
)
from ..errors.storagetransfer_projects_agent_pools_patch_error import (
    StoragetransferProjectsAgentPoolsPatchErrorBody,
    storagetransfer_projects_agent_pools_patch_error_mapper,
)
from ..models.agent_pool import AgentPool, AgentPoolDict
from ..models.list_agent_pools_response import ListAgentPoolsResponse
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def storagetransfer_projects_agent_pools_create(
        self,
        projects_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        agent_pool_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AgentPool:
        """Creates an agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            agent_pool_id: Required. The ID of the agent pool to create. The ``agent_pool_id`` must meet the following
                requirements: * Length of 128 characters or less. * Not start with the string ``goog``. * Start with a
                lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals,
                hyphens (``-``), periods (``.``), underscores (``_``), or tildes (``~``). * One or more numerals or
                lowercase ASCII characters. As expressed by the regular expression: ``^(?!goog)`a-z
                <[a-z0-9-._~]*[a-z0-9]>`__?$``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_projects_agent_pools_create(
                projects_id, body, agent_pool_id=agent_pool_id, request_options=request_options
            ),
        )

    def storagetransfer_projects_agent_pools_delete(
        self, projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_projects_agent_pools_delete(
                projects_id, agent_pools_id, request_options=request_options
            ),
        )

    def storagetransfer_projects_agent_pools_get(
        self, projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AgentPool:
        """Gets an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_projects_agent_pools_get(
                projects_id, agent_pools_id, request_options=request_options
            ),
        )

    def storagetransfer_projects_agent_pools_list(
        self,
        projects_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAgentPoolsResponse:
        """Lists agent pools.

        Args:
            projects_id: Resource name segment (projectsId).
            filter_: An optional list of query parameters specified as JSON text in the form of:
                ``{"agentPoolNames":["agentpool1","agentpool2",...]}`` Since ``agentPoolNames`` support multiple values,
                its values must be specified with array notation. When the filter is either empty or not provided, the
                list returns all agent pools for the project.
            page_size: The list page size. The max allowed value is ``256``.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_projects_agent_pools_list(
                projects_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def storagetransfer_projects_agent_pools_patch(
        self,
        projects_id: str,
        agent_pools_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AgentPool:
        """Updates an existing agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            body: The request body.
            update_mask: The [field mask]
                (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in
                ``agentPool`` to update in this request. The following ``agentPool`` fields can be updated: *
                display_name * bandwidth_limit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_projects_agent_pools_patch(
                projects_id, agent_pools_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def storagetransfer_projects_agent_pools_create(
        self,
        projects_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        agent_pool_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AgentPool:
        """Creates an agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            agent_pool_id: Required. The ID of the agent pool to create. The ``agent_pool_id`` must meet the following
                requirements: * Length of 128 characters or less. * Not start with the string ``goog``. * Start with a
                lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals,
                hyphens (``-``), periods (``.``), underscores (``_``), or tildes (``~``). * One or more numerals or
                lowercase ASCII characters. As expressed by the regular expression: ``^(?!goog)`a-z
                <[a-z0-9-._~]*[a-z0-9]>`__?$``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_projects_agent_pools_create(
                projects_id, body, agent_pool_id=agent_pool_id, request_options=request_options
            ),
        )

    async def storagetransfer_projects_agent_pools_delete(
        self, projects_id: str, agent_pools_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_projects_agent_pools_delete(
                projects_id, agent_pools_id, request_options=request_options
            ),
        )

    async def storagetransfer_projects_agent_pools_get(
        self, projects_id: str, agent_pools_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AgentPool:
        """Gets an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_projects_agent_pools_get(
                projects_id, agent_pools_id, request_options=request_options
            ),
        )

    async def storagetransfer_projects_agent_pools_list(
        self,
        projects_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAgentPoolsResponse:
        """Lists agent pools.

        Args:
            projects_id: Resource name segment (projectsId).
            filter_: An optional list of query parameters specified as JSON text in the form of:
                ``{"agentPoolNames":["agentpool1","agentpool2",...]}`` Since ``agentPoolNames`` support multiple values,
                its values must be specified with array notation. When the filter is either empty or not provided, the
                list returns all agent pools for the project.
            page_size: The list page size. The max allowed value is ``256``.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_projects_agent_pools_list(
                projects_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def storagetransfer_projects_agent_pools_patch(
        self,
        projects_id: str,
        agent_pools_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AgentPool:
        """Updates an existing agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            body: The request body.
            update_mask: The [field mask]
                (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in
                ``agentPool`` to update in this request. The following ``agentPool`` fields can be updated: *
                display_name * bandwidth_limit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_projects_agent_pools_patch(
                projects_id, agent_pools_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def storagetransfer_projects_agent_pools_create(
        self,
        projects_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        agent_pool_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AgentPool, StoragetransferProjectsAgentPoolsCreateErrorBody]:
        """Creates an agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            agent_pool_id: Required. The ID of the agent pool to create. The ``agent_pool_id`` must meet the following
                requirements: * Length of 128 characters or less. * Not start with the string ``goog``. * Start with a
                lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals,
                hyphens (``-``), periods (``.``), underscores (``_``), or tildes (``~``). * One or more numerals or
                lowercase ASCII characters. As expressed by the regular expression: ``^(?!goog)`a-z
                <[a-z0-9-._~]*[a-z0-9]>`__?$``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[param[str | None]("agentPoolId", agent_pool_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentPool | AgentPoolDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[AgentPool],
            error_mapper=storagetransfer_projects_agent_pools_create_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_projects_agent_pools_delete(
        self, projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferProjectsAgentPoolsDeleteErrorBody]:
        """Deletes an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("agentPoolsId", agent_pools_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=storagetransfer_projects_agent_pools_delete_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_projects_agent_pools_get(
        self, projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AgentPool, StoragetransferProjectsAgentPoolsGetErrorBody]:
        """Gets an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("agentPoolsId", agent_pools_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[AgentPool],
            error_mapper=storagetransfer_projects_agent_pools_get_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_projects_agent_pools_list(
        self,
        projects_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAgentPoolsResponse, StoragetransferProjectsAgentPoolsListErrorBody]:
        """Lists agent pools.

        Args:
            projects_id: Resource name segment (projectsId).
            filter_: An optional list of query parameters specified as JSON text in the form of:
                ``{"agentPoolNames":["agentpool1","agentpool2",...]}`` Since ``agentPoolNames`` support multiple values,
                its values must be specified with array notation. When the filter is either empty or not provided, the
                list returns all agent pools for the project.
            page_size: The list page size. The max allowed value is ``256``.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListAgentPoolsResponse],
            error_mapper=storagetransfer_projects_agent_pools_list_error_mapper,
            request_options=request_options,
        )

    def storagetransfer_projects_agent_pools_patch(
        self,
        projects_id: str,
        agent_pools_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AgentPool, StoragetransferProjectsAgentPoolsPatchErrorBody]:
        """Updates an existing agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            body: The request body.
            update_mask: The [field mask]
                (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in
                ``agentPool`` to update in this request. The following ``agentPool`` fields can be updated: *
                display_name * bandwidth_limit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("agentPoolsId", agent_pools_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentPool | AgentPoolDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[AgentPool],
            error_mapper=storagetransfer_projects_agent_pools_patch_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def storagetransfer_projects_agent_pools_create(
        self,
        projects_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        agent_pool_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AgentPool, StoragetransferProjectsAgentPoolsCreateErrorBody]:
        """Creates an agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            agent_pool_id: Required. The ID of the agent pool to create. The ``agent_pool_id`` must meet the following
                requirements: * Length of 128 characters or less. * Not start with the string ``goog``. * Start with a
                lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals,
                hyphens (``-``), periods (``.``), underscores (``_``), or tildes (``~``). * One or more numerals or
                lowercase ASCII characters. As expressed by the regular expression: ``^(?!goog)`a-z
                <[a-z0-9-._~]*[a-z0-9]>`__?$``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[param[str | None]("agentPoolId", agent_pool_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentPool | AgentPoolDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AgentPool],
            error_mapper=storagetransfer_projects_agent_pools_create_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_projects_agent_pools_delete(
        self, projects_id: str, agent_pools_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, StoragetransferProjectsAgentPoolsDeleteErrorBody]:
        """Deletes an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("agentPoolsId", agent_pools_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=storagetransfer_projects_agent_pools_delete_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_projects_agent_pools_get(
        self, projects_id: str, agent_pools_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AgentPool, StoragetransferProjectsAgentPoolsGetErrorBody]:
        """Gets an agent pool.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("agentPoolsId", agent_pools_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AgentPool],
            error_mapper=storagetransfer_projects_agent_pools_get_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_projects_agent_pools_list(
        self,
        projects_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAgentPoolsResponse, StoragetransferProjectsAgentPoolsListErrorBody]:
        """Lists agent pools.

        Args:
            projects_id: Resource name segment (projectsId).
            filter_: An optional list of query parameters specified as JSON text in the form of:
                ``{"agentPoolNames":["agentpool1","agentpool2",...]}`` Since ``agentPoolNames`` support multiple values,
                its values must be specified with array notation. When the filter is either empty or not provided, the
                list returns all agent pools for the project.
            page_size: The list page size. The max allowed value is ``256``.
            page_token: The list page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListAgentPoolsResponse],
            error_mapper=storagetransfer_projects_agent_pools_list_error_mapper,
            request_options=request_options,
        )

    async def storagetransfer_projects_agent_pools_patch(
        self,
        projects_id: str,
        agent_pools_id: str,
        body: AgentPool | AgentPoolDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AgentPool, StoragetransferProjectsAgentPoolsPatchErrorBody]:
        """Updates an existing agent pool resource.

        Args:
            projects_id: Resource name segment (projectsId).
            agent_pools_id: Resource name segment (agentPoolsId).
            body: The request body.
            update_mask: The [field mask]
                (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in
                ``agentPool`` to update in this request. The following ``agentPool`` fields can be updated: *
                display_name * bandwidth_limit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("agentPoolsId", agent_pools_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentPool | AgentPoolDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AgentPool],
            error_mapper=storagetransfer_projects_agent_pools_patch_error_mapper,
            request_options=request_options,
        )
