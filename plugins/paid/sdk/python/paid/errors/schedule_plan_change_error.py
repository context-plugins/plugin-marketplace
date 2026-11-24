from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SchedulePlanChangeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SchedulePlanChangeError:
    def map(self, status_code: int, content: bytes) -> SchedulePlanChangeErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


schedule_plan_change_error_mapper: Final[ErrorMapper[SchedulePlanChangeErrorBody]] = _SchedulePlanChangeError()
