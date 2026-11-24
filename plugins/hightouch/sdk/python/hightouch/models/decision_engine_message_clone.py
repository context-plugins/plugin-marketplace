from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DecisionEngineMessageClone(SdkBaseModel):
    """Request body for cloning a Decision Engine message"""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """Name for the copy. Defaults to "Copy of <source message name>"."""


class DecisionEngineMessageCloneDict(TypedDict):
    name: NotRequired[str]
