from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Storage404Error1(SdkBaseModel):
    error: Optional[str] = UNSET


class Storage404Error1Dict(TypedDict):
    error: NotRequired[str]
