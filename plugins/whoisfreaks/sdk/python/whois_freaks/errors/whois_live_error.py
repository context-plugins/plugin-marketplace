from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

WhoisLiveErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _WhoisLiveError:
    def map(self, status_code: int, content: bytes) -> WhoisLiveErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


whois_live_error_mapper: Final[ErrorMapper[WhoisLiveErrorBody]] = _WhoisLiveError()
