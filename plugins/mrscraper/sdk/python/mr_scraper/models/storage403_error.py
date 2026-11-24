from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Storage403Error(SdkBaseModel):
    error: Optional[str] = UNSET


class Storage403ErrorDict(TypedDict):
    error: NotRequired[str]
