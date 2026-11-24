from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_connections_purge400_error1 import UsersConnectionsPurge400Error1
from ..models.users_connections_purge403_error1 import UsersConnectionsPurge403Error1
from ..models.users_connections_purge404_error1 import UsersConnectionsPurge404Error1
from ..models.users_connections_purge500_error1 import UsersConnectionsPurge500Error1
from ..models.users_connections_purge503_error1 import UsersConnectionsPurge503Error1

PurgeConnectionDataErrorBody: TypeAlias = (
    UsersConnectionsPurge400Error1
    | UsersConnectionsPurge403Error1
    | UsersConnectionsPurge404Error1
    | UsersConnectionsPurge500Error1
    | UsersConnectionsPurge503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PurgeConnectionDataError:
    def map(self, status_code: int, content: bytes) -> PurgeConnectionDataErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersConnectionsPurge400Error1](content)
            case 403:
                return decode_json[UsersConnectionsPurge403Error1](content)
            case 404:
                return decode_json[UsersConnectionsPurge404Error1](content)
            case 500:
                return decode_json[UsersConnectionsPurge500Error1](content)
            case 503:
                return decode_json[UsersConnectionsPurge503Error1](content)
            case _:
                return RawError(status_code, content)


purge_connection_data_error_mapper: Final[ErrorMapper[PurgeConnectionDataErrorBody]] = _PurgeConnectionDataError()
