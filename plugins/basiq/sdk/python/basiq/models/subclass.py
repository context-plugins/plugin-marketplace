from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Subclass(SdkBaseModel):
    code: Optional[str] = UNSET
    title: Optional[str] = UNSET


class SubclassDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
