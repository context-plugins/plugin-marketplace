from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Initial1(SdkBaseModel):
    created: Optional[int] = UNSET
    deleted: Optional[int] = UNSET


class Initial1Dict(TypedDict):
    created: NotRequired[int]
    deleted: NotRequired[int]
