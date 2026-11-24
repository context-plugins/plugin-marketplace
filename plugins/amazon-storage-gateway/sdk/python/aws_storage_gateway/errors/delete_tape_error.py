from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteTapeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteTapeError:
    def map(self, status_code: int, content: bytes) -> DeleteTapeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_tape_error_mapper: Final[ErrorMapper[DeleteTapeErrorBody]] = _DeleteTapeError()
