from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.reports400_error21 import Reports400Error21
from ..models.reports403_error31 import Reports403Error31
from ..models.reports404_error31 import Reports404Error31
from ..models.reports500_error31 import Reports500Error31

DeleteReportErrorBody: TypeAlias = (
    Reports400Error21 | Reports403Error31 | Reports404Error31 | Reports500Error31 | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteReportError:
    def map(self, status_code: int, content: bytes) -> DeleteReportErrorBody:
        match status_code:
            case 400:
                return decode_json[Reports400Error21](content)
            case 403:
                return decode_json[Reports403Error31](content)
            case 404:
                return decode_json[Reports404Error31](content)
            case 500:
                return decode_json[Reports500Error31](content)
            case _:
                return RawError(status_code, content)


delete_report_error_mapper: Final[ErrorMapper[DeleteReportErrorBody]] = _DeleteReportError()
