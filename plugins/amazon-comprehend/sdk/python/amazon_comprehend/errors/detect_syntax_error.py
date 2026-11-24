from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectSyntaxErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectSyntaxError:
    def map(self, status_code: int, content: bytes) -> DetectSyntaxErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_syntax_error_mapper: Final[ErrorMapper[DetectSyntaxErrorBody]] = _DetectSyntaxError()
