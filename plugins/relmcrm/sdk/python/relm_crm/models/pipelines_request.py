from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelinesRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """New display name"""

    key: Optional[str] = UNSET
    """New pipeline key (slugified); deals follow by internal id."""

    is_default: Optional[bool] = UNSET


class PipelinesRequestDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    is_default: NotRequired[bool]
