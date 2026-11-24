from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_rankings401_error1 import IosRankings401Error1

GetIosRankingsIosRankingsGetErrorBody: TypeAlias = IosRankings401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetIosRankingsIosRankingsGetError:
    def map(self, status_code: int, content: bytes) -> GetIosRankingsIosRankingsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosRankings401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_ios_rankings_ios_rankings_get_error_mapper: Final[
    ErrorMapper[GetIosRankingsIosRankingsGetErrorBody]
] = _GetIosRankingsIosRankingsGetError()
