from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

EmailCheckErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _EmailCheckError:
    def map(self, status_code: int, content: bytes) -> EmailCheckErrorBody:
        match status_code:
            case 400 | 402 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


email_check_error_mapper: Final[ErrorMapper[EmailCheckErrorBody]] = _EmailCheckError()
