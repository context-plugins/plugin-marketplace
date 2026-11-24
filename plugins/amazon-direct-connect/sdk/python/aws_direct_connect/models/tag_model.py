from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    key: str
    """The key."""

    value: Optional[str] = UNSET
    """The value."""


class TagModelDict(TypedDict):
    key: str
    value: NotRequired[str]
