from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError:
    def map(
        self, status_code: int, content: bytes
    ) -> DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper: Final[
    ErrorMapper[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody]
] = _DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError()
