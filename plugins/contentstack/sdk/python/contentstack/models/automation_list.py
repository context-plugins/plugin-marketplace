from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation import Automation, AutomationDict


class AutomationList(SdkBaseModel):
    """A list of automations in a project."""

    data: Optional[list[Automation]] = UNSET
    """Array of automation objects."""


class AutomationListDict(TypedDict):
    data: NotRequired[list[AutomationDict]]
