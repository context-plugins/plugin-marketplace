from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps_similar401_error1 import PlayAppsSimilar401Error1

GetSimilarPlayAppsSimilarPostErrorBody: TypeAlias = PlayAppsSimilar401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetSimilarPlayAppsSimilarPostError:
    def map(self, status_code: int, content: bytes) -> GetSimilarPlayAppsSimilarPostErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAppsSimilar401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_similar_play_apps_similar_post_error_mapper: Final[
    ErrorMapper[GetSimilarPlayAppsSimilarPostErrorBody]
] = _GetSimilarPlayAppsSimilarPostError()
