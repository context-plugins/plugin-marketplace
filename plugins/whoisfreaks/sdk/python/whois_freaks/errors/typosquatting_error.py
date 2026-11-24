from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TyposquattingErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TyposquattingError:
    def map(self, status_code: int, content: bytes) -> TyposquattingErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


typosquatting_error_mapper: Final[ErrorMapper[TyposquattingErrorBody]] = _TyposquattingError()
