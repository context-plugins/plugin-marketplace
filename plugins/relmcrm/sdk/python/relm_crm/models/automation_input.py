from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .action import Action, ActionDict
from .condition import Condition, ConditionDict
from .enums.trigger_event import TriggerEventOrStr


class AutomationInput(SdkBaseModel):
    name: str
    trigger_event: TriggerEventOrStr
    conditions: Optional[list[Condition]] = UNSET
    actions: list[Action]
    enabled: Optional[bool] = UNSET


class AutomationInputDict(TypedDict):
    name: str
    trigger_event: TriggerEventOrStr
    conditions: NotRequired[list[ConditionDict]]
    actions: list[ActionDict]
    enabled: NotRequired[bool]
