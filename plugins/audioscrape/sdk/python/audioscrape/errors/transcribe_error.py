from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TranscribeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TranscribeError:
    def map(self, status_code: int, content: bytes) -> TranscribeErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


transcribe_error_mapper: Final[ErrorMapper[TranscribeErrorBody]] = _TranscribeError()
