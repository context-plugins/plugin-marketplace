from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondActivityTaskCompleted2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondActivityTaskCompleted2Error:
    def map(self, status_code: int, content: bytes) -> RespondActivityTaskCompleted2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_activity_task_completed2_error_mapper: Final[
    ErrorMapper[RespondActivityTaskCompleted2ErrorBody]
] = _RespondActivityTaskCompleted2Error()
