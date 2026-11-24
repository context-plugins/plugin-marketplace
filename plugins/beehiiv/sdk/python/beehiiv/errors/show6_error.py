from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Show6ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Show6Error:
    def map(self, status_code: int, content: bytes) -> Show6ErrorBody:
        match status_code:
            case 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


show6_error_mapper: Final[ErrorMapper[Show6ErrorBody]] = _Show6Error()
