from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class SoftwareConfiguration(SdkBaseModel):
    """A FreeRTOS software configuration record specifying firmware libraries and settings for a hardware platform."""

    software_configuration_id: Optional[str] = Field(default=UNSET, alias="softwareConfigurationId")
    name: str
    description: Optional[str] = UNSET
    arn: Optional[str] = UNSET
    status: Optional[StatusOrStr] = UNSET
    version: Optional[str] = UNSET
    hardware_platform: str = Field(alias="hardwarePlatform")
    creation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDate")
    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")


class SoftwareConfigurationDict(TypedDict):
    software_configuration_id: NotRequired[str]
    name: str
    description: NotRequired[str]
    arn: NotRequired[str]
    status: NotRequired[StatusOrStr]
    version: NotRequired[str]
    hardware_platform: str
    creation_date: NotRequired[RFC3339DateTime]
    last_updated_date: NotRequired[RFC3339DateTime]
