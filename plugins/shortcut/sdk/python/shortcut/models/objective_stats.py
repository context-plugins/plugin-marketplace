from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ObjectiveStats(SdkBaseModel):
    """A group of calculated values for this Objective."""

    model_config = ConfigDict(extra="forbid")

    average_cycle_time: Optional[int] = UNSET
    """The average cycle time (in seconds) of completed stories in this Objective."""

    average_lead_time: Optional[int] = UNSET
    """The average lead time (in seconds) of completed stories in this Objective."""

    num_related_documents: int
    """The number of related documents to this Objective."""


class ObjectiveStatsDict(TypedDict):
    average_cycle_time: NotRequired[int]
    average_lead_time: NotRequired[int]
    num_related_documents: int
