from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateConnectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateConnectionError:
    def map(self, status_code: int, content: bytes) -> UpdateConnectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_connection_error_mapper: Final[ErrorMapper[UpdateConnectionErrorBody]] = _UpdateConnectionError()
