from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchDetectSyntaxErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchDetectSyntaxError:
    def map(self, status_code: int, content: bytes) -> BatchDetectSyntaxErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_detect_syntax_error_mapper: Final[ErrorMapper[BatchDetectSyntaxErrorBody]] = _BatchDetectSyntaxError()
