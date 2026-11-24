from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Index3ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Index3Error:
    def map(self, status_code: int, content: bytes) -> Index3ErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


index3_error_mapper: Final[ErrorMapper[Index3ErrorBody]] = _Index3Error()
