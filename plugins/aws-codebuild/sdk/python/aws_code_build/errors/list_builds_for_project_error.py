from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListBuildsForProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListBuildsForProjectError:
    def map(self, status_code: int, content: bytes) -> ListBuildsForProjectErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_builds_for_project_error_mapper: Final[ErrorMapper[ListBuildsForProjectErrorBody]] = _ListBuildsForProjectError()
