from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartFlywheelIterationResponse(SdkBaseModel):
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    flywheel_iteration_id: Optional[str] = Field(default=UNSET, alias="FlywheelIterationId")


class StartFlywheelIterationResponseDict(TypedDict):
    flywheel_arn: NotRequired[str]
    flywheel_iteration_id: NotRequired[str]
