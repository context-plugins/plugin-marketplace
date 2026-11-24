from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutWorkspacesByWorkspaceHooksByUid2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutWorkspacesByWorkspaceHooksByUid2Error:
    def map(self, status_code: int, content: bytes) -> PutWorkspacesByWorkspaceHooksByUid2ErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_workspaces_by_workspace_hooks_by_uid2_error_mapper: Final[
    ErrorMapper[PutWorkspacesByWorkspaceHooksByUid2ErrorBody]
] = _PutWorkspacesByWorkspaceHooksByUid2Error()
