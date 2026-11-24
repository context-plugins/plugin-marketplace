from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SearchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SearchError:
    def map(self, status_code: int, content: bytes) -> SearchErrorBody:
        match status_code:
            case 400 | 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_error_mapper: Final[ErrorMapper[SearchErrorBody]] = _SearchError()
