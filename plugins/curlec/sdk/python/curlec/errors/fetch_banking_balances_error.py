from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchBankingBalancesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchBankingBalancesError:
    def map(self, status_code: int, content: bytes) -> FetchBankingBalancesErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_banking_balances_error_mapper: Final[ErrorMapper[FetchBankingBalancesErrorBody]] = _FetchBankingBalancesError()
