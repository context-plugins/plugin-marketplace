from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flywheel_iteration_properties import FlywheelIterationProperties, FlywheelIterationPropertiesDict


class DescribeFlywheelIterationResponse(SdkBaseModel):
    flywheel_iteration_properties: Optional[FlywheelIterationProperties] = Field(
        default=UNSET, alias="FlywheelIterationProperties"
    )


class DescribeFlywheelIterationResponseDict(TypedDict):
    flywheel_iteration_properties: NotRequired[FlywheelIterationPropertiesDict]
