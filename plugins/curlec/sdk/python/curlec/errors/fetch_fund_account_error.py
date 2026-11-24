from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchFundAccountErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchFundAccountError:
    def map(self, status_code: int, content: bytes) -> FetchFundAccountErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_fund_account_error_mapper: Final[ErrorMapper[FetchFundAccountErrorBody]] = _FetchFundAccountError()
