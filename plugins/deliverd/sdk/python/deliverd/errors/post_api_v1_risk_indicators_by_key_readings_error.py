from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1RiskIndicatorsByKeyReadingsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1RiskIndicatorsByKeyReadingsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1RiskIndicatorsByKeyReadingsErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_risk_indicators_by_key_readings_error_mapper: Final[
    ErrorMapper[PostApiV1RiskIndicatorsByKeyReadingsErrorBody]
] = _PostApiV1RiskIndicatorsByKeyReadingsError()
