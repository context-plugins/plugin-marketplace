from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListProjectBuildsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListProjectBuildsError:
    def map(self, status_code: int, content: bytes) -> ListProjectBuildsErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_project_builds_error_mapper: Final[ErrorMapper[ListProjectBuildsErrorBody]] = _ListProjectBuildsError()
