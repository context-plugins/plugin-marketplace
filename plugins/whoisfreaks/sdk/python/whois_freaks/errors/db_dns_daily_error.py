from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DbDnsDailyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DbDnsDailyError:
    def map(self, status_code: int, content: bytes) -> DbDnsDailyErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


db_dns_daily_error_mapper: Final[ErrorMapper[DbDnsDailyErrorBody]] = _DbDnsDailyError()
