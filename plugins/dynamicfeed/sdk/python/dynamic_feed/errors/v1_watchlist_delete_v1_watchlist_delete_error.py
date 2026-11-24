from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WatchlistDeleteV1WatchlistDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WatchlistDeleteV1WatchlistDeleteError:
    def map(self, status_code: int, content: bytes) -> V1WatchlistDeleteV1WatchlistDeleteErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_watchlist_delete_v1_watchlist_delete_error_mapper: Final[
    ErrorMapper[V1WatchlistDeleteV1WatchlistDeleteErrorBody]
] = _V1WatchlistDeleteV1WatchlistDeleteError()
