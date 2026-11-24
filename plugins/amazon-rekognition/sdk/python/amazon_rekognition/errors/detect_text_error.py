from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectTextErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectTextError:
    def map(self, status_code: int, content: bytes) -> DetectTextErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_text_error_mapper: Final[ErrorMapper[DetectTextErrorBody]] = _DetectTextError()
