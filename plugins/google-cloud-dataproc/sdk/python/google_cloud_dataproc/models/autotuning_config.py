from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scenario import ScenarioOrStr


class AutotuningConfig(SdkBaseModel):
    """Autotuning configuration of the workload."""

    scenarios: Optional[list[ScenarioOrStr]] = UNSET
    """Optional. Scenarios for which tunings are applied."""


class AutotuningConfigDict(TypedDict):
    scenarios: NotRequired[list[ScenarioOrStr]]
