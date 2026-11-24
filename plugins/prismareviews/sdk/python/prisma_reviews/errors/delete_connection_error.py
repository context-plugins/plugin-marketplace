from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteConnectionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteConnectionError:
    def map(self, status_code: int, content: bytes) -> DeleteConnectionErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_connection_error_mapper: Final[ErrorMapper[DeleteConnectionErrorBody]] = _DeleteConnectionError()
