from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .start_shot_detection_filter import StartShotDetectionFilter, StartShotDetectionFilterDict
from .start_technical_cue_detection_filter import StartTechnicalCueDetectionFilter, StartTechnicalCueDetectionFilterDict


class StartSegmentDetectionFilters(SdkBaseModel):
    technical_cue_filter: Optional[StartTechnicalCueDetectionFilter] = Field(default=UNSET, alias="TechnicalCueFilter")
    shot_filter: Optional[StartShotDetectionFilter] = Field(default=UNSET, alias="ShotFilter")


class StartSegmentDetectionFiltersDict(TypedDict):
    technical_cue_filter: NotRequired[StartTechnicalCueDetectionFilterDict]
    shot_filter: NotRequired[StartShotDetectionFilterDict]
