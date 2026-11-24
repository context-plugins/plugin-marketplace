from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_text

GetLivenessErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _GetLivenessError:
    def map(self, status_code: int, content: bytes) -> GetLivenessErrorBody:
        match status_code:
            case 502:
                return RawError(status_code, content)
            case 503:
                return decode_text[str](content)
            case _:
                return RawError(status_code, content)


get_liveness_error_mapper: Final[ErrorMapper[GetLivenessErrorBody]] = _GetLivenessError()
