from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_expenses400_error1 import UsersExpenses400Error1
from ..models.users_expenses403_error1 import UsersExpenses403Error1
from ..models.users_expenses404_error1 import UsersExpenses404Error1
from ..models.users_expenses500_error1 import UsersExpenses500Error1

PostExpensesErrorBody: TypeAlias = (
    UsersExpenses400Error1 | UsersExpenses403Error1 | UsersExpenses404Error1 | UsersExpenses500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PostExpensesError:
    def map(self, status_code: int, content: bytes) -> PostExpensesErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersExpenses400Error1](content)
            case 403:
                return decode_json[UsersExpenses403Error1](content)
            case 404:
                return decode_json[UsersExpenses404Error1](content)
            case 500:
                return decode_json[UsersExpenses500Error1](content)
            case _:
                return RawError(status_code, content)


post_expenses_error_mapper: Final[ErrorMapper[PostExpensesErrorBody]] = _PostExpensesError()
