from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEpicHealthsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEpicHealthsError:
    def map(self, status_code: int, content: bytes) -> ListEpicHealthsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_epic_healths_error_mapper: Final[ErrorMapper[ListEpicHealthsErrorBody]] = _ListEpicHealthsError()
