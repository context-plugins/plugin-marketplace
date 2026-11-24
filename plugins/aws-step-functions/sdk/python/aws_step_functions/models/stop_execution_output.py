from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StopExecutionOutput(SdkBaseModel):
    stop_date: RFC3339DateTime = Field(alias="stopDate")
    """The date the execution is stopped."""


class StopExecutionOutputDict(TypedDict):
    stop_date: RFC3339DateTime
