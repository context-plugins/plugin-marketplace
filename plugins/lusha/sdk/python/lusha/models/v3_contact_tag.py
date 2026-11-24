from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3ContactTag(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    color: Optional[str] = UNSET


class V3ContactTagDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    color: NotRequired[str]
