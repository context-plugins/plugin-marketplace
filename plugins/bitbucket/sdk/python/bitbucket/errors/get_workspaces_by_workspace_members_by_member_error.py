from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceMembersByMemberErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceMembersByMemberError:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspaceMembersByMemberErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_members_by_member_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceMembersByMemberErrorBody]
] = _GetWorkspacesByWorkspaceMembersByMemberError()
