from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrScans(SdkBaseModel):
    scans: Optional[int] = UNSET
    date: Optional[str] = UNSET


class QrScansDict(TypedDict):
    scans: NotRequired[int]
    date: NotRequired[str]
