from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_search_keywords400_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords401_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords403_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords404_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords429_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords500_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords502_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords503_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1,
)
from ..models.api_v1_misc_google_business_location_search_keywords504_error1 import (
    ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1,
)

MiscGoogleBusinessListSearchKeywordsErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1
    | ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessListSearchKeywordsError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessListSearchKeywordsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_list_search_keywords_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessListSearchKeywordsErrorBody]
] = _MiscGoogleBusinessListSearchKeywordsError()
