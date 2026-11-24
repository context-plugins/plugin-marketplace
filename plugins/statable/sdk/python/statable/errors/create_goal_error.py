from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateGoalErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateGoalError:
    def map(self, status_code: int, content: bytes) -> CreateGoalErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_goal_error_mapper: Final[ErrorMapper[CreateGoalErrorBody]] = _CreateGoalError()
