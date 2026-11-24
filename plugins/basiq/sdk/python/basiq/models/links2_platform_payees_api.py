from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links2PlatformPayeesApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """A link to the current query."""

    next: Optional[str] = UNSET
    """A link to the next page of results, if available."""


class Links2PlatformPayeesApiDict(TypedDict):
    self: NotRequired[str]
    next: NotRequired[str]
