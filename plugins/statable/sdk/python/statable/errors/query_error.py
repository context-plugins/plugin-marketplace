from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

QueryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _QueryError:
    def map(self, status_code: int, content: bytes) -> QueryErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


query_error_mapper: Final[ErrorMapper[QueryErrorBody]] = _QueryError()
