from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_place_action_links400_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links401_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links403_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links404_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links429_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links500_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links502_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links503_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1,
)
from ..models.api_v1_misc_google_business_location_place_action_links504_error1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1,
)

MiscGoogleBusinessListPlaceActionLinksErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1
    | ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessListPlaceActionLinksError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessListPlaceActionLinksErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_list_place_action_links_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessListPlaceActionLinksErrorBody]
] = _MiscGoogleBusinessListPlaceActionLinksError()
