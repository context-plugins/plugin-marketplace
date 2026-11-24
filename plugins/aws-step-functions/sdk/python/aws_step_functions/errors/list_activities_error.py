from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListActivitiesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListActivitiesError:
    def map(self, status_code: int, content: bytes) -> ListActivitiesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_activities_error_mapper: Final[ErrorMapper[ListActivitiesErrorBody]] = _ListActivitiesError()
