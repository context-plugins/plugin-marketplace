from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.jira_integration_controller_remove_organization_connection_error import (
    JiraIntegrationControllerRemoveOrganizationConnectionErrorBody,
    jira_integration_controller_remove_organization_connection_error_mapper,
)
from ..errors.jira_integration_controller_remove_project_connection_error import (
    JiraIntegrationControllerRemoveProjectConnectionErrorBody,
    jira_integration_controller_remove_project_connection_error_mapper,
)
from ..server.server import Server


class IntegrationsJira:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = IntegrationsJiraWithRawResponse(client, server)

    def jira_integration_controller_remove(
        self, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or
        /integrations/jira/project/:token instead.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.jira_integration_controller_remove(token, request_options=request_options)
        )

    def jira_integration_controller_remove_organization_connection(
        self, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove the Jira integration configuration for an organization. This will remove the integration for an
        organization wide connection, but not project connections.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.jira_integration_controller_remove_organization_connection(
                token, request_options=request_options
            ),
        )

    def jira_integration_controller_remove_project_connection(
        self, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove a specific project

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Connection removed successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.jira_integration_controller_remove_project_connection(
                token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> IntegrationsJiraWithRawResponse:
        return self._with_raw_response


class AsyncIntegrationsJira:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncIntegrationsJiraWithRawResponse(client, server)

    async def jira_integration_controller_remove(
        self, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or
        /integrations/jira/project/:token instead.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.jira_integration_controller_remove(token, request_options=request_options)
        )

    async def jira_integration_controller_remove_organization_connection(
        self, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Remove the Jira integration configuration for an organization. This will remove the integration for an
        organization wide connection, but not project connections.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.jira_integration_controller_remove_organization_connection(
                token, request_options=request_options
            ),
        )

    async def jira_integration_controller_remove_project_connection(
        self, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Remove a specific project

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Connection removed successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.jira_integration_controller_remove_project_connection(
                token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIntegrationsJiraWithRawResponse:
        return self._with_raw_response


class IntegrationsJiraWithRawResponse(BaseRawResponse[RawClient, Server]):
    def jira_integration_controller_remove(
        self, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or
        /integrations/jira/project/:token instead.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/jira/{token}"),
            path_params=[param[str]("token", token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def jira_integration_controller_remove_organization_connection(
        self, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, JiraIntegrationControllerRemoveOrganizationConnectionErrorBody]:
        """Remove the Jira integration configuration for an organization. This will remove the integration for an
        organization wide connection, but not project connections.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/jira/organization/{token}"),
            path_params=[param[str]("token", token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=jira_integration_controller_remove_organization_connection_error_mapper,
            request_options=request_options,
        )

    def jira_integration_controller_remove_project_connection(
        self, token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, JiraIntegrationControllerRemoveProjectConnectionErrorBody]:
        """Remove a specific project

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/jira/project/{token}"),
            path_params=[param[str]("token", token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=jira_integration_controller_remove_project_connection_error_mapper,
            request_options=request_options,
        )


class AsyncIntegrationsJiraWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def jira_integration_controller_remove(
        self, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or
        /integrations/jira/project/:token instead.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/jira/{token}"),
            path_params=[param[str]("token", token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def jira_integration_controller_remove_organization_connection(
        self, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, JiraIntegrationControllerRemoveOrganizationConnectionErrorBody]:
        """Remove the Jira integration configuration for an organization. This will remove the integration for an
        organization wide connection, but not project connections.

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/jira/organization/{token}"),
            path_params=[param[str]("token", token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=jira_integration_controller_remove_organization_connection_error_mapper,
            request_options=request_options,
        )

    async def jira_integration_controller_remove_project_connection(
        self, token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, JiraIntegrationControllerRemoveProjectConnectionErrorBody]:
        """Remove a specific project

        Args:
            token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/integrations/jira/project/{token}"),
            path_params=[param[str]("token", token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=jira_integration_controller_remove_project_connection_error_mapper,
            request_options=request_options,
        )
