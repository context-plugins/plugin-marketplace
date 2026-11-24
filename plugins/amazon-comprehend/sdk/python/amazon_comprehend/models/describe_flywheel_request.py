from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeFlywheelRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel."""


class DescribeFlywheelRequestDict(TypedDict):
    flywheel_arn: str
