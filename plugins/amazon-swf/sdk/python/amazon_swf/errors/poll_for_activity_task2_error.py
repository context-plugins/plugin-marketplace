from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PollForActivityTask2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PollForActivityTask2Error:
    def map(self, status_code: int, content: bytes) -> PollForActivityTask2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


poll_for_activity_task2_error_mapper: Final[ErrorMapper[PollForActivityTask2ErrorBody]] = _PollForActivityTask2Error()
