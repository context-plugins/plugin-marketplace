from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_query_time_series_stats_response_sequence import (
    GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence,
    GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceDict,
)


class GoogleCloudApigeeV1QueryTimeSeriesStatsResponse(SdkBaseModel):
    """Represents security stats result as a collection of time series sequences."""

    columns: Optional[list[str]] = UNSET
    """Column names corresponding to the same order as the inner values in the stats field."""

    values: Optional[list[GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence]] = UNSET
    """Results of the query returned as a JSON array."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Next page token."""


class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseDict(TypedDict):
    columns: NotRequired[list[str]]
    values: NotRequired[list[GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceDict]]
    next_page_token: NotRequired[str]
