from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pii_entities_detection_job_properties import (
    PiiEntitiesDetectionJobProperties,
    PiiEntitiesDetectionJobPropertiesDict,
)


class DescribePiiEntitiesDetectionJobResponse(SdkBaseModel):
    pii_entities_detection_job_properties: Optional[PiiEntitiesDetectionJobProperties] = Field(
        default=UNSET, alias="PiiEntitiesDetectionJobProperties"
    )


class DescribePiiEntitiesDetectionJobResponseDict(TypedDict):
    pii_entities_detection_job_properties: NotRequired[PiiEntitiesDetectionJobPropertiesDict]
