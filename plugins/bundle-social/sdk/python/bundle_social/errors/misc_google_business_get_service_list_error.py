from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_service_list400_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList400Error1,
)
from ..models.api_v1_misc_google_business_location_service_list401_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList401Error1,
)
from ..models.api_v1_misc_google_business_location_service_list403_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList403Error1,
)
from ..models.api_v1_misc_google_business_location_service_list404_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList404Error1,
)
from ..models.api_v1_misc_google_business_location_service_list429_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList429Error1,
)
from ..models.api_v1_misc_google_business_location_service_list500_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList500Error1,
)
from ..models.api_v1_misc_google_business_location_service_list502_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList502Error1,
)
from ..models.api_v1_misc_google_business_location_service_list503_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList503Error1,
)
from ..models.api_v1_misc_google_business_location_service_list504_error1 import (
    ApiV1MiscGoogleBusinessLocationServiceList504Error1,
)

MiscGoogleBusinessGetServiceListErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationServiceList400Error1
    | ApiV1MiscGoogleBusinessLocationServiceList401Error1
    | ApiV1MiscGoogleBusinessLocationServiceList403Error1
    | ApiV1MiscGoogleBusinessLocationServiceList404Error1
    | ApiV1MiscGoogleBusinessLocationServiceList429Error1
    | ApiV1MiscGoogleBusinessLocationServiceList500Error1
    | ApiV1MiscGoogleBusinessLocationServiceList502Error1
    | ApiV1MiscGoogleBusinessLocationServiceList503Error1
    | ApiV1MiscGoogleBusinessLocationServiceList504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessGetServiceListError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessGetServiceListErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationServiceList504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_get_service_list_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessGetServiceListErrorBody]
] = _MiscGoogleBusinessGetServiceListError()
