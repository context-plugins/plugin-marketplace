from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateConnectLinkErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateConnectLinkError:
    def map(self, status_code: int, content: bytes) -> CreateConnectLinkErrorBody:
        match status_code:
            case 401 | 403 | 422 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_connect_link_error_mapper: Final[ErrorMapper[CreateConnectLinkErrorBody]] = _CreateConnectLinkError()
