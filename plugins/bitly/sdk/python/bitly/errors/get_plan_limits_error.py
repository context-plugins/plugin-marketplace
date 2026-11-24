from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPlanLimitsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPlanLimitsError:
    def map(self, status_code: int, content: bytes) -> GetPlanLimitsErrorBody:
        match status_code:
            case 403 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_plan_limits_error_mapper: Final[ErrorMapper[GetPlanLimitsErrorBody]] = _GetPlanLimitsError()
