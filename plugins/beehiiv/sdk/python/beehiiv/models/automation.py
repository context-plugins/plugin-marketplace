from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation_stats import AutomationStats, AutomationStatsDict
from .enums.automation_status import AutomationStatusOrStr
from .enums.automation_trigger_event import AutomationTriggerEventOrStr


class Automation(SdkBaseModel):
    id: str
    """A unique prefixed id of the automation"""

    status: AutomationStatusOrStr
    name: str
    trigger_events: list[AutomationTriggerEventOrStr]
    """The types of events that can trigger the automation."""

    description: Optional[str] = UNSET
    stats: Optional[AutomationStats] = UNSET
    """Optional statistics for an automation. Retrievable by including ``expand: [stats]`` in the automation request."""


class AutomationDict(TypedDict):
    id: str
    status: AutomationStatusOrStr
    name: str
    trigger_events: list[AutomationTriggerEventOrStr]
    description: NotRequired[str]
    stats: NotRequired[AutomationStatsDict]
