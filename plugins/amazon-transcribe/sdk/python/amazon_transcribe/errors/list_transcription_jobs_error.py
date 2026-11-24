from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTranscriptionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTranscriptionJobsError:
    def map(self, status_code: int, content: bytes) -> ListTranscriptionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_transcription_jobs_error_mapper: Final[ErrorMapper[ListTranscriptionJobsErrorBody]] = _ListTranscriptionJobsError()
