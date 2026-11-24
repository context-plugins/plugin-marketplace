from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.audience import AudienceOrStr


class Annotations(SdkBaseModel):
    audience: Optional[list[AudienceOrStr]] = UNSET
    priority: Optional[float] = UNSET


class AnnotationsDict(TypedDict):
    audience: NotRequired[list[AudienceOrStr]]
    priority: NotRequired[float]
