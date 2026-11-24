from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Index11ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Index11Error:
    def map(self, status_code: int, content: bytes) -> Index11ErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


index11_error_mapper: Final[ErrorMapper[Index11ErrorBody]] = _Index11Error()
