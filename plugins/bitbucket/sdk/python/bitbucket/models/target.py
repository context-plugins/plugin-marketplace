from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pipeline_selector import PipelineSelector, PipelineSelectorDict


class Target(SdkBaseModel):
    """The target on which the schedule will be executed."""

    selector: PipelineSelector
    ref_name: str
    """The name of the reference."""

    ref_type: Literal["branch"] = "branch"
    """The type of reference (branch only)."""


class TargetDict(TypedDict):
    selector: PipelineSelectorDict
    ref_name: str
    ref_type: Literal["branch"]
