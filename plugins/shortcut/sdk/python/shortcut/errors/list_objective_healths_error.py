from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListObjectiveHealthsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListObjectiveHealthsError:
    def map(self, status_code: int, content: bytes) -> ListObjectiveHealthsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_objective_healths_error_mapper: Final[ErrorMapper[ListObjectiveHealthsErrorBody]] = _ListObjectiveHealthsError()
