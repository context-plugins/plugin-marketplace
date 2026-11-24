from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StagesSummary(SdkBaseModel):
    """Data related to Stages page summary"""

    num_pending_stages: Optional[int] = Field(default=UNSET, alias="numPendingStages")
    num_completed_stages: Optional[int] = Field(default=UNSET, alias="numCompletedStages")
    num_active_stages: Optional[int] = Field(default=UNSET, alias="numActiveStages")
    num_failed_stages: Optional[int] = Field(default=UNSET, alias="numFailedStages")
    num_skipped_stages: Optional[int] = Field(default=UNSET, alias="numSkippedStages")
    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")


class StagesSummaryDict(TypedDict):
    num_pending_stages: NotRequired[int]
    num_completed_stages: NotRequired[int]
    num_active_stages: NotRequired[int]
    num_failed_stages: NotRequired[int]
    num_skipped_stages: NotRequired[int]
    application_id: NotRequired[str]
