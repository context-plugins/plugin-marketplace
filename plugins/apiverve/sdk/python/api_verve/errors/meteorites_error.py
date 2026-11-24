from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MeteoritesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MeteoritesError:
    def map(self, status_code: int, content: bytes) -> MeteoritesErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


meteorites_error_mapper: Final[ErrorMapper[MeteoritesErrorBody]] = _MeteoritesError()
