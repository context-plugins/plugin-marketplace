from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListProjectsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListProjectsError:
    def map(self, status_code: int, content: bytes) -> ListProjectsErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_projects_error_mapper: Final[ErrorMapper[ListProjectsErrorBody]] = _ListProjectsError()
