from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_reviews400_error1 import ApiV1MiscGoogleBusinessReviews400Error1
from ..models.api_v1_misc_google_business_reviews401_error1 import ApiV1MiscGoogleBusinessReviews401Error1
from ..models.api_v1_misc_google_business_reviews403_error1 import ApiV1MiscGoogleBusinessReviews403Error1
from ..models.api_v1_misc_google_business_reviews404_error1 import ApiV1MiscGoogleBusinessReviews404Error1
from ..models.api_v1_misc_google_business_reviews429_error1 import ApiV1MiscGoogleBusinessReviews429Error1
from ..models.api_v1_misc_google_business_reviews500_error1 import ApiV1MiscGoogleBusinessReviews500Error1
from ..models.api_v1_misc_google_business_reviews502_error1 import ApiV1MiscGoogleBusinessReviews502Error1
from ..models.api_v1_misc_google_business_reviews503_error1 import ApiV1MiscGoogleBusinessReviews503Error1
from ..models.api_v1_misc_google_business_reviews504_error1 import ApiV1MiscGoogleBusinessReviews504Error1

MiscGoogleBusinessGetReviewByIdErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessReviews400Error1
    | ApiV1MiscGoogleBusinessReviews401Error1
    | ApiV1MiscGoogleBusinessReviews403Error1
    | ApiV1MiscGoogleBusinessReviews404Error1
    | ApiV1MiscGoogleBusinessReviews429Error1
    | ApiV1MiscGoogleBusinessReviews500Error1
    | ApiV1MiscGoogleBusinessReviews502Error1
    | ApiV1MiscGoogleBusinessReviews503Error1
    | ApiV1MiscGoogleBusinessReviews504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessGetReviewByIdError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessGetReviewByIdErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessReviews400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessReviews401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessReviews403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessReviews404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessReviews429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessReviews500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessReviews502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessReviews503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessReviews504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_get_review_by_id_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessGetReviewByIdErrorBody]
] = _MiscGoogleBusinessGetReviewByIdError()
