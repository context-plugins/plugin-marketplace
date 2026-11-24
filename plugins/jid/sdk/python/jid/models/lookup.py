from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Lookup(SdkBaseModel):
    label: Optional[str] = UNSET
    url: Optional[str] = UNSET


class LookupDict(TypedDict):
    label: NotRequired[str]
    url: NotRequired[str]
