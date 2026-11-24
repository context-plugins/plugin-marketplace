from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MilestoneStats(SdkBaseModel):
    """A group of calculated values for this Milestone."""

    model_config = ConfigDict(extra="forbid")

    average_cycle_time: Optional[int] = UNSET
    """The average cycle time (in seconds) of completed stories in this Milestone."""

    average_lead_time: Optional[int] = UNSET
    """The average lead time (in seconds) of completed stories in this Milestone."""

    num_related_documents: int
    """The number of related documents to this Milestone."""


class MilestoneStatsDict(TypedDict):
    average_cycle_time: NotRequired[int]
    average_lead_time: NotRequired[int]
    num_related_documents: int
