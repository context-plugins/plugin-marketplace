from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceProjectsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceProjectsError:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspaceProjectsErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_projects_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceProjectsErrorBody]
] = _GetWorkspacesByWorkspaceProjectsError()
