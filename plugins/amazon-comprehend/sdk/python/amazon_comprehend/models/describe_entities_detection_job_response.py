from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entities_detection_job_properties import EntitiesDetectionJobProperties, EntitiesDetectionJobPropertiesDict


class DescribeEntitiesDetectionJobResponse(SdkBaseModel):
    entities_detection_job_properties: Optional[EntitiesDetectionJobProperties] = Field(
        default=UNSET, alias="EntitiesDetectionJobProperties"
    )


class DescribeEntitiesDetectionJobResponseDict(TypedDict):
    entities_detection_job_properties: NotRequired[EntitiesDetectionJobPropertiesDict]
