from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users400_error1 import Users400Error1
from ..models.users401_error1 import Users401Error1
from ..models.users403_error1 import Users403Error1
from ..models.users404_error1 import Users404Error1
from ..models.users500_error1 import Users500Error1
from ..models.users503_error1 import Users503Error1

DeleteUserErrorBody: TypeAlias = (
    Users400Error1 | Users401Error1 | Users403Error1 | Users404Error1 | Users500Error1 | Users503Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteUserError:
    def map(self, status_code: int, content: bytes) -> DeleteUserErrorBody:
        match status_code:
            case 400:
                return decode_json[Users400Error1](content)
            case 401:
                return decode_json[Users401Error1](content)
            case 403:
                return decode_json[Users403Error1](content)
            case 404:
                return decode_json[Users404Error1](content)
            case 500:
                return decode_json[Users500Error1](content)
            case 503:
                return decode_json[Users503Error1](content)
            case _:
                return RawError(status_code, content)


delete_user_error_mapper: Final[ErrorMapper[DeleteUserErrorBody]] = _DeleteUserError()
