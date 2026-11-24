from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceHooksByUid2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceHooksByUid2Error:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspaceHooksByUid2ErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_hooks_by_uid2_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceHooksByUid2ErrorBody]
] = _GetWorkspacesByWorkspaceHooksByUid2Error()
