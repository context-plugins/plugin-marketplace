from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateTapePoolErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateTapePoolError:
    def map(self, status_code: int, content: bytes) -> CreateTapePoolErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_tape_pool_error_mapper: Final[ErrorMapper[CreateTapePoolErrorBody]] = _CreateTapePoolError()
