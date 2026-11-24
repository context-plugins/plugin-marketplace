from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.weight import WeightOrStr
from .google_cloud_apigee_v1_security_profile_v2_profile_assessment_config_api_hub_gateway_type_array2 import (
    GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2,
    GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2Dict,
)


class GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig(SdkBaseModel):
    """The configuration definition for a specific assessment."""

    include: Optional[GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2] = UNSET
    """Include only these Gateway Types."""

    weight: Optional[WeightOrStr] = UNSET
    """The weight of the assessment."""


class GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigDict(TypedDict):
    include: NotRequired[GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2Dict]
    weight: NotRequired[WeightOrStr]
