from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Label(SdkBaseModel):
    description: Optional[str] = UNSET
    name: str


class LabelDict(TypedDict):
    description: NotRequired[str]
    name: str
