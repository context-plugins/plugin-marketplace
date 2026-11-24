from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSharedProjectsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSharedProjectsError:
    def map(self, status_code: int, content: bytes) -> ListSharedProjectsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_shared_projects_error_mapper: Final[ErrorMapper[ListSharedProjectsErrorBody]] = _ListSharedProjectsError()
