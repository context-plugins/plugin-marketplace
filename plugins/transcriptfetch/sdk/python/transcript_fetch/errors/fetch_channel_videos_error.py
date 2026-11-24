from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

FetchChannelVideosErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _FetchChannelVideosError:
    def map(self, status_code: int, content: bytes) -> FetchChannelVideosErrorBody:
        match status_code:
            case 400 | 401 | 402 | 409 | 422 | 429 | 502 | 503:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


fetch_channel_videos_error_mapper: Final[ErrorMapper[FetchChannelVideosErrorBody]] = _FetchChannelVideosError()
