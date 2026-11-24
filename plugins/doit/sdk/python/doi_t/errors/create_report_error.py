from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateReportErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateReportError:
    def map(self, status_code: int, content: bytes) -> CreateReportErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_report_error_mapper: Final[ErrorMapper[CreateReportErrorBody]] = _CreateReportError()
