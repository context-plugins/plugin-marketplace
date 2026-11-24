from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Factor1(SdkBaseModel):
    label: str
    status: str
    detail: Optional[str] = UNSET


class Factor1Dict(TypedDict):
    label: str
    status: str
    detail: NotRequired[str]
