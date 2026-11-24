from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TranscriptionStatusErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TranscriptionStatusError:
    def map(self, status_code: int, content: bytes) -> TranscriptionStatusErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


transcription_status_error_mapper: Final[ErrorMapper[TranscriptionStatusErrorBody]] = _TranscriptionStatusError()
