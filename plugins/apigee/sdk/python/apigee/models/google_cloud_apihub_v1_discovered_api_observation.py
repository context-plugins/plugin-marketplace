from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.source_type1 import SourceType1OrStr
from .enums.style import StyleOrStr
from .google_cloud_apihub_v1_source_metadata2 import (
    GoogleCloudApihubV1SourceMetadata2,
    GoogleCloudApihubV1SourceMetadata2Dict,
)


class GoogleCloudApihubV1DiscoveredApiObservation(SdkBaseModel):
    """Respresents an API Observation observed in one of the sources."""

    last_event_detected_time: Optional[str] = Field(default=UNSET, alias="lastEventDetectedTime")
    """Optional. Last event detected time stamp"""

    unknown_operations_count: Optional[str] = Field(default=UNSET, alias="unknownOperationsCount")
    """Output only. The number of unknown API Operations."""

    hostname: Optional[str] = UNSET
    """Optional. The hostname of requests processed for this Observation."""

    source_locations: Optional[list[str]] = Field(default=UNSET, alias="sourceLocations")
    """Optional. The location of the observation source."""

    server_ips: Optional[list[str]] = Field(default=UNSET, alias="serverIps")
    """Optional. The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include
    port information. Examples: ``"192.168.1.1"``, ``"10.0.0.1:80"``, ``"FE80::0202:B3FF:FE1E:8329"``."""

    style: Optional[StyleOrStr] = UNSET
    """Optional. Style of ApiObservation"""

    origin: Optional[str] = UNSET
    """Optional. For an observation pushed from a Google Cloud resource, this would be the Google Cloud project id."""

    source_types: Optional[list[SourceType1OrStr]] = Field(default=UNSET, alias="sourceTypes")
    """Optional. The type of the source from which the observation was collected."""

    api_operation_count: Optional[str] = Field(default=UNSET, alias="apiOperationCount")
    """Optional. The number of observed API Operations."""

    name: Optional[str] = UNSET
    """Identifier. The name of the discovered API Observation. Format:
    ``projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}``"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Create time stamp of the observation in API Hub."""

    source_metadata: Optional[GoogleCloudApihubV1SourceMetadata2] = Field(default=UNSET, alias="sourceMetadata")
    """Output only. The metadata of the source from which the observation was collected."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Update time stamp of the observation in API Hub."""

    known_operations_count: Optional[str] = Field(default=UNSET, alias="knownOperationsCount")
    """Output only. The number of known API Operations."""


class GoogleCloudApihubV1DiscoveredApiObservationDict(TypedDict):
    last_event_detected_time: NotRequired[str]
    unknown_operations_count: NotRequired[str]
    hostname: NotRequired[str]
    source_locations: NotRequired[list[str]]
    server_ips: NotRequired[list[str]]
    style: NotRequired[StyleOrStr]
    origin: NotRequired[str]
    source_types: NotRequired[list[SourceType1OrStr]]
    api_operation_count: NotRequired[str]
    name: NotRequired[str]
    create_time: NotRequired[str]
    source_metadata: NotRequired[GoogleCloudApihubV1SourceMetadata2Dict]
    update_time: NotRequired[str]
    known_operations_count: NotRequired[str]
