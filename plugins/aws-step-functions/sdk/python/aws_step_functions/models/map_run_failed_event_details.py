from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapRunFailedEventDetails(SdkBaseModel):
    error: Optional[str] = UNSET
    """The error code of the Map Run failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the failure."""


class MapRunFailedEventDetailsDict(TypedDict):
    error: NotRequired[str]
    cause: NotRequired[str]
