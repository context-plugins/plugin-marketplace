from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteMedicalTranscriptionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteMedicalTranscriptionJobError:
    def map(self, status_code: int, content: bytes) -> DeleteMedicalTranscriptionJobErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_medical_transcription_job_error_mapper: Final[
    ErrorMapper[DeleteMedicalTranscriptionJobErrorBody]
] = _DeleteMedicalTranscriptionJobError()
