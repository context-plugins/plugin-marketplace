from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Filter1(SdkBaseModel):
    name: Optional[str] = UNSET
    value: Optional[dict[str, str]] = UNSET


class Filter1Dict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[dict[str, str]]
