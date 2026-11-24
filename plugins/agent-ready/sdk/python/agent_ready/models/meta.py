from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Meta(SdkBaseModel):
    version: Optional[str] = UNSET
    session: Optional[str] = UNSET
    user: Optional[str] = UNSET


class MetaDict(TypedDict):
    version: NotRequired[str]
    session: NotRequired[str]
    user: NotRequired[str]
