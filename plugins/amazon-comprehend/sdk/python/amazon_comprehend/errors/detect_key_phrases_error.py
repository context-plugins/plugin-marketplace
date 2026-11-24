from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectKeyPhrasesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectKeyPhrasesError:
    def map(self, status_code: int, content: bytes) -> DetectKeyPhrasesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_key_phrases_error_mapper: Final[ErrorMapper[DetectKeyPhrasesErrorBody]] = _DetectKeyPhrasesError()
