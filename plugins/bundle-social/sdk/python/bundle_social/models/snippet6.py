from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Snippet6(SdkBaseModel):
    gl: Optional[str] = UNSET
    name: Optional[str] = UNSET


class Snippet6Dict(TypedDict):
    gl: NotRequired[str]
    name: NotRequired[str]
