from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchDetectSentimentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchDetectSentimentError:
    def map(self, status_code: int, content: bytes) -> BatchDetectSentimentErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_detect_sentiment_error_mapper: Final[ErrorMapper[BatchDetectSentimentErrorBody]] = _BatchDetectSentimentError()
