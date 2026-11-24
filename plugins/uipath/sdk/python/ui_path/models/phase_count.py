from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhaseCount(SdkBaseModel):
    """Count of automations in a specific pipeline phase"""

    phase: Optional[str] = UNSET
    """Name of the pipeline phase"""

    count: Optional[int] = UNSET
    """Number of automations in this phase"""


class PhaseCountDict(TypedDict):
    phase: NotRequired[str]
    count: NotRequired[int]
