from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_risk_checks401_error1 import ApiV2NumbersRiskChecks401Error1
from ..models.api_v2_numbers_risk_checks403_error1 import ApiV2NumbersRiskChecks403Error1

NumbersRiskChecksIndexErrorBody: TypeAlias = (
    ApiV2NumbersRiskChecks401Error1 | ApiV2NumbersRiskChecks403Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersRiskChecksIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersRiskChecksIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersRiskChecks401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersRiskChecks403Error1](content)
            case _:
                return RawError(status_code, content)


numbers_risk_checks_index_error_mapper: Final[
    ErrorMapper[NumbersRiskChecksIndexErrorBody]
] = _NumbersRiskChecksIndexError()
