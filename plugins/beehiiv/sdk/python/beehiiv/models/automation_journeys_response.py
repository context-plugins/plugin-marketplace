from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .automation_journey import AutomationJourney, AutomationJourneyDict


class AutomationJourneysResponse(SdkBaseModel):
    data: AutomationJourney
    """A subscribers' journey through an automation flow."""


class AutomationJourneysResponseDict(TypedDict):
    data: AutomationJourneyDict
