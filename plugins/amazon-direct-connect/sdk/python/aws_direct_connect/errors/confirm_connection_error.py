from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmConnectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmConnectionError:
    def map(self, status_code: int, content: bytes) -> ConfirmConnectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_connection_error_mapper: Final[ErrorMapper[ConfirmConnectionErrorBody]] = _ConfirmConnectionError()
