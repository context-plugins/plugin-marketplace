from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links4(SdkBaseModel):
    self: Optional[str] = UNSET
    next: Optional[str] = UNSET


class Links4Dict(TypedDict):
    self: NotRequired[str]
    next: NotRequired[str]
