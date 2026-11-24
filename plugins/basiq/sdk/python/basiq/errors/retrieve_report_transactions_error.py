from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.reports_transactions400_error1 import ReportsTransactions400Error1
from ..models.reports_transactions403_error1 import ReportsTransactions403Error1
from ..models.reports_transactions404_error1 import ReportsTransactions404Error1
from ..models.reports_transactions500_error1 import ReportsTransactions500Error1

RetrieveReportTransactionsErrorBody: TypeAlias = (
    ReportsTransactions400Error1
    | ReportsTransactions403Error1
    | ReportsTransactions404Error1
    | ReportsTransactions500Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _RetrieveReportTransactionsError:
    def map(self, status_code: int, content: bytes) -> RetrieveReportTransactionsErrorBody:
        match status_code:
            case 400:
                return decode_json[ReportsTransactions400Error1](content)
            case 403:
                return decode_json[ReportsTransactions403Error1](content)
            case 404:
                return decode_json[ReportsTransactions404Error1](content)
            case 500:
                return decode_json[ReportsTransactions500Error1](content)
            case _:
                return RawError(status_code, content)


retrieve_report_transactions_error_mapper: Final[
    ErrorMapper[RetrieveReportTransactionsErrorBody]
] = _RetrieveReportTransactionsError()
