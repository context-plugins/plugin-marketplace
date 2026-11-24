from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flywheel_properties import FlywheelProperties, FlywheelPropertiesDict


class UpdateFlywheelResponse(SdkBaseModel):
    flywheel_properties: Optional[FlywheelProperties] = Field(default=UNSET, alias="FlywheelProperties")


class UpdateFlywheelResponseDict(TypedDict):
    flywheel_properties: NotRequired[FlywheelPropertiesDict]
