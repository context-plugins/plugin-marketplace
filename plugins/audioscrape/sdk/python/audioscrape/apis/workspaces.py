from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_workspace_error import GetWorkspaceErrorBody, get_workspace_error_mapper
from ..errors.list_workspace_datasets_error import ListWorkspaceDatasetsErrorBody, list_workspace_datasets_error_mapper
from ..errors.list_workspaces_error import ListWorkspacesErrorBody, list_workspaces_error_mapper
from ..models.dataset_list import DatasetList
from ..models.workspace_detail import WorkspaceDetail
from ..models.workspace_list import WorkspaceList
from ..server.server import Server


class Workspaces:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WorkspacesWithRawResponse(client, server, auth)

    def get_workspace(self, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceDetail:
        """Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets
        that never appear under ``/api/libraries``. ``{workspace}`` accepts a slug or a numeric ID. Members only: a
        workspace you don't belong to returns 404.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workspace + all its datasets (private included)

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Workspace not found, or caller is not a member Monthly quota
                exhausted (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_workspace(workspace, request_options=request_options))

    def list_workspace_datasets(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatasetList:
        """Returns every dataset in one of your workspaces — ``public``, ``workspace``, and ``private`` alike. Same
        ``{workspace}`` resolution (slug or numeric ID) and members-only access rules as ``GET
        /api/workspaces/{workspace}``.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All datasets in the workspace, ordered by ID

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Workspace not found, or caller is not a member Monthly quota
                exhausted (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.list_workspace_datasets(workspace, request_options=request_options))

    def list_workspaces(self, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceList:
        """Returns every workspace the calling user is a member of, with the caller's role in each. ``is_current`` marks
        the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workspaces the calling user belongs to

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.list_workspaces(request_options=request_options))

    @property
    def with_raw_response(self) -> WorkspacesWithRawResponse:
        return self._with_raw_response


class AsyncWorkspaces:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWorkspacesWithRawResponse(client, server, auth)

    async def get_workspace(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceDetail:
        """Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets
        that never appear under ``/api/libraries``. ``{workspace}`` accepts a slug or a numeric ID. Members only: a
        workspace you don't belong to returns 404.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workspace + all its datasets (private included)

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Workspace not found, or caller is not a member Monthly quota
                exhausted (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_workspace(workspace, request_options=request_options))

    async def list_workspace_datasets(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatasetList:
        """Returns every dataset in one of your workspaces — ``public``, ``workspace``, and ``private`` alike. Same
        ``{workspace}`` resolution (slug or numeric ID) and members-only access rules as ``GET
        /api/workspaces/{workspace}``.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All datasets in the workspace, ordered by ID

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Workspace not found, or caller is not a member Monthly quota
                exhausted (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.list_workspace_datasets(workspace, request_options=request_options))

    async def list_workspaces(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> WorkspaceList:
        """Returns every workspace the calling user is a member of, with the caller's role in each. ``is_current`` marks
        the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workspaces the calling user belongs to

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.list_workspaces(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWorkspacesWithRawResponse:
        return self._with_raw_response


class WorkspacesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_workspace(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceDetail, GetWorkspaceErrorBody]:
        """Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets
        that never appear under ``/api/libraries``. ``{workspace}`` accepts a slug or a numeric ID. Members only: a
        workspace you don't belong to returns 404.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WorkspaceDetail],
            error_mapper=get_workspace_error_mapper,
            request_options=request_options,
        )

    def list_workspace_datasets(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetList, ListWorkspaceDatasetsErrorBody]:
        """Returns every dataset in one of your workspaces — ``public``, ``workspace``, and ``private`` alike. Same
        ``{workspace}`` resolution (slug or numeric ID) and members-only access rules as ``GET
        /api/workspaces/{workspace}``.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces/{workspace}/datasets"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DatasetList],
            error_mapper=list_workspace_datasets_error_mapper,
            request_options=request_options,
        )

    def list_workspaces(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceList, ListWorkspacesErrorBody]:
        """Returns every workspace the calling user is a member of, with the caller's role in each. ``is_current`` marks
        the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WorkspaceList],
            error_mapper=list_workspaces_error_mapper,
            request_options=request_options,
        )


class AsyncWorkspacesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_workspace(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceDetail, GetWorkspaceErrorBody]:
        """Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets
        that never appear under ``/api/libraries``. ``{workspace}`` accepts a slug or a numeric ID. Members only: a
        workspace you don't belong to returns 404.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WorkspaceDetail],
            error_mapper=get_workspace_error_mapper,
            request_options=request_options,
        )

    async def list_workspace_datasets(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetList, ListWorkspaceDatasetsErrorBody]:
        """Returns every dataset in one of your workspaces — ``public``, ``workspace``, and ``private`` alike. Same
        ``{workspace}`` resolution (slug or numeric ID) and members-only access rules as ``GET
        /api/workspaces/{workspace}``.

        Args:
            workspace: Workspace slug (e.g. ``audioscrape``) or numeric workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces/{workspace}/datasets"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DatasetList],
            error_mapper=list_workspace_datasets_error_mapper,
            request_options=request_options,
        )

    async def list_workspaces(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceList, ListWorkspacesErrorBody]:
        """Returns every workspace the calling user is a member of, with the caller's role in each. ``is_current`` marks
        the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WorkspaceList],
            error_mapper=list_workspaces_error_mapper,
            request_options=request_options,
        )
