from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapIterationEventDetails(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the iteration’s parent Map state."""

    index: Optional[int] = UNSET
    """The index of the array belonging to the Map state iteration."""


class MapIterationEventDetailsDict(TypedDict):
    name: NotRequired[str]
    index: NotRequired[int]
