from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    key: Optional[str] = UNSET
    """The key of a tag."""

    value: Optional[str] = UNSET
    """The value of a tag."""


class TagModelDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[str]
