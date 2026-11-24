from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.app_countries import AppCountries, AppCountriesOrStr
from .enums.app_languages import AppLanguagesOrStr
from .enums.ios_sort_enum import IosSortEnumOrStr
from .enums.similar_enum import SimilarEnumOrStr
from .search_filter_ios import SearchFilterIos, SearchFilterIosDict


class IosSimilarSearchBody(SdkBaseModel):
    limit: int = 10
    """Count of apps in results"""

    page: int = 1
    """Offset page"""

    sort: Optional[IosSortEnumOrStr] = UNSET
    """Field for sort"""

    fields: Optional[list[str]] = UNSET
    """Fields for select, empty for all"""

    country: AppCountriesOrStr = AppCountries.US
    """Country for which return data"""

    language: Optional[AppLanguagesOrStr] = UNSET
    """Language of meta data. By default: en_US"""

    filter: SearchFilterIos
    id: str
    link: SimilarEnumOrStr
    """An enumeration."""


class IosSimilarSearchBodyDict(TypedDict):
    limit: NotRequired[int]
    page: NotRequired[int]
    sort: NotRequired[IosSortEnumOrStr]
    fields: NotRequired[list[str]]
    country: NotRequired[AppCountriesOrStr]
    language: NotRequired[AppLanguagesOrStr]
    filter: SearchFilterIosDict
    id: str
    link: SimilarEnumOrStr
