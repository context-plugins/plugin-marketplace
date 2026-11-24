from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListExecutionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListExecutionsError:
    def map(self, status_code: int, content: bytes) -> ListExecutionsErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_executions_error_mapper: Final[ErrorMapper[ListExecutionsErrorBody]] = _ListExecutionsError()
