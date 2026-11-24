from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]
] = _GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError()
