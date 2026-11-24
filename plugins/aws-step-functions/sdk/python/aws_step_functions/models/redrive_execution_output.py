from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class RedriveExecutionOutput(SdkBaseModel):
    redrive_date: RFC3339DateTime = Field(alias="redriveDate")
    """The date the execution was last redriven."""


class RedriveExecutionOutputDict(TypedDict):
    redrive_date: RFC3339DateTime
