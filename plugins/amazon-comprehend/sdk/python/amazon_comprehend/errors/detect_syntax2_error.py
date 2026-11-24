from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectSyntax2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectSyntax2Error:
    def map(self, status_code: int, content: bytes) -> DetectSyntax2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_syntax2_error_mapper: Final[ErrorMapper[DetectSyntax2ErrorBody]] = _DetectSyntax2Error()
