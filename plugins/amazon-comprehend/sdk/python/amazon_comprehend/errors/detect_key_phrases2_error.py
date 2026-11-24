from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectKeyPhrases2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectKeyPhrases2Error:
    def map(self, status_code: int, content: bytes) -> DetectKeyPhrases2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_key_phrases2_error_mapper: Final[ErrorMapper[DetectKeyPhrases2ErrorBody]] = _DetectKeyPhrases2Error()
