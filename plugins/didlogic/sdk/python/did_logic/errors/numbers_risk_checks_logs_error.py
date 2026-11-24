from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_risk_checks_logs401_error1 import ApiV2NumbersRiskChecksLogs401Error1
from ..models.api_v2_numbers_risk_checks_logs403_error1 import ApiV2NumbersRiskChecksLogs403Error1

NumbersRiskChecksLogsErrorBody: TypeAlias = (
    ApiV2NumbersRiskChecksLogs401Error1 | ApiV2NumbersRiskChecksLogs403Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersRiskChecksLogsError:
    def map(self, status_code: int, content: bytes) -> NumbersRiskChecksLogsErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersRiskChecksLogs401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersRiskChecksLogs403Error1](content)
            case _:
                return RawError(status_code, content)


numbers_risk_checks_logs_error_mapper: Final[
    ErrorMapper[NumbersRiskChecksLogsErrorBody]
] = _NumbersRiskChecksLogsError()
