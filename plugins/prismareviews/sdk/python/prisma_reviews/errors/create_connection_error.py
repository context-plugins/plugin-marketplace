from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateConnectionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateConnectionError:
    def map(self, status_code: int, content: bytes) -> CreateConnectionErrorBody:
        match status_code:
            case 401 | 403 | 422 | 429 | 500 | 501 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_connection_error_mapper: Final[ErrorMapper[CreateConnectionErrorBody]] = _CreateConnectionError()
