from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListJobsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListJobsError:
    def map(self, status_code: int, content: bytes) -> ListJobsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_jobs_error_mapper: Final[ErrorMapper[ListJobsErrorBody]] = _ListJobsError()
