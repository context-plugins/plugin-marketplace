from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssignTapePoolErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssignTapePoolError:
    def map(self, status_code: int, content: bytes) -> AssignTapePoolErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


assign_tape_pool_error_mapper: Final[ErrorMapper[AssignTapePoolErrorBody]] = _AssignTapePoolError()
