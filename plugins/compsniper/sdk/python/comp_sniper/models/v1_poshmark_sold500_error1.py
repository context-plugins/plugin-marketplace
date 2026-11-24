from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1PoshmarkSold500Error1(SdkBaseModel):
    error: str
    detail: Optional[str] = UNSET


class V1PoshmarkSold500Error1Dict(TypedDict):
    error: str
    detail: NotRequired[str]
