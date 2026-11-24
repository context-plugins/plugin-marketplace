from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_recommendations_comments_reply400_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply400Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply401_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply401Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply403_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply403Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply404_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply404Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply429_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply429Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply500_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply500Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply502_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply502Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply503_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply503Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply504_error1 import (
    ApiV1MiscFacebookRecommendationsCommentsReply504Error1,
)

MiscFacebookReplyToRecommendationCommentErrorBody: TypeAlias = (
    ApiV1MiscFacebookRecommendationsCommentsReply400Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply401Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply403Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply404Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply429Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply500Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply502Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply503Error1
    | ApiV1MiscFacebookRecommendationsCommentsReply504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookReplyToRecommendationCommentError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookReplyToRecommendationCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookRecommendationsCommentsReply504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_reply_to_recommendation_comment_error_mapper: Final[
    ErrorMapper[MiscFacebookReplyToRecommendationCommentErrorBody]
] = _MiscFacebookReplyToRecommendationCommentError()
