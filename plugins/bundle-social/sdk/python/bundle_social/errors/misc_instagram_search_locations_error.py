from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_instagram_locations400_error1 import ApiV1MiscInstagramLocations400Error1
from ..models.api_v1_misc_instagram_locations401_error1 import ApiV1MiscInstagramLocations401Error1
from ..models.api_v1_misc_instagram_locations403_error1 import ApiV1MiscInstagramLocations403Error1
from ..models.api_v1_misc_instagram_locations404_error1 import ApiV1MiscInstagramLocations404Error1
from ..models.api_v1_misc_instagram_locations429_error1 import ApiV1MiscInstagramLocations429Error1
from ..models.api_v1_misc_instagram_locations500_error1 import ApiV1MiscInstagramLocations500Error1
from ..models.api_v1_misc_instagram_locations502_error1 import ApiV1MiscInstagramLocations502Error1
from ..models.api_v1_misc_instagram_locations503_error1 import ApiV1MiscInstagramLocations503Error1
from ..models.api_v1_misc_instagram_locations504_error1 import ApiV1MiscInstagramLocations504Error1

MiscInstagramSearchLocationsErrorBody: TypeAlias = (
    ApiV1MiscInstagramLocations400Error1
    | ApiV1MiscInstagramLocations401Error1
    | ApiV1MiscInstagramLocations403Error1
    | ApiV1MiscInstagramLocations404Error1
    | ApiV1MiscInstagramLocations429Error1
    | ApiV1MiscInstagramLocations500Error1
    | ApiV1MiscInstagramLocations502Error1
    | ApiV1MiscInstagramLocations503Error1
    | ApiV1MiscInstagramLocations504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscInstagramSearchLocationsError:
    def map(self, status_code: int, content: bytes) -> MiscInstagramSearchLocationsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscInstagramLocations400Error1](content)
            case 401:
                return decode_json[ApiV1MiscInstagramLocations401Error1](content)
            case 403:
                return decode_json[ApiV1MiscInstagramLocations403Error1](content)
            case 404:
                return decode_json[ApiV1MiscInstagramLocations404Error1](content)
            case 429:
                return decode_json[ApiV1MiscInstagramLocations429Error1](content)
            case 500:
                return decode_json[ApiV1MiscInstagramLocations500Error1](content)
            case 502:
                return decode_json[ApiV1MiscInstagramLocations502Error1](content)
            case 503:
                return decode_json[ApiV1MiscInstagramLocations503Error1](content)
            case 504:
                return decode_json[ApiV1MiscInstagramLocations504Error1](content)
            case _:
                return RawError(status_code, content)


misc_instagram_search_locations_error_mapper: Final[
    ErrorMapper[MiscInstagramSearchLocationsErrorBody]
] = _MiscInstagramSearchLocationsError()
