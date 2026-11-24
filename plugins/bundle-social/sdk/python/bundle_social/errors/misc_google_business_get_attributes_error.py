from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_attributes400_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes400Error1,
)
from ..models.api_v1_misc_google_business_location_attributes401_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes401Error1,
)
from ..models.api_v1_misc_google_business_location_attributes403_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes403Error1,
)
from ..models.api_v1_misc_google_business_location_attributes404_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes404Error1,
)
from ..models.api_v1_misc_google_business_location_attributes429_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes429Error1,
)
from ..models.api_v1_misc_google_business_location_attributes500_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes500Error1,
)
from ..models.api_v1_misc_google_business_location_attributes502_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes502Error1,
)
from ..models.api_v1_misc_google_business_location_attributes503_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes503Error1,
)
from ..models.api_v1_misc_google_business_location_attributes504_error1 import (
    ApiV1MiscGoogleBusinessLocationAttributes504Error1,
)

MiscGoogleBusinessGetAttributesErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationAttributes400Error1
    | ApiV1MiscGoogleBusinessLocationAttributes401Error1
    | ApiV1MiscGoogleBusinessLocationAttributes403Error1
    | ApiV1MiscGoogleBusinessLocationAttributes404Error1
    | ApiV1MiscGoogleBusinessLocationAttributes429Error1
    | ApiV1MiscGoogleBusinessLocationAttributes500Error1
    | ApiV1MiscGoogleBusinessLocationAttributes502Error1
    | ApiV1MiscGoogleBusinessLocationAttributes503Error1
    | ApiV1MiscGoogleBusinessLocationAttributes504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessGetAttributesError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessGetAttributesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationAttributes504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_get_attributes_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessGetAttributesErrorBody]
] = _MiscGoogleBusinessGetAttributesError()
