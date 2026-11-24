from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phase_count import PhaseCount, PhaseCountDict


class PipelineData(SdkBaseModel):
    """Summary of the automation pipeline distribution across phases"""

    phases: Optional[list[PhaseCount]] = UNSET


class PipelineDataDict(TypedDict):
    phases: NotRequired[list[PhaseCountDict]]
