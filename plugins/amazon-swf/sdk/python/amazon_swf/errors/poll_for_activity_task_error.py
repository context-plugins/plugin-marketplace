from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PollForActivityTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PollForActivityTaskError:
    def map(self, status_code: int, content: bytes) -> PollForActivityTaskErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


poll_for_activity_task_error_mapper: Final[ErrorMapper[PollForActivityTaskErrorBody]] = _PollForActivityTaskError()
