from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_location_food_menus400_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus400Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus401_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus401Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus403_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus403Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus404_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus404Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus429_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus429Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus500_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus500Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus502_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus502Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus503_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus503Error1,
)
from ..models.api_v1_misc_google_business_location_food_menus504_error1 import (
    ApiV1MiscGoogleBusinessLocationFoodMenus504Error1,
)

MiscGoogleBusinessGetFoodMenusErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessLocationFoodMenus400Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus403Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus429Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus502Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
    | ApiV1MiscGoogleBusinessLocationFoodMenus504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessGetFoodMenusError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessGetFoodMenusErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessLocationFoodMenus504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_get_food_menus_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessGetFoodMenusErrorBody]
] = _MiscGoogleBusinessGetFoodMenusError()
