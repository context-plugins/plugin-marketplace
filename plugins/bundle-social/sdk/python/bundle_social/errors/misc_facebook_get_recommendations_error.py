from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_recommendations400_error1 import ApiV1MiscFacebookRecommendations400Error1
from ..models.api_v1_misc_facebook_recommendations401_error1 import ApiV1MiscFacebookRecommendations401Error1
from ..models.api_v1_misc_facebook_recommendations403_error1 import ApiV1MiscFacebookRecommendations403Error1
from ..models.api_v1_misc_facebook_recommendations404_error1 import ApiV1MiscFacebookRecommendations404Error1
from ..models.api_v1_misc_facebook_recommendations429_error1 import ApiV1MiscFacebookRecommendations429Error1
from ..models.api_v1_misc_facebook_recommendations500_error1 import ApiV1MiscFacebookRecommendations500Error1
from ..models.api_v1_misc_facebook_recommendations502_error1 import ApiV1MiscFacebookRecommendations502Error1
from ..models.api_v1_misc_facebook_recommendations503_error1 import ApiV1MiscFacebookRecommendations503Error1
from ..models.api_v1_misc_facebook_recommendations504_error1 import ApiV1MiscFacebookRecommendations504Error1

MiscFacebookGetRecommendationsErrorBody: TypeAlias = (
    ApiV1MiscFacebookRecommendations400Error1
    | ApiV1MiscFacebookRecommendations401Error1
    | ApiV1MiscFacebookRecommendations403Error1
    | ApiV1MiscFacebookRecommendations404Error1
    | ApiV1MiscFacebookRecommendations429Error1
    | ApiV1MiscFacebookRecommendations500Error1
    | ApiV1MiscFacebookRecommendations502Error1
    | ApiV1MiscFacebookRecommendations503Error1
    | ApiV1MiscFacebookRecommendations504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookGetRecommendationsError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookGetRecommendationsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookRecommendations400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookRecommendations401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookRecommendations403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookRecommendations404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookRecommendations429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookRecommendations500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookRecommendations502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookRecommendations503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookRecommendations504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_get_recommendations_error_mapper: Final[
    ErrorMapper[MiscFacebookGetRecommendationsErrorBody]
] = _MiscFacebookGetRecommendationsError()
