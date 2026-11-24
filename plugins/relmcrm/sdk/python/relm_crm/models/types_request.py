from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TypesRequest(SdkBaseModel):
    key: str
    label: Optional[str] = UNSET


class TypesRequestDict(TypedDict):
    key: str
    label: NotRequired[str]
