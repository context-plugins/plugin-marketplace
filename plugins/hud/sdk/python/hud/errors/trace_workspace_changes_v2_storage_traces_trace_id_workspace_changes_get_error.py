from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError:
    def map(
        self, status_code: int, content: bytes
    ) -> TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error_mapper: Final[
    ErrorMapper[TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody]
] = _TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError()
