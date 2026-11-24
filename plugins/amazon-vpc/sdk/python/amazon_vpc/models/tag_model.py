from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    """Describes a tag"""

    key: Optional[str] = UNSET
    """The key of the tag"""

    value: Optional[str] = UNSET
    """The value of the tag"""


class TagModelDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[str]
