from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

BulkWhoisErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _BulkWhoisError:
    def map(self, status_code: int, content: bytes) -> BulkWhoisErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


bulk_whois_error_mapper: Final[ErrorMapper[BulkWhoisErrorBody]] = _BulkWhoisError()
