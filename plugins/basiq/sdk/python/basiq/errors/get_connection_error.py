from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_connections400_error1 import UsersConnections400Error1
from ..models.users_connections401_error1 import UsersConnections401Error1
from ..models.users_connections403_error1 import UsersConnections403Error1
from ..models.users_connections404_error1 import UsersConnections404Error1
from ..models.users_connections500_error1 import UsersConnections500Error1
from ..models.users_connections503_error1 import UsersConnections503Error1

GetConnectionErrorBody: TypeAlias = (
    UsersConnections400Error1
    | UsersConnections401Error1
    | UsersConnections403Error1
    | UsersConnections404Error1
    | UsersConnections500Error1
    | UsersConnections503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetConnectionError:
    def map(self, status_code: int, content: bytes) -> GetConnectionErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersConnections400Error1](content)
            case 401:
                return decode_json[UsersConnections401Error1](content)
            case 403:
                return decode_json[UsersConnections403Error1](content)
            case 404:
                return decode_json[UsersConnections404Error1](content)
            case 500:
                return decode_json[UsersConnections500Error1](content)
            case 503:
                return decode_json[UsersConnections503Error1](content)
            case _:
                return RawError(status_code, content)


get_connection_error_mapper: Final[ErrorMapper[GetConnectionErrorBody]] = _GetConnectionError()
