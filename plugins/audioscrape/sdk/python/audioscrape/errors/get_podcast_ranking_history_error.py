from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

GetPodcastRankingHistoryErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _GetPodcastRankingHistoryError:
    def map(self, status_code: int, content: bytes) -> GetPodcastRankingHistoryErrorBody:
        match status_code:
            case 401 | 402 | 403 | 404 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


get_podcast_ranking_history_error_mapper: Final[
    ErrorMapper[GetPodcastRankingHistoryErrorBody]
] = _GetPodcastRankingHistoryError()
