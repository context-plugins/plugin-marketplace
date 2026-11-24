from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.model_level import ModelLevelOrStr


class IntentModeling(SdkBaseModel):
    model: Optional[str] = UNSET
    model_level: Optional[list[ModelLevelOrStr]] = UNSET
    source: Optional[str] = UNSET
    """Either LS Intent or Bombora"""

    cadence: Optional[str] = UNSET
    new_high_intent: Optional[str] = UNSET
    industries: Optional[list[str]] = UNSET
    top_metros: Optional[list[str]] = UNSET
    domain_origins: Optional[list[str]] = UNSET


class IntentModelingDict(TypedDict):
    model: NotRequired[str]
    model_level: NotRequired[list[ModelLevelOrStr]]
    source: NotRequired[str]
    cadence: NotRequired[str]
    new_high_intent: NotRequired[str]
    industries: NotRequired[list[str]]
    top_metros: NotRequired[list[str]]
    domain_origins: NotRequired[list[str]]
