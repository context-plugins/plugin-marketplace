from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OptionalSignerInfos(SdkBaseModel):
    name: Optional[str] = UNSET
    contact: Optional[str] = UNSET
    location: Optional[str] = UNSET
    reason: Optional[str] = UNSET


class OptionalSignerInfosDict(TypedDict):
    name: NotRequired[str]
    contact: NotRequired[str]
    location: NotRequired[str]
    reason: NotRequired[str]
