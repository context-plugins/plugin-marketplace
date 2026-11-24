from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_discovered_api_operation import (
    GoogleCloudApihubV1DiscoveredApiOperation,
    GoogleCloudApihubV1DiscoveredApiOperationDict,
)


class GoogleCloudApihubV1ListDiscoveredApiOperationsResponse(SdkBaseModel):
    """Message for response to listing DiscoveredApiOperations"""

    discovered_api_operations: Optional[list[GoogleCloudApihubV1DiscoveredApiOperation]] = Field(
        default=UNSET, alias="discoveredApiOperations"
    )
    """The DiscoveredApiOperations from the specified project, location and DiscoveredApiObservation."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListDiscoveredApiOperationsResponseDict(TypedDict):
    discovered_api_operations: NotRequired[list[GoogleCloudApihubV1DiscoveredApiOperationDict]]
    next_page_token: NotRequired[str]
