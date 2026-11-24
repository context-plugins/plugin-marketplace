from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreditBalanceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreditBalanceError:
    def map(self, status_code: int, content: bytes) -> CreditBalanceErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


credit_balance_error_mapper: Final[ErrorMapper[CreditBalanceErrorBody]] = _CreditBalanceError()
