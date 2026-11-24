from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateMapRunInput(SdkBaseModel):
    map_run_arn: str = Field(alias="mapRunArn")
    """The Amazon Resource Name (ARN) of a Map Run."""

    max_concurrency: Optional[int] = Field(default=UNSET, alias="maxConcurrency")
    """The maximum number of child workflow executions that can be specified to run in parallel for the Map Run at the
    same time."""

    tolerated_failure_percentage: Optional[float] = Field(default=UNSET, alias="toleratedFailurePercentage")
    """The maximum percentage of failed items before the Map Run fails."""

    tolerated_failure_count: Optional[int] = Field(default=UNSET, alias="toleratedFailureCount")
    """The maximum number of failed items before the Map Run fails."""


class UpdateMapRunInputDict(TypedDict):
    map_run_arn: str
    max_concurrency: NotRequired[int]
    tolerated_failure_percentage: NotRequired[float]
    tolerated_failure_count: NotRequired[int]
