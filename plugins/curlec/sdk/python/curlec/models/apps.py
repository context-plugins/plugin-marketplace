from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .android import Android, AndroidDict
from .io import Io, IoDict


class Apps(SdkBaseModel):
    websites: Optional[list[str]] = UNSET
    android: Optional[list[Android]] = UNSET
    ios: Optional[list[Io]] = UNSET


class AppsDict(TypedDict):
    websites: NotRequired[list[str]]
    android: NotRequired[list[AndroidDict]]
    ios: NotRequired[list[IoDict]]
