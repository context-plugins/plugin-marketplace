from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_income400_error1 import UsersIncome400Error1
from ..models.users_income403_error1 import UsersIncome403Error1
from ..models.users_income404_error1 import UsersIncome404Error1
from ..models.users_income500_error1 import UsersIncome500Error1

GetIncomeErrorBody: TypeAlias = (
    UsersIncome400Error1 | UsersIncome403Error1 | UsersIncome404Error1 | UsersIncome500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetIncomeError:
    def map(self, status_code: int, content: bytes) -> GetIncomeErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersIncome400Error1](content)
            case 403:
                return decode_json[UsersIncome403Error1](content)
            case 404:
                return decode_json[UsersIncome404Error1](content)
            case 500:
                return decode_json[UsersIncome500Error1](content)
            case _:
                return RawError(status_code, content)


get_income_error_mapper: Final[ErrorMapper[GetIncomeErrorBody]] = _GetIncomeError()
