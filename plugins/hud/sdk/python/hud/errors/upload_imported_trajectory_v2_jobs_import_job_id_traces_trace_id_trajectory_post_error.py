from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError:
    def map(
        self, status_code: int, content: bytes
    ) -> UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error_mapper: Final[
    ErrorMapper[UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody]
] = _UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError()
