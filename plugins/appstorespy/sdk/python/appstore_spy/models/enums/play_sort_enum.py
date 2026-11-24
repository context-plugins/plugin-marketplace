from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlaySortEnum(str, Enum):
    """An enumeration."""

    REVENUE_MONTH = "revenue_month"
    REVENUE_MONTH2 = "-revenue_month"
    DOWNLOADS_MONTH = "downloads_month"
    DOWNLOADS_MONTH2 = "-downloads_month"
    UPDATE_DATE = "update_date"
    UPDATE_DATE2 = "-update_date"
    RELEASE_DATE = "release_date"
    RELEASE_DATE2 = "-release_date"
    REMOVAL_DATE = "removal_date"
    REMOVAL_DATE2 = "-removal_date"
    DOWNLOADS_EXACT = "downloads_exact"
    DOWNLOADS_EXACT2 = "-downloads_exact"
    DOWNLOADS_MARK = "downloads_mark"
    DOWNLOADS_MARK2 = "-downloads_mark"
    RATING_COUNT = "rating_count"
    RATING_COUNT2 = "-rating_count"
    RATING_VALUE = "rating_value"
    RATING_VALUE2 = "-rating_value"
    REVIEW_COUNT = "review_count"
    REVIEW_COUNT2 = "-review_count"
    RATING_AVG = "rating_avg"
    RATING_AVG2 = "-rating_avg"
    CHART_INFO = "chart_info"
    CHART_INFO2 = "-chart_info"
    DOWNLOADS_DAILY = "downloads_daily"
    DOWNLOADS_DAILY2 = "-downloads_daily"

    __str__ = str.__str__


PlaySortEnumOrStr: TypeAlias = Annotated[PlaySortEnum | str, open_enum_validator(PlaySortEnum)]
