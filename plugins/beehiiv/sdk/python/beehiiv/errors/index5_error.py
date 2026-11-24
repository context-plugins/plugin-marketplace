from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Index5ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Index5Error:
    def map(self, status_code: int, content: bytes) -> Index5ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


index5_error_mapper: Final[ErrorMapper[Index5ErrorBody]] = _Index5Error()
