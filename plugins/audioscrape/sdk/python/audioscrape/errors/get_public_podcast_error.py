from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

GetPublicPodcastErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _GetPublicPodcastError:
    def map(self, status_code: int, content: bytes) -> GetPublicPodcastErrorBody:
        match status_code:
            case 401 | 402 | 403 | 404 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


get_public_podcast_error_mapper: Final[ErrorMapper[GetPublicPodcastErrorBody]] = _GetPublicPodcastError()
