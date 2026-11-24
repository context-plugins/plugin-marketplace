from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DevSortEnum(str, Enum):
    """An enumeration."""

    REVENUE = "revenue"
    REVENUE2 = "-revenue"
    DOWNLOADS = "downloads"
    DOWNLOADS2 = "-downloads"
    TOTAL_APPS = "total_apps"
    TOTAL_APPS2 = "-total_apps"
    PUBLISHED_APPS = "published_apps"
    PUBLISHED_APPS2 = "-published_apps"
    RATING_COUNT = "rating_count"
    RATING_COUNT2 = "-rating_count"
    FIRST_RELEASED = "first_released"
    FIRST_RELEASED2 = "-first_released"
    LAST_UPDATED = "last_updated"
    LAST_UPDATED2 = "-last_updated"

    __str__ = str.__str__


DevSortEnumOrStr: TypeAlias = Annotated[DevSortEnum | str, open_enum_validator(DevSortEnum)]
