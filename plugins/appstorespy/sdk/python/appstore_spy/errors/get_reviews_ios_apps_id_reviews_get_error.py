from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_apps_reviews401_error1 import IosAppsReviews401Error1

GetReviewsIosAppsIdReviewsGetErrorBody: TypeAlias = IosAppsReviews401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetReviewsIosAppsIdReviewsGetError:
    def map(self, status_code: int, content: bytes) -> GetReviewsIosAppsIdReviewsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosAppsReviews401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_reviews_ios_apps_id_reviews_get_error_mapper: Final[
    ErrorMapper[GetReviewsIosAppsIdReviewsGetErrorBody]
] = _GetReviewsIosAppsIdReviewsGetError()
