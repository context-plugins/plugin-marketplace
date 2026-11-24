from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Index13ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Index13Error:
    def map(self, status_code: int, content: bytes) -> Index13ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


index13_error_mapper: Final[ErrorMapper[Index13ErrorBody]] = _Index13Error()
