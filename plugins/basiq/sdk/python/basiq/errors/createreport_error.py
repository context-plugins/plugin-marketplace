from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.reports403_error1 import Reports403Error1
from ..models.reports404_error1 import Reports404Error1
from ..models.reports500_error1 import Reports500Error1
from ..models.unions.reports_response12 import ReportsResponse12

CreatereportErrorBody: TypeAlias = ReportsResponse12 | Reports403Error1 | Reports404Error1 | Reports500Error1 | RawError


@dataclass(frozen=True, slots=True)
class _CreatereportError:
    def map(self, status_code: int, content: bytes) -> CreatereportErrorBody:
        match status_code:
            case 400:
                return decode_json[ReportsResponse12](content)
            case 403:
                return decode_json[Reports403Error1](content)
            case 404:
                return decode_json[Reports404Error1](content)
            case 500:
                return decode_json[Reports500Error1](content)
            case _:
                return RawError(status_code, content)


createreport_error_mapper: Final[ErrorMapper[CreatereportErrorBody]] = _CreatereportError()
