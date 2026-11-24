from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceTag(SdkBaseModel):
    key: str
    """The key of a tag."""

    value: Optional[str] = UNSET
    """The value of a tag."""


class ResourceTagDict(TypedDict):
    key: str
    value: NotRequired[str]
