from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchRecommendationsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchRecommendationsError:
    def map(self, status_code: int, content: bytes) -> FetchRecommendationsErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_recommendations_error_mapper: Final[ErrorMapper[FetchRecommendationsErrorBody]] = _FetchRecommendationsError()
