from __future__ import annotations

from typing import TypeAlias

from ..all_filter import AllFilter, AllFilterDict
from ..user_app_version_filter import UserAppVersionFilter, UserAppVersionFilterDict
from ..user_country_filter import UserCountryFilter, UserCountryFilterDict
from ..user_custom_filter import UserCustomFilter, UserCustomFilterDict
from ..user_filter import UserFilter, UserFilterDict
from ..user_platform_version_filter import UserPlatformVersionFilter, UserPlatformVersionFilterDict

Filter: TypeAlias = (
    AllFilter | UserFilter | UserCountryFilter | UserAppVersionFilter | UserPlatformVersionFilter | UserCustomFilter
)

FilterDict: TypeAlias = (
    AllFilterDict
    | UserFilterDict
    | UserCountryFilterDict
    | UserAppVersionFilterDict
    | UserPlatformVersionFilterDict
    | UserCustomFilterDict
)
