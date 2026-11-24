from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreatePlanErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreatePlanError:
    def map(self, status_code: int, content: bytes) -> CreatePlanErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_plan_error_mapper: Final[ErrorMapper[CreatePlanErrorBody]] = _CreatePlanError()
