from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

CreateWorkspaceExportErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _CreateWorkspaceExportError:
    def map(self, status_code: int, content: bytes) -> CreateWorkspaceExportErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


create_workspace_export_error_mapper: Final[ErrorMapper[CreateWorkspaceExportErrorBody]] = _CreateWorkspaceExportError()
