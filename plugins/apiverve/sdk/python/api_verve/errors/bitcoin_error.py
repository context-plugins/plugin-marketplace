from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BitcoinErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BitcoinError:
    def map(self, status_code: int, content: bytes) -> BitcoinErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


bitcoin_error_mapper: Final[ErrorMapper[BitcoinErrorBody]] = _BitcoinError()
