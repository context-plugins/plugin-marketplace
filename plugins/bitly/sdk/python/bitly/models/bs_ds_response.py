from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BsDsResponse(SdkBaseModel):
    bsds: Optional[list[str]] = UNSET


class BsDsResponseDict(TypedDict):
    bsds: NotRequired[list[str]]
