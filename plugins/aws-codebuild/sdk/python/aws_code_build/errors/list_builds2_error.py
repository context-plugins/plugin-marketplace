from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListBuilds2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListBuilds2Error:
    def map(self, status_code: int, content: bytes) -> ListBuilds2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_builds2_error_mapper: Final[ErrorMapper[ListBuilds2ErrorBody]] = _ListBuilds2Error()
