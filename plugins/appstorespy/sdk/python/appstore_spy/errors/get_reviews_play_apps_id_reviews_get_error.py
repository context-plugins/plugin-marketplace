from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps_reviews401_error1 import PlayAppsReviews401Error1

GetReviewsPlayAppsIdReviewsGetErrorBody: TypeAlias = PlayAppsReviews401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetReviewsPlayAppsIdReviewsGetError:
    def map(self, status_code: int, content: bytes) -> GetReviewsPlayAppsIdReviewsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAppsReviews401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_reviews_play_apps_id_reviews_get_error_mapper: Final[
    ErrorMapper[GetReviewsPlayAppsIdReviewsGetErrorBody]
] = _GetReviewsPlayAppsIdReviewsGetError()
