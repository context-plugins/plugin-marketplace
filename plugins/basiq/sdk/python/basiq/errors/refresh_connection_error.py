from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_connections_refresh400_error1 import UsersConnectionsRefresh400Error1
from ..models.users_connections_refresh403_error1 import UsersConnectionsRefresh403Error1
from ..models.users_connections_refresh404_error1 import UsersConnectionsRefresh404Error1
from ..models.users_connections_refresh500_error1 import UsersConnectionsRefresh500Error1
from ..models.users_connections_refresh503_error1 import UsersConnectionsRefresh503Error1

RefreshConnectionErrorBody: TypeAlias = (
    UsersConnectionsRefresh400Error1
    | UsersConnectionsRefresh403Error1
    | UsersConnectionsRefresh404Error1
    | UsersConnectionsRefresh500Error1
    | UsersConnectionsRefresh503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _RefreshConnectionError:
    def map(self, status_code: int, content: bytes) -> RefreshConnectionErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersConnectionsRefresh400Error1](content)
            case 403:
                return decode_json[UsersConnectionsRefresh403Error1](content)
            case 404:
                return decode_json[UsersConnectionsRefresh404Error1](content)
            case 500:
                return decode_json[UsersConnectionsRefresh500Error1](content)
            case 503:
                return decode_json[UsersConnectionsRefresh503Error1](content)
            case _:
                return RawError(status_code, content)


refresh_connection_error_mapper: Final[ErrorMapper[RefreshConnectionErrorBody]] = _RefreshConnectionError()
