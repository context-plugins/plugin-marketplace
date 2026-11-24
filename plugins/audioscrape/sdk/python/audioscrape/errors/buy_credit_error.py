from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BuyCreditErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BuyCreditError:
    def map(self, status_code: int, content: bytes) -> BuyCreditErrorBody:
        match status_code:
            case 402 | 409 | 503:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


buy_credit_error_mapper: Final[ErrorMapper[BuyCreditErrorBody]] = _BuyCreditError()
