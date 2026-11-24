from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Identity1(SdkBaseModel):
    name: Optional[str] = UNSET
    """Identity name"""


class Identity1Dict(TypedDict):
    name: NotRequired[str]
