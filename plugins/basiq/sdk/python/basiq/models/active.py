from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connected import Connected, ConnectedDict


class Active(SdkBaseModel):
    total: Optional[int] = UNSET
    connected: Optional[Connected] = UNSET


class ActiveDict(TypedDict):
    total: NotRequired[int]
    connected: NotRequired[ConnectedDict]
