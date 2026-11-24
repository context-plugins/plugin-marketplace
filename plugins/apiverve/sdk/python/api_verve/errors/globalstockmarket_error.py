from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GlobalstockmarketErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GlobalstockmarketError:
    def map(self, status_code: int, content: bytes) -> GlobalstockmarketErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


globalstockmarket_error_mapper: Final[ErrorMapper[GlobalstockmarketErrorBody]] = _GlobalstockmarketError()
