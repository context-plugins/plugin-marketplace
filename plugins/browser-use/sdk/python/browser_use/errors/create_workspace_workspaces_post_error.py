from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

CreateWorkspaceWorkspacesPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateWorkspaceWorkspacesPostError:
    def map(self, status_code: int, content: bytes) -> CreateWorkspaceWorkspacesPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_workspace_workspaces_post_error_mapper: Final[
    ErrorMapper[CreateWorkspaceWorkspacesPostErrorBody]
] = _CreateWorkspaceWorkspacesPostError()
