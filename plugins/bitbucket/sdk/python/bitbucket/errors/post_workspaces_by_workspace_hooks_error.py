from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostWorkspacesByWorkspaceHooksErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostWorkspacesByWorkspaceHooksError:
    def map(self, status_code: int, content: bytes) -> PostWorkspacesByWorkspaceHooksErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_workspaces_by_workspace_hooks_error_mapper: Final[
    ErrorMapper[PostWorkspacesByWorkspaceHooksErrorBody]
] = _PostWorkspacesByWorkspaceHooksError()
