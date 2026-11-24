from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_consents400_error1 import UsersConsents400Error1
from ..models.users_consents401_error1 import UsersConsents401Error1
from ..models.users_consents403_error1 import UsersConsents403Error1
from ..models.users_consents404_error1 import UsersConsents404Error1
from ..models.users_consents500_error1 import UsersConsents500Error1

GetConsentsErrorBody: TypeAlias = (
    UsersConsents400Error1
    | UsersConsents401Error1
    | UsersConsents403Error1
    | UsersConsents404Error1
    | UsersConsents500Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetConsentsError:
    def map(self, status_code: int, content: bytes) -> GetConsentsErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersConsents400Error1](content)
            case 401:
                return decode_json[UsersConsents401Error1](content)
            case 403:
                return decode_json[UsersConsents403Error1](content)
            case 404:
                return decode_json[UsersConsents404Error1](content)
            case 500:
                return decode_json[UsersConsents500Error1](content)
            case _:
                return RawError(status_code, content)


get_consents_error_mapper: Final[ErrorMapper[GetConsentsErrorBody]] = _GetConsentsError()
