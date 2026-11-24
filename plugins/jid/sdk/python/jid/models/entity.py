from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.confidence import ConfidenceOrStr


class Entity(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    confidence: Optional[ConfidenceOrStr] = UNSET
    method: Optional[str] = UNSET
    relied_on: Optional[bool] = UNSET
    url: Optional[str] = UNSET


class EntityDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    confidence: NotRequired[ConfidenceOrStr]
    method: NotRequired[str]
    relied_on: NotRequired[bool]
    url: NotRequired[str]
