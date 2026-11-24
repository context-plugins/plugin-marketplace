from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody: TypeAlias = (
    Error | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper: Final[
    ErrorMapper[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody]
] = _DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError()
