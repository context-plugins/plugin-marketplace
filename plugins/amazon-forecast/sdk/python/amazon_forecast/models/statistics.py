from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Statistics(SdkBaseModel):
    count: Optional[int] = Field(default=UNSET, alias="Count")
    """The number of values in the field. If the response value is -1, refer to CountLong."""

    count_distinct: Optional[int] = Field(default=UNSET, alias="CountDistinct")
    """The number of distinct values in the field. If the response value is -1, refer to CountDistinctLong."""

    count_null: Optional[int] = Field(default=UNSET, alias="CountNull")
    """The number of null values in the field. If the response value is -1, refer to CountNullLong."""

    count_nan: Optional[int] = Field(default=UNSET, alias="CountNan")
    """The number of NAN (not a number) values in the field. If the response value is -1, refer to CountNanLong."""

    min: Optional[str] = Field(default=UNSET, alias="Min")
    """For a numeric field, the minimum value in the field."""

    max: Optional[str] = Field(default=UNSET, alias="Max")
    """For a numeric field, the maximum value in the field."""

    avg: Optional[float] = Field(default=UNSET, alias="Avg")
    """For a numeric field, the average value in the field."""

    stddev: Optional[float] = Field(default=UNSET, alias="Stddev")
    """For a numeric field, the standard deviation."""

    count_long: Optional[int] = Field(default=UNSET, alias="CountLong")
    """The number of values in the field. CountLong is used instead of Count if the value is greater than
    2,147,483,647."""

    count_distinct_long: Optional[int] = Field(default=UNSET, alias="CountDistinctLong")
    """The number of distinct values in the field. CountDistinctLong is used instead of CountDistinct if the value is
    greater than 2,147,483,647."""

    count_null_long: Optional[int] = Field(default=UNSET, alias="CountNullLong")
    """The number of null values in the field. CountNullLong is used instead of CountNull if the value is greater than
    2,147,483,647."""

    count_nan_long: Optional[int] = Field(default=UNSET, alias="CountNanLong")
    """The number of NAN (not a number) values in the field. CountNanLong is used instead of CountNan if the value is
    greater than 2,147,483,647."""


class StatisticsDict(TypedDict):
    count: NotRequired[int]
    count_distinct: NotRequired[int]
    count_null: NotRequired[int]
    count_nan: NotRequired[int]
    min: NotRequired[str]
    max: NotRequired[str]
    avg: NotRequired[float]
    stddev: NotRequired[float]
    count_long: NotRequired[int]
    count_distinct_long: NotRequired[int]
    count_null_long: NotRequired[int]
    count_nan_long: NotRequired[int]
