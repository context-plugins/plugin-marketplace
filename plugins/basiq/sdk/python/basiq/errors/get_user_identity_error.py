from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_identities400_error1 import UsersIdentities400Error1
from ..models.users_identities403_error1 import UsersIdentities403Error1
from ..models.users_identities404_error1 import UsersIdentities404Error1
from ..models.users_identities500_error1 import UsersIdentities500Error1

GetUserIdentityErrorBody: TypeAlias = (
    UsersIdentities400Error1 | UsersIdentities403Error1 | UsersIdentities404Error1 | UsersIdentities500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetUserIdentityError:
    def map(self, status_code: int, content: bytes) -> GetUserIdentityErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersIdentities400Error1](content)
            case 403:
                return decode_json[UsersIdentities403Error1](content)
            case 404:
                return decode_json[UsersIdentities404Error1](content)
            case 500:
                return decode_json[UsersIdentities500Error1](content)
            case _:
                return RawError(status_code, content)


get_user_identity_error_mapper: Final[ErrorMapper[GetUserIdentityErrorBody]] = _GetUserIdentityError()
