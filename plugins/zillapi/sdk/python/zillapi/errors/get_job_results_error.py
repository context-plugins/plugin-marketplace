from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetJobResultsErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetJobResultsError:
    def map(self, status_code: int, content: bytes) -> GetJobResultsErrorBody:
        match status_code:
            case 404 | 409:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_job_results_error_mapper: Final[ErrorMapper[GetJobResultsErrorBody]] = _GetJobResultsError()
