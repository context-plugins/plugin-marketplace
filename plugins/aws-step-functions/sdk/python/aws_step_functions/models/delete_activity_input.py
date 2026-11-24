from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteActivityInput(SdkBaseModel):
    activity_arn: str = Field(alias="activityArn")
    """The Amazon Resource Name (ARN) of the activity to delete."""


class DeleteActivityInputDict(TypedDict):
    activity_arn: str
