from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Io(SdkBaseModel):
    url: Optional[str] = UNSET
    name: Optional[str] = UNSET


class IoDict(TypedDict):
    url: NotRequired[str]
    name: NotRequired[str]
