from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeFlywheelIterationRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    flywheel_iteration_id: str = Field(alias="FlywheelIterationId")


class DescribeFlywheelIterationRequestDict(TypedDict):
    flywheel_arn: str
    flywheel_iteration_id: str
