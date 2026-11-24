from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListBuildsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListBuildsError:
    def map(self, status_code: int, content: bytes) -> ListBuildsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_builds_error_mapper: Final[ErrorMapper[ListBuildsErrorBody]] = _ListBuildsError()
