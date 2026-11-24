from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClassEnrichApi(SdkBaseModel):
    code: Optional[str] = UNSET
    title: Optional[str] = UNSET


class ClassEnrichApiDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
