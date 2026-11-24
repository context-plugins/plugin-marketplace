from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondActivityTaskFailed2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondActivityTaskFailed2Error:
    def map(self, status_code: int, content: bytes) -> RespondActivityTaskFailed2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_activity_task_failed2_error_mapper: Final[
    ErrorMapper[RespondActivityTaskFailed2ErrorBody]
] = _RespondActivityTaskFailed2Error()
