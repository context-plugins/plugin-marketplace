from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateCreditCurrencyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateCreditCurrencyError:
    def map(self, status_code: int, content: bytes) -> CreateCreditCurrencyErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_credit_currency_error_mapper: Final[ErrorMapper[CreateCreditCurrencyErrorBody]] = _CreateCreditCurrencyError()
