from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

FinishImportedJobV2JobsImportJobIdFinishPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _FinishImportedJobV2JobsImportJobIdFinishPostError:
    def map(self, status_code: int, content: bytes) -> FinishImportedJobV2JobsImportJobIdFinishPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


finish_imported_job_v2_jobs_import_job_id_finish_post_error_mapper: Final[
    ErrorMapper[FinishImportedJobV2JobsImportJobIdFinishPostErrorBody]
] = _FinishImportedJobV2JobsImportJobIdFinishPostError()
