from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RomannumeralmathErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RomannumeralmathError:
    def map(self, status_code: int, content: bytes) -> RomannumeralmathErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


romannumeralmath_error_mapper: Final[ErrorMapper[RomannumeralmathErrorBody]] = _RomannumeralmathError()
