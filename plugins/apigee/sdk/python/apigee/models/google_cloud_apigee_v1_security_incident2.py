from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.observability import ObservabilityOrStr
from .enums.risk_level import RiskLevelOrStr


class GoogleCloudApigeeV1SecurityIncident2(SdkBaseModel):
    """Required. The security incident to update. Must contain all existing populated fields of the current incident."""

    detection_types: Optional[list[str]] = Field(default=UNSET, alias="detectionTypes")
    """Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content
    Scraper, Anomaly Detection."""

    observability: Optional[ObservabilityOrStr] = UNSET
    """Optional. Indicates if the user archived this incident."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name of the security incident."""

    first_detected_time: Optional[str] = Field(default=UNSET, alias="firstDetectedTime")
    """Output only. The time when events associated with the incident were first detected."""

    traffic_count: Optional[str] = Field(default=UNSET, alias="trafficCount")
    """Total traffic detected as part of the incident."""

    risk_level: Optional[RiskLevelOrStr] = Field(default=UNSET, alias="riskLevel")
    """Output only. Risk level of the incident."""

    name: Optional[str] = UNSET
    """Immutable. Name of the security incident resource. Format:
    organizations/{org}/environments/{environment}/securityIncidents/{incident} Example:
    organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111"""

    last_observability_change_time: Optional[str] = Field(default=UNSET, alias="lastObservabilityChangeTime")
    """Output only. The time when the incident observability was last changed."""

    last_detected_time: Optional[str] = Field(default=UNSET, alias="lastDetectedTime")
    """Output only. The time when events associated with the incident were last detected."""


class GoogleCloudApigeeV1SecurityIncident2Dict(TypedDict):
    detection_types: NotRequired[list[str]]
    observability: NotRequired[ObservabilityOrStr]
    display_name: NotRequired[str]
    first_detected_time: NotRequired[str]
    traffic_count: NotRequired[str]
    risk_level: NotRequired[RiskLevelOrStr]
    name: NotRequired[str]
    last_observability_change_time: NotRequired[str]
    last_detected_time: NotRequired[str]
