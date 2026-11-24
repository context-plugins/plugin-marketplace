from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartSegmentDetectionResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Unique identifier for the segment detection job. The JobId is returned from StartSegmentDetection."""


class StartSegmentDetectionResponseDict(TypedDict):
    job_id: NotRequired[str]
