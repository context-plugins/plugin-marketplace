from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Rule1(SdkBaseModel):
    description: Optional[str] = UNSET
    name: Optional[str] = UNSET


class Rule1Dict(TypedDict):
    description: NotRequired[str]
    name: NotRequired[str]
