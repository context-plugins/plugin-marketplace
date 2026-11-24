from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError:
    def map(
        self, status_code: int, content: bytes
    ) -> TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error_mapper: Final[
    ErrorMapper[TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody]
] = _TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError()
