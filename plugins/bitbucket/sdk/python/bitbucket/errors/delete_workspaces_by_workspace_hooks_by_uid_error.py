from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteWorkspacesByWorkspaceHooksByUidErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWorkspacesByWorkspaceHooksByUidError:
    def map(self, status_code: int, content: bytes) -> DeleteWorkspacesByWorkspaceHooksByUidErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_workspaces_by_workspace_hooks_by_uid_error_mapper: Final[
    ErrorMapper[DeleteWorkspacesByWorkspaceHooksByUidErrorBody]
] = _DeleteWorkspacesByWorkspaceHooksByUidError()
