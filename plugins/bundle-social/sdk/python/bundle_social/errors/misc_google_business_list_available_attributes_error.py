from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_attributes_available400_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available401_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available403_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available404_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available429_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available500_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available502_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available503_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1,
)
from ..models.api_v1_misc_google_business_location_attributes_available504_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1,
)

MiscGoogleBusinessListAvailableAttributesErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1
    | ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessListAvailableAttributesError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessListAvailableAttributesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_list_available_attributes_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessListAvailableAttributesErrorBody]
] = _MiscGoogleBusinessListAvailableAttributesError()
