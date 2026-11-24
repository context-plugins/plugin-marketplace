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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_automation_idea_error import CreateAutomationIdeaErrorBody, create_automation_idea_error_mapper
from ..errors.delete_automation_error import DeleteAutomationErrorBody, delete_automation_error_mapper
from ..errors.get_automation_error import GetAutomationErrorBody, get_automation_error_mapper
from ..errors.list_automation_collaborators_error import (
    ListAutomationCollaboratorsErrorBody,
    list_automation_collaborators_error_mapper,
)
from ..errors.list_automations_error import ListAutomationsErrorBody, list_automations_error_mapper
from ..errors.remove_automation_collaborator_error import (
    RemoveAutomationCollaboratorErrorBody,
    remove_automation_collaborator_error_mapper,
)
from ..errors.update_automation_error import UpdateAutomationErrorBody, update_automation_error_mapper
from ..models.automation import Automation
from ..models.automation_list_response import AutomationListResponse
from ..models.automations_collaborators_response import AutomationsCollaboratorsResponse
from ..models.create_automation_idea_request import CreateAutomationIdeaRequest, CreateAutomationIdeaRequestDict
from ..models.update_automation_request import UpdateAutomationRequest, UpdateAutomationRequestDict
from ..server.server import Server


class Automations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AutomationsWithRawResponse(client, server, auth)

    def create_automation_idea(
        self,
        body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Automation:
        """Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and
        is available for assessment and prioritization by CoE administrators. The request body must include the idea
        name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation idea created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.create_automation_idea(body, request_options=request_options))

    def delete_automation(self, automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes
        the idea and all associated documents, comments, and collaborator data. This action cannot be undone.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.delete_automation(automation_id, request_options=request_options))

    def get_automation(self, automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Automation:
        """Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase,
        status, cost-benefit analysis data, collaborators, documents, and tags.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested automation record

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.get_automation(automation_id, request_options=request_options))

    def list_automation_collaborators(
        self, automation_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> AutomationsCollaboratorsResponse:
        """Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have
        defined roles such as subject matter expert, developer, or reviewer.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of collaborators for the automation

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_automation_collaborators(automation_id, request_options=request_options)
        )

    def list_automations(
        self,
        *,
        phase: str | None = None,
        status: str | None = None,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationListResponse:
        """Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status,
        and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit
        analysis data, and submission details. Used by CoE teams to programmatically query and track the automation
        pipeline.

        Args:
            phase: Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production)
            status: Filter automations by status within their current phase
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of automations

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_automations(
                phase=phase, status=status, page=page, page_size=page_size, request_options=request_options
            ),
        )

    def remove_automation_collaborator(
        self, automation_id: int, user_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the
        automation idea or project.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            user_id: Unique identifier of the user to remove as a collaborator
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collaborator removed successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            self._with_raw_response.remove_automation_collaborator(
                automation_id, user_id, request_options=request_options
            ),
        )

    def update_automation(
        self,
        automation_id: int,
        body: UpdateAutomationRequest | UpdateAutomationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Automation:
        """Partially updates an automation record by its unique identifier. Commonly used to advance an automation
        through the pipeline by updating its phase and status. Only fields included in the request body are modified.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials The requested resource was not found ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.update_automation(automation_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AutomationsWithRawResponse:
        return self._with_raw_response


class AsyncAutomations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAutomationsWithRawResponse(client, server, auth)

    async def create_automation_idea(
        self,
        body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Automation:
        """Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and
        is available for assessment and prioritization by CoE administrators. The request body must include the idea
        name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation idea created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.create_automation_idea(body, request_options=request_options))

    async def delete_automation(
        self, automation_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes
        the idea and all associated documents, comments, and collaborator data. This action cannot be undone.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.delete_automation(automation_id, request_options=request_options))

    async def get_automation(
        self, automation_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Automation:
        """Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase,
        status, cost-benefit analysis data, collaborators, documents, and tags.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested automation record

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.get_automation(automation_id, request_options=request_options))

    async def list_automation_collaborators(
        self, automation_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AutomationsCollaboratorsResponse:
        """Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have
        defined roles such as subject matter expert, developer, or reviewer.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of collaborators for the automation

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_automation_collaborators(automation_id, request_options=request_options)
        )

    async def list_automations(
        self,
        *,
        phase: str | None = None,
        status: str | None = None,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationListResponse:
        """Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status,
        and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit
        analysis data, and submission details. Used by CoE teams to programmatically query and track the automation
        pipeline.

        Args:
            phase: Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production)
            status: Filter automations by status within their current phase
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of automations

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_automations(
                phase=phase, status=status, page=page, page_size=page_size, request_options=request_options
            ),
        )

    async def remove_automation_collaborator(
        self, automation_id: int, user_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the
        automation idea or project.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            user_id: Unique identifier of the user to remove as a collaborator
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collaborator removed successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_automation_collaborator(
                automation_id, user_id, request_options=request_options
            ),
        )

    async def update_automation(
        self,
        automation_id: int,
        body: UpdateAutomationRequest | UpdateAutomationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Automation:
        """Partially updates an automation record by its unique identifier. Commonly used to advance an automation
        through the pipeline by updating its phase and status. Only fields included in the request body are modified.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials The requested resource was not found ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_automation(automation_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAutomationsWithRawResponse:
        return self._with_raw_response


class AutomationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_automation_idea(
        self,
        body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, CreateAutomationIdeaErrorBody]:
        """Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and
        is available for assessment and prioritization by CoE administrators. The request body must include the idea
        name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Automation],
            error_mapper=create_automation_idea_error_mapper,
            request_options=request_options,
        )

    def delete_automation(
        self, automation_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAutomationErrorBody]:
        """Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes
        the idea and all associated documents, comments, and collaborator data. This action cannot be undone.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations/{automationId}"),
            path_params=[param[int]("automationId", automation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=delete_automation_error_mapper,
            request_options=request_options,
        )

    def get_automation(
        self, automation_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Automation, GetAutomationErrorBody]:
        """Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase,
        status, cost-benefit analysis data, collaborators, documents, and tags.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations/{automationId}"),
            path_params=[param[int]("automationId", automation_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Automation],
            error_mapper=get_automation_error_mapper,
            request_options=request_options,
        )

    def list_automation_collaborators(
        self, automation_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AutomationsCollaboratorsResponse, ListAutomationCollaboratorsErrorBody]:
        """Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have
        defined roles such as subject matter expert, developer, or reviewer.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/automations/{automationId}/collaborators"
            ),
            path_params=[param[int]("automationId", automation_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AutomationsCollaboratorsResponse],
            error_mapper=list_automation_collaborators_error_mapper,
            request_options=request_options,
        )

    def list_automations(
        self,
        *,
        phase: str | None = None,
        status: str | None = None,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationListResponse, ListAutomationsErrorBody]:
        """Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status,
        and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit
        analysis data, and submission details. Used by CoE teams to programmatically query and track the automation
        pipeline.

        Args:
            phase: Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production)
            status: Filter automations by status within their current phase
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations"),
            query_params=[
                param[str | None]("phase", phase),
                param[str | None]("status", status),
                param[int | None]("page", page),
                param[int | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AutomationListResponse],
            error_mapper=list_automations_error_mapper,
            request_options=request_options,
        )

    def remove_automation_collaborator(
        self, automation_id: int, user_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemoveAutomationCollaboratorErrorBody]:
        """Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the
        automation idea or project.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            user_id: Unique identifier of the user to remove as a collaborator
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/automations/{automationId}/collaborators"
            ),
            path_params=[param[int]("automationId", automation_id)],
            query_params=[param[int]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=remove_automation_collaborator_error_mapper,
            request_options=request_options,
        )

    def update_automation(
        self,
        automation_id: int,
        body: UpdateAutomationRequest | UpdateAutomationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, UpdateAutomationErrorBody]:
        """Partially updates an automation record by its unique identifier. Commonly used to advance an automation
        through the pipeline by updating its phase and status. Only fields included in the request body are modified.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations/{automationId}"),
            path_params=[param[int]("automationId", automation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAutomationRequest | UpdateAutomationRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Automation],
            error_mapper=update_automation_error_mapper,
            request_options=request_options,
        )


class AsyncAutomationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_automation_idea(
        self,
        body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, CreateAutomationIdeaErrorBody]:
        """Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and
        is available for assessment and prioritization by CoE administrators. The request body must include the idea
        name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Automation],
            error_mapper=create_automation_idea_error_mapper,
            request_options=request_options,
        )

    async def delete_automation(
        self, automation_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAutomationErrorBody]:
        """Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes
        the idea and all associated documents, comments, and collaborator data. This action cannot be undone.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations/{automationId}"),
            path_params=[param[int]("automationId", automation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=delete_automation_error_mapper,
            request_options=request_options,
        )

    async def get_automation(
        self, automation_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Automation, GetAutomationErrorBody]:
        """Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase,
        status, cost-benefit analysis data, collaborators, documents, and tags.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations/{automationId}"),
            path_params=[param[int]("automationId", automation_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Automation],
            error_mapper=get_automation_error_mapper,
            request_options=request_options,
        )

    async def list_automation_collaborators(
        self, automation_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AutomationsCollaboratorsResponse, ListAutomationCollaboratorsErrorBody]:
        """Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have
        defined roles such as subject matter expert, developer, or reviewer.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/automations/{automationId}/collaborators"
            ),
            path_params=[param[int]("automationId", automation_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AutomationsCollaboratorsResponse],
            error_mapper=list_automation_collaborators_error_mapper,
            request_options=request_options,
        )

    async def list_automations(
        self,
        *,
        phase: str | None = None,
        status: str | None = None,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationListResponse, ListAutomationsErrorBody]:
        """Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status,
        and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit
        analysis data, and submission details. Used by CoE teams to programmatically query and track the automation
        pipeline.

        Args:
            phase: Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production)
            status: Filter automations by status within their current phase
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations"),
            query_params=[
                param[str | None]("phase", phase),
                param[str | None]("status", status),
                param[int | None]("page", page),
                param[int | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AutomationListResponse],
            error_mapper=list_automations_error_mapper,
            request_options=request_options,
        )

    async def remove_automation_collaborator(
        self, automation_id: int, user_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemoveAutomationCollaboratorErrorBody]:
        """Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the
        automation idea or project.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            user_id: Unique identifier of the user to remove as a collaborator
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/automations/{automationId}/collaborators"
            ),
            path_params=[param[int]("automationId", automation_id)],
            query_params=[param[int]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=remove_automation_collaborator_error_mapper,
            request_options=request_options,
        )

    async def update_automation(
        self,
        automation_id: int,
        body: UpdateAutomationRequest | UpdateAutomationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, UpdateAutomationErrorBody]:
        """Partially updates an automation record by its unique identifier. Commonly used to advance an automation
        through the pipeline by updating its phase and status. Only fields included in the request body are modified.

        Args:
            automation_id: Unique integer identifier of the automation idea or project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automations/{automationId}"),
            path_params=[param[int]("automationId", automation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAutomationRequest | UpdateAutomationRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Automation],
            error_mapper=update_automation_error_mapper,
            request_options=request_options,
        )
