from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_auth_link400_error1 import UsersAuthLink400Error1
from ..models.users_auth_link401_error1 import UsersAuthLink401Error1
from ..models.users_auth_link404_error1 import UsersAuthLink404Error1
from ..models.users_auth_link500_error1 import UsersAuthLink500Error1
from ..models.users_auth_link503_error1 import UsersAuthLink503Error1

DeleteAuthLinkErrorBody: TypeAlias = (
    UsersAuthLink400Error1
    | UsersAuthLink401Error1
    | UsersAuthLink404Error1
    | UsersAuthLink500Error1
    | UsersAuthLink503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteAuthLinkError:
    def map(self, status_code: int, content: bytes) -> DeleteAuthLinkErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersAuthLink400Error1](content)
            case 401:
                return decode_json[UsersAuthLink401Error1](content)
            case 404:
                return decode_json[UsersAuthLink404Error1](content)
            case 500:
                return decode_json[UsersAuthLink500Error1](content)
            case 503:
                return decode_json[UsersAuthLink503Error1](content)
            case _:
                return RawError(status_code, content)


delete_auth_link_error_mapper: Final[ErrorMapper[DeleteAuthLinkErrorBody]] = _DeleteAuthLinkError()
