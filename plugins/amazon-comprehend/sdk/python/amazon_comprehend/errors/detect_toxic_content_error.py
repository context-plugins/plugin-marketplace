from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectToxicContentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectToxicContentError:
    def map(self, status_code: int, content: bytes) -> DetectToxicContentErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_toxic_content_error_mapper: Final[ErrorMapper[DetectToxicContentErrorBody]] = _DetectToxicContentError()
