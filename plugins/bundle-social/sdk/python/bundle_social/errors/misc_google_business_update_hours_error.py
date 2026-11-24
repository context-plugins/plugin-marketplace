from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_hours400_error1 import ApiV1MiscGoogleBusinessLocationHours400Error1
from ..models.api_v1_misc_google_business_location_hours401_error1 import ApiV1MiscGoogleBusinessLocationHours401Error1
from ..models.api_v1_misc_google_business_location_hours403_error1 import ApiV1MiscGoogleBusinessLocationHours403Error1
from ..models.api_v1_misc_google_business_location_hours404_error1 import ApiV1MiscGoogleBusinessLocationHours404Error1
from ..models.api_v1_misc_google_business_location_hours429_error1 import ApiV1MiscGoogleBusinessLocationHours429Error1
from ..models.api_v1_misc_google_business_location_hours500_error1 import ApiV1MiscGoogleBusinessLocationHours500Error1
from ..models.api_v1_misc_google_business_location_hours502_error1 import ApiV1MiscGoogleBusinessLocationHours502Error1
from ..models.api_v1_misc_google_business_location_hours503_error1 import ApiV1MiscGoogleBusinessLocationHours503Error1
from ..models.api_v1_misc_google_business_location_hours504_error1 import ApiV1MiscGoogleBusinessLocationHours504Error1

MiscGoogleBusinessUpdateHoursErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationHours400Error1
    | ApiV1MiscGoogleBusinessLocationHours401Error1
    | ApiV1MiscGoogleBusinessLocationHours403Error1
    | ApiV1MiscGoogleBusinessLocationHours404Error1
    | ApiV1MiscGoogleBusinessLocationHours429Error1
    | ApiV1MiscGoogleBusinessLocationHours500Error1
    | ApiV1MiscGoogleBusinessLocationHours502Error1
    | ApiV1MiscGoogleBusinessLocationHours503Error1
    | ApiV1MiscGoogleBusinessLocationHours504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessUpdateHoursError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessUpdateHoursErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationHours504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_update_hours_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessUpdateHoursErrorBody]
] = _MiscGoogleBusinessUpdateHoursError()
