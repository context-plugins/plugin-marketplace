from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Domain(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    state: Optional[str] = UNSET


class DomainDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    state: NotRequired[str]
