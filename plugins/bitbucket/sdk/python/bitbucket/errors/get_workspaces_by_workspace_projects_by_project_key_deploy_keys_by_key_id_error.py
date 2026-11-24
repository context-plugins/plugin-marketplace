from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]
] = _GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError()
