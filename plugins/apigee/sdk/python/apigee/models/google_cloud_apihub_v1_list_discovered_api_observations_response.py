from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_discovered_api_observation import (
    GoogleCloudApihubV1DiscoveredApiObservation,
    GoogleCloudApihubV1DiscoveredApiObservationDict,
)


class GoogleCloudApihubV1ListDiscoveredApiObservationsResponse(SdkBaseModel):
    """Message for response to listing DiscoveredApiObservations"""

    discovered_api_observations: Optional[list[GoogleCloudApihubV1DiscoveredApiObservation]] = Field(
        default=UNSET, alias="discoveredApiObservations"
    )
    """The DiscoveredApiObservation from the specified project and location."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListDiscoveredApiObservationsResponseDict(TypedDict):
    discovered_api_observations: NotRequired[list[GoogleCloudApihubV1DiscoveredApiObservationDict]]
    next_page_token: NotRequired[str]
