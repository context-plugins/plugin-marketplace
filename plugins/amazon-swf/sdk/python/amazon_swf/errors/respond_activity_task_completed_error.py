from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondActivityTaskCompletedErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondActivityTaskCompletedError:
    def map(self, status_code: int, content: bytes) -> RespondActivityTaskCompletedErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_activity_task_completed_error_mapper: Final[
    ErrorMapper[RespondActivityTaskCompletedErrorBody]
] = _RespondActivityTaskCompletedError()
