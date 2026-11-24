from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateProcessSchedulesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateProcessSchedulesError:
    def map(self, status_code: int, content: bytes) -> UpdateProcessSchedulesErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_process_schedules_error_mapper: Final[
    ErrorMapper[UpdateProcessSchedulesErrorBody]
] = _UpdateProcessSchedulesError()
