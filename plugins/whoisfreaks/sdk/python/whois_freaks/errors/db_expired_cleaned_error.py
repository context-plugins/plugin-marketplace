from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DbExpiredCleanedErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DbExpiredCleanedError:
    def map(self, status_code: int, content: bytes) -> DbExpiredCleanedErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


db_expired_cleaned_error_mapper: Final[ErrorMapper[DbExpiredCleanedErrorBody]] = _DbExpiredCleanedError()
