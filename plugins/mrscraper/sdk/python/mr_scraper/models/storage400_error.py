from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Storage400Error(SdkBaseModel):
    error: Optional[str] = UNSET


class Storage400ErrorDict(TypedDict):
    error: NotRequired[str]
