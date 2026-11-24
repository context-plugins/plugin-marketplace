from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Index21ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Index21Error:
    def map(self, status_code: int, content: bytes) -> Index21ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


index21_error_mapper: Final[ErrorMapper[Index21ErrorBody]] = _Index21Error()
