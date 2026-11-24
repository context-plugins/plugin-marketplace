from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links2(SdkBaseModel):
    self: Optional[str] = UNSET
    """A link to the current query."""


class Links2Dict(TypedDict):
    self: NotRequired[str]
