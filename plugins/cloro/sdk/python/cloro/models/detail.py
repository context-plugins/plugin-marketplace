from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Detail(SdkBaseModel):
    field: Optional[str] = UNSET
    message: Optional[str] = UNSET


class DetailDict(TypedDict):
    field: NotRequired[str]
    message: NotRequired[str]
