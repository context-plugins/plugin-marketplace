from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountryboundariesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountryboundariesError:
    def map(self, status_code: int, content: bytes) -> CountryboundariesErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


countryboundaries_error_mapper: Final[ErrorMapper[CountryboundariesErrorBody]] = _CountryboundariesError()
