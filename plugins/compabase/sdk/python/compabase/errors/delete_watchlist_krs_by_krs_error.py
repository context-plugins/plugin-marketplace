from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteWatchlistKrsByKrsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWatchlistKrsByKrsError:
    def map(self, status_code: int, content: bytes) -> DeleteWatchlistKrsByKrsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_watchlist_krs_by_krs_error_mapper: Final[
    ErrorMapper[DeleteWatchlistKrsByKrsErrorBody]
] = _DeleteWatchlistKrsByKrsError()
