from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SentimentFeedErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SentimentFeedError:
    def map(self, status_code: int, content: bytes) -> SentimentFeedErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


sentiment_feed_error_mapper: Final[ErrorMapper[SentimentFeedErrorBody]] = _SentimentFeedError()
