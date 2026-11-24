from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_rankings401_error1 import PlayRankings401Error1

GetPlayRankingsPlayRankingsGetErrorBody: TypeAlias = PlayRankings401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetPlayRankingsPlayRankingsGetError:
    def map(self, status_code: int, content: bytes) -> GetPlayRankingsPlayRankingsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayRankings401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_play_rankings_play_rankings_get_error_mapper: Final[
    ErrorMapper[GetPlayRankingsPlayRankingsGetErrorBody]
] = _GetPlayRankingsPlayRankingsGetError()
