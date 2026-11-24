from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError:
    def map(self, status_code: int, content: bytes) -> PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper: Final[
    ErrorMapper[PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]
] = _PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError()
