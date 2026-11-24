from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stages_summary1 import StagesSummary1, StagesSummary1Dict


class SummarizeSparkApplicationStagesResponse(SdkBaseModel):
    """Summary of a Spark Application stages."""

    stages_summary: Optional[StagesSummary1] = Field(default=UNSET, alias="stagesSummary")
    """Summary of a Spark Application Stages"""


class SummarizeSparkApplicationStagesResponseDict(TypedDict):
    stages_summary: NotRequired[StagesSummary1Dict]
