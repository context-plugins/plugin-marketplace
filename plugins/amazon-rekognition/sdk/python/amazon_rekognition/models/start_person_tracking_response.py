from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartPersonTrackingResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier for the person detection job. Use JobId to identify the job in a subsequent call to
    GetPersonTracking."""


class StartPersonTrackingResponseDict(TypedDict):
    job_id: NotRequired[str]
