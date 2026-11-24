from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteConnectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteConnectionError:
    def map(self, status_code: int, content: bytes) -> DeleteConnectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_connection_error_mapper: Final[ErrorMapper[DeleteConnectionErrorBody]] = _DeleteConnectionError()
