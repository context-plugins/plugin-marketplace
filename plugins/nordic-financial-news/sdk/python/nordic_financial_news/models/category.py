from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Category(SdkBaseModel):
    """Article category"""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class CategoryDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
