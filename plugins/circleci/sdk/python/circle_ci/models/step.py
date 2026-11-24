from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .action import Action, ActionDict


class Step(SdkBaseModel):
    name: Optional[str] = UNSET
    """The step name"""

    actions: Optional[list[Action]] = UNSET
    """Actions within the step"""


class StepDict(TypedDict):
    name: NotRequired[str]
    actions: NotRequired[list[ActionDict]]
