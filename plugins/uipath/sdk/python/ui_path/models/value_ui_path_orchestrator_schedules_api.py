from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueUiPathOrchestratorSchedulesApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique schedule identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Schedule display name"""

    release_id: Optional[int] = Field(default=UNSET, alias="ReleaseId")
    """ID of the process associated with this schedule"""

    enabled: Optional[bool] = Field(default=UNSET, alias="Enabled")
    """Whether the schedule is active"""

    start_process_cron: Optional[str] = Field(default=UNSET, alias="StartProcessCron")
    """Cron expression defining the recurrence pattern"""


class ValueUiPathOrchestratorSchedulesApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    release_id: NotRequired[int]
    enabled: NotRequired[bool]
    start_process_cron: NotRequired[str]
