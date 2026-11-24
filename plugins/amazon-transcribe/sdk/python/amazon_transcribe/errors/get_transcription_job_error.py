from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetTranscriptionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetTranscriptionJobError:
    def map(self, status_code: int, content: bytes) -> GetTranscriptionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_transcription_job_error_mapper: Final[ErrorMapper[GetTranscriptionJobErrorBody]] = _GetTranscriptionJobError()
