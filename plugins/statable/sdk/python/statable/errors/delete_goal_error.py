from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteGoalErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteGoalError:
    def map(self, status_code: int, content: bytes) -> DeleteGoalErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_goal_error_mapper: Final[ErrorMapper[DeleteGoalErrorBody]] = _DeleteGoalError()
