from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_reviews_reply400_error1 import ApiV1MiscGoogleBusinessReviewsReply400Error1
from ..models.api_v1_misc_google_business_reviews_reply401_error1 import ApiV1MiscGoogleBusinessReviewsReply401Error1
from ..models.api_v1_misc_google_business_reviews_reply403_error1 import ApiV1MiscGoogleBusinessReviewsReply403Error1
from ..models.api_v1_misc_google_business_reviews_reply404_error1 import ApiV1MiscGoogleBusinessReviewsReply404Error1
from ..models.api_v1_misc_google_business_reviews_reply429_error1 import ApiV1MiscGoogleBusinessReviewsReply429Error1
from ..models.api_v1_misc_google_business_reviews_reply500_error1 import ApiV1MiscGoogleBusinessReviewsReply500Error1
from ..models.api_v1_misc_google_business_reviews_reply502_error1 import ApiV1MiscGoogleBusinessReviewsReply502Error1
from ..models.api_v1_misc_google_business_reviews_reply503_error1 import ApiV1MiscGoogleBusinessReviewsReply503Error1
from ..models.api_v1_misc_google_business_reviews_reply504_error1 import ApiV1MiscGoogleBusinessReviewsReply504Error1

MiscGoogleBusinessReplyToReviewErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessReviewsReply400Error1
    | ApiV1MiscGoogleBusinessReviewsReply401Error1
    | ApiV1MiscGoogleBusinessReviewsReply403Error1
    | ApiV1MiscGoogleBusinessReviewsReply404Error1
    | ApiV1MiscGoogleBusinessReviewsReply429Error1
    | ApiV1MiscGoogleBusinessReviewsReply500Error1
    | ApiV1MiscGoogleBusinessReviewsReply502Error1
    | ApiV1MiscGoogleBusinessReviewsReply503Error1
    | ApiV1MiscGoogleBusinessReviewsReply504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessReplyToReviewError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessReplyToReviewErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessReviewsReply504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_reply_to_review_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessReplyToReviewErrorBody]
] = _MiscGoogleBusinessReplyToReviewError()
