from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .time_series_identifiers import TimeSeriesIdentifiers, TimeSeriesIdentifiersDict


class TimeSeriesSelector(SdkBaseModel):
    time_series_identifiers: Optional[TimeSeriesIdentifiers] = Field(default=UNSET, alias="TimeSeriesIdentifiers")


class TimeSeriesSelectorDict(TypedDict):
    time_series_identifiers: NotRequired[TimeSeriesIdentifiersDict]
