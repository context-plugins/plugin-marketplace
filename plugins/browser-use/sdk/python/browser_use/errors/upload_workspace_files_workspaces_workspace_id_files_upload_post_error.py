from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError:
    def map(
        self, status_code: int, content: bytes
    ) -> UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


upload_workspace_files_workspaces_workspace_id_files_upload_post_error_mapper: Final[
    ErrorMapper[UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody]
] = _UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError()
