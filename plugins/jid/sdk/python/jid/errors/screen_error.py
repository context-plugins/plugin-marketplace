from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ScreenErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ScreenError:
    def map(self, status_code: int, content: bytes) -> ScreenErrorBody:
        match status_code:
            case 400 | 402 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


screen_error_mapper: Final[ErrorMapper[ScreenErrorBody]] = _ScreenError()
