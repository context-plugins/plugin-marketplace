from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SoftwareConfigurationSummary(SdkBaseModel):
    """Summary of a FreeRTOS software configuration."""

    software_configuration_id: Optional[str] = Field(default=UNSET, alias="softwareConfigurationId")
    name: Optional[str] = UNSET
    hardware_platform: Optional[str] = Field(default=UNSET, alias="hardwarePlatform")
    status: Optional[str] = UNSET
    version: Optional[str] = UNSET
    creation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDate")


class SoftwareConfigurationSummaryDict(TypedDict):
    software_configuration_id: NotRequired[str]
    name: NotRequired[str]
    hardware_platform: NotRequired[str]
    status: NotRequired[str]
    version: NotRequired[str]
    creation_date: NotRequired[RFC3339DateTime]
