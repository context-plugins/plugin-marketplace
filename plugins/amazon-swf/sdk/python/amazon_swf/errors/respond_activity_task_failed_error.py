from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondActivityTaskFailedErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondActivityTaskFailedError:
    def map(self, status_code: int, content: bytes) -> RespondActivityTaskFailedErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_activity_task_failed_error_mapper: Final[
    ErrorMapper[RespondActivityTaskFailedErrorBody]
] = _RespondActivityTaskFailedError()
