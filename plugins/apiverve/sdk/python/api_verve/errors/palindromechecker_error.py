from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PalindromecheckerErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PalindromecheckerError:
    def map(self, status_code: int, content: bytes) -> PalindromecheckerErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


palindromechecker_error_mapper: Final[ErrorMapper[PalindromecheckerErrorBody]] = _PalindromecheckerError()
