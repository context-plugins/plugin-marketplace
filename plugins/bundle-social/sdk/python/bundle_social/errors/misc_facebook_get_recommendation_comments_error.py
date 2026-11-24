from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_recommendations_comments400_error1 import (
    ApiV1MiscFacebookRecommendationsComments400Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments401_error1 import (
    ApiV1MiscFacebookRecommendationsComments401Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments403_error1 import (
    ApiV1MiscFacebookRecommendationsComments403Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments404_error1 import (
    ApiV1MiscFacebookRecommendationsComments404Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments429_error1 import (
    ApiV1MiscFacebookRecommendationsComments429Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments500_error1 import (
    ApiV1MiscFacebookRecommendationsComments500Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments502_error1 import (
    ApiV1MiscFacebookRecommendationsComments502Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments503_error1 import (
    ApiV1MiscFacebookRecommendationsComments503Error1,
)
from ..models.api_v1_misc_facebook_recommendations_comments504_error1 import (
    ApiV1MiscFacebookRecommendationsComments504Error1,
)

MiscFacebookGetRecommendationCommentsErrorBody: TypeAlias = (
    ApiV1MiscFacebookRecommendationsComments400Error1
    | ApiV1MiscFacebookRecommendationsComments401Error1
    | ApiV1MiscFacebookRecommendationsComments403Error1
    | ApiV1MiscFacebookRecommendationsComments404Error1
    | ApiV1MiscFacebookRecommendationsComments429Error1
    | ApiV1MiscFacebookRecommendationsComments500Error1
    | ApiV1MiscFacebookRecommendationsComments502Error1
    | ApiV1MiscFacebookRecommendationsComments503Error1
    | ApiV1MiscFacebookRecommendationsComments504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookGetRecommendationCommentsError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookGetRecommendationCommentsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookRecommendationsComments400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookRecommendationsComments401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookRecommendationsComments403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookRecommendationsComments404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookRecommendationsComments429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookRecommendationsComments500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookRecommendationsComments502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookRecommendationsComments503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookRecommendationsComments504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_get_recommendation_comments_error_mapper: Final[
    ErrorMapper[MiscFacebookGetRecommendationCommentsErrorBody]
] = _MiscFacebookGetRecommendationCommentsError()
