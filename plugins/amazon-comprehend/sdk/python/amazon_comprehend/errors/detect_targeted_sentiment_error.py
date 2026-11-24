from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectTargetedSentimentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectTargetedSentimentError:
    def map(self, status_code: int, content: bytes) -> DetectTargetedSentimentErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_targeted_sentiment_error_mapper: Final[
    ErrorMapper[DetectTargetedSentimentErrorBody]
] = _DetectTargetedSentimentError()
