from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Patch3ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Patch3Error:
    def map(self, status_code: int, content: bytes) -> Patch3ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


patch3_error_mapper: Final[ErrorMapper[Patch3ErrorBody]] = _Patch3Error()
