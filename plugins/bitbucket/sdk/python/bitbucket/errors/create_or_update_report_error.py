from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateOrUpdateReportErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateOrUpdateReportError:
    def map(self, status_code: int, content: bytes) -> CreateOrUpdateReportErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_or_update_report_error_mapper: Final[ErrorMapper[CreateOrUpdateReportErrorBody]] = _CreateOrUpdateReportError()
