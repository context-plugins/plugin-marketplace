from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetExpenseRatioInsightsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetExpenseRatioInsightsError:
    def map(self, status_code: int, content: bytes) -> GetExpenseRatioInsightsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_expense_ratio_insights_error_mapper: Final[
    ErrorMapper[GetExpenseRatioInsightsErrorBody]
] = _GetExpenseRatioInsightsError()
