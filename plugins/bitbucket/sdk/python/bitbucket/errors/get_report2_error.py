from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetReport2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetReport2Error:
    def map(self, status_code: int, content: bytes) -> GetReport2ErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_report2_error_mapper: Final[ErrorMapper[GetReport2ErrorBody]] = _GetReport2Error()
