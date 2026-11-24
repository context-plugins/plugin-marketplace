from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.classification import ClassificationOrStr
from .google_cloud_apihub_v1_http_operation_details2 import (
    GoogleCloudApihubV1HttpOperationDetails2,
    GoogleCloudApihubV1HttpOperationDetails2Dict,
)
from .google_cloud_apihub_v1_match_result import GoogleCloudApihubV1MatchResult, GoogleCloudApihubV1MatchResultDict
from .google_cloud_apihub_v1_source_metadata1 import (
    GoogleCloudApihubV1SourceMetadata1,
    GoogleCloudApihubV1SourceMetadata1Dict,
)


class GoogleCloudApihubV1DiscoveredApiOperation(SdkBaseModel):
    """DiscoveredApiOperation represents an API Operation observed in one of the sources."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Create time stamp of the discovered API operation in API Hub."""

    name: Optional[str] = UNSET
    """Identifier. The name of the discovered API Operation. Format:
    ``projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}/discoveredApiOperations/{discovered_api_operation}``"""

    count: Optional[str] = UNSET
    """Optional. The number of occurrences of this API Operation."""

    classification: Optional[ClassificationOrStr] = UNSET
    """Output only. The classification of the discovered API operation."""

    source_metadata: Optional[GoogleCloudApihubV1SourceMetadata1] = Field(default=UNSET, alias="sourceMetadata")
    """Output only. The metadata of the source from which the api operation was collected."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Update time stamp of the discovered API operation in API Hub."""

    http_operation: Optional[GoogleCloudApihubV1HttpOperationDetails2] = Field(default=UNSET, alias="httpOperation")
    """Optional. An HTTP Operation."""

    last_seen_time: Optional[str] = Field(default=UNSET, alias="lastSeenTime")
    """Optional. Last seen time stamp"""

    match_results: Optional[list[GoogleCloudApihubV1MatchResult]] = Field(default=UNSET, alias="matchResults")
    """Output only. The list of matched results for the discovered API operation. This will be populated only if the
    classification is known. The current usecase is for a single match. Keeping it repeated to support multiple matches
    in future."""

    first_seen_time: Optional[str] = Field(default=UNSET, alias="firstSeenTime")
    """Optional. First seen time stamp"""


class GoogleCloudApihubV1DiscoveredApiOperationDict(TypedDict):
    create_time: NotRequired[str]
    name: NotRequired[str]
    count: NotRequired[str]
    classification: NotRequired[ClassificationOrStr]
    source_metadata: NotRequired[GoogleCloudApihubV1SourceMetadata1Dict]
    update_time: NotRequired[str]
    http_operation: NotRequired[GoogleCloudApihubV1HttpOperationDetails2Dict]
    last_seen_time: NotRequired[str]
    match_results: NotRequired[list[GoogleCloudApihubV1MatchResultDict]]
    first_seen_time: NotRequired[str]
