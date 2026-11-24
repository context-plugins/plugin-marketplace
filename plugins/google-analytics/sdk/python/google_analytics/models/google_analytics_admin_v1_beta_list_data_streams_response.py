from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_data_stream import (
    GoogleAnalyticsAdminV1BetaDataStream,
    GoogleAnalyticsAdminV1BetaDataStreamDict,
)


class GoogleAnalyticsAdminV1BetaListDataStreamsResponse(SdkBaseModel):
    """Response message for ListDataStreams RPC."""

    data_streams: Optional[list[GoogleAnalyticsAdminV1BetaDataStream]] = Field(default=UNSET, alias="dataStreams")
    """List of DataStreams."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListDataStreamsResponseDict(TypedDict):
    data_streams: NotRequired[list[GoogleAnalyticsAdminV1BetaDataStreamDict]]
    next_page_token: NotRequired[str]
