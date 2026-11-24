from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectSentiment2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectSentiment2Error:
    def map(self, status_code: int, content: bytes) -> DetectSentiment2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_sentiment2_error_mapper: Final[ErrorMapper[DetectSentiment2ErrorBody]] = _DetectSentiment2Error()
