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
from ..errors.create_variable_error import CreateVariableErrorBody, create_variable_error_mapper
from ..errors.get_all_variables_error import GetAllVariablesErrorBody, get_all_variables_error_mapper
from ..models.create_variable_request import CreateVariableRequest, CreateVariableRequestDict
from ..models.variable import Variable
from ..models.variable_list import VariableList
from ..server.server import Server


class Variables:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VariablesWithRawResponse(client, server, auth)

    def create_variable(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateVariableRequest | CreateVariableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Variable:
        """Creates a new project variable that can be referenced in automation configurations. Variables can store API
        keys, URLs, or other configuration values that are used across multiple automations.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created variable.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_variable(
                organization_uid, project_uid, body, request_options=request_options
            ),
        )

    def get_all_variables(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VariableList:
        """Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs
        that can be referenced across automation configurations.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of project variables.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_variables(organization_uid, project_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> VariablesWithRawResponse:
        return self._with_raw_response


class AsyncVariables:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVariablesWithRawResponse(client, server, auth)

    async def create_variable(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateVariableRequest | CreateVariableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Variable:
        """Creates a new project variable that can be referenced in automation configurations. Variables can store API
        keys, URLs, or other configuration values that are used across multiple automations.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created variable.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_variable(
                organization_uid, project_uid, body, request_options=request_options
            ),
        )

    async def get_all_variables(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VariableList:
        """Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs
        that can be referenced across automation configurations.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of project variables.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_variables(
                organization_uid, project_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVariablesWithRawResponse:
        return self._with_raw_response


class VariablesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_variable(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateVariableRequest | CreateVariableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Variable, CreateVariableErrorBody]:
        """Creates a new project variable that can be referenced in automation configurations. Variables can store API
        keys, URLs, or other configuration values that are used across multiple automations.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/variables"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateVariableRequest | CreateVariableRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Variable],
            error_mapper=create_variable_error_mapper,
            request_options=request_options,
        )

    def get_all_variables(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VariableList, GetAllVariablesErrorBody]:
        """Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs
        that can be referenced across automation configurations.

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
                "/v1/organizations/{organization_uid}/projects/{project_uid}/variables"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[VariableList],
            error_mapper=get_all_variables_error_mapper,
            request_options=request_options,
        )


class AsyncVariablesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_variable(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateVariableRequest | CreateVariableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Variable, CreateVariableErrorBody]:
        """Creates a new project variable that can be referenced in automation configurations. Variables can store API
        keys, URLs, or other configuration values that are used across multiple automations.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_automate_management_accounts_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/variables"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateVariableRequest | CreateVariableRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Variable],
            error_mapper=create_variable_error_mapper,
            request_options=request_options,
        )

    async def get_all_variables(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VariableList, GetAllVariablesErrorBody]:
        """Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs
        that can be referenced across automation configurations.

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
                "/v1/organizations/{organization_uid}/projects/{project_uid}/variables"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[VariableList],
            error_mapper=get_all_variables_error_mapper,
            request_options=request_options,
        )
