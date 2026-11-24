from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondActivityTaskCanceled2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondActivityTaskCanceled2Error:
    def map(self, status_code: int, content: bytes) -> RespondActivityTaskCanceled2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_activity_task_canceled2_error_mapper: Final[
    ErrorMapper[RespondActivityTaskCanceled2ErrorBody]
] = _RespondActivityTaskCanceled2Error()
