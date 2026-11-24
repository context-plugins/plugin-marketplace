from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListConnectionsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListConnectionsError:
    def map(self, status_code: int, content: bytes) -> ListConnectionsErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_connections_error_mapper: Final[ErrorMapper[ListConnectionsErrorBody]] = _ListConnectionsError()
