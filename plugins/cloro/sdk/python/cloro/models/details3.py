from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Details3(SdkBaseModel):
    id: Optional[str] = UNSET


class Details3Dict(TypedDict):
    id: NotRequired[str]
