from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .trigger import Trigger, TriggerDict
from .unions.step2 import Step2, Step2Dict


class Definition(SdkBaseModel):
    trigger: Trigger
    steps: list[Step2]


class DefinitionDict(TypedDict):
    trigger: TriggerDict
    steps: list[Step2Dict]
