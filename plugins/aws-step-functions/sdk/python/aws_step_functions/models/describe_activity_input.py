from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeActivityInput(SdkBaseModel):
    activity_arn: str = Field(alias="activityArn")
    """The Amazon Resource Name (ARN) of the activity to describe."""


class DescribeActivityInputDict(TypedDict):
    activity_arn: str
