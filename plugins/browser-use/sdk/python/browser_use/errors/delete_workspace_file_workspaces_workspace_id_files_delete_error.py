from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_workspace_file_workspaces_workspace_id_files_delete_error_mapper: Final[
    ErrorMapper[DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody]
] = _DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError()
