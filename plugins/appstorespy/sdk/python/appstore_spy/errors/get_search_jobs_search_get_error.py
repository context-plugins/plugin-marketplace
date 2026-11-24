from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.jobs_search401_error1 import JobsSearch401Error1

GetSearchJobsSearchGetErrorBody: TypeAlias = JobsSearch401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetSearchJobsSearchGetError:
    def map(self, status_code: int, content: bytes) -> GetSearchJobsSearchGetErrorBody:
        match status_code:
            case 401:
                return decode_json[JobsSearch401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_search_jobs_search_get_error_mapper: Final[
    ErrorMapper[GetSearchJobsSearchGetErrorBody]
] = _GetSearchJobsSearchGetError()
