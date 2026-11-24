from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .key_phrases_detection_job_properties import KeyPhrasesDetectionJobProperties, KeyPhrasesDetectionJobPropertiesDict


class DescribeKeyPhrasesDetectionJobResponse(SdkBaseModel):
    key_phrases_detection_job_properties: Optional[KeyPhrasesDetectionJobProperties] = Field(
        default=UNSET, alias="KeyPhrasesDetectionJobProperties"
    )


class DescribeKeyPhrasesDetectionJobResponseDict(TypedDict):
    key_phrases_detection_job_properties: NotRequired[KeyPhrasesDetectionJobPropertiesDict]
