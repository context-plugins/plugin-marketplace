from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .specific_start_position2 import SpecificStartPosition2, SpecificStartPosition2Dict


class CdcStrategy(SdkBaseModel):
    """The strategy that the stream uses for CDC replication."""

    most_recent_start_position: Optional[Any] = Field(default=UNSET, alias="mostRecentStartPosition")
    """Optional. Start replicating from the most recent position in the source."""

    next_available_start_position: Optional[Any] = Field(default=UNSET, alias="nextAvailableStartPosition")
    """Optional. Resume replication from the next available position in the source."""

    specific_start_position: Optional[SpecificStartPosition2] = Field(default=UNSET, alias="specificStartPosition")
    """Optional. Start replicating from a specific position in the source."""


class CdcStrategyDict(TypedDict):
    most_recent_start_position: NotRequired[Any]
    next_available_start_position: NotRequired[Any]
    specific_start_position: NotRequired[SpecificStartPosition2Dict]
