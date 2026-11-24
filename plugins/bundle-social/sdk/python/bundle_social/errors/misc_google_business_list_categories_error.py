from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_categories_available400_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available401_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available403_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available404_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available429_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available500_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available502_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available503_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1,
)
from ..models.api_v1_misc_google_business_location_categories_available504_error1 import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1,
)

MiscGoogleBusinessListCategoriesErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1
    | ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessListCategoriesError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessListCategoriesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_list_categories_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessListCategoriesErrorBody]
] = _MiscGoogleBusinessListCategoriesError()
