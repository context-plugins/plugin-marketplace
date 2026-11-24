from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1Mercari400Error(SdkBaseModel):
    error: str
    detail: Optional[str] = UNSET


class V1Mercari400ErrorDict(TypedDict):
    error: str
    detail: NotRequired[str]
