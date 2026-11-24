from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data2(SdkBaseModel):
    urls: Optional[list[str]] = UNSET


class Data2Dict(TypedDict):
    urls: NotRequired[list[str]]
