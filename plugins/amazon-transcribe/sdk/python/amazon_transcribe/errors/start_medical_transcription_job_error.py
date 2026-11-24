from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartMedicalTranscriptionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartMedicalTranscriptionJobError:
    def map(self, status_code: int, content: bytes) -> StartMedicalTranscriptionJobErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_medical_transcription_job_error_mapper: Final[
    ErrorMapper[StartMedicalTranscriptionJobErrorBody]
] = _StartMedicalTranscriptionJobError()
