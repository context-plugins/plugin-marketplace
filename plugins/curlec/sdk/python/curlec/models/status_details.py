from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatusDetails(SdkBaseModel):
    description: Optional[str] = UNSET
    source: Optional[str] = UNSET
    reason: Optional[str] = UNSET


class StatusDetailsDict(TypedDict):
    description: NotRequired[str]
    source: NotRequired[str]
    reason: NotRequired[str]
