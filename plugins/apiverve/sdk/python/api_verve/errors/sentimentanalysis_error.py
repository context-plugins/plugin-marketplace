from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SentimentanalysisErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SentimentanalysisError:
    def map(self, status_code: int, content: bytes) -> SentimentanalysisErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


sentimentanalysis_error_mapper: Final[ErrorMapper[SentimentanalysisErrorBody]] = _SentimentanalysisError()
