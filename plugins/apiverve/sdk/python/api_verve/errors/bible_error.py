from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BibleErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BibleError:
    def map(self, status_code: int, content: bytes) -> BibleErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


bible_error_mapper: Final[ErrorMapper[BibleErrorBody]] = _BibleError()
