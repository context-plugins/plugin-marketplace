from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

OriginateCallErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _OriginateCallError:
    def map(self, status_code: int, content: bytes) -> OriginateCallErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


originate_call_error_mapper: Final[ErrorMapper[OriginateCallErrorBody]] = _OriginateCallError()
