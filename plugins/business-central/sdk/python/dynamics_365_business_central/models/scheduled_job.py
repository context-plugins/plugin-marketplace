from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ScheduledJob(SdkBaseModel):
    id: Optional[UUID] = UNSET
    category: Optional[str] = UNSET
    """The job category"""

    status: Optional[str] = UNSET
    """The job status"""

    description: Optional[str] = UNSET
    """The job description"""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Error message if the job failed"""

    start_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDateTime")
    end_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDateTime")


class ScheduledJobDict(TypedDict):
    id: NotRequired[UUID]
    category: NotRequired[str]
    status: NotRequired[str]
    description: NotRequired[str]
    error_message: NotRequired[str]
    start_date_time: NotRequired[RFC3339DateTime]
    end_date_time: NotRequired[RFC3339DateTime]
