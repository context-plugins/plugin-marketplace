from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

NationaldebtErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _NationaldebtError:
    def map(self, status_code: int, content: bytes) -> NationaldebtErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


nationaldebt_error_mapper: Final[ErrorMapper[NationaldebtErrorBody]] = _NationaldebtError()
