from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError:
    def map(self, status_code: int, content: bytes) -> ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_workspace_files_workspaces_workspace_id_files_get_error_mapper: Final[
    ErrorMapper[ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody]
] = _ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError()
