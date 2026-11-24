from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps_listing401_error1 import PlayAppsListing401Error1
from ..models.play_apps_listing429_error1 import PlayAppsListing429Error1

GetListingPlayAppsIdListingGetErrorBody: TypeAlias = (
    PlayAppsListing401Error1 | str | HttpValidationError | PlayAppsListing429Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetListingPlayAppsIdListingGetError:
    def map(self, status_code: int, content: bytes) -> GetListingPlayAppsIdListingGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAppsListing401Error1](content)
            case 402:
                return decode_json[str](content)
            case 404 | 502:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case 429:
                return decode_json[PlayAppsListing429Error1](content)
            case _:
                return RawError(status_code, content)


get_listing_play_apps_id_listing_get_error_mapper: Final[
    ErrorMapper[GetListingPlayAppsIdListingGetErrorBody]
] = _GetListingPlayAppsIdListingGetError()
