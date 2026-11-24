from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_tiktok_locations400_error1 import ApiV1MiscTiktokLocations400Error1
from ..models.api_v1_misc_tiktok_locations401_error1 import ApiV1MiscTiktokLocations401Error1
from ..models.api_v1_misc_tiktok_locations403_error1 import ApiV1MiscTiktokLocations403Error1
from ..models.api_v1_misc_tiktok_locations404_error1 import ApiV1MiscTiktokLocations404Error1
from ..models.api_v1_misc_tiktok_locations429_error1 import ApiV1MiscTiktokLocations429Error1
from ..models.api_v1_misc_tiktok_locations500_error1 import ApiV1MiscTiktokLocations500Error1
from ..models.api_v1_misc_tiktok_locations502_error1 import ApiV1MiscTiktokLocations502Error1
from ..models.api_v1_misc_tiktok_locations503_error1 import ApiV1MiscTiktokLocations503Error1
from ..models.api_v1_misc_tiktok_locations504_error1 import ApiV1MiscTiktokLocations504Error1

MiscTiktokSearchLocationsErrorBody: TypeAlias = (
    ApiV1MiscTiktokLocations400Error1
    | ApiV1MiscTiktokLocations401Error1
    | ApiV1MiscTiktokLocations403Error1
    | ApiV1MiscTiktokLocations404Error1
    | ApiV1MiscTiktokLocations429Error1
    | ApiV1MiscTiktokLocations500Error1
    | ApiV1MiscTiktokLocations502Error1
    | ApiV1MiscTiktokLocations503Error1
    | ApiV1MiscTiktokLocations504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTiktokSearchLocationsError:
    def map(self, status_code: int, content: bytes) -> MiscTiktokSearchLocationsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTiktokLocations400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTiktokLocations401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTiktokLocations403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTiktokLocations404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTiktokLocations429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTiktokLocations500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTiktokLocations502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTiktokLocations503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTiktokLocations504Error1](content)
            case _:
                return RawError(status_code, content)


misc_tiktok_search_locations_error_mapper: Final[
    ErrorMapper[MiscTiktokSearchLocationsErrorBody]
] = _MiscTiktokSearchLocationsError()
