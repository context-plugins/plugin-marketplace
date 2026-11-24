from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

SearchPodcastsV1ErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _SearchPodcastsV1Error:
    def map(self, status_code: int, content: bytes) -> SearchPodcastsV1ErrorBody:
        match status_code:
            case 401 | 402 | 403 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


search_podcasts_v1_error_mapper: Final[ErrorMapper[SearchPodcastsV1ErrorBody]] = _SearchPodcastsV1Error()
