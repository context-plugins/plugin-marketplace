from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

UpdateTraceV2TraceTraceIdPatchErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateTraceV2TraceTraceIdPatchError:
    def map(self, status_code: int, content: bytes) -> UpdateTraceV2TraceTraceIdPatchErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


update_trace_v2_trace_trace_id_patch_error_mapper: Final[
    ErrorMapper[UpdateTraceV2TraceTraceIdPatchErrorBody]
] = _UpdateTraceV2TraceTraceIdPatchError()
