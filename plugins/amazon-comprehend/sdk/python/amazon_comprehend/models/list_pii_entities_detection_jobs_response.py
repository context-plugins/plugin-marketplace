from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pii_entities_detection_job_properties import (
    PiiEntitiesDetectionJobProperties,
    PiiEntitiesDetectionJobPropertiesDict,
)


class ListPiiEntitiesDetectionJobsResponse(SdkBaseModel):
    pii_entities_detection_job_properties_list: Optional[list[PiiEntitiesDetectionJobProperties]] = Field(
        default=UNSET, alias="PiiEntitiesDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListPiiEntitiesDetectionJobsResponseDict(TypedDict):
    pii_entities_detection_job_properties_list: NotRequired[list[PiiEntitiesDetectionJobPropertiesDict]]
    next_token: NotRequired[str]
