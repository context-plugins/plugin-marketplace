from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteTapePoolErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteTapePoolError:
    def map(self, status_code: int, content: bytes) -> DeleteTapePoolErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_tape_pool_error_mapper: Final[ErrorMapper[DeleteTapePoolErrorBody]] = _DeleteTapePoolError()
