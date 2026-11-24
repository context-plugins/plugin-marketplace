from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateSoftwareConfigurationRequest(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    hardware_platform: str = Field(alias="hardwarePlatform")
    tags: Optional[dict[str, str]] = UNSET


class CreateSoftwareConfigurationRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    hardware_platform: str
    tags: NotRequired[dict[str, str]]
