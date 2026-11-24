from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CancelArchivalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CancelArchivalError:
    def map(self, status_code: int, content: bytes) -> CancelArchivalErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cancel_archival_error_mapper: Final[ErrorMapper[CancelArchivalErrorBody]] = _CancelArchivalError()
