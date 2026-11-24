from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Detail(SdkBaseModel):
    issue: str
    field: Optional[str] = UNSET


class DetailDict(TypedDict):
    issue: str
    field: NotRequired[str]
