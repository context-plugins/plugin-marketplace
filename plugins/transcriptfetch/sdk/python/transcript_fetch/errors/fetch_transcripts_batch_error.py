from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

FetchTranscriptsBatchErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _FetchTranscriptsBatchError:
    def map(self, status_code: int, content: bytes) -> FetchTranscriptsBatchErrorBody:
        match status_code:
            case 400 | 401 | 402 | 409 | 429:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


fetch_transcripts_batch_error_mapper: Final[ErrorMapper[FetchTranscriptsBatchErrorBody]] = _FetchTranscriptsBatchError()
