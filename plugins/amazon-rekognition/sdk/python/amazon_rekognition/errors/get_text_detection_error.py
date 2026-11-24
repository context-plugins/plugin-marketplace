from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetTextDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetTextDetectionError:
    def map(self, status_code: int, content: bytes) -> GetTextDetectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_text_detection_error_mapper: Final[ErrorMapper[GetTextDetectionErrorBody]] = _GetTextDetectionError()
