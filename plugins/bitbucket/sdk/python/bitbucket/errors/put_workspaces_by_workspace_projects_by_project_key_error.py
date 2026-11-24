from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutWorkspacesByWorkspaceProjectsByProjectKeyError:
    def map(self, status_code: int, content: bytes) -> PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_workspaces_by_workspace_projects_by_project_key_error_mapper: Final[
    ErrorMapper[PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]
] = _PutWorkspacesByWorkspaceProjectsByProjectKeyError()
