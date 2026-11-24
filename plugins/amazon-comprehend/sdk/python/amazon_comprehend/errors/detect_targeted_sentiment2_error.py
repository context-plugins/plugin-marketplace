from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectTargetedSentiment2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectTargetedSentiment2Error:
    def map(self, status_code: int, content: bytes) -> DetectTargetedSentiment2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_targeted_sentiment2_error_mapper: Final[
    ErrorMapper[DetectTargetedSentiment2ErrorBody]
] = _DetectTargetedSentiment2Error()
