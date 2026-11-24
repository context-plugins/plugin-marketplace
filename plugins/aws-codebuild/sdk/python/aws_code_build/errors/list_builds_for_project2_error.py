from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListBuildsForProject2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListBuildsForProject2Error:
    def map(self, status_code: int, content: bytes) -> ListBuildsForProject2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_builds_for_project2_error_mapper: Final[
    ErrorMapper[ListBuildsForProject2ErrorBody]
] = _ListBuildsForProject2Error()
