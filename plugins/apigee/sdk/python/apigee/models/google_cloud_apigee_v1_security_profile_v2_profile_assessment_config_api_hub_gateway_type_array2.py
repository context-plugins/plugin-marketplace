from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.gateway_type import GatewayTypeOrStr


class GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2(SdkBaseModel):
    """Include only these Gateway Types."""

    gateway_types: Optional[list[GatewayTypeOrStr]] = Field(default=UNSET, alias="gatewayTypes")
    """Required. The array of API Hub Gateway Types."""


class GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2Dict(TypedDict):
    gateway_types: NotRequired[list[GatewayTypeOrStr]]
