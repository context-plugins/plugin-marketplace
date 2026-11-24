from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssignTapePool2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssignTapePool2Error:
    def map(self, status_code: int, content: bytes) -> AssignTapePool2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


assign_tape_pool2_error_mapper: Final[ErrorMapper[AssignTapePool2ErrorBody]] = _AssignTapePool2Error()
