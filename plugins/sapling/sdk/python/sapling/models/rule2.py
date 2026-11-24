from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Rule2(SdkBaseModel):
    description: Optional[str] = UNSET
    name: str


class Rule2Dict(TypedDict):
    description: NotRequired[str]
    name: str
