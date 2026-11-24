from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

WeatherseasonsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _WeatherseasonsError:
    def map(self, status_code: int, content: bytes) -> WeatherseasonsErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


weatherseasons_error_mapper: Final[ErrorMapper[WeatherseasonsErrorBody]] = _WeatherseasonsError()
