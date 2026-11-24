from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFlywheelIterationHistoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFlywheelIterationHistoryError:
    def map(self, status_code: int, content: bytes) -> ListFlywheelIterationHistoryErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_flywheel_iteration_history_error_mapper: Final[
    ErrorMapper[ListFlywheelIterationHistoryErrorBody]
] = _ListFlywheelIterationHistoryError()
