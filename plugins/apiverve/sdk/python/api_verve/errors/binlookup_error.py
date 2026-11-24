from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BinlookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BinlookupError:
    def map(self, status_code: int, content: bytes) -> BinlookupErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


binlookup_error_mapper: Final[ErrorMapper[BinlookupErrorBody]] = _BinlookupError()
