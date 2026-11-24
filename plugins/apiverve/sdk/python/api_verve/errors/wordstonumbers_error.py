from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

WordstonumbersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _WordstonumbersError:
    def map(self, status_code: int, content: bytes) -> WordstonumbersErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


wordstonumbers_error_mapper: Final[ErrorMapper[WordstonumbersErrorBody]] = _WordstonumbersError()
