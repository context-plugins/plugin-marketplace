from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmConnection2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmConnection2Error:
    def map(self, status_code: int, content: bytes) -> ConfirmConnection2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_connection2_error_mapper: Final[ErrorMapper[ConfirmConnection2ErrorBody]] = _ConfirmConnection2Error()
