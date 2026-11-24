from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WatchlistPostV1WatchlistPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WatchlistPostV1WatchlistPostError:
    def map(self, status_code: int, content: bytes) -> V1WatchlistPostV1WatchlistPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_watchlist_post_v1_watchlist_post_error_mapper: Final[
    ErrorMapper[V1WatchlistPostV1WatchlistPostErrorBody]
] = _V1WatchlistPostV1WatchlistPostError()
