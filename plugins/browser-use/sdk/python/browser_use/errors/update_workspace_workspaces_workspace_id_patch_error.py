from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateWorkspaceWorkspacesWorkspaceIdPatchError:
    def map(self, status_code: int, content: bytes) -> UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


update_workspace_workspaces_workspace_id_patch_error_mapper: Final[
    ErrorMapper[UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody]
] = _UpdateWorkspaceWorkspacesWorkspaceIdPatchError()
