from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StartExecutionOutput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) that identifies the execution."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The date the execution is started."""


class StartExecutionOutputDict(TypedDict):
    execution_arn: str
    start_date: RFC3339DateTime
