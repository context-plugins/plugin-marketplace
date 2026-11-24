from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_accounts400_error1 import UsersAccounts400Error1
from ..models.users_accounts403_error1 import UsersAccounts403Error1
from ..models.users_accounts404_error1 import UsersAccounts404Error1
from ..models.users_accounts500_error1 import UsersAccounts500Error1

GetAccountErrorBody: TypeAlias = (
    UsersAccounts400Error1 | UsersAccounts403Error1 | UsersAccounts404Error1 | UsersAccounts500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetAccountError:
    def map(self, status_code: int, content: bytes) -> GetAccountErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersAccounts400Error1](content)
            case 403:
                return decode_json[UsersAccounts403Error1](content)
            case 404:
                return decode_json[UsersAccounts404Error1](content)
            case 500:
                return decode_json[UsersAccounts500Error1](content)
            case _:
                return RawError(status_code, content)


get_account_error_mapper: Final[ErrorMapper[GetAccountErrorBody]] = _GetAccountError()
