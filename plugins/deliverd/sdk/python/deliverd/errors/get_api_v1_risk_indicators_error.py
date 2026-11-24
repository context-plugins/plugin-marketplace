from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1RiskIndicatorsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1RiskIndicatorsError:
    def map(self, status_code: int, content: bytes) -> GetApiV1RiskIndicatorsErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_risk_indicators_error_mapper: Final[
    ErrorMapper[GetApiV1RiskIndicatorsErrorBody]
] = _GetApiV1RiskIndicatorsError()
