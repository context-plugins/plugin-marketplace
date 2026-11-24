from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartTextDetectionResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Identifier for the text detection job. Use JobId to identify the job in a subsequent call to GetTextDetection."""


class StartTextDetectionResponseDict(TypedDict):
    job_id: NotRequired[str]
