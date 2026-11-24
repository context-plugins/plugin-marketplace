from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListCreditCurrenciesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListCreditCurrenciesError:
    def map(self, status_code: int, content: bytes) -> ListCreditCurrenciesErrorBody:
        match status_code:
            case 403 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_credit_currencies_error_mapper: Final[ErrorMapper[ListCreditCurrenciesErrorBody]] = _ListCreditCurrenciesError()
