from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetMedicalTranscriptionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetMedicalTranscriptionJobError:
    def map(self, status_code: int, content: bytes) -> GetMedicalTranscriptionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_medical_transcription_job_error_mapper: Final[
    ErrorMapper[GetMedicalTranscriptionJobErrorBody]
] = _GetMedicalTranscriptionJobError()
