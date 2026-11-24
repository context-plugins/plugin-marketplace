from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Localized(SdkBaseModel):
    title: Optional[str] = UNSET
    description: Optional[str] = UNSET


class LocalizedDict(TypedDict):
    title: NotRequired[str]
    description: NotRequired[str]
