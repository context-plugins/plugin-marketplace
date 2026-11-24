from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_data_collector import (
    GoogleCloudApigeeV1DataCollector,
    GoogleCloudApigeeV1DataCollectorDict,
)


class GoogleCloudApigeeV1ListDataCollectorsResponse(SdkBaseModel):
    """Response for ListDataCollectors."""

    data_collectors: Optional[list[GoogleCloudApigeeV1DataCollector]] = Field(default=UNSET, alias="dataCollectors")
    """Data collectors in the specified organization."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no
    subsequent pages exist."""


class GoogleCloudApigeeV1ListDataCollectorsResponseDict(TypedDict):
    data_collectors: NotRequired[list[GoogleCloudApigeeV1DataCollectorDict]]
    next_page_token: NotRequired[str]
