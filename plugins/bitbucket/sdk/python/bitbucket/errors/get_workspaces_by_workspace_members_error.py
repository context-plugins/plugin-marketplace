from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceMembersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceMembersError:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspaceMembersErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_members_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceMembersErrorBody]
] = _GetWorkspacesByWorkspaceMembersError()
