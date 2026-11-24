from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Agents(SdkBaseModel):
    idle: Optional[int] = UNSET
    busy: Optional[int] = UNSET
    total: Optional[int] = UNSET


class AgentsDict(TypedDict):
    idle: NotRequired[int]
    busy: NotRequired[int]
    total: NotRequired[int]
