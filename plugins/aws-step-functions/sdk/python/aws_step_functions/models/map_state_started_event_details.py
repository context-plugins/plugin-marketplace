from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapStateStartedEventDetails(SdkBaseModel):
    length: Optional[int] = UNSET
    """The size of the array for Map state iterations."""


class MapStateStartedEventDetailsDict(TypedDict):
    length: NotRequired[int]
