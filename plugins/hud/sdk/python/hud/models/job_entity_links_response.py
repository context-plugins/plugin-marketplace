from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_entity_link_info import JobEntityLinkInfo, JobEntityLinkInfoDict


class JobEntityLinksResponse(SdkBaseModel):
    links: Optional[list[JobEntityLinkInfo]] = UNSET


class JobEntityLinksResponseDict(TypedDict):
    links: NotRequired[list[JobEntityLinkInfoDict]]
