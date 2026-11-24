from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

StartJobsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _StartJobsError:
    def map(self, status_code: int, content: bytes) -> StartJobsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


start_jobs_error_mapper: Final[ErrorMapper[StartJobsErrorBody]] = _StartJobsError()
