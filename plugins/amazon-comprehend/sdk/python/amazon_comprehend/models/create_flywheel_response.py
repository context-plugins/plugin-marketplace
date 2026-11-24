from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateFlywheelResponse(SdkBaseModel):
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel."""

    active_model_arn: Optional[str] = Field(default=UNSET, alias="ActiveModelArn")
    """The Amazon Resource Number (ARN) of the active model version."""


class CreateFlywheelResponseDict(TypedDict):
    flywheel_arn: NotRequired[str]
    active_model_arn: NotRequired[str]
