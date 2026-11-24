from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCurrentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCurrentError:
    def map(self, status_code: int, content: bytes) -> GetCurrentErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_current_error_mapper: Final[ErrorMapper[GetCurrentErrorBody]] = _GetCurrentError()
