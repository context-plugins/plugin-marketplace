from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EntityJidScreenApi(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    url: Optional[str] = UNSET
    match_confidence: Optional[str] = UNSET
    relied_on: Optional[bool] = UNSET


class EntityJidScreenApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    url: NotRequired[str]
    match_confidence: NotRequired[str]
    relied_on: NotRequired[bool]
