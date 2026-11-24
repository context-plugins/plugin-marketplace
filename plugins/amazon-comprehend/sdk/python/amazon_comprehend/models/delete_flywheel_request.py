from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteFlywheelRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel to delete."""


class DeleteFlywheelRequestDict(TypedDict):
    flywheel_arn: str
