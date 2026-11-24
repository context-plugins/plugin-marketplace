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
    json_decoder,
    param,
    unwrap,
)
from ..errors.activate_automation_error import ActivateAutomationErrorBody, activate_automation_error_mapper
from ..errors.deactivate_automation_error import DeactivateAutomationErrorBody, deactivate_automation_error_mapper
from ..errors.get_all_automations_error import GetAllAutomationsErrorBody, get_all_automations_error_mapper
from ..errors.get_automation_error import GetAutomationErrorBody, get_automation_error_mapper
from ..models.automation import Automation
from ..models.automation_list import AutomationList
from ..server.server import Server


class Automations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AutomationsWithRawResponse(client, server, auth)

    def activate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Automation:
        """Enables an automation so that it will execute when its configured trigger conditions are met. Only
        automations in a valid, configured state can be activated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation activated successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.activate_automation(
                organization_uid, project_uid, automation_uid, request_options=request_options
            ),
        )

    def deactivate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Automation:
        """Disables an active automation, preventing it from executing when its trigger conditions are met. Existing
        in-progress executions will complete before the automation is fully deactivated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation deactivated successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.deactivate_automation(
                organization_uid, project_uid, automation_uid, request_options=request_options
            ),
        )

    def get_all_automations(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AutomationList:
        """Retrieves all automation workflow definitions within a specific project, including their trigger
        configurations, steps, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of automations in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_automations(organization_uid, project_uid, request_options=request_options)
        )

    def get_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Automation:
        """Retrieves the full configuration of a specific automation including trigger settings, action steps, error
        handling, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested automation configuration.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_automation(
                organization_uid, project_uid, automation_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AutomationsWithRawResponse:
        return self._with_raw_response


class AsyncAutomations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAutomationsWithRawResponse(client, server, auth)

    async def activate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Automation:
        """Enables an automation so that it will execute when its configured trigger conditions are met. Only
        automations in a valid, configured state can be activated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation activated successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.activate_automation(
                organization_uid, project_uid, automation_uid, request_options=request_options
            ),
        )

    async def deactivate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Automation:
        """Disables an active automation, preventing it from executing when its trigger conditions are met. Existing
        in-progress executions will complete before the automation is fully deactivated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation deactivated successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.deactivate_automation(
                organization_uid, project_uid, automation_uid, request_options=request_options
            ),
        )

    async def get_all_automations(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AutomationList:
        """Retrieves all automation workflow definitions within a specific project, including their trigger
        configurations, steps, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of automations in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_automations(
                organization_uid, project_uid, request_options=request_options
            ),
        )

    async def get_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Automation:
        """Retrieves the full configuration of a specific automation including trigger settings, action steps, error
        handling, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested automation configuration.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_automation(
                organization_uid, project_uid, automation_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAutomationsWithRawResponse:
        return self._with_raw_response


class AutomationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, ActivateAutomationErrorBody]:
        """Enables an automation so that it will execute when its configured trigger conditions are met. Only
        automations in a valid, configured state can be activated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/activate"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("automation_uid", automation_uid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Automation],
            error_mapper=activate_automation_error_mapper,
            request_options=request_options,
        )

    def deactivate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, DeactivateAutomationErrorBody]:
        """Disables an active automation, preventing it from executing when its trigger conditions are met. Existing
        in-progress executions will complete before the automation is fully deactivated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/deactivate"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("automation_uid", automation_uid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Automation],
            error_mapper=deactivate_automation_error_mapper,
            request_options=request_options,
        )

    def get_all_automations(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AutomationList, GetAllAutomationsErrorBody]:
        """Retrieves all automation workflow definitions within a specific project, including their trigger
        configurations, steps, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[AutomationList],
            error_mapper=get_all_automations_error_mapper,
            request_options=request_options,
        )

    def get_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, GetAutomationErrorBody]:
        """Retrieves the full configuration of a specific automation including trigger settings, action steps, error
        handling, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("automation_uid", automation_uid),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Automation],
            error_mapper=get_automation_error_mapper,
            request_options=request_options,
        )


class AsyncAutomationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, ActivateAutomationErrorBody]:
        """Enables an automation so that it will execute when its configured trigger conditions are met. Only
        automations in a valid, configured state can be activated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/activate"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("automation_uid", automation_uid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Automation],
            error_mapper=activate_automation_error_mapper,
            request_options=request_options,
        )

    async def deactivate_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, DeactivateAutomationErrorBody]:
        """Disables an active automation, preventing it from executing when its trigger conditions are met. Existing
        in-progress executions will complete before the automation is fully deactivated.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/deactivate"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("automation_uid", automation_uid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Automation],
            error_mapper=deactivate_automation_error_mapper,
            request_options=request_options,
        )

    async def get_all_automations(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AutomationList, GetAllAutomationsErrorBody]:
        """Retrieves all automation workflow definitions within a specific project, including their trigger
        configurations, steps, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[AutomationList],
            error_mapper=get_all_automations_error_mapper,
            request_options=request_options,
        )

    async def get_automation(
        self,
        organization_uid: str,
        project_uid: str,
        automation_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Automation, GetAutomationErrorBody]:
        """Retrieves the full configuration of a specific automation including trigger settings, action steps, error
        handling, and activation status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            automation_uid: The unique identifier of the automation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}"
            ),
            path_params=[
                param[str]("organization_uid", organization_uid),
                param[str]("project_uid", project_uid),
                param[str]("automation_uid", automation_uid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Automation],
            error_mapper=get_automation_error_mapper,
            request_options=request_options,
        )
