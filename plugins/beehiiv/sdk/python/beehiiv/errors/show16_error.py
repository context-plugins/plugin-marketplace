from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Show16ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Show16Error:
    def map(self, status_code: int, content: bytes) -> Show16ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


show16_error_mapper: Final[ErrorMapper[Show16ErrorBody]] = _Show16Error()
