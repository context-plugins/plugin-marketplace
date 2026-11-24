from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_recommendations_import400_error1 import (
    ApiV1MiscFacebookRecommendationsImport400Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import401_error1 import (
    ApiV1MiscFacebookRecommendationsImport401Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import403_error1 import (
    ApiV1MiscFacebookRecommendationsImport403Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import404_error1 import (
    ApiV1MiscFacebookRecommendationsImport404Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import429_error1 import (
    ApiV1MiscFacebookRecommendationsImport429Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import500_error1 import (
    ApiV1MiscFacebookRecommendationsImport500Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import502_error1 import (
    ApiV1MiscFacebookRecommendationsImport502Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import503_error1 import (
    ApiV1MiscFacebookRecommendationsImport503Error1,
)
from ..models.api_v1_misc_facebook_recommendations_import504_error1 import (
    ApiV1MiscFacebookRecommendationsImport504Error1,
)

MiscFacebookGetRecommendationImportStatusErrorBody: TypeAlias = (
    ApiV1MiscFacebookRecommendationsImport400Error1
    | ApiV1MiscFacebookRecommendationsImport401Error1
    | ApiV1MiscFacebookRecommendationsImport403Error1
    | ApiV1MiscFacebookRecommendationsImport404Error1
    | ApiV1MiscFacebookRecommendationsImport429Error1
    | ApiV1MiscFacebookRecommendationsImport500Error1
    | ApiV1MiscFacebookRecommendationsImport502Error1
    | ApiV1MiscFacebookRecommendationsImport503Error1
    | ApiV1MiscFacebookRecommendationsImport504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookGetRecommendationImportStatusError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookGetRecommendationImportStatusErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookRecommendationsImport400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookRecommendationsImport401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookRecommendationsImport403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookRecommendationsImport404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookRecommendationsImport429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookRecommendationsImport500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookRecommendationsImport502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookRecommendationsImport503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookRecommendationsImport504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_get_recommendation_import_status_error_mapper: Final[
    ErrorMapper[MiscFacebookGetRecommendationImportStatusErrorBody]
] = _MiscFacebookGetRecommendationImportStatusError()
