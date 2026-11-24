from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEpicsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEpicsError:
    def map(self, status_code: int, content: bytes) -> ListEpicsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_epics_error_mapper: Final[ErrorMapper[ListEpicsErrorBody]] = _ListEpicsError()
