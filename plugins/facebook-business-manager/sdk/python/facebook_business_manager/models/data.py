from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data(SdkBaseModel):
    url: Optional[str] = UNSET


class DataDict(TypedDict):
    url: NotRequired[str]
