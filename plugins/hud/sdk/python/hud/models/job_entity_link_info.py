from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_entity_ref import JobEntityRef, JobEntityRefDict


class JobEntityLinkInfo(SdkBaseModel):
    registry: Optional[JobEntityRef] = UNSET
    taskset: Optional[JobEntityRef] = UNSET
    model: Optional[JobEntityRef] = UNSET


class JobEntityLinkInfoDict(TypedDict):
    registry: NotRequired[JobEntityRefDict]
    taskset: NotRequired[JobEntityRefDict]
    model: NotRequired[JobEntityRefDict]
