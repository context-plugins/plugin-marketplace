from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location400_error1 import ApiV1MiscGoogleBusinessLocation400Error1
from ..models.api_v1_misc_google_business_location401_error1 import ApiV1MiscGoogleBusinessLocation401Error1
from ..models.api_v1_misc_google_business_location403_error1 import ApiV1MiscGoogleBusinessLocation403Error1
from ..models.api_v1_misc_google_business_location404_error1 import ApiV1MiscGoogleBusinessLocation404Error1
from ..models.api_v1_misc_google_business_location429_error1 import ApiV1MiscGoogleBusinessLocation429Error1
from ..models.api_v1_misc_google_business_location500_error1 import ApiV1MiscGoogleBusinessLocation500Error1
from ..models.api_v1_misc_google_business_location502_error1 import ApiV1MiscGoogleBusinessLocation502Error1
from ..models.api_v1_misc_google_business_location503_error1 import ApiV1MiscGoogleBusinessLocation503Error1
from ..models.api_v1_misc_google_business_location504_error1 import ApiV1MiscGoogleBusinessLocation504Error1

MiscGoogleBusinessGetLocationErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocation400Error1
    | ApiV1MiscGoogleBusinessLocation401Error1
    | ApiV1MiscGoogleBusinessLocation403Error1
    | ApiV1MiscGoogleBusinessLocation404Error1
    | ApiV1MiscGoogleBusinessLocation429Error1
    | ApiV1MiscGoogleBusinessLocation500Error1
    | ApiV1MiscGoogleBusinessLocation502Error1
    | ApiV1MiscGoogleBusinessLocation503Error1
    | ApiV1MiscGoogleBusinessLocation504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessGetLocationError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessGetLocationErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocation400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocation401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocation403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocation404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocation429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocation500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocation502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocation503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocation504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_get_location_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessGetLocationErrorBody]
] = _MiscGoogleBusinessGetLocationError()
