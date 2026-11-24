from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MoonpositionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MoonpositionError:
    def map(self, status_code: int, content: bytes) -> MoonpositionErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


moonposition_error_mapper: Final[ErrorMapper[MoonpositionErrorBody]] = _MoonpositionError()
