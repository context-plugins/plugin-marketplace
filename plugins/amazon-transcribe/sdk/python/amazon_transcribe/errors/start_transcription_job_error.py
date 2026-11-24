from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartTranscriptionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartTranscriptionJobError:
    def map(self, status_code: int, content: bytes) -> StartTranscriptionJobErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_transcription_job_error_mapper: Final[ErrorMapper[StartTranscriptionJobErrorBody]] = _StartTranscriptionJobError()
