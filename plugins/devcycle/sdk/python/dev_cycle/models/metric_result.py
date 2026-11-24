from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .result import Result, ResultDict


class MetricResult(SdkBaseModel):
    result: Result
    cached: bool
    """Whether this result came from a cache or a live result"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """Date which these results are up-to-date with"""


class MetricResultDict(TypedDict):
    result: ResultDict
    cached: bool
    updated_at: RFC3339DateTime
