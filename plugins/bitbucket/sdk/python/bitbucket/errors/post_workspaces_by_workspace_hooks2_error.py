from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostWorkspacesByWorkspaceHooks2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostWorkspacesByWorkspaceHooks2Error:
    def map(self, status_code: int, content: bytes) -> PostWorkspacesByWorkspaceHooks2ErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_workspaces_by_workspace_hooks2_error_mapper: Final[
    ErrorMapper[PostWorkspacesByWorkspaceHooks2ErrorBody]
] = _PostWorkspacesByWorkspaceHooks2Error()
