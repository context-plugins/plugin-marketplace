from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListFundAccountValidationsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListFundAccountValidationsError:
    def map(self, status_code: int, content: bytes) -> ListFundAccountValidationsErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_fund_account_validations_error_mapper: Final[
    ErrorMapper[ListFundAccountValidationsErrorBody]
] = _ListFundAccountValidationsError()
