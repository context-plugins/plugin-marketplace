from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_transactions400_error1 import UsersTransactions400Error1
from ..models.users_transactions403_error1 import UsersTransactions403Error1
from ..models.users_transactions404_error1 import UsersTransactions404Error1
from ..models.users_transactions500_error1 import UsersTransactions500Error1

GetTransactionsErrorBody: TypeAlias = (
    UsersTransactions400Error1
    | UsersTransactions403Error1
    | UsersTransactions404Error1
    | UsersTransactions500Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetTransactionsError:
    def map(self, status_code: int, content: bytes) -> GetTransactionsErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersTransactions400Error1](content)
            case 403:
                return decode_json[UsersTransactions403Error1](content)
            case 404:
                return decode_json[UsersTransactions404Error1](content)
            case 500:
                return decode_json[UsersTransactions500Error1](content)
            case _:
                return RawError(status_code, content)


get_transactions_error_mapper: Final[ErrorMapper[GetTransactionsErrorBody]] = _GetTransactionsError()
