from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.risk_assessment_type import RiskAssessmentTypeOrStr
from .google_cloud_apigee_v1_security_profile_v2_profile_assessment_config import (
    GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig,
    GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigDict,
)


class GoogleCloudApigeeV1SecurityProfileV2(SdkBaseModel):
    """Security profile for risk assessment version 2."""

    profile_assessment_configs: Optional[
        dict[str, GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig]
    ] = Field(default=UNSET, alias="profileAssessmentConfigs")
    """Required. The configuration for each assessment in this profile. Key is the name/id of the assessment."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time of the security profile creation."""

    name: Optional[str] = UNSET
    """Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}"""

    google_defined: Optional[bool] = Field(default=UNSET, alias="googleDefined")
    """Output only. Whether the security profile is google defined."""

    risk_assessment_type: Optional[RiskAssessmentTypeOrStr] = Field(default=UNSET, alias="riskAssessmentType")
    """Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY."""

    description: Optional[str] = UNSET
    """Optional. The description of the security profile."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time of the security profile update."""


class GoogleCloudApigeeV1SecurityProfileV2Dict(TypedDict):
    profile_assessment_configs: NotRequired[dict[str, GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigDict]]
    create_time: NotRequired[str]
    name: NotRequired[str]
    google_defined: NotRequired[bool]
    risk_assessment_type: NotRequired[RiskAssessmentTypeOrStr]
    description: NotRequired[str]
    update_time: NotRequired[str]
