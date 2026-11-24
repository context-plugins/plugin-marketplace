from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

GetApiV2TranscriptsJobsByJobIdErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV2TranscriptsJobsByJobIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV2TranscriptsJobsByJobIdErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


get_api_v2_transcripts_jobs_by_job_id_error_mapper: Final[
    ErrorMapper[GetApiV2TranscriptsJobsByJobIdErrorBody]
] = _GetApiV2TranscriptsJobsByJobIdError()
