from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_risk_checks401_error1 import ApiV2NumbersRiskChecks401Error1
from ..models.api_v2_numbers_risk_checks403_error1 import ApiV2NumbersRiskChecks403Error1
from ..models.unions.api_v2_numbers_risk_checks_response21 import ApiV2NumbersRiskChecksResponse21

NumbersRiskChecksCreateErrorBody: TypeAlias = (
    ApiV2NumbersRiskChecks401Error1 | ApiV2NumbersRiskChecks403Error1 | ApiV2NumbersRiskChecksResponse21 | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersRiskChecksCreateError:
    def map(self, status_code: int, content: bytes) -> NumbersRiskChecksCreateErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersRiskChecks401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersRiskChecks403Error1](content)
            case 422:
                return decode_json[ApiV2NumbersRiskChecksResponse21](content)
            case _:
                return RawError(status_code, content)


numbers_risk_checks_create_error_mapper: Final[
    ErrorMapper[NumbersRiskChecksCreateErrorBody]
] = _NumbersRiskChecksCreateError()
