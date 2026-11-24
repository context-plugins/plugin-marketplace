from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMedicalTranscriptionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMedicalTranscriptionJobsError:
    def map(self, status_code: int, content: bytes) -> ListMedicalTranscriptionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_medical_transcription_jobs_error_mapper: Final[
    ErrorMapper[ListMedicalTranscriptionJobsErrorBody]
] = _ListMedicalTranscriptionJobsError()
