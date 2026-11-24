from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source1(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    agency: Optional[str] = UNSET


class Source1Dict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    agency: NotRequired[str]
