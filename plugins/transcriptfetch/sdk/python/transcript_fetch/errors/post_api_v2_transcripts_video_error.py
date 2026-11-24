from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

PostApiV2TranscriptsVideoErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV2TranscriptsVideoError:
    def map(self, status_code: int, content: bytes) -> PostApiV2TranscriptsVideoErrorBody:
        match status_code:
            case 400 | 401 | 402 | 409 | 422 | 429 | 502 | 503:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


post_api_v2_transcripts_video_error_mapper: Final[
    ErrorMapper[PostApiV2TranscriptsVideoErrorBody]
] = _PostApiV2TranscriptsVideoError()
