from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_data1 import StageData1, StageData1Dict


class AccessSparkApplicationStageAttemptResponse(SdkBaseModel):
    """Stage Attempt for a Stage of a Spark Application"""

    stage_data: Optional[StageData1] = Field(default=UNSET, alias="stageData")
    """Output only. Data corresponding to a stage."""


class AccessSparkApplicationStageAttemptResponseDict(TypedDict):
    stage_data: NotRequired[StageData1Dict]
