from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CreateActivityOutput(SdkBaseModel):
    activity_arn: str = Field(alias="activityArn")
    """The Amazon Resource Name (ARN) that identifies the created activity."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the activity is created."""


class CreateActivityOutputDict(TypedDict):
    activity_arn: str
    creation_date: RFC3339DateTime
