from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.gateway_type1 import GatewayType1OrStr


class GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails(SdkBaseModel):
    """Additional details if the resource is an API Hub deployment."""

    gateway_type: Optional[GatewayType1OrStr] = Field(default=UNSET, alias="gatewayType")
    """The gateway type for the API Hub deployment."""

    source_project: Optional[str] = Field(default=UNSET, alias="sourceProject")
    """The source project for the API Hub deployment."""

    gateway: Optional[str] = UNSET
    """The gateway for the API Hub deployment. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The display name of the API Hub deployment."""

    resource_uri: Optional[str] = Field(default=UNSET, alias="resourceUri")
    """The resource uri for the API Hub deployment."""


class GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetailsDict(TypedDict):
    gateway_type: NotRequired[GatewayType1OrStr]
    source_project: NotRequired[str]
    gateway: NotRequired[str]
    display_name: NotRequired[str]
    resource_uri: NotRequired[str]
