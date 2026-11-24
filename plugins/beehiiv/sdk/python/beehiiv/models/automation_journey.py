from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.automation_journey_status import AutomationJourneyStatusOrStr


class AutomationJourney(SdkBaseModel):
    """A subscribers' journey through an automation flow."""

    id: str
    """The prefixed automation journey id"""

    automation_id: str
    """The prefixed automation id"""

    subscription_id: Optional[str] = UNSET
    """The prefixed ID of the subscription."""

    email: Optional[str] = UNSET
    status: AutomationJourneyStatusOrStr
    started_at: Optional[int] = UNSET
    """The time that the subscriber started their flow through the automation. Measured in seconds since the Unix
    epoch."""

    completed_at: Optional[int] = UNSET
    """The time that the subscriber finished their flow through the automation. Measured in seconds since the Unix
    epoch."""


class AutomationJourneyDict(TypedDict):
    id: str
    automation_id: str
    subscription_id: NotRequired[str]
    email: NotRequired[str]
    status: AutomationJourneyStatusOrStr
    started_at: NotRequired[int]
    completed_at: NotRequired[int]
