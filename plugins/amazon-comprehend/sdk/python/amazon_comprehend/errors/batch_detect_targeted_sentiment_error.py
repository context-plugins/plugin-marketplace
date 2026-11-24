from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchDetectTargetedSentimentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchDetectTargetedSentimentError:
    def map(self, status_code: int, content: bytes) -> BatchDetectTargetedSentimentErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_detect_targeted_sentiment_error_mapper: Final[
    ErrorMapper[BatchDetectTargetedSentimentErrorBody]
] = _BatchDetectTargetedSentimentError()
