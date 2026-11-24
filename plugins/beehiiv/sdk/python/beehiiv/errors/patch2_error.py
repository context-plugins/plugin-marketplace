from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Patch2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Patch2Error:
    def map(self, status_code: int, content: bytes) -> Patch2ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


patch2_error_mapper: Final[ErrorMapper[Patch2ErrorBody]] = _Patch2Error()
