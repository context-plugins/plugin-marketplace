from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_recommendations_reply400_error1 import ApiV1MiscFacebookRecommendationsReply400Error1
from ..models.api_v1_misc_facebook_recommendations_reply401_error1 import ApiV1MiscFacebookRecommendationsReply401Error1
from ..models.api_v1_misc_facebook_recommendations_reply403_error1 import ApiV1MiscFacebookRecommendationsReply403Error1
from ..models.api_v1_misc_facebook_recommendations_reply404_error1 import ApiV1MiscFacebookRecommendationsReply404Error1
from ..models.api_v1_misc_facebook_recommendations_reply429_error1 import ApiV1MiscFacebookRecommendationsReply429Error1
from ..models.api_v1_misc_facebook_recommendations_reply500_error1 import ApiV1MiscFacebookRecommendationsReply500Error1
from ..models.api_v1_misc_facebook_recommendations_reply502_error1 import ApiV1MiscFacebookRecommendationsReply502Error1
from ..models.api_v1_misc_facebook_recommendations_reply503_error1 import ApiV1MiscFacebookRecommendationsReply503Error1
from ..models.api_v1_misc_facebook_recommendations_reply504_error1 import ApiV1MiscFacebookRecommendationsReply504Error1

MiscFacebookReplyToRecommendationErrorBody: TypeAlias = (
    ApiV1MiscFacebookRecommendationsReply400Error1
    | ApiV1MiscFacebookRecommendationsReply401Error1
    | ApiV1MiscFacebookRecommendationsReply403Error1
    | ApiV1MiscFacebookRecommendationsReply404Error1
    | ApiV1MiscFacebookRecommendationsReply429Error1
    | ApiV1MiscFacebookRecommendationsReply500Error1
    | ApiV1MiscFacebookRecommendationsReply502Error1
    | ApiV1MiscFacebookRecommendationsReply503Error1
    | ApiV1MiscFacebookRecommendationsReply504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookReplyToRecommendationError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookReplyToRecommendationErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookRecommendationsReply400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookRecommendationsReply401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookRecommendationsReply403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookRecommendationsReply404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookRecommendationsReply429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookRecommendationsReply500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookRecommendationsReply502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookRecommendationsReply503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookRecommendationsReply504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_reply_to_recommendation_error_mapper: Final[
    ErrorMapper[MiscFacebookReplyToRecommendationErrorBody]
] = _MiscFacebookReplyToRecommendationError()
