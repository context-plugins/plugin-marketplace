from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

GetTranscriptJobErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _GetTranscriptJobError:
    def map(self, status_code: int, content: bytes) -> GetTranscriptJobErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


get_transcript_job_error_mapper: Final[ErrorMapper[GetTranscriptJobErrorBody]] = _GetTranscriptJobError()
