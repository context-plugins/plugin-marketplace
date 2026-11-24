from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source2(SdkBaseModel):
    parameter: Optional[str] = UNSET


class Source2Dict(TypedDict):
    parameter: NotRequired[str]
