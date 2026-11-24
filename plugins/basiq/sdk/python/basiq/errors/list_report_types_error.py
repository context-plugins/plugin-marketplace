from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.reports_types400_error1 import ReportsTypes400Error1
from ..models.reports_types403_error1 import ReportsTypes403Error1
from ..models.reports_types404_error1 import ReportsTypes404Error1
from ..models.reports_types500_error1 import ReportsTypes500Error1

ListReportTypesErrorBody: TypeAlias = (
    ReportsTypes400Error1 | ReportsTypes403Error1 | ReportsTypes404Error1 | ReportsTypes500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _ListReportTypesError:
    def map(self, status_code: int, content: bytes) -> ListReportTypesErrorBody:
        match status_code:
            case 400:
                return decode_json[ReportsTypes400Error1](content)
            case 403:
                return decode_json[ReportsTypes403Error1](content)
            case 404:
                return decode_json[ReportsTypes404Error1](content)
            case 500:
                return decode_json[ReportsTypes500Error1](content)
            case _:
                return RawError(status_code, content)


list_report_types_error_mapper: Final[ErrorMapper[ListReportTypesErrorBody]] = _ListReportTypesError()
