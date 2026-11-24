from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError:
    def map(
        self, status_code: int, content: bytes
    ) -> FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error_mapper: Final[
    ErrorMapper[FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody]
] = _FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError()
