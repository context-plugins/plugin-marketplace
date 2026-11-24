from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateWatchlistErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateWatchlistError:
    def map(self, status_code: int, content: bytes) -> UpdateWatchlistErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_watchlist_error_mapper: Final[ErrorMapper[UpdateWatchlistErrorBody]] = _UpdateWatchlistError()
