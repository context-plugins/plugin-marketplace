from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .consolidated_executor_summary1 import ConsolidatedExecutorSummary1, ConsolidatedExecutorSummary1Dict
from .consolidated_executor_summary2 import ConsolidatedExecutorSummary2, ConsolidatedExecutorSummary2Dict
from .consolidated_executor_summary3 import ConsolidatedExecutorSummary3, ConsolidatedExecutorSummary3Dict


class SummarizeSparkApplicationExecutorsResponse(SdkBaseModel):
    """Consolidated summary of executors for a Spark Application."""

    dead_executor_summary: Optional[ConsolidatedExecutorSummary3] = Field(default=UNSET, alias="deadExecutorSummary")
    """Consolidated summary for dead executors."""

    total_executor_summary: Optional[ConsolidatedExecutorSummary2] = Field(default=UNSET, alias="totalExecutorSummary")
    """Overall consolidated summary for all executors."""

    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    """Spark Application Id"""

    active_executor_summary: Optional[ConsolidatedExecutorSummary1] = Field(
        default=UNSET, alias="activeExecutorSummary"
    )
    """Consolidated summary for active executors."""


class SummarizeSparkApplicationExecutorsResponseDict(TypedDict):
    dead_executor_summary: NotRequired[ConsolidatedExecutorSummary3Dict]
    total_executor_summary: NotRequired[ConsolidatedExecutorSummary2Dict]
    application_id: NotRequired[str]
    active_executor_summary: NotRequired[ConsolidatedExecutorSummary1Dict]
