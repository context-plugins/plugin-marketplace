from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListJobsV2JobsGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListJobsV2JobsGetError:
    def map(self, status_code: int, content: bytes) -> ListJobsV2JobsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_jobs_v2_jobs_get_error_mapper: Final[ErrorMapper[ListJobsV2JobsGetErrorBody]] = _ListJobsV2JobsGetError()
