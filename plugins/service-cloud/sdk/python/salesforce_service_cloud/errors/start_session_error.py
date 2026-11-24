from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

StartSessionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _StartSessionError:
    def map(self, status_code: int, content: bytes) -> StartSessionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 422 | 423 | 429 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


start_session_error_mapper: Final[ErrorMapper[StartSessionErrorBody]] = _StartSessionError()
