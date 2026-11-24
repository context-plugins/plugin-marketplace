from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    key: Optional[str] = UNSET
    """The tag's key."""

    value: Optional[str] = UNSET
    """The tag's value."""


class TagModelDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[str]
