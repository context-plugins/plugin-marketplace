from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

OrderWholesaleNumberErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _OrderWholesaleNumberError:
    def map(self, status_code: int, content: bytes) -> OrderWholesaleNumberErrorBody:
        match status_code:
            case 400 | 402 | 403 | 502:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


order_wholesale_number_error_mapper: Final[ErrorMapper[OrderWholesaleNumberErrorBody]] = _OrderWholesaleNumberError()
