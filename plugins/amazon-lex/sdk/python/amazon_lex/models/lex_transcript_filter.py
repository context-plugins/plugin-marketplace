from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date_range_filter import DateRangeFilter, DateRangeFilterDict


class LexTranscriptFilter(SdkBaseModel):
    date_range_filter: Optional[DateRangeFilter] = Field(default=UNSET, alias="dateRangeFilter")


class LexTranscriptFilterDict(TypedDict):
    date_range_filter: NotRequired[DateRangeFilterDict]
